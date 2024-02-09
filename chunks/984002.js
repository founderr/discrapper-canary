"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
}), n("222007");
var r = n("65597"),
  u = n("853987"),
  i = n("775416"),
  a = e => {
    let [t, n] = (0, r.useStateFromStoresArray)([u.default], () => [u.default.getCategoryForProduct(e), u.default.getProduct(e)]), a = (0, r.default)([i.default], () => i.default.getPurchase(e));
    return {
      category: t,
      product: n,
      purchase: a
    }
  }