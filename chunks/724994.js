"use strict";
l.r(t), l.d(t, {
  getProductPurchaseState: function() {
    return i
  },
  useProductPurchaseState: function() {
    return o
  }
});
var a = l("24217"),
  s = l.n(a),
  r = l("442837"),
  n = l("1870");
let i = (e, t) => {
    var l;
    let a = null != e.getPurchase(t.skuId),
      r = null !== (l = t.items) && void 0 !== l ? l : [],
      n = s()(r.map(t => e.getPurchase(t.skuId)));
    return {
      isPurchased: a || r.length > 0 && n.length === r.length,
      isPartiallyPurchased: n.length > 0 && n.length < r.length
    }
  },
  o = e => (0, r.useStateFromStoresObject)([n.default], () => i(n.default, e))