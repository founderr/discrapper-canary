"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var i = n("446674"),
  r = n("10514"),
  u = n("713518"),
  o = n("646718"),
  l = n("843455");

function a(e) {
  var t, n;
  let {
    activeSubscription: a,
    skuIDs: s,
    paymentSourceId: c,
    isGift: d
  } = e;
  s = s.filter(e => e !== o.PremiumSubscriptionSKUs.NONE);
  let f = (0, i.useStateFromStores)([r.default], () => {
      let e = r.default.getPlanIdsForSkus(s).filter(e => !d || o.PREMIUM_PLANS.has(e));
      return e.length > 0 ? r.default.get(e[0]) : null
    }),
    E = null == f ? [] : (0, u.getCurrencies)(f.id, c, d),
    _ = null !== (n = null !== (t = E.find(e => e === (null == a ? void 0 : a.currency))) && void 0 !== t ? t : E[0]) && void 0 !== n ? n : l.CurrencyCodes.USD;
  return {
    ...(0, u.useCurrencyWithPaymentSourceChange)(_, null == f ? void 0 : f.id, c, d, s),
    currencies: E
  }
}