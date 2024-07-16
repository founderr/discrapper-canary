s.d(t, {
  O: function() {
return o;
  }
}), s(47120), s(653041);
var n = s(470079),
  r = s(399606),
  a = s(1870);
let o = e => {
  let t = (0, r.e7)([a.Z], () => a.Z.purchases);
  return (0, n.useMemo)(() => {
let s = [],
  n = [];
for (let r of e.values())
  r.products.every(e => !!t.get(e.skuId)) ? s.push(r) : n.push(r);
return n.concat(s);
  }, [
e,
t
  ]);
};