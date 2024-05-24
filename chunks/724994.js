"use strict";
a.r(t), a.d(t, {
  useProductPurchaseState: function() {
    return i
  }
});
var l = a("24217"),
  s = a.n(l),
  r = a("442837"),
  n = a("1870");
let i = e => (0, r.useStateFromStoresObject)([n.default], () => {
  var t;
  let a = null != n.default.getPurchase(e.skuId),
    l = null !== (t = e.items) && void 0 !== t ? t : [],
    r = s()(l.map(e => n.default.getPurchase(e.skuId)));
  return {
    isPurchased: a || l.length > 0 && r.length === l.length,
    isPartiallyPurchased: r.length > 0 && r.length < l.length
  }
})