"use strict";
n.r(t), n.d(t, {
  acknowledgeUserOffer: function() {
    return E
  },
  fetchUserOffer: function() {
    return c
  }
});
var i = n("544891"),
  r = n("524437"),
  s = n("570140"),
  o = n("605236"),
  a = n("675478"),
  l = n("295226"),
  u = n("424082"),
  d = n("981631");
async function c() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
    {
      annualDiscountsEnabled: t
    } = (0, u.getAnnualDiscountsExperimentConfig)("PremiumManager"),
    n = t && l.default.shouldFetchAnnualOffer();
  if (e) {
    s.default.dispatch({
      type: "BILLING_USER_OFFER_FETCH_START"
    });
    try {
      var c, E, f;
      let e = await i.HTTP.post({
          url: d.Endpoints.USER_OFFER
        }),
        t = null !== (c = e.body.user_trial_offer) && void 0 !== c ? c : null,
        l = null !== (E = e.body.user_discount) && void 0 !== E ? E : null,
        u = null !== (f = e.body.user_discount_offer) && void 0 !== f ? f : null;
      return null == t && (0, o.isDismissibleContentDismissed)(r.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING) && (0, a.removeDismissedContent)(r.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING), s.default.dispatch({
        type: "BILLING_USER_OFFER_FETCH_SUCCESS",
        userTrialOffer: t,
        userDiscount: l,
        userDiscountOffer: u
      }), null == t && n && _(), {
        userTrialOffer: t,
        userDiscount: l,
        userDiscountOffer: u
      }
    } catch (e) {
      s.default.dispatch({
        type: "BILLING_USER_OFFER_FETCH_FAIL"
      })
    }
  }
  n && _()
}
async function _() {
  try {
    var e;
    let t = await i.HTTP.post({
        url: d.Endpoints.ANNUAL_USER_OFFER
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

function E(e, t) {
  let n = null != e && null == e.expires_at ? e.id : void 0,
    r = null != t && null == t.expires_at ? t.id : void 0;
  if (void 0 !== n || void 0 !== r) return i.HTTP.post({
    url: d.Endpoints.USER_OFFER_ACKNOWLEDGED,
    body: {
      user_trial_offer_id: n,
      user_discount_offer_id: r
    },
    oldFormErrors: !0
  }).then(e => {
    var t, n, i;
    s.default.dispatch({
      type: "BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS",
      userTrialOffer: null !== (t = e.body.user_trial_offer) && void 0 !== t ? t : null,
      userDiscount: null !== (n = e.body.user_discount) && void 0 !== n ? n : null,
      userDiscountOffer: null !== (i = e.body.user_discount_offer) && void 0 !== i ? i : null
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
    await i.HTTP.post({
      url: d.Endpoints.USER_OFFER_REDEEM,
      body: {
        user_discount_offer_id: e.id
      }
    })
  } catch (e) {
    throw e
  }
}