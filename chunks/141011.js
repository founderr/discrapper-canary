"use strict";
r.r(t);
var a = r("735250"),
  n = r("470079"),
  o = r("120356"),
  l = r.n(o),
  s = r("399606"),
  i = r("376345"),
  c = r("607070"),
  u = r("302221"),
  d = r("884697"),
  f = r("372654"),
  p = r("447883");
t.default = e => {
  let {
    asset: t,
    size: r = f.MAX_CONTENT_WIDTH,
    addGradient: o = !1,
    className: C,
    style: g,
    children: v,
    blur: b = !1
  } = e, m = (0, s.useStateFromStores)([c.default], () => c.default.saturation), h = n.useMemo(() => {
    if (null == t) return g;
    let e = (0, d.getCollectiblesAssetURL)(t, {
        size: r,
        format: "jpg"
      }),
      a = b ? {
        filter: "blur(2px)",
        transform: "scale(1.02)"
      } : {};
    if (1 === m) return {
      ...g,
      backgroundImage: o ? "url(".concat(e, "), linear-gradient(180deg, rgba(0, 71, 94, 0.6) 5%, rgba(9, 33, 65, 0.6) 95%)") : "url(".concat(e, ")"),
      backgroundBlendMode: "multiply",
      backgroundSize: "cover",
      ...a
    };
    let n = (0, u.hexOpacityToRgba)(i.default.unsafe_rawColors.BLACK_500, 1 - m);
    return {
      ...g,
      backgroundImage: "linear-gradient(".concat(n, ", ").concat(n, "), url(").concat(e, ")"),
      backgroundBlendMode: "saturation",
      backgroundSize: "cover",
      ...a
    }
  }, [t, r, m, g, b, o]);
  return (0, a.jsx)("div", {
    className: l()(p.banner, C),
    style: h,
    children: v
  })
}