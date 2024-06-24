"use strict";
s.d(t, {
  l: function() {
    return d
  }
}), s(47120), s(653041);
var n, r, a = s(470079),
  i = s(952639),
  l = s.n(i),
  o = s(399606),
  c = s(1870),
  u = s(724994);
(r = n || (n = {}))[r.NOT_PURCHASED = 0] = "NOT_PURCHASED", r[r.PARTIAL_PURCHASED = 1] = "PARTIAL_PURCHASED", r[r.PURCHASED = 2] = "PURCHASED";
let d = e => {
  let t = (0, o.e7)([c.Z], () => c.Z.purchases);
  return (0, a.useMemo)(() => {
    let t = [
      [],
      [],
      []
    ];
    for (let s of e.values()) {
      let {
        isPurchased: e,
        isPartiallyPurchased: n
      } = (0, u.U)(c.Z, s);
      t[n ? 1 : e ? 2 : 0].push(s)
    }
    return l()(t)
  }, [t, e])
}