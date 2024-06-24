"use strict";
s.d(t, {
  L: function() {
    return o
  },
  U: function() {
    return l
  }
});
var n = s(24217),
  r = s.n(n),
  a = s(442837),
  i = s(1870);
let l = (e, t) => {
    var s;
    let n = null != e.getPurchase(t.skuId),
      a = null !== (s = t.items) && void 0 !== s ? s : [],
      i = r()(a.map(t => e.getPurchase(t.skuId)));
    return {
      isPurchased: n || a.length > 0 && i.length === a.length,
      isPartiallyPurchased: i.length > 0 && i.length < a.length
    }
  },
  o = e => (0, a.cj)([i.Z], () => l(i.Z, e))