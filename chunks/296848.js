"use strict";
n.r(t), n.d(t, {
  getOrFetchSubscriptionPlan: function() {
    return m
  },
  getSubscriptionPauseDurations: function() {
    return _
  },
  getSubscriptionSKUs: function() {
    return h
  },
  subscriptionCanDowngrade: function() {
    return S
  },
  subscriptionCanSwitchImmediately: function() {
    return f
  }
}), n("47120"), n("653041"), n("470079");
var i = n("512722"),
  s = n.n(i),
  r = n("913527"),
  a = n.n(r),
  l = n("99945");
n("442837");
var u = n("821849"),
  o = n("509545"),
  c = n("74538"),
  d = n("981631"),
  p = n("474936");

function h(e) {
  return e.items.map(e => {
    let t = o.default.get(e.planId);
    return s()(null != t, "Unable to fetch plan"), t
  }).map(e => e.skuId)
}

function f(e, t, n) {
  let i = e.getCurrentSubscriptionPlanIdForGroup(n);
  return e.type === d.SubscriptionTypes.PREMIUM && null == i || (s()(null != i, "Current subscription has no plan in group"), s()(!(i === p.SubscriptionPlans.PREMIUM_YEAR_TIER_1 && t === p.SubscriptionPlans.PREMIUM_MONTH_TIER_2), "Unexpected plan switch"), n.indexOf(i) < n.indexOf(t))
}

function S(e, t, n) {
  return !f(e, t, n)
}

function m(e, t) {
  let n = o.default.get(e);
  if (null == n) {
    let n = p.SubscriptionPlanInfo[e];
    s()(null != n, "Missing hardcoded subscriptionPlan: ".concat(e));
    let i = (0, c.castPremiumSubscriptionAsSkuId)(n.skuId);
    !o.default.isFetchingForSKU(i) && (0, u.fetchSubscriptionPlansForSKU)(i, t)
  }
  return n
}

function _(e) {
  let t = Object.keys(l.PauseDuration).filter(e => isNaN(Number(e)));
  if (e.status !== d.SubscriptionStatusTypes.PAUSED) return {
    durations: t,
    currentDaysPaused: 0
  };
  if (null == e.pauseEndsAt) return {
    durations: [],
    currentDaysPaused: 0
  };
  {
    let n = a()(e.currentPeriodStart),
      i = Math.round(a()(e.pauseEndsAt).diff(n, "days", !0)),
      s = [];
    for (let e of t) l.PauseDuration[e] > i && s.push(e);
    return {
      durations: s,
      currentDaysPaused: i
    }
  }
}