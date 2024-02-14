"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
}), n("222007");
var r = n("65597"),
  u = n("853987"),
  a = n("775416"),
  i = e => {
    let [t, n] = (0, r.useStateFromStoresArray)([u.default], () => [u.default.getCategoryForProduct(e), u.default.getProduct(e)]), i = (0, r.default)([a.default], () => a.default.getPurchase(e));
    return {
      category: t,
      product: n,
      purchase: i
    }
  }