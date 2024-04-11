"use strict";
r.r(t), r.d(t, {
  acknowledgeUserOffer: function() {
    return d
  },
  fetchUserOffer: function() {
    return c
  }
});
var a = r("544891"),
  n = r("524437"),
  i = r("570140"),
  l = r("605236"),
  o = r("675478"),
  s = r("981631");
async function c() {
  i.default.dispatch({
    type: "BILLING_USER_OFFER_FETCH_START"
  });
  try {
    var e, t, r;
    let c = await a.HTTP.post({
        url: s.Endpoints.USER_OFFER
      }),
      d = null !== (e = c.body.user_trial_offer) && void 0 !== e ? e : null,
      u = null !== (t = c.body.user_discount) && void 0 !== t ? t : null,
      h = null !== (r = c.body.user_discount_offer) && void 0 !== r ? r : null;
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

function d(e, t) {
  let r = null != e && null == e.expires_at ? e.id : void 0,
    n = null != t && null == t.expires_at ? t.id : void 0;
  if (void 0 !== r || void 0 !== n) return a.HTTP.post({
    url: s.Endpoints.USER_OFFER_ACKNOWLEDGED,
    body: {
      user_trial_offer_id: r,
      user_discount_offer_id: n
    },
    oldFormErrors: !0
  }).then(e => {
    var t, r, a;
    i.default.dispatch({
      type: "BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS",
      userTrialOffer: null !== (t = e.body.user_trial_offer) && void 0 !== t ? t : null,
      userDiscount: null !== (r = e.body.user_discount) && void 0 !== r ? r : null,
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