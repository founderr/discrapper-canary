"use strict";
a.r(t), a.d(t, {
  usePurchasedProductsSort: function() {
    return d
  }
}), a("47120"), a("653041");
var l, s, r = a("470079"),
  n = a("952639"),
  i = a.n(n),
  o = a("399606"),
  c = a("1870"),
  u = a("724994");
(s = l || (l = {}))[s.NOT_PURCHASED = 0] = "NOT_PURCHASED", s[s.PARTIAL_PURCHASED = 1] = "PARTIAL_PURCHASED", s[s.PURCHASED = 2] = "PURCHASED";
let d = e => {
  let t = (0, o.useStateFromStores)([c.default], () => c.default.purchases);
  return (0, r.useMemo)(() => {
    let t = [
      [],
      [],
      []
    ];
    for (let a of e.values()) {
      let {
        isPurchased: e,
        isPartiallyPurchased: l
      } = (0, u.getProductPurchaseState)(c.default, a);
      t[l ? 1 : e ? 2 : 0].push(a)
    }
    return i()(t)
  }, [t, e])
}