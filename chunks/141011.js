"use strict";
a.r(t);
var r = a("735250"),
  s = a("470079"),
  n = a("120356"),
  o = a.n(n),
  l = a("399606"),
  i = a("376345"),
  c = a("607070"),
  u = a("302221"),
  d = a("884697"),
  f = a("372654"),
  C = a("447883");
t.default = e => {
  let {
    asset: t,
    size: a = f.MAX_CONTENT_WIDTH,
    addGradient: n = !1,
    className: p,
    style: b,
    children: g,
    blur: E = !1
  } = e, I = (0, l.useStateFromStores)([c.default], () => c.default.saturation), T = s.useMemo(() => {
    if (null == t) return b;
    let e = (0, d.getCollectiblesAssetURL)(t, {
        size: a,
        format: "jpg"
      }),
      r = E ? {
        filter: "blur(2px)",
        transform: "scale(1.02)"
      } : {};
    if (1 === I) return {
      ...b,
      backgroundImage: n ? "url(".concat(e, "), linear-gradient(180deg, rgba(0, 71, 94, 0.6) 5%, rgba(9, 33, 65, 0.6) 95%)") : "url(".concat(e, ")"),
      backgroundBlendMode: "multiply",
      backgroundSize: "cover",
      ...r
    };
    let s = (0, u.hexOpacityToRgba)(i.default.unsafe_rawColors.BLACK_500, 1 - I);
    return {
      ...b,
      backgroundImage: "linear-gradient(".concat(s, ", ").concat(s, "), url(").concat(e, ")"),
      backgroundBlendMode: "saturation",
      backgroundSize: "cover",
      ...r
    }
  }, [t, a, I, b, E, n]);
  return (0, r.jsx)("div", {
    className: o()(C.banner, p),
    style: T,
    children: g
  })
}