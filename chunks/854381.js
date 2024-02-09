"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var u = n("446674"),
  r = n("10514"),
  i = n("713518"),
  a = n("646718"),
  l = n("843455");

function s(e) {
  var t, n;
  let {
    activeSubscription: s,
    skuIDs: o,
    paymentSourceId: c,
    isGift: d
  } = e;
  o = o.filter(e => e !== a.PremiumSubscriptionSKUs.NONE);
  let f = (0, u.useStateFromStores)([r.default], () => {
      let e = r.default.getPlanIdsForSkus(o).filter(e => !d || a.PREMIUM_PLANS.has(e));
      return e.length > 0 ? r.default.get(e[0]) : null
    }),
    h = null == f ? [] : (0, i.getCurrencies)(f.id, c, d),
    p = null !== (n = null !== (t = h.find(e => e === (null == s ? void 0 : s.currency))) && void 0 !== t ? t : h[0]) && void 0 !== n ? n : l.CurrencyCodes.USD;
  return {
    ...(0, i.useCurrencyWithPaymentSourceChange)(p, null == f ? void 0 : f.id, c, d, o),
    currencies: h
  }
}