"use strict";
a.r(t), a.d(t, {
  getProductPurchaseState: function() {
    return i
  },
  useProductPurchaseState: function() {
    return o
  }
});
var l = a("24217"),
  s = a.n(l),
  r = a("442837"),
  n = a("1870");
let i = (e, t) => {
    var a;
    let l = null != e.getPurchase(t.skuId),
      r = null !== (a = t.items) && void 0 !== a ? a : [],
      n = s()(r.map(t => e.getPurchase(t.skuId)));
    return {
      isPurchased: l || r.length > 0 && n.length === r.length,
      isPartiallyPurchased: n.length > 0 && n.length < r.length
    }
  },
  o = e => (0, r.useStateFromStoresObject)([n.default], () => i(n.default, e))