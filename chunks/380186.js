"use strict";
n.r(t), n.d(t, {
  getSubscriptionSKUs: function() {
    return o
  },
  subscriptionCanSwitchImmediately: function() {
    return d
  },
  subscriptionCanDowngrade: function() {
    return c
  },
  getOrFetchSubscriptionPlan: function() {
    return f
  }
}), n("222007"), n("884691");
var s = n("627445"),
  r = n.n(s);
n("446674");
var i = n("775433"),
  l = n("10514"),
  a = n("49111"),
  u = n("646718");

function o(e) {
  return e.items.map(e => {
    let t = l.default.get(e.planId);
    return r(null != t, "Unable to fetch plan"), t
  }).map(e => e.skuId)
}

function d(e, t, n) {
  let s = e.getCurrentSubscriptionPlanIdForGroup(n);
  return e.type === a.SubscriptionTypes.PREMIUM && null == s || (r(null != s, "Current subscription has no plan in group"), r(!(s === u.SubscriptionPlans.PREMIUM_YEAR_TIER_1 && t === u.SubscriptionPlans.PREMIUM_MONTH_TIER_2), "Unexpected plan switch"), n.indexOf(s) < n.indexOf(t))
}

function c(e, t, n) {
  return !d(e, t, n)
}

function f(e, t) {
  let n = l.default.get(e);
  if (null == n) {
    let n = u.SubscriptionPlanInfo[e];
    r(null != n, "Missing hardcoded subscriptionPlan: ".concat(e));
    let s = n.skuId;
    !l.default.isFetchingForSKU(s) && (0, i.fetchSubscriptionPlansForSKU)(s, t)
  }
  return n
}