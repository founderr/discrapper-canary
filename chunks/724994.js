"use strict";
a.r(t), a.d(t, {
  getProductPurchaseState: function() {
    return i
  },
  useProductPurchaseState: function() {
    return o
  }
});
var s = a("24217"),
  l = a.n(s),
  r = a("442837"),
  n = a("1870");
let i = (e, t) => {
    var a;
    let s = null != e.getPurchase(t.skuId),
      r = null !== (a = t.items) && void 0 !== a ? a : [],
      n = l()(r.map(t => e.getPurchase(t.skuId)));
    return {
      isPurchased: s || r.length > 0 && n.length === r.length,
      isPartiallyPurchased: n.length > 0 && n.length < r.length
    }
  },
  o = e => (0, r.useStateFromStoresObject)([n.default], () => i(n.default, e))