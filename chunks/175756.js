t(47120);
var n = t(470079),
  i = t(597688),
  a = t(884697),
  l = t(223143);
s.Z = e => {
  let [s, t] = n.useState(), {
    categories: r
  } = (0, l.Z)();
  return n.useEffect(() => {
    (null == s || 0 === s.size) && t(r)
  }, [r, s]), n.useMemo(() => {
    if (null != e) return e;
    if (null == s) return;
    let t = (0, a.XS)(s).filter(e => {
      let {
        skuId: s
      } = e, t = i.Z.getProduct(s);
      return (0, a.G1)(t)
    }).map(e => e.id);
    return t[Math.floor(Math.random() * t.length)]
  }, [s, e])
}