"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var i = n("446674"),
  r = n("10514"),
  l = n("713518"),
  s = n("646718"),
  a = n("843455");

function o(e) {
  var t, n;
  let {
    activeSubscription: o,
    skuIDs: u,
    paymentSourceId: d,
    isGift: c
  } = e;
  u = u.filter(e => e !== s.PremiumSubscriptionSKUs.NONE);
  let f = (0, i.useStateFromStores)([r.default], () => {
      let e = r.default.getPlanIdsForSkus(u).filter(e => !c || s.PREMIUM_PLANS.has(e));
      return e.length > 0 ? r.default.get(e[0]) : null
    }),
    E = null == f ? [] : (0, l.getCurrencies)(f.id, d, c),
    h = null !== (n = null !== (t = E.find(e => e === (null == o ? void 0 : o.currency))) && void 0 !== t ? t : E[0]) && void 0 !== n ? n : a.CurrencyCodes.USD;
  return {
    ...(0, l.useCurrencyWithPaymentSourceChange)(h, null == f ? void 0 : f.id, d, c, u),
    currencies: E
  }
}