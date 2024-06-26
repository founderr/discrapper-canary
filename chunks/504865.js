"use strict";
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(442837),
  a = n(481060),
  l = n(911969),
  u = n(509545),
  _ = n(78839),
  c = n(74538),
  d = n(937615),
  E = n(104494),
  I = n(639119),
  T = n(230927),
  h = n(474936),
  f = n(689938),
  S = n(339959);
t.Z = function(e) {
  var t, n, r, N;
  let {
    subscriptionTier: A,
    interval: m = h.rV.MONTH,
    className: O,
    isGift: p = !1,
    variant: R,
    priceOptions: g,
    shouldUseModifiedCopy: C
  } = e, v = (0, E.z1)(), L = (0, I.N)(), D = (0, o.e7)([u.Z], () => u.Z.isLoadedForPremiumSKUs()), M = (0, o.e7)([_.ZP], () => _.ZP.getPremiumTypeSubscription()), {
    annualInvoicePreview: P
  } = (0, T.g)({
    priceOptions: null != g ? g : {
      currency: "null"
    },
    preventFetch: null == v || null == g || null != L || A !== h.Si.TIER_2 || m !== h.rV.YEAR,
    selectedSkuId: h.Si.TIER_2,
    planGroup: h.Y1,
    activeSubscription: M
  }), y = null == P ? void 0 : null === (N = P.invoiceItems) || void 0 === N ? void 0 : null === (r = N.find(e => e.subscriptionPlanId === h.Xh.PREMIUM_YEAR_TIER_2)) || void 0 === r ? void 0 : null === (n = r.discounts) || void 0 === n ? void 0 : null === (t = n.find(e => e.type === l.eW.SUBSCRIPTION_PLAN)) || void 0 === t ? void 0 : t.amount;
  if (!D) return (0, i.jsx)(a.Spinner, {
    type: a.Spinner.Type.PULSING_ELLIPSIS,
    className: S.priceSpinner
  });
  let U = u.Z.getForSkuAndInterval((0, c.Wz)(A), m),
    b = null != y ? (0, c.aS)(h.Xh.PREMIUM_YEAR_TIER_2, !1, p, g) : null,
    G = null != U ? (0, c.gy)(U, g, !1, p) : null;
  return (0, i.jsx)(a.Heading, {
    color: "always-white",
    variant: null != R ? R : "heading-md/medium",
    className: s()(S.pricePerInterval, O),
    children: null != b && null != y ? (0, i.jsxs)("div", {
      className: S.annualDiscountString,
      children: [f.Z.Messages.BILLING_ANNUAL_DISCOUNT_TIER_CARD_YEARLY_PRICE.format({
        discountedPrice: (0, d.T4)(b.amount - y, b.currency)
      }), f.Z.Messages.BILLING_ANNUAL_DISCOUNT_TIER_CARD_YEARLY_PRICE_SUBTEXT.format({
        regularPrice: G
      })]
    }) : (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)("span", {
        className: C ? void 0 : S.price,
        children: G
      }), " / ", (0, c.eP)(m)]
    })
  })
}