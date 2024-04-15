"use strict";
t.r(r), t.d(r, {
  acknowledgeUserOffer: function() {
    return u
  },
  fetchAnnualUserOffer: function() {
    return d
  },
  fetchUserOffer: function() {
    return c
  }
});
var a = t("544891"),
  n = t("524437"),
  i = t("570140"),
  l = t("605236"),
  o = t("675478"),
  s = t("981631");
async function c() {
  i.default.dispatch({
    type: "BILLING_USER_OFFER_FETCH_START"
  });
  try {
    var e, r, t;
    let c = await a.HTTP.post({
        url: s.Endpoints.USER_OFFER
      }),
      d = null !== (e = c.body.user_trial_offer) && void 0 !== e ? e : null,
      u = null !== (r = c.body.user_discount) && void 0 !== r ? r : null,
      h = null !== (t = c.body.user_discount_offer) && void 0 !== t ? t : null;
    return null == d && (0, l.isDismissibleContentDismissed)(n.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING) && (0, o.removeDismissedContent)(n.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING), i.default.dispatch({
      type: "BILLING_USER_OFFER_FETCH_SUCCESS",
      userTrialOffer: d,
      userDiscount: u,
      userDiscountOffer: h
    }), {
      userTrialOffer: d,
      userDiscount: u,
      userDiscountOffer: h
    }
  } catch (e) {
    i.default.dispatch({
      type: "BILLING_USER_OFFER_FETCH_FAIL"
    })
  }
}
async function d() {
  try {
    var e;
    let r = await a.HTTP.post({
        url: s.Endpoints.ANNUAL_USER_OFFER
      }),
      t = null !== (e = r.body.user_discount_offer) && void 0 !== e ? e : null;
    null != t && (h(t), i.default.dispatch({
      type: "BILLING_ANNUAL_USER_OFFER_FETCH_SUCCESS",
      userDiscountOffer: t
    }))
  } catch (e) {
    i.default.dispatch({
      type: "BILLING_ANNUAL_USER_OFFER_FETCH_FAIL"
    })
  }
}

function u(e, r) {
  let t = null != e && null == e.expires_at ? e.id : void 0,
    n = null != r && null == r.expires_at ? r.id : void 0;
  if (void 0 !== t || void 0 !== n) return a.HTTP.post({
    url: s.Endpoints.USER_OFFER_ACKNOWLEDGED,
    body: {
      user_trial_offer_id: t,
      user_discount_offer_id: n
    },
    oldFormErrors: !0
  }).then(e => {
    var r, t, a;
    i.default.dispatch({
      type: "BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS",
      userTrialOffer: null !== (r = e.body.user_trial_offer) && void 0 !== r ? r : null,
      userDiscount: null !== (t = e.body.user_discount) && void 0 !== t ? t : null,
      userDiscountOffer: null !== (a = e.body.user_discount_offer) && void 0 !== a ? a : null
    })
  }).catch(e => {
    404 === e.status && i.default.dispatch({
      type: "BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS",
      userTrialOffer: null,
      userDiscount: null,
      userDiscountOffer: null
    })
  })
}
async function h(e) {
  if (null != e && null == e.applied_at) try {
    await a.HTTP.post({
      url: s.Endpoints.USER_OFFER_REDEEM,
      body: {
        user_discount_offer_id: e.id
      }
    })
  } catch (e) {
    throw e
  }
}