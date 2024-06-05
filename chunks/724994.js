"use strict";
s.r(t), s.d(t, {
  getProductPurchaseState: function() {
    return i
  },
  useProductPurchaseState: function() {
    return o
  }
});
var a = s("24217"),
  l = s.n(a),
  r = s("442837"),
  n = s("1870");
let i = (e, t) => {
    var s;
    let a = null != e.getPurchase(t.skuId),
      r = null !== (s = t.items) && void 0 !== s ? s : [],
      n = l()(r.map(t => e.getPurchase(t.skuId)));
    return {
      isPurchased: a || r.length > 0 && n.length === r.length,
      isPartiallyPurchased: n.length > 0 && n.length < r.length
    }
  },
  o = e => (0, r.useStateFromStoresObject)([n.default], () => i(n.default, e))