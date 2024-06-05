"use strict";
s.r(t), s.d(t, {
  usePurchasedCategoriesSort: function() {
    return n
  }
}), s("47120"), s("653041");
var a = s("470079"),
  l = s("399606"),
  r = s("1870");
let n = e => {
  let t = (0, l.useStateFromStores)([r.default], () => r.default.purchases);
  return (0, a.useMemo)(() => {
    let s = [],
      a = [];
    for (let l of e.values()) l.products.every(e => !!t.get(e.skuId)) ? s.push(l) : a.push(l);
    return a.concat(s)
  }, [e, t])
}