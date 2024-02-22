"use strict";
r.r(t), r.d(t, {
  default: function() {
    return s
  }
});
var a = r("446674"),
  n = r("10514"),
  u = r("713518"),
  i = r("646718"),
  l = r("843455");

function s(e) {
  var t, r;
  let {
    activeSubscription: s,
    skuIDs: o,
    paymentSourceId: c,
    isGift: d
  } = e;
  o = o.filter(e => e !== i.PremiumSubscriptionSKUs.NONE);
  let f = (0, a.useStateFromStores)([n.default], () => {
      let e = n.default.getPlanIdsForSkus(o).filter(e => !d || i.PREMIUM_PLANS.has(e));
      return e.length > 0 ? n.default.get(e[0]) : null
    }),
    E = null == f ? [] : (0, u.getCurrencies)(f.id, c, d),
    m = null !== (r = null !== (t = E.find(e => e === (null == s ? void 0 : s.currency))) && void 0 !== t ? t : E[0]) && void 0 !== r ? r : l.CurrencyCodes.USD;
  return {
    ...(0, u.useCurrencyWithPaymentSourceChange)(m, null == f ? void 0 : f.id, c, d, o),
    currencies: E
  }
}