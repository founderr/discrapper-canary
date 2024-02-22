"use strict";
r.r(t), r.d(t, {
  default: function() {
    return E
  }
});
var a = r("37983");
r("884691");
var n = r("414456"),
  u = r.n(n),
  i = r("65597"),
  l = r("854588"),
  s = r("206230"),
  o = r("284679"),
  c = r("491232"),
  d = r("408381"),
  f = r("467618"),
  E = e => {
    let {
      asset: t,
      assetUrlOverride: r,
      size: n = d.MAX_CONTENT_WIDTH,
      className: E,
      style: m,
      children: p
    } = e, S = (0, i.default)([s.default], () => s.default.saturation);
    return (0, a.jsx)("div", {
      className: u(f.banner, E),
      style: (() => {
        if (null == t) return m;
        if (1 === S) return null != r ? {
          ...m,
          backgroundImage: "url(".concat(r, "), linear-gradient(180deg, rgba(0, 71, 94, 0.6) 5%, rgba(9, 33, 65, 0.6) 95%)"),
          backgroundBlendMode: "multiply",
          backgroundSize: "cover"
        } : {
          ...m,
          backgroundImage: "url(".concat((0, c.getCollectiblesAssetURL)(t, {
            size: n,
            format: "jpg"
          }), ")"),
          backgroundSize: "cover"
        };
        let e = (0, o.hexOpacityToRgba)(l.default.unsafe_rawColors.BLACK_500, 1 - S);
        return {
          ...m,
          backgroundImage: "linear-gradient(".concat(e, ", ").concat(e, "), url(").concat((0, c.getCollectiblesAssetURL)(t, {
            size: n,
            format: "jpg"
          }), ")"),
          backgroundBlendMode: "saturation",
          backgroundSize: "cover"
        }
      })(),
      children: p
    })
  }