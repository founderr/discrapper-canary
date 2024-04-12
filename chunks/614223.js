"use strict";
n.r(t), n.d(t, {
  getDefaultPlanOneStepCheckout: function() {
    return i
  },
  inOneStepSubscriptionCheckout: function() {
    return l
  },
  planSwitchLoadingShowSpinner: function() {
    return s
  }
});
var a = n("74538"),
  r = n("474936");

function l(e) {
  let {
    isTrial: t,
    isGift: n,
    selectedSkuId: a,
    startedPaymentFlowWithPaymentSources: l
  } = e;
  return !t && !n && null != a && r.ACTIVE_PREMIUM_SKUS.includes(a) && l
}

function s(e, t, n) {
  let a = !1;
  return e && null != t && null == t.invoiceItems.find(e => e.subscriptionPlanId === n.id) && (a = !0), a
}

function i(e, t, n) {
  let l = null != t ? (0, a.getPremiumPlanItem)(t) : null,
    s = r.PREMIUM_SKU_TO_YEARLY_PLAN[e],
    i = null != n ? n : s;
  return null != l ? i === l.planId && i === r.PREMIUM_SKU_TO_MONTHLY_PLAN[e] ? i = r.PREMIUM_SKU_TO_YEARLY_PLAN[e] : i === l.planId && i === r.PREMIUM_SKU_TO_YEARLY_PLAN[e] ? i = r.PREMIUM_SKU_TO_MONTHLY_PLAN[e] : (l.planId === r.SubscriptionPlans.PREMIUM_YEAR_TIER_0 || l.planId === r.SubscriptionPlans.PREMIUM_YEAR_TIER_1) && i === r.SubscriptionPlans.PREMIUM_MONTH_TIER_2 && (i = r.SubscriptionPlans.PREMIUM_YEAR_TIER_2) : i === r.SubscriptionPlans.PREMIUM_YEAR_TIER_1 && (i = r.SubscriptionPlans.PREMIUM_MONTH_TIER_1), i
}