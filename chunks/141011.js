"use strict";
r.r(t);
var a = r("735250"),
  o = r("470079"),
  n = r("803997"),
  l = r.n(n),
  s = r("399606"),
  i = r("376345"),
  c = r("607070"),
  u = r("302221"),
  d = r("884697"),
  f = r("372654"),
  C = r("59712");
t.default = e => {
  let {
    asset: t,
    size: r = f.MAX_CONTENT_WIDTH,
    addGradient: n = !1,
    className: g,
    style: p,
    children: b
  } = e, y = (0, s.useStateFromStores)([c.default], () => c.default.saturation), S = o.useMemo(() => {
    if (null == t) return p;
    let e = (0, d.getCollectiblesAssetURL)(t, {
      size: r,
      format: "jpg"
    });
    if (1 === y) return {
      ...p,
      backgroundImage: n ? "url(".concat(e, "), linear-gradient(180deg, rgba(0, 71, 94, 0.6) 5%, rgba(9, 33, 65, 0.6) 95%)") : "url(".concat(e, ")"),
      backgroundBlendMode: "multiply",
      backgroundSize: "cover"
    };
    let a = (0, u.hexOpacityToRgba)(i.default.unsafe_rawColors.BLACK_500, 1 - y);
    return {
      ...p,
      backgroundImage: "linear-gradient(".concat(a, ", ").concat(a, "), url(").concat(e, ")"),
      backgroundBlendMode: "saturation",
      backgroundSize: "cover"
    }
  }, [y, t, r, n, p]);
  return (0, a.jsx)("div", {
    className: l()(C.banner, g),
    style: S,
    children: b
  })
}