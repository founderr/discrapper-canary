"use strict";
r.r(t), r.d(t, {
  default: function() {
    return l
  }
});
var n = r("446674"),
  a = r("10514"),
  u = r("713518"),
  i = r("646718"),
  s = r("843455");

function l(e) {
  var t, r;
  let {
    activeSubscription: l,
    skuIDs: o,
    paymentSourceId: c,
    isGift: d
  } = e;
  o = o.filter(e => e !== i.PremiumSubscriptionSKUs.NONE);
  let f = (0, n.useStateFromStores)([a.default], () => {
      let e = a.default.getPlanIdsForSkus(o).filter(e => !d || i.PREMIUM_PLANS.has(e));
      return e.length > 0 ? a.default.get(e[0]) : null
    }),
    E = null == f ? [] : (0, u.getCurrencies)(f.id, c, d),
    m = null !== (r = null !== (t = E.find(e => e === (null == l ? void 0 : l.currency))) && void 0 !== t ? t : E[0]) && void 0 !== r ? r : s.CurrencyCodes.USD;
  return {
    ...(0, u.useCurrencyWithPaymentSourceChange)(m, null == f ? void 0 : f.id, c, d, o),
    currencies: E
  }
}