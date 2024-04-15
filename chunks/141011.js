"use strict";
r.r(t);
var o = r("735250"),
  a = r("470079"),
  n = r("120356"),
  l = r.n(n),
  s = r("399606"),
  i = r("376345"),
  c = r("607070"),
  u = r("302221"),
  d = r("884697"),
  f = r("372654"),
  g = r("59712");
t.default = e => {
  let {
    asset: t,
    size: r = f.MAX_CONTENT_WIDTH,
    addGradient: n = !1,
    className: C,
    style: p,
    children: b,
    blur: m = !1
  } = e, y = (0, s.useStateFromStores)([c.default], () => c.default.saturation), v = a.useMemo(() => {
    if (null == t) return p;
    let e = (0, d.getCollectiblesAssetURL)(t, {
        size: r,
        format: "jpg"
      }),
      o = m ? {
        filter: "blur(2px)",
        transform: "scale(1.02)"
      } : {};
    if (1 === y) return {
      ...p,
      backgroundImage: n ? "url(".concat(e, "), linear-gradient(180deg, rgba(0, 71, 94, 0.6) 5%, rgba(9, 33, 65, 0.6) 95%)") : "url(".concat(e, ")"),
      backgroundBlendMode: "multiply",
      backgroundSize: "cover",
      ...o
    };
    let a = (0, u.hexOpacityToRgba)(i.default.unsafe_rawColors.BLACK_500, 1 - y);
    return {
      ...p,
      backgroundImage: "linear-gradient(".concat(a, ", ").concat(a, "), url(").concat(e, ")"),
      backgroundBlendMode: "saturation",
      backgroundSize: "cover",
      ...o
    }
  }, [t, r, y, p, m, n]);
  return (0, o.jsx)("div", {
    className: l()(g.banner, C),
    style: v,
    children: b
  })
}