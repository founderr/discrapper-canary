"use strict";
n.r(t), n.d(t, {
  useGetAnnualDiscountInvoicePreview: function() {
    return o
  }
}), n("47120");
var i = n("442837"),
  s = n("509545"),
  l = n("74538"),
  r = n("374649"),
  a = n("104494"),
  u = n("474936");

function o(e) {
  var t, n;
  let {
    priceOptions: o,
    preventFetch: c,
    selectedSkuId: d,
    isGift: m,
    planGroup: f,
    activeSubscription: p
  } = e, I = (0, a.usePremiumAnnualDiscountOffer)(), _ = (0, i.useStateFromStores)([s.default], () => s.default.get(u.SubscriptionPlans.PREMIUM_YEAR_TIER_2)), S = null == I ? void 0 : null === (t = I.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => u.SubscriptionPlanInfo[e].skuId === d), P = null != p && null != _ ? (0, l.getItemsWithUpsertedPlanIdForGroup)(p, _.id, 1, new Set(f)) : null, E = !m && null != I && null != d && S, [T, v] = (0, r.useSubscriptionInvoicePreview)({
    subscriptionId: null !== (n = null == p ? void 0 : p.id) && void 0 !== n ? n : "null",
    items: P,
    renewal: !1,
    applyEntitlements: !0,
    paymentSourceId: o.paymentSourceId,
    currency: o.currency,
    preventFetch: !E || null == p || c
  }), [N, h] = (0, r.useSubscriptionInvoicePreview)({
    items: [{
      planId: u.SubscriptionPlans.PREMIUM_YEAR_TIER_2,
      quantity: 1
    }],
    renewal: !1,
    applyEntitlements: !0,
    paymentSourceId: o.paymentSourceId,
    currency: o.currency,
    preventFetch: !E || null != p || c
  });
  return null != T ? {
    annualInvoicePreview: T,
    annualInvoicePreviewError: v,
    isEligibleForAnnualDiscount: E
  } : null != N ? {
    annualInvoicePreview: N,
    annualInvoicePreviewError: h,
    isEligibleForAnnualDiscount: E
  } : {
    annualInvoicePreview: null,
    annualInvoicePreviewError: null,
    isEligibleForAnnualDiscount: E
  }
}