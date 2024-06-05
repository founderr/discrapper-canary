"use strict";
r.r(t), r.d(t, {
  acknowledgeUserOffer: function() {
    return p
  },
  fetchUserOffer: function() {
    return u
  }
});
var a = r("544891"),
  n = r("704215"),
  i = r("570140"),
  l = r("605236"),
  o = r("675478"),
  s = r("295226"),
  c = r("424082"),
  d = r("981631");
async function u() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
    {
      annualDiscountsEnabled: t
    } = (0, c.getAnnualDiscountsExperimentConfig)("PremiumManager"),
    r = t && s.default.shouldFetchAnnualOffer();
  if (e) {
    i.default.dispatch({
      type: "BILLING_USER_OFFER_FETCH_START"
    });
    try {
      var u, p, m;
      let e = await a.HTTP.post({
          url: d.Endpoints.USER_OFFER
        }),
        t = null !== (u = e.body.user_trial_offer) && void 0 !== u ? u : null,
        s = null !== (p = e.body.user_discount) && void 0 !== p ? p : null,
        c = null !== (m = e.body.user_discount_offer) && void 0 !== m ? m : null;
      return null == t && (0, l.isDismissibleContentDismissed)(n.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING) && (0, o.removeDismissedContent)(n.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING), i.default.dispatch({
        type: "BILLING_USER_OFFER_FETCH_SUCCESS",
        userTrialOffer: t,
        userDiscount: s,
        userDiscountOffer: c
      }), null == t && r && h(), {
        userTrialOffer: t,
        userDiscount: s,
        userDiscountOffer: c
      }
    } catch (e) {
      i.default.dispatch({
        type: "BILLING_USER_OFFER_FETCH_FAIL"
      })
    }
  }
  r && h()
}
async function h() {
  try {
    var e;
    let t = await a.HTTP.post({
        url: d.Endpoints.ANNUAL_USER_OFFER
      }),
      r = null !== (e = t.body.user_discount_offer) && void 0 !== e ? e : null;
    null != r && (m(r), i.default.dispatch({
      type: "BILLING_ANNUAL_USER_OFFER_FETCH_SUCCESS",
      userDiscountOffer: r
    }))
  } catch (e) {
    i.default.dispatch({
      type: "BILLING_ANNUAL_USER_OFFER_FETCH_FAIL"
    })
  }
}

function p(e, t) {
  let r = null != e && null == e.expires_at ? e.id : void 0,
    n = null != t && null == t.expires_at ? t.id : void 0;
  if (void 0 !== r || void 0 !== n) return a.HTTP.post({
    url: d.Endpoints.USER_OFFER_ACKNOWLEDGED,
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
async function m(e) {
  if (null != e && null == e.applied_at) try {
    await a.HTTP.post({
      url: d.Endpoints.USER_OFFER_REDEEM,
      body: {
        user_discount_offer_id: e.id
      }
    })
  } catch (e) {
    throw e
  }
}