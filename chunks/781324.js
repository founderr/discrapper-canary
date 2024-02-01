"use strict";
a.r(e), a.d(e, {
  getSafetyHubData: function() {
    return c
  },
  getSafetyHubDataForClassification: function() {
    return o
  },
  requestReview: function() {
    return _
  }
});
var n = a("872717"),
  s = a("913144"),
  i = a("651693"),
  l = a("271938"),
  u = a("736393"),
  r = a("49111");
async function c() {
  s.default.dispatch({
    type: "SAFETY_HUB_FETCH_START"
  });
  let t = l.default.getSuspendedUserToken(),
    e = null != t ? r.Endpoints.SAFETY_HUB_SUSPENDED : r.Endpoints.SAFETY_HUB,
    a = null != t ? n.default.post({
      url: e,
      body: {
        token: t
      }
    }) : n.default.get({
      url: e
    });
  await a.then(t => {
    let {
      body: e
    } = t, {
      classifications: a,
      guild_classifications: n,
      account_standing: i,
      is_dsa_eligible: l
    } = e, u = a.map(t => (d(t), t));
    s.default.dispatch({
      type: "SAFETY_HUB_FETCH_SUCCESS",
      classifications: u.concat(null != n ? n : []),
      accountStanding: i,
      isDsaEligible: l
    })
  }).catch(t => {
    var e, a;
    s.default.dispatch({
      type: "SAFETY_HUB_FETCH_FAILURE",
      error: null !== (a = null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.message) && void 0 !== a ? a : "Unknown error"
    })
  })
}
async function o(t) {
  s.default.dispatch({
    type: "SAFETY_HUB_FETCH_CLASSIFICATION_START",
    classificationId: t
  });
  let e = l.default.getSuspendedUserToken(),
    a = null != e ? r.Endpoints.SAFETY_HUB_SUSPENDED : r.Endpoints.SAFETY_HUB,
    i = null != e ? n.default.post({
      url: a,
      body: {
        token: e
      }
    }) : n.default.get({
      url: a
    });
  await i.then(e => {
    let {
      body: a
    } = e, {
      classifications: n,
      account_standing: i,
      is_dsa_eligible: l
    } = a, u = n.find(e => e.id === t);
    null != u ? (d(u), s.default.dispatch({
      type: "SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS",
      classification: u,
      accountStanding: i,
      isDsaEligible: l
    })) : s.default.dispatch({
      type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
      error: "Classification not found.",
      classificationId: t
    })
  }).catch(e => {
    var a, n;
    s.default.dispatch({
      type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
      error: null !== (n = null == e ? void 0 : null === (a = e.body) || void 0 === a ? void 0 : a.message) && void 0 !== n ? n : "Unknown error",
      classificationId: t
    })
  })
}

function d(t) {
  if (null != t.flagged_content && t.flagged_content.length > 0) {
    let e = t.flagged_content[0];
    e.attachments = e.attachments.filter(t => {
      let {
        filename: e
      } = t;
      return (0, i.isImageFile)(e) || (0, i.isVideoFile)(e)
    }), t.flagged_content = (0, u.isFlaggedContentEmpty)(e) ? [] : [e]
  }
}
async function _(t, e, a) {
  let i = l.default.getSuspendedUserToken(),
    u = null != i ? r.Endpoints.SAFETY_HUB_REQUEST_SUSPENDED_USER_REVIEW(t) : r.Endpoints.SAFETY_HUB_REQUEST_REVIEW(t),
    c = null != i ? n.default.put({
      url: u,
      body: {
        signal: e,
        user_input: a,
        token: i
      }
    }) : n.default.put({
      url: u,
      body: {
        signal: e,
        user_input: a
      }
    });
  s.default.dispatch({
    type: "SAFETY_HUB_REQUEST_REVIEW_START"
  }), await c.then(() => {
    s.default.dispatch({
      type: "SAFETY_HUB_REQUEST_REVIEW_SUCCESS",
      classificationId: t
    })
  }).catch(t => {
    var e, a;
    throw s.default.dispatch({
      type: "SAFETY_HUB_REQUEST_REVIEW_FAILURE",
      error: null !== (a = null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.message) && void 0 !== a ? a : "Unknown error"
    }), t
  })
}