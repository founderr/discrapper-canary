"use strict";
n.r(t), n.d(t, {
  inOneStepSubscriptionCheckout: function() {
    return i
  },
  planSwitchLoadingShowSpinner: function() {
    return r
  },
  getDefaultPlanOneStepCheckout: function() {
    return s
  }
});
var a = n("719923"),
  l = n("646718");

function i(e) {
  let {
    isTrial: t,
    isGift: n,
    selectedSkuId: a,
    startedPaymentFlowWithPaymentSources: i
  } = e;
  return !t && !n && null != a && l.ACTIVE_PREMIUM_SKUS.includes(a) && i
}

function r(e, t, n) {
  let a = !1;
  if (e && null != t) {
    let e = t.invoiceItems.find(e => e.subscriptionPlanId === n.id);
    null == e && (a = !0)
  }
  return a
}

function s(e, t, n) {
  let i = null != t ? (0, a.getPremiumPlanItem)(t) : null,
    r = l.PREMIUM_SKU_TO_YEARLY_PLAN[e],
    s = null != n ? n : r;
  return null != i ? s === i.planId && s === l.PREMIUM_SKU_TO_MONTHLY_PLAN[e] ? s = l.PREMIUM_SKU_TO_YEARLY_PLAN[e] : s === i.planId && s === l.PREMIUM_SKU_TO_YEARLY_PLAN[e] ? s = l.PREMIUM_SKU_TO_MONTHLY_PLAN[e] : (i.planId === l.SubscriptionPlans.PREMIUM_YEAR_TIER_0 || i.planId === l.SubscriptionPlans.PREMIUM_YEAR_TIER_1) && s === l.SubscriptionPlans.PREMIUM_MONTH_TIER_2 && (s = l.SubscriptionPlans.PREMIUM_YEAR_TIER_2) : s === l.SubscriptionPlans.PREMIUM_YEAR_TIER_1 && (s = l.SubscriptionPlans.PREMIUM_MONTH_TIER_1), s
}