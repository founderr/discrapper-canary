"use strict";
n.r(t), n.d(t, {
  getSafetyHubData: function() {
    return o
  },
  getSafetyHubDataForClassification: function() {
    return c
  },
  requestReview: function() {
    return f
  }
});
var i = n("872717"),
  a = n("913144"),
  r = n("651693"),
  l = n("271938"),
  s = n("736393"),
  u = n("49111");
async function o() {
  a.default.dispatch({
    type: "SAFETY_HUB_FETCH_START"
  });
  let e = l.default.getSuspendedUserToken(),
    t = null != e ? u.Endpoints.SAFETY_HUB_SUSPENDED : u.Endpoints.SAFETY_HUB,
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
      is_dsa_eligible: l
    } = t, s = n.map(e => (d(e), e));
    a.default.dispatch({
      type: "SAFETY_HUB_FETCH_SUCCESS",
      classifications: s.concat(null != i ? i : []),
      accountStanding: r,
      isDsaEligible: l
    })
  }).catch(e => {
    var t, n;
    a.default.dispatch({
      type: "SAFETY_HUB_FETCH_FAILURE",
      error: null !== (n = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.message) && void 0 !== n ? n : "Unknown error"
    })
  })
}
async function c(e) {
  a.default.dispatch({
    type: "SAFETY_HUB_FETCH_CLASSIFICATION_START",
    classificationId: e
  });
  let t = l.default.getSuspendedUserToken(),
    n = null != t ? u.Endpoints.SAFETY_HUB_SUSPENDED : u.Endpoints.SAFETY_HUB,
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
      is_dsa_eligible: l
    } = n, s = i.find(t => t.id === e);
    null != s ? (d(s), a.default.dispatch({
      type: "SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS",
      classification: s,
      accountStanding: r,
      isDsaEligible: l
    })) : a.default.dispatch({
      type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
      error: "Classification not found.",
      classificationId: e
    })
  }).catch(t => {
    var n, i;
    a.default.dispatch({
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
    }), e.flagged_content = (0, s.isFlaggedContentEmpty)(t) ? [] : [t]
  }
}
async function f(e, t, n) {
  let r = l.default.getSuspendedUserToken(),
    s = null != r ? u.Endpoints.SAFETY_HUB_REQUEST_SUSPENDED_USER_REVIEW(e) : u.Endpoints.SAFETY_HUB_REQUEST_REVIEW(e),
    o = null != r ? i.default.put({
      url: s,
      body: {
        signal: t,
        user_input: n,
        token: r
      }
    }) : i.default.put({
      url: s,
      body: {
        signal: t,
        user_input: n
      }
    });
  a.default.dispatch({
    type: "SAFETY_HUB_REQUEST_REVIEW_START"
  }), await o.then(() => {
    a.default.dispatch({
      type: "SAFETY_HUB_REQUEST_REVIEW_SUCCESS",
      classificationId: e
    })
  }).catch(e => {
    var t, n;
    throw a.default.dispatch({
      type: "SAFETY_HUB_REQUEST_REVIEW_FAILURE",
      error: null !== (n = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.message) && void 0 !== n ? n : "Unknown error"
    }), e
  })
}