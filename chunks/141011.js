"use strict";
r.r(t);
var a = r("735250"),
  l = r("470079"),
  o = r("120356"),
  n = r.n(o),
  s = r("399606"),
  i = r("376345"),
  c = r("607070"),
  u = r("302221"),
  d = r("884697"),
  f = r("372654"),
  C = r("447883");
t.default = e => {
  let {
    asset: t,
    size: r = f.MAX_CONTENT_WIDTH,
    addGradient: o = !1,
    className: p,
    style: g,
    children: v,
    blur: b = !1
  } = e, m = (0, s.useStateFromStores)([c.default], () => c.default.saturation), h = l.useMemo(() => {
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
    let l = (0, u.hexOpacityToRgba)(i.default.unsafe_rawColors.BLACK_500, 1 - m);
    return {
      ...g,
      backgroundImage: "linear-gradient(".concat(l, ", ").concat(l, "), url(").concat(e, ")"),
      backgroundBlendMode: "saturation",
      backgroundSize: "cover",
      ...a
    }
  }, [t, r, m, g, b, o]);
  return (0, a.jsx)("div", {
    className: n()(C.banner, p),
    style: h,
    children: v
  })
}