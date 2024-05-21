"use strict";
n.r(t), n.d(t, {
  CLIENT_THEMES_DATA_ATTRIBUTE: function() {
    return _
  },
  CUSTOM_THEME_BACKGROUND_CLASS_NAME: function() {
    return c
  }
});
var i = n("470079"),
  r = n("688619"),
  s = n.n(r),
  a = n("691324"),
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
      let i = s().average(e.colors.map(e => {
          let {
            token: t
          } = e;
          return a.ColorDetails[t].hex
        }), "lab", e.colors.map((t, n) => {
          var i, r;
          let {
            stop: s
          } = t;
          return (s - (null !== (r = null === (i = e.colors[n - 1]) || void 0 === i ? void 0 : i.stop) && void 0 !== r ? r : 0)) / 100
        })),
        r = (0, l.isThemeLight)(e.theme) ? i.saturate(2).luminance(.1) : i.set("hsl.s", 1).set("hsl.l", .8),
        o = (0, l.isThemeLight)(e.theme) ? i.saturate(2).brighten(1.75) : i.set("hsl.s", .9).set("hsl.l", .2);
      return ".".concat(c, " {\n      --custom-theme-background: ").concat(n, ";\n      --custom-theme-mix-base: ").concat(o.css(), ";\n      --custom-theme-mix-text: ").concat(r.css(), ";\n      --custom-theme-mix-amount-base: ").concat(t ? 20 : 0, "%;\n      --custom-theme-mix-amount-text: ").concat(t ? 40 : 0, "%;\n    }")
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