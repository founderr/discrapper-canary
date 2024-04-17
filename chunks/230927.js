"use strict";
n.r(t), n.d(t, {
  useGetAnnualDiscountInvoicePreview: function() {
    return C
  }
}), n("47120");
var s = n("442837"),
  i = n("509545"),
  r = n("74538"),
  l = n("374649"),
  a = n("104494"),
  o = n("474936");

function C(e) {
  var t, n;
  let {
    priceOptions: C,
    preventFetch: u,
    selectedSkuId: d,
    isGift: c,
    planGroup: p,
    activeSubscription: f
  } = e, x = (0, a.usePremiumAnnualDiscountOffer)(), _ = (0, s.useStateFromStores)([i.default], () => i.default.get(o.SubscriptionPlans.PREMIUM_YEAR_TIER_2)), m = null == x ? void 0 : null === (t = x.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => o.SubscriptionPlanInfo[e].skuId === d), E = null != f && null != _ ? (0, r.getItemsWithUpsertedPlanIdForGroup)(f, _.id, 1, new Set(p)) : null, S = !c && null != x && null != d && m, [L, h] = (0, l.useSubscriptionInvoicePreview)({
    subscriptionId: null !== (n = null == f ? void 0 : f.id) && void 0 !== n ? n : "null",
    items: E,
    renewal: !1,
    applyEntitlements: !0,
    paymentSourceId: C.paymentSourceId,
    currency: C.currency,
    preventFetch: !S || null == f || u
  }), [j, P] = (0, l.useSubscriptionInvoicePreview)({
    items: [{
      planId: o.SubscriptionPlans.PREMIUM_YEAR_TIER_2,
      quantity: 1
    }],
    renewal: !1,
    applyEntitlements: !0,
    paymentSourceId: C.paymentSourceId,
    currency: C.currency,
    preventFetch: !S || null != f || u
  });
  return null != L ? {
    annualInvoicePreview: L,
    annualInvoicePreviewError: h,
    isEligibleForAnnualDiscount: S
  } : null != j ? {
    annualInvoicePreview: j,
    annualInvoicePreviewError: P,
    isEligibleForAnnualDiscount: S
  } : {
    annualInvoicePreview: null,
    annualInvoicePreviewError: null,
    isEligibleForAnnualDiscount: S
  }
}