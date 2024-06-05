"use strict";
n.r(t), n.d(t, {
  getDefaultPlanOneStepCheckout: function() {
    return i
  },
  inOneStepSubscriptionCheckout: function() {
    return s
  },
  planSwitchLoadingShowSpinner: function() {
    return l
  }
});
var r = n("74538"),
  a = n("474936");

function s(e) {
  let {
    isTrial: t,
    isGift: n,
    selectedSkuId: r,
    startedPaymentFlowWithPaymentSources: s
  } = e;
  return !t && !n && null != r && a.ACTIVE_PREMIUM_SKUS.includes(r) && s
}

function l(e, t, n) {
  let r = !1;
  return e && null != t && null == t.invoiceItems.find(e => e.subscriptionPlanId === n.id) && (r = !0), r
}

function i(e, t, n) {
  let s = null != t ? (0, r.getPremiumPlanItem)(t) : null,
    l = a.PREMIUM_SKU_TO_YEARLY_PLAN[e],
    i = null != n ? n : l;
  return null != s ? i === s.planId && i === a.PREMIUM_SKU_TO_MONTHLY_PLAN[e] ? i = a.PREMIUM_SKU_TO_YEARLY_PLAN[e] : i === s.planId && i === a.PREMIUM_SKU_TO_YEARLY_PLAN[e] ? i = a.PREMIUM_SKU_TO_MONTHLY_PLAN[e] : (s.planId === a.SubscriptionPlans.PREMIUM_YEAR_TIER_0 || s.planId === a.SubscriptionPlans.PREMIUM_YEAR_TIER_1) && i === a.SubscriptionPlans.PREMIUM_MONTH_TIER_2 && (i = a.SubscriptionPlans.PREMIUM_YEAR_TIER_2) : i === a.SubscriptionPlans.PREMIUM_YEAR_TIER_1 && (i = a.SubscriptionPlans.PREMIUM_MONTH_TIER_1), i
}