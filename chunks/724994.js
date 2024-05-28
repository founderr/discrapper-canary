"use strict";
a.r(t), a.d(t, {
  useProductPurchaseState: function() {
    return o
  }
});
var s = a("24217"),
  r = a.n(s),
  n = a("442837"),
  l = a("1870");
let o = e => (0, n.useStateFromStoresObject)([l.default], () => {
  var t;
  let a = null != l.default.getPurchase(e.skuId),
    s = null !== (t = e.items) && void 0 !== t ? t : [],
    n = r()(s.map(e => l.default.getPurchase(e.skuId)));
  return {
    isPurchased: a || s.length > 0 && n.length === s.length,
    isPartiallyPurchased: n.length > 0 && n.length < s.length
  }
})