"use strict";
n.r(t), n.d(t, {
  CLIENT_THEMES_DATA_ATTRIBUTE: function() {
    return o
  },
  CUSTOM_THEME_BACKGROUND_CLASS_NAME: function() {
    return l
  }
});
var i = n("470079"),
  r = n("442837"),
  s = n("813852"),
  a = n("514361");
let o = "data-client-themes",
  l = "custom-theme-background",
  u = () => {
    let e = (0, r.useStateFromStores)([a.default], () => a.default.gradientPreset),
      {
        enabled: t
      } = s.ColorMixDesktopClientThemesExperiment.useExperiment({
        location: "useBackgroundGradientCSS"
      });
    return (0, i.useMemo)(() => {
      if (null == e) return null;
      let n = a.default.getLinearGradient();
      if (null == n) return null;
      let i = e.colors[0].token;
      return ".".concat(l, " {\n      --custom-theme-background: ").concat(n, ";\n      --custom-theme-base: var(--").concat(i, ");\n      --custom-theme-mix-amount: ").concat(t ? 18 : 0, "%;\n    }")
    }, [t, e])
  };
t.default = () => {
  let e = u();
  return null === e ? {
    clientThemesCSS: "",
    clientThemesClassName: ""
  } : {
    clientThemesCSS: e,
    clientThemesClassName: l
  }
}