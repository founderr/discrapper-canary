"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("37983");
n("884691");
var r = n("446674"),
  s = n("819855"),
  i = n("206230"),
  l = n("714657"),
  o = n("21121"),
  u = n("161778"),
  d = n("843455");

function c(e) {
  let {
    children: t
  } = e, n = (0, r.useStateFromStores)([u.default], () => u.default.theme), c = (0, o.useInMainTabsExperiment)(), f = (0, r.useStateFromStores)([l.default], () => l.default.gradientPreset), {
    saturation: h,
    contrast: p
  } = (0, r.useStateFromStoresObject)([i.default], () => ({
    saturation: i.default.saturation,
    contrast: i.default.contrast
  })), m = 0;
  return c && (m = (0, s.setThemeFlag)(m, s.ThemeContextFlags.MOBILE_REDESIGN_ENABLED)), null != f && c && (m = f.theme === d.ThemeTypes.LIGHT ? (0, s.setThemeFlag)(m, s.ThemeContextFlags.MOBILE_LIGHT_GRADIENT_THEME_ENABLED) : (0, s.setThemeFlag)(m, s.ThemeContextFlags.MOBILE_DARK_GRADIENT_THEME_ENABLED)), 1 !== h && (m = (0, s.setThemeFlag)(m, s.ThemeContextFlags.REDUCE_SATURATION_ENABLED)), (0, a.jsx)(s.RootThemeContextProvider, {
    theme: n,
    flags: m,
    saturation: h,
    contrast: p,
    children: t
  })
}