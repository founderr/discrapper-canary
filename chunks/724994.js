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
  n = s("442837"),
  r = s("1870");
let i = (e, t) => {
    var s;
    let a = null != e.getPurchase(t.skuId),
      n = null !== (s = t.items) && void 0 !== s ? s : [],
      r = l()(n.map(t => e.getPurchase(t.skuId)));
    return {
      isPurchased: a || n.length > 0 && r.length === n.length,
      isPartiallyPurchased: r.length > 0 && r.length < n.length
    }
  },
  o = e => (0, n.useStateFromStoresObject)([r.default], () => i(r.default, e))