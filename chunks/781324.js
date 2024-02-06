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
  l = n("913144"),
  r = n("651693"),
  a = n("271938"),
  o = n("736393"),
  s = n("49111");
async function u() {
  l.default.dispatch({
    type: "SAFETY_HUB_FETCH_START"
  });
  let e = a.default.getSuspendedUserToken(),
    t = null != e ? s.Endpoints.SAFETY_HUB_SUSPENDED : s.Endpoints.SAFETY_HUB,
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
      account_standing: r,
      is_dsa_eligible: a
    } = t, o = n.map(e => (d(e), e));
    l.default.dispatch({
      type: "SAFETY_HUB_FETCH_SUCCESS",
      classifications: o.concat(null != i ? i : []),
      accountStanding: r,
      isDsaEligible: a
    })
  }).catch(e => {
    var t, n;
    l.default.dispatch({
      type: "SAFETY_HUB_FETCH_FAILURE",
      error: null !== (n = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.message) && void 0 !== n ? n : "Unknown error"
    })
  })
}
async function c(e) {
  l.default.dispatch({
    type: "SAFETY_HUB_FETCH_CLASSIFICATION_START",
    classificationId: e
  });
  let t = a.default.getSuspendedUserToken(),
    n = null != t ? s.Endpoints.SAFETY_HUB_SUSPENDED : s.Endpoints.SAFETY_HUB,
    r = null != t ? i.default.post({
      url: n,
      body: {
        token: t
      }
    }) : i.default.get({
      url: n
    });
  await r.then(t => {
    let {
      body: n
    } = t, {
      classifications: i,
      account_standing: r,
      is_dsa_eligible: a
    } = n, o = i.find(t => t.id === e);
    null != o ? (d(o), l.default.dispatch({
      type: "SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS",
      classification: o,
      accountStanding: r,
      isDsaEligible: a
    })) : l.default.dispatch({
      type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
      error: "Classification not found.",
      classificationId: e
    })
  }).catch(t => {
    var n, i;
    l.default.dispatch({
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
      return (0, r.isImageFile)(t) || (0, r.isVideoFile)(t)
    }), e.flagged_content = (0, o.isFlaggedContentEmpty)(t) ? [] : [t]
  }
}
async function f(e, t, n) {
  let r = a.default.getSuspendedUserToken(),
    o = null != r ? s.Endpoints.SAFETY_HUB_REQUEST_SUSPENDED_USER_REVIEW(e) : s.Endpoints.SAFETY_HUB_REQUEST_REVIEW(e),
    u = null != r ? i.default.put({
      url: o,
      body: {
        signal: t,
        user_input: n,
        token: r
      }
    }) : i.default.put({
      url: o,
      body: {
        signal: t,
        user_input: n
      }
    });
  l.default.dispatch({
    type: "SAFETY_HUB_REQUEST_REVIEW_START"
  }), await u.then(() => {
    l.default.dispatch({
      type: "SAFETY_HUB_REQUEST_REVIEW_SUCCESS",
      classificationId: e
    })
  }).catch(e => {
    var t, n;
    throw l.default.dispatch({
      type: "SAFETY_HUB_REQUEST_REVIEW_FAILURE",
      error: null !== (n = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.message) && void 0 !== n ? n : "Unknown error"
    }), e
  })
}