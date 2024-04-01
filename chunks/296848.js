"use strict";
n.r(e), n.d(e, {
  getOrFetchSubscriptionPlan: function() {
    return _
  },
  getSubscriptionPauseDurations: function() {
    return h
  },
  getSubscriptionSKUs: function() {
    return f
  },
  subscriptionCanDowngrade: function() {
    return A
  },
  subscriptionCanSwitchImmediately: function() {
    return S
  }
}), n("47120"), n("653041"), n("470079");
var r = n("512722"),
  i = n.n(r),
  s = n("913527"),
  u = n.n(s),
  a = n("99945");
n("442837");
var l = n("821849"),
  o = n("509545"),
  c = n("74538"),
  d = n("981631"),
  p = n("474936");

function f(t) {
  return t.items.map(t => {
    let e = o.default.get(t.planId);
    return i()(null != e, "Unable to fetch plan"), e
  }).map(t => t.skuId)
}

function S(t, e, n) {
  let r = t.getCurrentSubscriptionPlanIdForGroup(n);
  return t.type === d.SubscriptionTypes.PREMIUM && null == r || (i()(null != r, "Current subscription has no plan in group"), i()(!(r === p.SubscriptionPlans.PREMIUM_YEAR_TIER_1 && e === p.SubscriptionPlans.PREMIUM_MONTH_TIER_2), "Unexpected plan switch"), n.indexOf(r) < n.indexOf(e))
}

function A(t, e, n) {
  return !S(t, e, n)
}

function _(t, e) {
  let n = o.default.get(t);
  if (null == n) {
    let n = p.SubscriptionPlanInfo[t];
    i()(null != n, "Missing hardcoded subscriptionPlan: ".concat(t));
    let r = (0, c.castPremiumSubscriptionAsSkuId)(n.skuId);
    !o.default.isFetchingForSKU(r) && (0, l.fetchSubscriptionPlansForSKU)(r, e)
  }
  return n
}

function h(t) {
  let e = Object.keys(a.PauseDuration).filter(t => isNaN(Number(t)));
  if (t.status !== d.SubscriptionStatusTypes.PAUSED) return {
    durations: e,
    currentDaysPaused: 0
  };
  if (null == t.pauseEndsAt) return {
    durations: [],
    currentDaysPaused: 0
  };
  {
    let n = u()(t.currentPeriodStart),
      r = Math.round(u()(t.pauseEndsAt).diff(n, "days", !0)),
      i = [];
    for (let t of e) a.PauseDuration[t] > r && i.push(t);
    return {
      durations: i,
      currentDaysPaused: r
    }
  }
}