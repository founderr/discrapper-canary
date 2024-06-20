"use strict";
t.d(s, {
  L: function() {
    return o
  },
  U: function() {
    return l
  }
});
var n = t(24217),
  a = t.n(n),
  r = t(442837),
  i = t(1870);
let l = (e, s) => {
    var t;
    let n = null != e.getPurchase(s.skuId),
      r = null !== (t = s.items) && void 0 !== t ? t : [],
      i = a()(r.map(s => e.getPurchase(s.skuId)));
    return {
      isPurchased: n || r.length > 0 && i.length === r.length,
      isPartiallyPurchased: i.length > 0 && i.length < r.length
    }
  },
  o = e => (0, r.cj)([i.Z], () => l(i.Z, e))