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
  i = n.n(r);
n("446674");
var s = n("775433"),
  l = n("10514"),
  u = n("49111"),
  a = n("646718");

function o(e) {
  return e.items.map(e => {
    let t = l.default.get(e.planId);
    return i(null != t, "Unable to fetch plan"), t
  }).map(e => e.skuId)
}

function c(e, t, n) {
  let r = e.getCurrentSubscriptionPlanIdForGroup(n);
  return e.type === u.SubscriptionTypes.PREMIUM && null == r || (i(null != r, "Current subscription has no plan in group"), i(!(r === a.SubscriptionPlans.PREMIUM_YEAR_TIER_1 && t === a.SubscriptionPlans.PREMIUM_MONTH_TIER_2), "Unexpected plan switch"), n.indexOf(r) < n.indexOf(t))
}

function d(e, t, n) {
  return !c(e, t, n)
}

function f(e, t) {
  let n = l.default.get(e);
  if (null == n) {
    let n = a.SubscriptionPlanInfo[e];
    i(null != n, "Missing hardcoded subscriptionPlan: ".concat(e));
    let r = n.skuId;
    !l.default.isFetchingForSKU(r) && (0, s.fetchSubscriptionPlansForSKU)(r, t)
  }
  return n
}