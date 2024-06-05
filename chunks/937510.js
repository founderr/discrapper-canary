"use strict";
s.r(t), s.d(t, {
  usePurchasedProductsSort: function() {
    return d
  }
}), s("47120"), s("653041");
var a, l, r = s("470079"),
  n = s("952639"),
  i = s.n(n),
  o = s("399606"),
  c = s("1870"),
  u = s("724994");
(l = a || (a = {}))[l.NOT_PURCHASED = 0] = "NOT_PURCHASED", l[l.PARTIAL_PURCHASED = 1] = "PARTIAL_PURCHASED", l[l.PURCHASED = 2] = "PURCHASED";
let d = e => {
  let t = (0, o.useStateFromStores)([c.default], () => c.default.purchases);
  return (0, r.useMemo)(() => {
    let t = [
      [],
      [],
      []
    ];
    for (let s of e.values()) {
      let {
        isPurchased: e,
        isPartiallyPurchased: a
      } = (0, u.getProductPurchaseState)(c.default, s);
      t[a ? 1 : e ? 2 : 0].push(s)
    }
    return i()(t)
  }, [t, e])
}