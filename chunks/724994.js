s.d(t, {
  L: function() {
return l;
  },
  U: function() {
return i;
  }
});
var n = s(24217),
  r = s.n(n),
  a = s(442837),
  o = s(1870);
let i = (e, t) => {
var s;
let n = null != e.getPurchase(t.skuId),
  a = null !== (s = t.items) && void 0 !== s ? s : [],
  o = r()(a.map(t => e.getPurchase(t.skuId)));
return {
  isPurchased: n || a.length > 0 && o.length === a.length,
  isPartiallyPurchased: o.length > 0 && o.length < a.length
};
  },
  l = e => (0, a.cj)([o.Z], () => i(o.Z, e));