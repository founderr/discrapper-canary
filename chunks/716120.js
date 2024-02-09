"use strict";
r.r(t), r.d(t, {
  default: function() {
    return E
  }
});
var a = r("37983");
r("884691");
var s = r("414456"),
  n = r.n(s),
  i = r("65597"),
  l = r("854588"),
  u = r("206230"),
  o = r("284679"),
  c = r("491232"),
  d = r("408381"),
  f = r("268779"),
  E = e => {
    let {
      asset: t,
      size: r = d.MAX_CONTENT_WIDTH,
      className: s,
      style: E,
      children: m
    } = e, C = (0, i.default)([u.default], () => u.default.saturation);
    return (0, a.jsx)("div", {
      className: n(f.banner, s),
      style: (() => {
        if (null == t) return E;
        let e = (0, c.getCollectiblesAssetURL)(t, {
          size: r,
          format: "jpg"
        });
        if (1 === C) return {
          ...E,
          backgroundImage: "url(".concat(e, ")"),
          backgroundSize: "cover"
        };
        let a = (0, o.hexOpacityToRgba)(l.default.unsafe_rawColors.BLACK_500, 1 - C);
        return {
          ...E,
          backgroundImage: "linear-gradient(".concat(a, ", ").concat(a, "), url(").concat(e, ")"),
          backgroundBlendMode: "saturation",
          backgroundSize: "cover"
        }
      })(),
      children: m
    })
  }