"use strict";
n.r(t), n.d(t, {
  acknowledgeUserOffer: function() {
    return h
  },
  fetchUserOffer: function() {
    return c
  }
});
var i = n("544891"),
  a = n("524437"),
  l = n("570140"),
  s = n("605236"),
  o = n("675478"),
  r = n("295226"),
  d = n("424082"),
  u = n("981631");
async function c() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
    {
      annualDiscountsEnabled: t
    } = (0, d.getAnnualDiscountsExperimentConfig)("PremiumManager"),
    n = t && r.default.shouldFetchAnnualOffer();
  if (e) {
    l.default.dispatch({
      type: "BILLING_USER_OFFER_FETCH_START"
    });
    try {
      var c, h, p;
      let e = await i.HTTP.post({
          url: u.Endpoints.USER_OFFER
        }),
        t = null !== (c = e.body.user_trial_offer) && void 0 !== c ? c : null,
        r = null !== (h = e.body.user_discount) && void 0 !== h ? h : null,
        d = null !== (p = e.body.user_discount_offer) && void 0 !== p ? p : null;
      return null == t && (0, s.isDismissibleContentDismissed)(a.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING) && (0, o.removeDismissedContent)(a.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING), l.default.dispatch({
        type: "BILLING_USER_OFFER_FETCH_SUCCESS",
        userTrialOffer: t,
        userDiscount: r,
        userDiscountOffer: d
      }), null == t && n && f(), {
        userTrialOffer: t,
        userDiscount: r,
        userDiscountOffer: d
      }
    } catch (e) {
      l.default.dispatch({
        type: "BILLING_USER_OFFER_FETCH_FAIL"
      })
    }
  }
  n && f()
}
async function f() {
  try {
    var e;
    let t = await i.HTTP.post({
        url: u.Endpoints.ANNUAL_USER_OFFER
      }),
      n = null !== (e = t.body.user_discount_offer) && void 0 !== e ? e : null;
    null != n && (p(n), l.default.dispatch({
      type: "BILLING_ANNUAL_USER_OFFER_FETCH_SUCCESS",
      userDiscountOffer: n
    }))
  } catch (e) {
    l.default.dispatch({
      type: "BILLING_ANNUAL_USER_OFFER_FETCH_FAIL"
    })
  }
}

function h(e, t) {
  let n = null != e && null == e.expires_at ? e.id : void 0,
    a = null != t && null == t.expires_at ? t.id : void 0;
  if (void 0 !== n || void 0 !== a) return i.HTTP.post({
    url: u.Endpoints.USER_OFFER_ACKNOWLEDGED,
    body: {
      user_trial_offer_id: n,
      user_discount_offer_id: a
    },
    oldFormErrors: !0
  }).then(e => {
    var t, n, i;
    l.default.dispatch({
      type: "BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS",
      userTrialOffer: null !== (t = e.body.user_trial_offer) && void 0 !== t ? t : null,
      userDiscount: null !== (n = e.body.user_discount) && void 0 !== n ? n : null,
      userDiscountOffer: null !== (i = e.body.user_discount_offer) && void 0 !== i ? i : null
    })
  }).catch(e => {
    404 === e.status && l.default.dispatch({
      type: "BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS",
      userTrialOffer: null,
      userDiscount: null,
      userDiscountOffer: null
    })
  })
}
async function p(e) {
  if (null != e && null == e.applied_at) try {
    await i.HTTP.post({
      url: u.Endpoints.USER_OFFER_REDEEM,
      body: {
        user_discount_offer_id: e.id
      }
    })
  } catch (e) {
    throw e
  }
}