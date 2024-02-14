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
  u = a("284679"),
  c = a("491232"),
  d = a("408381"),
  f = a("467618"),
  m = e => {
    let {
      asset: t,
      size: a = d.MAX_CONTENT_WIDTH,
      className: s,
      style: m,
      children: C
    } = e, E = (0, n.default)([o.default], () => o.default.saturation);
    return (0, l.jsx)("div", {
      className: r(f.banner, s),
      style: (() => {
        if (null == t) return m;
        let e = (0, c.getCollectiblesAssetURL)(t, {
          size: a,
          format: "jpg"
        });
        if (1 === E) return {
          ...m,
          backgroundImage: "url(".concat(e, ")"),
          backgroundSize: "cover"
        };
        let l = (0, u.hexOpacityToRgba)(i.default.unsafe_rawColors.BLACK_500, 1 - E);
        return {
          ...m,
          backgroundImage: "linear-gradient(".concat(l, ", ").concat(l, "), url(").concat(e, ")"),
          backgroundBlendMode: "saturation",
          backgroundSize: "cover"
        }
      })(),
      children: C
    })
  }