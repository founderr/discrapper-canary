"use strict";
n.r(t), n.d(t, {
  useDiscountedPrice: function() {
    return d
  }
}), n("222007");
var i = n("798609"),
  r = n("854381"),
  l = n("986681"),
  a = n("719923"),
  s = n("153160"),
  o = n("809071"),
  u = n("154889"),
  c = n("646718");
let d = e => {
  var t, n, d, f;
  let {
    paymentSourceId: m
  } = (0, l.default)({
    isGift: !1,
    activeSubscription: null
  }), _ = c.SubscriptionPlanInfo[e].skuId, {
    priceOptions: E
  } = (0, r.default)({
    activeSubscription: null,
    skuIDs: [_],
    paymentSourceId: m,
    isGift: !1
  }), T = (0, u.usePremiumDiscountOffer)(), [I, C] = (0, o.useSubscriptionInvoicePreview)({
    items: [{
      planId: e,
      quantity: 1
    }],
    renewal: !0,
    preventFetch: !(null != T),
    paymentSourceId: m,
    currency: E.currency
  }), p = null == I ? void 0 : null === (f = I.invoiceItems) || void 0 === f ? void 0 : null === (d = f.find(t => t.subscriptionPlanId === e)) || void 0 === d ? void 0 : null === (n = d.discounts) || void 0 === n ? void 0 : null === (t = n.find(e => e.type === i.InvoiceDiscountTypes.SUBSCRIPTION_PLAN)) || void 0 === t ? void 0 : t.amount, P = (0, a.getPrice)(e, !1, !1, E);
  return (0, s.formatPrice)(P.amount - (null != p ? p : 0), P.currency)
}