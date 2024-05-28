"use strict";
a.r(t), a.d(t, {
  usePurchasedProductsSort: function() {
    return l
  }
}), a("47120"), a("653041");
var s = a("470079"),
  r = a("399606"),
  n = a("1870");
let l = e => {
  let t = (0, r.useStateFromStores)([n.default], () => n.default.purchases);
  return (0, s.useMemo)(() => {
    let a = [],
      s = [];
    for (let r of e.values()) void 0 !== t.get(r.skuId) ? a.push(r) : s.push(r);
    return s.concat(a)
  }, [e, t])
}