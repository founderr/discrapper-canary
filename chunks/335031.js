"use strict";
t.r(r), t.d(r, {
  default: function() {
    return u
  }
});
var l = t("884691"),
  n = t("656280"),
  i = t.n(n),
  o = t("509043"),
  a = t("446674"),
  s = t("206230"),
  u = e => {
    let r = (0, a.useStateFromStores)([s.default], () => s.default.desaturateUserColors ? s.default.saturation : 1),
      t = (0, l.useMemo)(() => {
        let {
          h: t,
          s: l,
          l: n
        } = i((0, o.int2hex)(e)).toHsl(), a = i({
          h: t,
          s: l * r,
          l: n
        });
        return {
          hex: a.toHexString(),
          hsl: a.toHslString()
        }
      }, [e, r]);
    return t
  }