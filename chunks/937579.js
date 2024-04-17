"use strict";
n.r(t), n.d(t, {
  acknowledgeUserOffer: function() {
    return c
  },
  fetchAnnualUserOffer: function() {
    return d
  },
  fetchUserOffer: function() {
    return u
  }
});
var l = n("544891"),
  a = n("524437"),
  s = n("570140"),
  i = n("605236"),
  r = n("675478"),
  o = n("981631");
async function u() {
  s.default.dispatch({
    type: "BILLING_USER_OFFER_FETCH_START"
  });
  try {
    var e, t, n;
    let u = await l.HTTP.post({
        url: o.Endpoints.USER_OFFER
      }),
      d = null !== (e = u.body.user_trial_offer) && void 0 !== e ? e : null,
      c = null !== (t = u.body.user_discount) && void 0 !== t ? t : null,
      f = null !== (n = u.body.user_discount_offer) && void 0 !== n ? n : null;
    return null == d && (0, i.isDismissibleContentDismissed)(a.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING) && (0, r.removeDismissedContent)(a.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING), s.default.dispatch({
      type: "BILLING_USER_OFFER_FETCH_SUCCESS",
      userTrialOffer: d,
      userDiscount: c,
      userDiscountOffer: f
    }), {
      userTrialOffer: d,
      userDiscount: c,
      userDiscountOffer: f
    }
  } catch (e) {
    s.default.dispatch({
      type: "BILLING_USER_OFFER_FETCH_FAIL"
    })
  }
}
async function d() {
  try {
    var e;
    let t = await l.HTTP.post({
        url: o.Endpoints.ANNUAL_USER_OFFER
      }),
      n = null !== (e = t.body.user_discount_offer) && void 0 !== e ? e : null;
    null != n && (f(n), s.default.dispatch({
      type: "BILLING_ANNUAL_USER_OFFER_FETCH_SUCCESS",
      userDiscountOffer: n
    }))
  } catch (e) {
    s.default.dispatch({
      type: "BILLING_ANNUAL_USER_OFFER_FETCH_FAIL"
    })
  }
}

function c(e, t) {
  let n = null != e && null == e.expires_at ? e.id : void 0,
    a = null != t && null == t.expires_at ? t.id : void 0;
  if (void 0 !== n || void 0 !== a) return l.HTTP.post({
    url: o.Endpoints.USER_OFFER_ACKNOWLEDGED,
    body: {
      user_trial_offer_id: n,
      user_discount_offer_id: a
    },
    oldFormErrors: !0
  }).then(e => {
    var t, n, l;
    s.default.dispatch({
      type: "BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS",
      userTrialOffer: null !== (t = e.body.user_trial_offer) && void 0 !== t ? t : null,
      userDiscount: null !== (n = e.body.user_discount) && void 0 !== n ? n : null,
      userDiscountOffer: null !== (l = e.body.user_discount_offer) && void 0 !== l ? l : null
    })
  }).catch(e => {
    404 === e.status && s.default.dispatch({
      type: "BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS",
      userTrialOffer: null,
      userDiscount: null,
      userDiscountOffer: null
    })
  })
}
async function f(e) {
  if (null != e && null == e.applied_at) try {
    await l.HTTP.post({
      url: o.Endpoints.USER_OFFER_REDEEM,
      body: {
        user_discount_offer_id: e.id
      }
    })
  } catch (e) {
    throw e
  }
}