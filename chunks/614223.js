"use strict";
n.r(t), n.d(t, {
  getDefaultPlanOneStepCheckout: function() {
    return r
  },
  inOneStepSubscriptionCheckout: function() {
    return i
  },
  planSwitchLoadingShowSpinner: function() {
    return a
  }
});
var u = n("74538"),
  l = n("474936");

function i(e) {
  let {
    isTrial: t,
    isGift: n,
    selectedSkuId: u,
    startedPaymentFlowWithPaymentSources: i
  } = e;
  return !t && !n && null != u && l.ACTIVE_PREMIUM_SKUS.includes(u) && i
}

function a(e, t, n) {
  let u = !1;
  return e && null != t && null == t.invoiceItems.find(e => e.subscriptionPlanId === n.id) && (u = !0), u
}

function r(e, t, n) {
  let i = null != t ? (0, u.getPremiumPlanItem)(t) : null,
    a = l.PREMIUM_SKU_TO_YEARLY_PLAN[e],
    r = null != n ? n : a;
  return null != i ? r === i.planId && r === l.PREMIUM_SKU_TO_MONTHLY_PLAN[e] ? r = l.PREMIUM_SKU_TO_YEARLY_PLAN[e] : r === i.planId && r === l.PREMIUM_SKU_TO_YEARLY_PLAN[e] ? r = l.PREMIUM_SKU_TO_MONTHLY_PLAN[e] : (i.planId === l.SubscriptionPlans.PREMIUM_YEAR_TIER_0 || i.planId === l.SubscriptionPlans.PREMIUM_YEAR_TIER_1) && r === l.SubscriptionPlans.PREMIUM_MONTH_TIER_2 && (r = l.SubscriptionPlans.PREMIUM_YEAR_TIER_2) : r === l.SubscriptionPlans.PREMIUM_YEAR_TIER_1 && (r = l.SubscriptionPlans.PREMIUM_MONTH_TIER_1), r
}