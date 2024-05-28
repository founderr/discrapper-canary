"use strict";
n.r(t), n.d(t, {
  getOrFetchSubscriptionPlan: function() {
    return m
  },
  getSubscriptionPauseDurations: function() {
    return P
  },
  getSubscriptionSKUs: function() {
    return p
  },
  subscriptionCanDowngrade: function() {
    return E
  },
  subscriptionCanSwitchImmediately: function() {
    return C
  }
}), n("47120"), n("653041"), n("470079");
var s = n("512722"),
  r = n.n(s),
  a = n("913527"),
  l = n.n(a),
  i = n("99945");
n("442837");
var u = n("821849"),
  o = n("509545"),
  c = n("74538"),
  d = n("981631"),
  f = n("474936");

function p(e) {
  return e.items.map(e => {
    let t = o.default.get(e.planId);
    return r()(null != t, "Unable to fetch plan"), t
  }).map(e => e.skuId)
}

function C(e, t, n) {
  let s = e.getCurrentSubscriptionPlanIdForGroup(n);
  return e.type === d.SubscriptionTypes.PREMIUM && null == s || (r()(null != s, "Current subscription has no plan in group"), r()(!(s === f.SubscriptionPlans.PREMIUM_YEAR_TIER_1 && t === f.SubscriptionPlans.PREMIUM_MONTH_TIER_2), "Unexpected plan switch"), n.indexOf(s) < n.indexOf(t))
}

function E(e, t, n) {
  return !C(e, t, n)
}

function m(e, t) {
  let n = o.default.get(e);
  if (null == n) {
    let n = f.SubscriptionPlanInfo[e];
    r()(null != n, "Missing hardcoded subscriptionPlan: ".concat(e));
    let s = (0, c.castPremiumSubscriptionAsSkuId)(n.skuId);
    !o.default.isFetchingForSKU(s) && (0, u.fetchSubscriptionPlansForSKU)(s, t)
  }
  return n
}

function P(e) {
  let t = Object.keys(i.PauseDuration).filter(e => isNaN(Number(e)));
  if (e.status !== d.SubscriptionStatusTypes.PAUSED) return {
    durations: t,
    currentDaysPaused: 0
  };
  if (null == e.pauseEndsAt) return {
    durations: [],
    currentDaysPaused: 0
  };
  {
    let n = l()(e.currentPeriodStart),
      s = Math.round(l()(e.pauseEndsAt).diff(n, "days", !0)),
      r = [];
    for (let e of t) i.PauseDuration[e] > s && r.push(e);
    return {
      durations: r,
      currentDaysPaused: s
    }
  }
}