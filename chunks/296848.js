"use strict";
r.r(t), r.d(t, {
  getOrFetchSubscriptionPlan: function() {
    return A
  },
  getSubscriptionPauseDurations: function() {
    return p
  },
  getSubscriptionSKUs: function() {
    return f
  },
  subscriptionCanDowngrade: function() {
    return _
  },
  subscriptionCanSwitchImmediately: function() {
    return E
  }
}), r("47120"), r("653041"), r("470079");
var s = r("512722"),
  n = r.n(s),
  a = r("913527"),
  l = r.n(a),
  u = r("99945");
r("442837");
var c = r("821849"),
  i = r("509545"),
  o = r("74538"),
  d = r("981631"),
  C = r("474936");

function f(e) {
  return e.items.map(e => {
    let t = i.default.get(e.planId);
    return n()(null != t, "Unable to fetch plan"), t
  }).map(e => e.skuId)
}

function E(e, t, r) {
  let s = e.getCurrentSubscriptionPlanIdForGroup(r);
  return e.type === d.SubscriptionTypes.PREMIUM && null == s || (n()(null != s, "Current subscription has no plan in group"), n()(!(s === C.SubscriptionPlans.PREMIUM_YEAR_TIER_1 && t === C.SubscriptionPlans.PREMIUM_MONTH_TIER_2), "Unexpected plan switch"), r.indexOf(s) < r.indexOf(t))
}

function _(e, t, r) {
  return !E(e, t, r)
}

function A(e, t) {
  let r = i.default.get(e);
  if (null == r) {
    let r = C.SubscriptionPlanInfo[e];
    n()(null != r, "Missing hardcoded subscriptionPlan: ".concat(e));
    let s = (0, o.castPremiumSubscriptionAsSkuId)(r.skuId);
    !i.default.isFetchingForSKU(s) && (0, c.fetchSubscriptionPlansForSKU)(s, t)
  }
  return r
}

function p(e) {
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
    let r = l()(e.currentPeriodStart),
      s = Math.round(l()(e.pauseEndsAt).diff(r, "days", !0)),
      n = [];
    for (let e of t) u.PauseDuration[e] > s && n.push(e);
    return {
      durations: n,
      currentDaysPaused: s
    }
  }
}