"use strict";
n.r(t);
var i = n("735250");
n("470079");
var r = n("120356"),
  s = n.n(r),
  a = n("442837"),
  o = n("481060"),
  l = n("911969"),
  u = n("509545"),
  d = n("78839"),
  _ = n("74538"),
  c = n("937615"),
  E = n("104494"),
  I = n("639119"),
  T = n("230927"),
  f = n("474936"),
  S = n("689938"),
  h = n("778959");
t.default = function(e) {
  var t, n, r, A;
  let {
    subscriptionTier: m,
    interval: N = f.SubscriptionIntervalTypes.MONTH,
    className: p,
    isGift: O = !1,
    variant: C,
    priceOptions: R,
    shouldUseModifiedCopy: g
  } = e, L = (0, E.usePremiumAnnualDiscountOffer)(), v = (0, I.usePremiumTrialOffer)(), D = (0, a.useStateFromStores)([u.default], () => u.default.isLoadedForPremiumSKUs()), M = (0, a.useStateFromStores)([d.default], () => d.default.getPremiumTypeSubscription()), {
    annualInvoicePreview: y
  } = (0, T.useGetAnnualDiscountInvoicePreview)({
    priceOptions: null != R ? R : {
      currency: "null"
    },
    preventFetch: null == L || null == R || null != v || m !== f.PremiumSubscriptionSKUs.TIER_2 || N !== f.SubscriptionIntervalTypes.YEAR,
    selectedSkuId: f.PremiumSubscriptionSKUs.TIER_2,
    planGroup: f.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
    activeSubscription: M
  }), P = null == y ? void 0 : null === (A = y.invoiceItems) || void 0 === A ? void 0 : null === (r = A.find(e => e.subscriptionPlanId === f.SubscriptionPlans.PREMIUM_YEAR_TIER_2)) || void 0 === r ? void 0 : null === (n = r.discounts) || void 0 === n ? void 0 : null === (t = n.find(e => e.type === l.InvoiceDiscountTypes.SUBSCRIPTION_PLAN)) || void 0 === t ? void 0 : t.amount;
  if (!D) return (0, i.jsx)(o.Spinner, {
    type: o.Spinner.Type.PULSING_ELLIPSIS,
    className: h.priceSpinner
  });
  let U = u.default.getForSkuAndInterval((0, _.castPremiumSubscriptionAsSkuId)(m), N),
    b = null != P ? (0, _.getPrice)(f.SubscriptionPlans.PREMIUM_YEAR_TIER_2, !1, O, R) : null,
    G = null != U ? (0, _.getFormattedPriceForPlan)(U, R, !1, O) : null;
  return (0, i.jsx)(o.Heading, {
    color: "always-white",
    variant: null != C ? C : "heading-md/medium",
    className: s()(h.pricePerInterval, p),
    children: null != b && null != P ? (0, i.jsxs)("div", {
      className: h.annualDiscountString,
      children: [S.default.Messages.BILLING_ANNUAL_DISCOUNT_TIER_CARD_YEARLY_PRICE.format({
        discountedPrice: (0, c.formatPrice)(b.amount - P, b.currency)
      }), S.default.Messages.BILLING_ANNUAL_DISCOUNT_TIER_CARD_YEARLY_PRICE_SUBTEXT.format({
        regularPrice: G
      })]
    }) : (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)("span", {
        className: g ? void 0 : h.price,
        children: G
      }), " / ", (0, _.getIntervalStringAsNoun)(N)]
    })
  })
}