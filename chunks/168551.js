"use strict";
n.r(t), n.d(t, {
  CLIENT_THEMES_DATA_ATTRIBUTE: function() {
    return d
  },
  CUSTOM_THEME_BACKGROUND_CLASS_NAME: function() {
    return _
  }
}), n("47120");
var i = n("470079"),
  r = n("691324"),
  s = n("442837"),
  a = n("780384"),
  o = n("813852"),
  l = n("514361"),
  u = n("629935");
let d = "data-client-themes",
  _ = "custom-theme-background",
  c = () => {
    let e = (0, s.useStateFromStores)([l.default], () => l.default.gradientPreset),
      {
        enabled: t
      } = o.ColorMixDesktopClientThemesExperiment.useExperiment({
        location: "useBackgroundGradientCSS"
      });
    return (0, i.useMemo)(() => {
      if (null == e) return null;
      let n = l.default.getLinearGradient();
      if (null == n) return null;
      let [i, s] = [...e.colors].sort((e, t) => t.stop - e.stop).slice(0, 2).map(e => r.ColorDetails[e.token].hex), o = (0, u.getThemeColorMixValues)({
        enabled: t,
        primaryColor: i,
        secondaryColor: s,
        isDarkTheme: (0, a.isThemeDark)(e.theme)
      }), d = t ? "\n      ".concat(Object.entries(o).map(e => {
        let [t, n] = e;
        return "".concat(t, ": ").concat(n, ";")
      }).join("\n"), "\n    ") : "";
      return ".".concat(_, " {\n      --custom-theme-background: ").concat(n, ";\n      ").concat(d, "\n    }")
    }, [t, e])
  };
t.default = () => {
  let e = c();
  return null === e ? {
    clientThemesCSS: "",
    clientThemesClassName: ""
  } : {
    clientThemesCSS: e,
    clientThemesClassName: _
  }
}