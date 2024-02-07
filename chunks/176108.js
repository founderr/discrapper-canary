"use strict";
n.r(t), n.d(t, {
  inOneStepSubscriptionCheckout: function() {
    return s
  },
  planSwitchLoadingShowSpinner: function() {
    return l
  },
  getDefaultPlanOneStepCheckout: function() {
    return u
  }
});
var r = n("719923"),
  i = n("646718");

function s(e) {
  let {
    isTrial: t,
    isGift: n,
    selectedSkuId: r,
    startedPaymentFlowWithPaymentSources: s
  } = e;
  return !t && !n && null != r && i.ACTIVE_PREMIUM_SKUS.includes(r) && s
}

function l(e, t, n) {
  let r = !1;
  if (e && null != t) {
    let e = t.invoiceItems.find(e => e.subscriptionPlanId === n.id);
    null == e && (r = !0)
  }
  return r
}

function u(e, t, n) {
  let s = null != t ? (0, r.getPremiumPlanItem)(t) : null,
    l = i.PREMIUM_SKU_TO_YEARLY_PLAN[e],
    u = null != n ? n : l;
  return null != s ? u === s.planId && u === i.PREMIUM_SKU_TO_MONTHLY_PLAN[e] ? u = i.PREMIUM_SKU_TO_YEARLY_PLAN[e] : u === s.planId && u === i.PREMIUM_SKU_TO_YEARLY_PLAN[e] ? u = i.PREMIUM_SKU_TO_MONTHLY_PLAN[e] : (s.planId === i.SubscriptionPlans.PREMIUM_YEAR_TIER_0 || s.planId === i.SubscriptionPlans.PREMIUM_YEAR_TIER_1) && u === i.SubscriptionPlans.PREMIUM_MONTH_TIER_2 && (u = i.SubscriptionPlans.PREMIUM_YEAR_TIER_2) : u === i.SubscriptionPlans.PREMIUM_YEAR_TIER_1 && (u = i.SubscriptionPlans.PREMIUM_MONTH_TIER_1), u
}