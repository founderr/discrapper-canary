"use strict";
r.r(t), r.d(t, {
  default: function() {
    return l
  }
});
var a = r("446674"),
  n = r("10514"),
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
  let f = (0, a.useStateFromStores)([n.default], () => {
      let e = n.default.getPlanIdsForSkus(o).filter(e => !d || i.PREMIUM_PLANS.has(e));
      return e.length > 0 ? n.default.get(e[0]) : null
    }),
    m = null == f ? [] : (0, u.getCurrencies)(f.id, c, d),
    p = null !== (r = null !== (t = m.find(e => e === (null == l ? void 0 : l.currency))) && void 0 !== t ? t : m[0]) && void 0 !== r ? r : s.CurrencyCodes.USD;
  return {
    ...(0, u.useCurrencyWithPaymentSourceChange)(p, null == f ? void 0 : f.id, c, d, o),
    currencies: m
  }
}