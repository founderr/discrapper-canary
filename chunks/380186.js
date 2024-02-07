"use strict";
n.r(t), n.d(t, {
  getSubscriptionSKUs: function() {
    return o
  },
  subscriptionCanSwitchImmediately: function() {
    return c
  },
  subscriptionCanDowngrade: function() {
    return d
  },
  getOrFetchSubscriptionPlan: function() {
    return f
  }
}), n("222007"), n("884691");
var r = n("627445"),
  u = n.n(r);
n("446674");
var i = n("775433"),
  a = n("10514"),
  l = n("49111"),
  s = n("646718");

function o(e) {
  return e.items.map(e => {
    let t = a.default.get(e.planId);
    return u(null != t, "Unable to fetch plan"), t
  }).map(e => e.skuId)
}

function c(e, t, n) {
  let r = e.getCurrentSubscriptionPlanIdForGroup(n);
  return e.type === l.SubscriptionTypes.PREMIUM && null == r || (u(null != r, "Current subscription has no plan in group"), u(!(r === s.SubscriptionPlans.PREMIUM_YEAR_TIER_1 && t === s.SubscriptionPlans.PREMIUM_MONTH_TIER_2), "Unexpected plan switch"), n.indexOf(r) < n.indexOf(t))
}

function d(e, t, n) {
  return !c(e, t, n)
}

function f(e, t) {
  let n = a.default.get(e);
  if (null == n) {
    let n = s.SubscriptionPlanInfo[e];
    u(null != n, "Missing hardcoded subscriptionPlan: ".concat(e));
    let r = n.skuId;
    !a.default.isFetchingForSKU(r) && (0, i.fetchSubscriptionPlansForSKU)(r, t)
  }
  return n
}