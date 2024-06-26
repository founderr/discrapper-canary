"use strict";
n.d(t, {
  L: function() {
    return c
  },
  U: function() {
    return s
  }
});
var r = n(24217),
  i = n.n(r),
  a = n(442837),
  o = n(1870);
let s = (e, t) => {
    var n;
    let r = null != e.getPurchase(t.skuId),
      a = null !== (n = t.items) && void 0 !== n ? n : [],
      o = i()(a.map(t => e.getPurchase(t.skuId)));
    return {
      isPurchased: r || a.length > 0 && o.length === a.length,
      isPartiallyPurchased: o.length > 0 && o.length < a.length
    }
  },
  c = e => (0, a.cj)([o.Z], () => s(o.Z, e))