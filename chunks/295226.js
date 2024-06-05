"use strict";
n.r(t), n("47120");
var i, r = n("906280"),
  s = n.n(r),
  a = n("442837"),
  o = n("570140"),
  l = n("276444"),
  u = n("937579"),
  d = n("594174"),
  _ = n("74538"),
  c = n("78839"),
  E = n("474936");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let T = {
    userOffersLastFetchedAtDate: void 0,
    userAnnualOfferLastFetchedAtDate: void 0,
    userTrialOffers: {},
    userDiscountOffers: {},
    userDiscounts: void 0
  },
  f = T;

function S() {
  f.userTrialOffers = {}, f.userDiscountOffers = {}, f.userOffersLastFetchedAtDate = void 0, f.userAnnualOfferLastFetchedAtDate = void 0
}
let h = () => !0;

function A() {
  if (null != c.default.getPremiumTypeSubscription()) {
    let e = s()(f.userDiscountOffers[E.PREMIUM_TIER_2_ANNUAL_20_PERCENT_DISCOUNT_ID]),
      t = s()(f.userDiscountOffers[E.PREMIUM_TIER_2_ANNUAL_25_PERCENT_DISCOUNT_ID]);
    return f.userDiscountOffers = {}, null != e ? f.userDiscountOffers[E.PREMIUM_TIER_2_ANNUAL_20_PERCENT_DISCOUNT_ID] = e : null != t && (f.userDiscountOffers[E.PREMIUM_TIER_2_ANNUAL_25_PERCENT_DISCOUNT_ID] = t), f.userTrialOffers = {}, !0
  }
  return !1
}

function m() {
  let e = d.default.getCurrentUser();
  !(0, _.isPremium)(e) && Object.keys(f.userDiscountOffers).length > 0 && (0, u.fetchUserOffer)(!0)
}

function N() {
  var e;
  let t = null === (e = d.default.getCurrentUser()) || void 0 === e ? void 0 : e.id;
  if (null == t) return !1;
  let n = Object.entries(l.default.getRelevantReferralTrialOffers()).map(e => {
    let [t, n] = e;
    return n
  }).filter(e => e.user_id === t);
  if (n.length > 0) {
    let e = n[0];
    return f.userTrialOffers[e.trial_id] = e, !0
  }
  return !1
}
class p extends(i = a.default.PersistedStore) {
  initialize(e) {
    f = null != e ? e : T, this.waitFor(d.default), this.syncWith([d.default], h), this.syncWith([c.default], A), this.syncWith([l.default], N)
  }
  getUserTrialOffer(e) {
    if (null !== e) return f.userTrialOffers[e]
  }
  getUserDiscountOffer(e) {
    if (null !== e) return f.userDiscountOffers[e]
  }
  getAnyOfUserTrialOfferId(e) {
    for (let t of e)
      if (null != f.userTrialOffers[t]) return t;
    return null
  }
  hasFetchedOffer() {
    return null != f.userOffersLastFetchedAtDate
  }
  shouldFetchOffer() {
    let e = f.userOffersLastFetchedAtDate;
    return null == e || Date.now() - 1728e5 > e
  }
  shouldFetchAnnualOffer() {
    let e = f.userAnnualOfferLastFetchedAtDate;
    return null == e || Date.now() - 1728e5 > e
  }
  getAlmostExpiringTrialOffers(e) {
    let t = Object.values(E.SubscriptionTrials).map(e => e.id),
      n = d.default.getCurrentUser();
    return (0, _.isPremium)(n) ? [] : Object.values(f.userTrialOffers).filter(n => t.includes(n.trial_id) && null != n.expires_at && null != n.subscription_trial && e.includes(n.subscription_trial.sku_id) && Date.parse(n.expires_at) < Date.now() + E.USER_PREMIUM_SUBSCRIPTION_TRIAL_EXPIRES_APPROACHING_5_DAY_THRESHOLD)
  }
  getAcknowledgedOffers(e) {
    let t = d.default.getCurrentUser();
    return (0, _.isPremium)(t) ? [] : Object.values(f.userTrialOffers).filter(t => e.includes(t.trial_id) && null != t.expires_at)
  }
  getUnacknowledgedDiscountOffers() {
    var e;
    let t = d.default.getCurrentUser();
    return (0, _.isPremium)(t) ? [] : Object.values(null !== (e = f.userDiscountOffers) && void 0 !== e ? e : {}).filter(e => null == e.expires_at && !E.ANNUAL_DISCOUNT_IDS.includes(e.discount_id))
  }
  getUnacknowledgedOffers(e) {
    let t = d.default.getCurrentUser();
    return (0, _.isPremium)(t) ? [] : Object.values(f.userTrialOffers).filter(t => e.includes(t.trial_id) && null == t.expires_at)
  }
  hasAnyUnexpiredOffer() {
    return Object.values(f.userTrialOffers).some(e => null == e.expires_at || Date.parse(e.expires_at) > Date.now())
  }
  getReferrer(e) {
    var t;
    return null == e ? null : null === (t = f.userTrialOffers[e]) || void 0 === t ? void 0 : t.referrer
  }
  getState() {
    return f
  }
  forceReset() {
    S()
  }
}
I(p, "displayName", "UserOfferStore"), I(p, "persistKey", "UserOfferStore"), I(p, "migrations", [e => {
  let t = null == e ? void 0 : e.userDiscounts;
  if (null != t) return {
    ...e,
    userDiscountOffers: t
  }
}, e => {
  if (null != e) return (null == e ? void 0 : e.userAnnualOfferLastFetchedAtDate) == null ? {
    ...e,
    userAnnualOfferLastFetchedAtDate: void 0
  } : e
}]), t.default = new p(o.default, {
  BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS: function(e) {
    let {
      userTrialOffer: t
    } = e;
    null != t ? f.userTrialOffers[t.trial_id] = t : S(), f.userOffersLastFetchedAtDate = Date.now()
  },
  BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: function(e) {
    let {
      userTrialOffer: t
    } = e;
    null != t ? f.userTrialOffers[t.trial_id] = t : f.userTrialOffers = {}, f.userOffersLastFetchedAtDate = Date.now()
  },
  BILLING_USER_OFFER_FETCH_SUCCESS: function(e) {
    let {
      userTrialOffer: t,
      userDiscount: n,
      userDiscountOffer: i
    } = e;
    null == t && null == n && null == i && S(), null != t ? (f.userTrialOffers[t.trial_id] = t, f.userDiscountOffers = {}) : null != n ? (f.userDiscountOffers[n.discount_id] = n, f.userTrialOffers = {}) : null != i && (f.userDiscountOffers[i.discount_id] = i, f.userTrialOffers = {}), f.userOffersLastFetchedAtDate = Date.now()
  },
  BILLING_ANNUAL_USER_OFFER_FETCH_SUCCESS: function(e) {
    let {
      userDiscountOffer: t
    } = e;
    delete f.userDiscountOffers[E.PREMIUM_TIER_2_ANNUAL_20_PERCENT_DISCOUNT_ID], delete f.userDiscountOffers[E.PREMIUM_TIER_2_ANNUAL_25_PERCENT_DISCOUNT_ID], null != t && (f.userDiscountOffers[t.discount_id] = t), f.userAnnualOfferLastFetchedAtDate = Date.now()
  },
  BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: function(e) {
    let {
      userTrialOffer: t,
      userDiscount: n,
      userDiscountOffer: i
    } = e;
    null != t ? f.userTrialOffers[t.trial_id] = t : f.userTrialOffers = {}, null != n ? f.userDiscountOffers[n.discount_id] = n : null != i ? f.userDiscountOffers[i.discount_id] = i : f.userDiscountOffers = {}, f.userOffersLastFetchedAtDate = Date.now()
  },
  BILLING_USER_OFFER_FETCH_FAIL: function() {
    S(), f.userOffersLastFetchedAtDate = Date.now()
  },
  BILLING_ANNUAL_USER_OFFER_FETCH_FAIL: function() {
    delete f.userDiscountOffers[E.PREMIUM_TIER_2_ANNUAL_20_PERCENT_DISCOUNT_ID], delete f.userDiscountOffers[E.PREMIUM_TIER_2_ANNUAL_25_PERCENT_DISCOUNT_ID], f.userAnnualOfferLastFetchedAtDate = Date.now()
  },
  BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: m,
  BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: m,
  BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: m,
  LOGOUT: S
})