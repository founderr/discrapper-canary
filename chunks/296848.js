"use strict";
n.r(t), n.d(t, {
  getOrFetchSubscriptionPlan: function() {
    return P
  },
  getSubscriptionPauseDurations: function() {
    return _
  },
  getSubscriptionSKUs: function() {
    return f
  },
  subscriptionCanDowngrade: function() {
    return y
  },
  subscriptionCanSwitchImmediately: function() {
    return C
  }
}), n("47120"), n("653041"), n("470079");
var a = n("512722"),
  r = n.n(a),
  s = n("913527"),
  o = n.n(s),
  i = n("99945");
n("442837");
var l = n("821849"),
  u = n("509545"),
  c = n("74538"),
  d = n("981631"),
  p = n("474936");

function f(e) {
  return e.items.map(e => {
    let t = u.default.get(e.planId);
    return r()(null != t, "Unable to fetch plan"), t
  }).map(e => e.skuId)
}

function C(e, t, n) {
  let a = e.getCurrentSubscriptionPlanIdForGroup(n);
  return e.type === d.SubscriptionTypes.PREMIUM && null == a || (r()(null != a, "Current subscription has no plan in group"), r()(!(a === p.SubscriptionPlans.PREMIUM_YEAR_TIER_1 && t === p.SubscriptionPlans.PREMIUM_MONTH_TIER_2), "Unexpected plan switch"), n.indexOf(a) < n.indexOf(t))
}

function y(e, t, n) {
  return !C(e, t, n)
}

function P(e, t) {
  let n = u.default.get(e);
  if (null == n) {
    let n = p.SubscriptionPlanInfo[e];
    r()(null != n, "Missing hardcoded subscriptionPlan: ".concat(e));
    let a = (0, c.castPremiumSubscriptionAsSkuId)(n.skuId);
    !u.default.isFetchingForSKU(a) && (0, l.fetchSubscriptionPlansForSKU)(a, t)
  }
  return n
}

function _(e) {
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
    let n = o()(e.currentPeriodStart),
      a = Math.round(o()(e.pauseEndsAt).diff(n, "days", !0)),
      r = [];
    for (let e of t) i.PauseDuration[e] > a && r.push(e);
    return {
      durations: r,
      currentDaysPaused: a
    }
  }
}