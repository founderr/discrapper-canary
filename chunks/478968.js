"use strict";
n.r(t), n.d(t, {
  useDiscountedPrice: function() {
    return c
  }
}), n("222007");
var r = n("798609"),
  i = n("854381"),
  l = n("986681"),
  a = n("719923"),
  s = n("153160"),
  o = n("809071"),
  u = n("154889"),
  d = n("646718");
let c = e => {
  var t, n, c, m;
  let {
    paymentSourceId: f
  } = (0, l.default)({
    isGift: !1,
    activeSubscription: null
  }), _ = d.SubscriptionPlanInfo[e].skuId, {
    priceOptions: E
  } = (0, i.default)({
    activeSubscription: null,
    skuIDs: [_],
    paymentSourceId: f,
    isGift: !1
  }), T = (0, u.usePremiumDiscountOffer)(), [I, p] = (0, o.useSubscriptionInvoicePreview)({
    items: [{
      planId: e,
      quantity: 1
    }],
    renewal: !0,
    preventFetch: !(null != T),
    paymentSourceId: f,
    currency: E.currency
  }), P = null == I ? void 0 : null === (m = I.invoiceItems) || void 0 === m ? void 0 : null === (c = m.find(t => t.subscriptionPlanId === e)) || void 0 === c ? void 0 : null === (n = c.discounts) || void 0 === n ? void 0 : null === (t = n.find(e => e.type === r.InvoiceDiscountTypes.SUBSCRIPTION_PLAN)) || void 0 === t ? void 0 : t.amount, S = (0, a.getPrice)(e, !1, !1, E);
  return (0, s.formatPrice)(S.amount - (null != P ? P : 0), S.currency)
}