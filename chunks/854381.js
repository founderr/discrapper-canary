"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var u = n("446674"),
  r = n("10514"),
  a = n("713518"),
  i = n("646718"),
  o = n("843455");

function l(e) {
  var t, n;
  let {
    activeSubscription: l,
    skuIDs: s,
    paymentSourceId: c,
    isGift: d
  } = e;
  s = s.filter(e => e !== i.PremiumSubscriptionSKUs.NONE);
  let f = (0, u.useStateFromStores)([r.default], () => {
      let e = r.default.getPlanIdsForSkus(s).filter(e => !d || i.PREMIUM_PLANS.has(e));
      return e.length > 0 ? r.default.get(e[0]) : null
    }),
    E = null == f ? [] : (0, a.getCurrencies)(f.id, c, d),
    _ = null !== (n = null !== (t = E.find(e => e === (null == l ? void 0 : l.currency))) && void 0 !== t ? t : E[0]) && void 0 !== n ? n : o.CurrencyCodes.USD;
  return {
    ...(0, a.useCurrencyWithPaymentSourceChange)(_, null == f ? void 0 : f.id, c, d, s),
    currencies: E
  }
}