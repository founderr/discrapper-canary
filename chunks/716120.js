"use strict";
a.r(t), a.d(t, {
  default: function() {
    return m
  }
});
var l = a("37983");
a("884691");
var s = a("414456"),
  r = a.n(s),
  n = a("65597"),
  i = a("854588"),
  o = a("206230"),
  c = a("284679"),
  u = a("491232"),
  d = a("408381"),
  f = a("467618"),
  m = e => {
    let {
      asset: t,
      assetUrlOverride: a,
      size: s = d.MAX_CONTENT_WIDTH,
      className: m,
      style: p,
      children: C
    } = e, g = (0, n.default)([o.default], () => o.default.saturation);
    return (0, l.jsx)("div", {
      className: r(f.banner, m),
      style: (() => {
        if (null == t) return p;
        if (1 === g) return null != a ? {
          ...p,
          backgroundImage: "url(".concat(a, "), linear-gradient(180deg, rgba(0, 71, 94, 0.6) 5%, rgba(9, 33, 65, 0.6) 95%)"),
          backgroundBlendMode: "multiply",
          backgroundSize: "cover"
        } : {
          ...p,
          backgroundImage: "url(".concat((0, u.getCollectiblesAssetURL)(t, {
            size: s,
            format: "jpg"
          }), ")"),
          backgroundSize: "cover"
        };
        let e = (0, c.hexOpacityToRgba)(i.default.unsafe_rawColors.BLACK_500, 1 - g);
        return {
          ...p,
          backgroundImage: "linear-gradient(".concat(e, ", ").concat(e, "), url(").concat((0, u.getCollectiblesAssetURL)(t, {
            size: s,
            format: "jpg"
          }), ")"),
          backgroundBlendMode: "saturation",
          backgroundSize: "cover"
        }
      })(),
      children: C
    })
  }