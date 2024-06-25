"use strict";
n.d(t, {
  O: function() {
    return o
  }
}), n(47120), n(653041);
var r = n(470079),
  a = n(399606),
  i = n(1870);
let o = e => {
  let t = (0, a.e7)([i.Z], () => i.Z.purchases);
  return (0, r.useMemo)(() => {
    let n = [],
      r = [];
    for (let a of e.values()) a.products.every(e => !!t.get(e.skuId)) ? n.push(a) : r.push(a);
    return r.concat(n)
  }, [e, t])
}