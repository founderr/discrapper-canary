"use strict";
l.r(t), l.d(t, {
  usePurchasedProductsSort: function() {
    return d
  }
}), l("47120"), l("653041");
var a, s, r = l("470079"),
  n = l("952639"),
  i = l.n(n),
  o = l("399606"),
  c = l("1870"),
  u = l("724994");
(s = a || (a = {}))[s.NOT_PURCHASED = 0] = "NOT_PURCHASED", s[s.PARTIAL_PURCHASED = 1] = "PARTIAL_PURCHASED", s[s.PURCHASED = 2] = "PURCHASED";
let d = e => {
  let t = (0, o.useStateFromStores)([c.default], () => c.default.purchases);
  return (0, r.useMemo)(() => {
    let t = [
      [],
      [],
      []
    ];
    for (let l of e.values()) {
      let {
        isPurchased: e,
        isPartiallyPurchased: a
      } = (0, u.getProductPurchaseState)(c.default, l);
      t[a ? 1 : e ? 2 : 0].push(l)
    }
    return i()(t)
  }, [t, e])
}