"use strict";
t.d(s, {
  L: function() {
    return o
  },
  U: function() {
    return i
  }
});
var n = t(24217),
  a = t.n(n),
  r = t(442837),
  l = t(1870);
let i = (e, s) => {
    var t;
    let n = null != e.getPurchase(s.skuId),
      r = null !== (t = s.items) && void 0 !== t ? t : [],
      l = a()(r.map(s => e.getPurchase(s.skuId)));
    return {
      isPurchased: n || r.length > 0 && l.length === r.length,
      isPartiallyPurchased: l.length > 0 && l.length < r.length
    }
  },
  o = e => (0, r.cj)([l.Z], () => i(l.Z, e))