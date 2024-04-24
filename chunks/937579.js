"use strict";
n.r(t), n.d(t, {
  acknowledgeUserOffer: function() {
    return E
  },
  fetchUserOffer: function() {
    return c
  }
});
var r = n("544891"),
  i = n("524437"),
  s = n("570140"),
  a = n("605236"),
  l = n("675478"),
  u = n("295226"),
  o = n("424082"),
  d = n("981631");
async function c() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
    {
      annualDiscountsEnabled: t
    } = (0, o.getAnnualDiscountsExperimentConfig)("PremiumManager"),
    n = t && u.default.shouldFetchAnnualOffer();
  if (e) {
    s.default.dispatch({
      type: "BILLING_USER_OFFER_FETCH_START"
    });
    try {
      var c, E, _;
      let e = await r.HTTP.post({
          url: d.Endpoints.USER_OFFER
        }),
        t = null !== (c = e.body.user_trial_offer) && void 0 !== c ? c : null,
        u = null !== (E = e.body.user_discount) && void 0 !== E ? E : null,
        o = null !== (_ = e.body.user_discount_offer) && void 0 !== _ ? _ : null;
      return null == t && (0, a.isDismissibleContentDismissed)(i.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING) && (0, l.removeDismissedContent)(i.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING), s.default.dispatch({
        type: "BILLING_USER_OFFER_FETCH_SUCCESS",
        userTrialOffer: t,
        userDiscount: u,
        userDiscountOffer: o
      }), null == t && n && f(), {
        userTrialOffer: t,
        userDiscount: u,
        userDiscountOffer: o
      }
    } catch (e) {
      s.default.dispatch({
        type: "BILLING_USER_OFFER_FETCH_FAIL"
      })
    }
  }
  n && f()
}
async function f() {
  try {
    var e;
    let t = await r.HTTP.post({
        url: d.Endpoints.ANNUAL_USER_OFFER
      }),
      n = null !== (e = t.body.user_discount_offer) && void 0 !== e ? e : null;
    null != n && (_(n), s.default.dispatch({
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
    i = null != t && null == t.expires_at ? t.id : void 0;
  if (void 0 !== n || void 0 !== i) return r.HTTP.post({
    url: d.Endpoints.USER_OFFER_ACKNOWLEDGED,
    body: {
      user_trial_offer_id: n,
      user_discount_offer_id: i
    },
    oldFormErrors: !0
  }).then(e => {
    var t, n, r;
    s.default.dispatch({
      type: "BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS",
      userTrialOffer: null !== (t = e.body.user_trial_offer) && void 0 !== t ? t : null,
      userDiscount: null !== (n = e.body.user_discount) && void 0 !== n ? n : null,
      userDiscountOffer: null !== (r = e.body.user_discount_offer) && void 0 !== r ? r : null
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
async function _(e) {
  if (null != e && null == e.applied_at) try {
    await r.HTTP.post({
      url: d.Endpoints.USER_OFFER_REDEEM,
      body: {
        user_discount_offer_id: e.id
      }
    })
  } catch (e) {
    throw e
  }
}