"use strict";
n.r(t), n.d(t, {
  CLIENT_THEMES_DATA_ATTRIBUTE: function() {
    return _
  },
  CUSTOM_THEME_BACKGROUND_CLASS_NAME: function() {
    return c
  }
}), n("47120");
var i = n("470079"),
  r = n("688619"),
  a = n.n(r),
  s = n("691324"),
  o = n("442837"),
  l = n("780384"),
  u = n("813852"),
  d = n("514361");
let _ = "data-client-themes",
  c = "custom-theme-background",
  E = () => {
    let e = (0, o.useStateFromStores)([d.default], () => d.default.gradientPreset),
      {
        enabled: t
      } = u.ColorMixDesktopClientThemesExperiment.useExperiment({
        location: "useBackgroundGradientCSS"
      });
    return (0, i.useMemo)(() => {
      if (null == e) return null;
      let n = d.default.getLinearGradient();
      if (null == n) return null;
      let [i, r] = [...e.colors].sort((e, t) => t.stop - e.stop).slice(0, 2).map(e => a()(s.ColorDetails[e.token].hex)), [o, u] = i.luminance() > r.luminance() ? [i, r] : [r, i], _ = (0, l.isThemeLight)(e.theme) ? u.set("lch.l", 10) : o.set("lch.l", 98).set("lch.c", 15), E = (0, l.isThemeLight)(e.theme) ? o.set("hsl.s", 1).set("hsl.l", .95) : u.set("hsl.s", 1).set("hsl.l", .05), [I, T, f] = E.hsl();
      return ".".concat(c, " {\n      --custom-theme-background: ").concat(n, ";\n      --custom-theme-mix-base-hsl: ").concat(I, " ").concat(100 * T, "% ").concat(100 * f, "%;\n      --custom-theme-mix-base: ").concat(E.css(), ";\n      --custom-theme-mix-text: ").concat(_.css(), ";\n      --custom-theme-mix-amount-base: ").concat(t ? 30 : 0, "%;\n      --custom-theme-mix-amount-text: ").concat(t ? 40 : 0, "%;\n    }")
    }, [t, e])
  };
t.default = () => {
  let e = E();
  return null === e ? {
    clientThemesCSS: "",
    clientThemesClassName: ""
  } : {
    clientThemesCSS: e,
    clientThemesClassName: c
  }
}