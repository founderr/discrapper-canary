"use strict";
a.r(t), a.d(t, {
  usePurchasedCategoriesSort: function() {
    return i
  }
}), a("47120"), a("653041");
var l = a("470079"),
  s = a("399606"),
  r = a("1870");
let i = e => {
  let t = (0, s.useStateFromStores)([r.default], () => r.default.purchases);
  return (0, l.useMemo)(() => {
    let a = [],
      l = [];
    for (let s of e.values()) s.products.every(e => !!t.get(e.skuId)) ? a.push(s) : l.push(s);
    return l.concat(a)
  }, [e, t])
}