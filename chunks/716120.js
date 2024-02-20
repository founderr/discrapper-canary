"use strict";
r.r(t), r.d(t, {
  default: function() {
    return m
  }
});
var a = r("37983");
r("884691");
var n = r("414456"),
  u = r.n(n),
  i = r("65597"),
  s = r("854588"),
  l = r("206230"),
  o = r("284679"),
  c = r("491232"),
  d = r("408381"),
  f = r("467618"),
  m = e => {
    let {
      asset: t,
      assetUrlOverride: r,
      size: n = d.MAX_CONTENT_WIDTH,
      className: m,
      style: p,
      children: E
    } = e, S = (0, i.default)([l.default], () => l.default.saturation);
    return (0, a.jsx)("div", {
      className: u(f.banner, m),
      style: (() => {
        if (null == t) return p;
        if (1 === S) return null != r ? {
          ...p,
          backgroundImage: "url(".concat(r, "), linear-gradient(180deg, rgba(0, 71, 94, 0.6) 5%, rgba(9, 33, 65, 0.6) 95%)"),
          backgroundBlendMode: "multiply",
          backgroundSize: "cover"
        } : {
          ...p,
          backgroundImage: "url(".concat((0, c.getCollectiblesAssetURL)(t, {
            size: n,
            format: "jpg"
          }), ")"),
          backgroundSize: "cover"
        };
        let e = (0, o.hexOpacityToRgba)(s.default.unsafe_rawColors.BLACK_500, 1 - S);
        return {
          ...p,
          backgroundImage: "linear-gradient(".concat(e, ", ").concat(e, "), url(").concat((0, c.getCollectiblesAssetURL)(t, {
            size: n,
            format: "jpg"
          }), ")"),
          backgroundBlendMode: "saturation",
          backgroundSize: "cover"
        }
      })(),
      children: E
    })
  }