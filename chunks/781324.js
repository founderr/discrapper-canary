"use strict";
n.r(t), n.d(t, {
  getSafetyHubData: function() {
    return u
  },
  getSafetyHubDataForClassification: function() {
    return c
  },
  requestReview: function() {
    return f
  }
});
var i = n("872717"),
  r = n("913144"),
  l = n("651693"),
  a = n("271938"),
  s = n("736393"),
  o = n("49111");
async function u() {
  r.default.dispatch({
    type: "SAFETY_HUB_FETCH_START"
  });
  let e = a.default.getSuspendedUserToken(),
    t = null != e ? o.Endpoints.SAFETY_HUB_SUSPENDED : o.Endpoints.SAFETY_HUB,
    n = null != e ? i.default.post({
      url: t,
      body: {
        token: e
      }
    }) : i.default.get({
      url: t
    });
  await n.then(e => {
    let {
      body: t
    } = e, {
      classifications: n,
      guild_classifications: i,
      account_standing: l,
      is_dsa_eligible: a
    } = t, s = n.map(e => (d(e), e));
    r.default.dispatch({
      type: "SAFETY_HUB_FETCH_SUCCESS",
      classifications: s.concat(null != i ? i : []),
      accountStanding: l,
      isDsaEligible: a
    })
  }).catch(e => {
    var t, n;
    r.default.dispatch({
      type: "SAFETY_HUB_FETCH_FAILURE",
      error: null !== (n = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.message) && void 0 !== n ? n : "Unknown error"
    })
  })
}
async function c(e) {
  r.default.dispatch({
    type: "SAFETY_HUB_FETCH_CLASSIFICATION_START",
    classificationId: e
  });
  let t = a.default.getSuspendedUserToken(),
    n = null != t ? o.Endpoints.SAFETY_HUB_SUSPENDED : o.Endpoints.SAFETY_HUB,
    l = null != t ? i.default.post({
      url: n,
      body: {
        token: t
      }
    }) : i.default.get({
      url: n
    });
  await l.then(t => {
    let {
      body: n
    } = t, {
      classifications: i,
      account_standing: l,
      is_dsa_eligible: a
    } = n, s = i.find(t => t.id === e);
    null != s ? (d(s), r.default.dispatch({
      type: "SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS",
      classification: s,
      accountStanding: l,
      isDsaEligible: a
    })) : r.default.dispatch({
      type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
      error: "Classification not found.",
      classificationId: e
    })
  }).catch(t => {
    var n, i;
    r.default.dispatch({
      type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
      error: null !== (i = null == t ? void 0 : null === (n = t.body) || void 0 === n ? void 0 : n.message) && void 0 !== i ? i : "Unknown error",
      classificationId: e
    })
  })
}

function d(e) {
  if (null != e.flagged_content && e.flagged_content.length > 0) {
    let t = e.flagged_content[0];
    t.attachments = t.attachments.filter(e => {
      let {
        filename: t
      } = e;
      return (0, l.isImageFile)(t) || (0, l.isVideoFile)(t)
    }), e.flagged_content = (0, s.isFlaggedContentEmpty)(t) ? [] : [t]
  }
}
async function f(e, t, n) {
  let l = a.default.getSuspendedUserToken(),
    s = null != l ? o.Endpoints.SAFETY_HUB_REQUEST_SUSPENDED_USER_REVIEW(e) : o.Endpoints.SAFETY_HUB_REQUEST_REVIEW(e),
    u = null != l ? i.default.put({
      url: s,
      body: {
        signal: t,
        user_input: n,
        token: l
      }
    }) : i.default.put({
      url: s,
      body: {
        signal: t,
        user_input: n
      }
    });
  r.default.dispatch({
    type: "SAFETY_HUB_REQUEST_REVIEW_START"
  }), await u.then(() => {
    r.default.dispatch({
      type: "SAFETY_HUB_REQUEST_REVIEW_SUCCESS",
      classificationId: e
    })
  }).catch(e => {
    var t, n;
    throw r.default.dispatch({
      type: "SAFETY_HUB_REQUEST_REVIEW_FAILURE",
      error: null !== (n = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.message) && void 0 !== n ? n : "Unknown error"
    }), e
  })
}