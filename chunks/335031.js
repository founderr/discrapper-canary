"use strict";
l.r(t), l.d(t, {
  default: function() {
    return u
  }
});
var r = l("884691"),
  a = l("656280"),
  n = l.n(a),
  s = l("509043"),
  i = l("446674"),
  o = l("206230"),
  u = e => {
    let t = (0, i.useStateFromStores)([o.default], () => o.default.desaturateUserColors ? o.default.saturation : 1),
      l = (0, r.useMemo)(() => {
        let {
          h: l,
          s: r,
          l: a
        } = n((0, s.int2hex)(e)).toHsl(), i = n({
          h: l,
          s: r * t,
          l: a
        });
        return {
          hex: i.toHexString(),
          hsl: i.toHslString()
        }
      }, [e, t]);
    return l
  }