s.d(t, {
  a: function() {
return l;
  }
}), s(47120), s(653041);
var n = s(470079),
  r = s(399606),
  a = s(1870),
  o = s(215023);
let i = e => {
let t = new Map();
return o.N.forEach((e, s) => {
  t.set(e, s);
}), e.sort((e, s) => {
  var n, r;
  let a = null !== (n = t.get(e.skuId)) && void 0 !== n ? n : 1 / 0;
  return a - (null !== (r = t.get(s.skuId)) && void 0 !== r ? r : 1 / 0);
});
  },
  l = e => {
let t = (0, r.e7)([a.Z], () => a.Z.purchases),
  {
    sortedPopularPickProducts: s,
    popularProductToCategoryMap: l
  } = (0, n.useMemo)(() => {
    let s = [],
      n = [],
      r = new Map();
    for (let a of e.values())
      a.products.forEach(e => {
        o.N.includes(e.skuId) && !r.has(e.skuId) && (t.get(e.skuId) ? s.push(e) : n.push(e), r.set(e.skuId, a));
      });
    let a = i(s);
    return {
      sortedPopularPickProducts: i(n).concat(a).slice(0, 12),
      popularProductToCategoryMap: r
    };
  }, [
    e,
    t
  ]);
return {
  sortedPopularPickProducts: s,
  popularProductToCategoryMap: l
};
  };