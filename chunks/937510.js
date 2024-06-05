"use strict";
s.r(t), s.d(t, {
  usePurchasedProductsSort: function() {
    return d
  }
}), s("47120"), s("653041");
var a, l, n = s("470079"),
  r = s("952639"),
  i = s.n(r),
  o = s("399606"),
  u = s("1870"),
  c = s("724994");
(l = a || (a = {}))[l.NOT_PURCHASED = 0] = "NOT_PURCHASED", l[l.PARTIAL_PURCHASED = 1] = "PARTIAL_PURCHASED", l[l.PURCHASED = 2] = "PURCHASED";
let d = e => {
  let t = (0, o.useStateFromStores)([u.default], () => u.default.purchases);
  return (0, n.useMemo)(() => {
    let t = [
      [],
      [],
      []
    ];
    for (let s of e.values()) {
      let {
        isPurchased: e,
        isPartiallyPurchased: a
      } = (0, c.getProductPurchaseState)(u.default, s);
      t[a ? 1 : e ? 2 : 0].push(s)
    }
    return i()(t)
  }, [t, e])
}