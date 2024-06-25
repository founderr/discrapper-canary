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
  a = n.n(r),
  i = n(442837),
  o = n(1870);
let s = (e, t) => {
    var n;
    let r = null != e.getPurchase(t.skuId),
      i = null !== (n = t.items) && void 0 !== n ? n : [],
      o = a()(i.map(t => e.getPurchase(t.skuId)));
    return {
      isPurchased: r || i.length > 0 && o.length === i.length,
      isPartiallyPurchased: o.length > 0 && o.length < i.length
    }
  },
  c = e => (0, i.cj)([o.Z], () => s(o.Z, e))