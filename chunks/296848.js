"use strict";
n.r(t), n.d(t, {
  getOrFetchSubscriptionPlan: function() {
    return A
  },
  getSubscriptionPauseDurations: function() {
    return S
  },
  getSubscriptionSKUs: function() {
    return C
  },
  subscriptionCanDowngrade: function() {
    return P
  },
  subscriptionCanSwitchImmediately: function() {
    return E
  }
}), n("47120"), n("653041"), n("470079");
var s = n("512722"),
  r = n.n(s),
  a = n("913527"),
  l = n.n(a),
  u = n("99945");
n("442837");
var i = n("821849"),
  o = n("509545"),
  c = n("74538"),
  d = n("981631"),
  f = n("474936");

function C(e) {
  return e.items.map(e => {
    let t = o.default.get(e.planId);
    return r()(null != t, "Unable to fetch plan"), t
  }).map(e => e.skuId)
}

function E(e, t, n) {
  let s = e.getCurrentSubscriptionPlanIdForGroup(n);
  return e.type === d.SubscriptionTypes.PREMIUM && null == s || (r()(null != s, "Current subscription has no plan in group"), r()(!(s === f.SubscriptionPlans.PREMIUM_YEAR_TIER_1 && t === f.SubscriptionPlans.PREMIUM_MONTH_TIER_2), "Unexpected plan switch"), n.indexOf(s) < n.indexOf(t))
}

function P(e, t, n) {
  return !E(e, t, n)
}

function A(e, t) {
  let n = o.default.get(e);
  if (null == n) {
    let n = f.SubscriptionPlanInfo[e];
    r()(null != n, "Missing hardcoded subscriptionPlan: ".concat(e));
    let s = (0, c.castPremiumSubscriptionAsSkuId)(n.skuId);
    !o.default.isFetchingForSKU(s) && (0, i.fetchSubscriptionPlansForSKU)(s, t)
  }
  return n
}

function S(e) {
  let t = Object.keys(u.PauseDuration).filter(e => isNaN(Number(e)));
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
    for (let e of t) u.PauseDuration[e] > s && r.push(e);
    return {
      durations: r,
      currentDaysPaused: s
    }
  }
}