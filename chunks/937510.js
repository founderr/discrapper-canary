"use strict";
l.r(t), l.d(t, {
  usePurchasedProductsSort: function() {
    return n
  }
}), l("47120"), l("653041");
var a = l("470079"),
  s = l("399606"),
  r = l("1870");
let n = e => {
  let t = (0, s.useStateFromStores)([r.default], () => r.default.purchases);
  return (0, a.useMemo)(() => {
    let l = [],
      a = [];
    for (let s of e.values()) void 0 !== t.get(s.skuId) ? l.push(s) : a.push(s);
    return a.concat(l)
  }, [e, t])
}