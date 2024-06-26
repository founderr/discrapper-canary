"use strict";
n.d(t, {
  l: function() {
    return u
  }
}), n(47120), n(653041);
var r, i, a = n(470079),
  o = n(952639),
  s = n.n(o),
  c = n(399606),
  l = n(1870),
  d = n(724994);
(i = r || (r = {}))[i.NOT_PURCHASED = 0] = "NOT_PURCHASED", i[i.PARTIAL_PURCHASED = 1] = "PARTIAL_PURCHASED", i[i.PURCHASED = 2] = "PURCHASED";
let u = e => {
  let t = (0, c.e7)([l.Z], () => l.Z.purchases);
  return (0, a.useMemo)(() => {
    let t = [
      [],
      [],
      []
    ];
    for (let n of e.values()) {
      let {
        isPurchased: e,
        isPartiallyPurchased: r
      } = (0, d.U)(l.Z, n);
      t[r ? 1 : e ? 2 : 0].push(n)
    }
    return s()(t)
  }, [t, e])
}