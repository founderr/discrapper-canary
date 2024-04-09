"use strict";
r.r(t), r("47120");
var o = r("979590"),
  a = r.n(o),
  n = r("399606"),
  l = r("607070"),
  s = r("168631");
let i = (e, t) => {
    let r = e.toRgb(),
      o = t.toRgb(),
      [n, l, i] = (0, s.getValueInColorGradientByPercentage)([r.r, r.g, r.b], [o.r, o.g, o.b], 50);
    return a()({
      r: n,
      g: l,
      b: i
    })
  },
  c = (e, t) => {
    if (0 !== t.length) return 1 === t.length ? {
      primary: t[0],
      secondary: t[0],
      border: t[0].setAlpha(.4),
      label: t[0].isLight() ? e.dark : e.light
    } : {
      primary: t[0],
      secondary: t[1],
      border: i(t[0], t[1]).setAlpha(.4),
      label: i(t[0], t[1]).isLight() ? e.dark : e.light
    }
  },
  d = (e, t) => {
    if (0 !== t.length) return 1 === t.length ? {
      primary: t[0],
      secondary: t[0],
      text: t[0].isLight() ? e.dark : e.light
    } : {
      primary: t[0],
      secondary: t[1],
      text: i(t[0], t[1]).isLight() ? e.dark : e.light
    }
  },
  u = (e, t) => {
    let {
      h: r,
      s: o,
      l: n
    } = e.toHsl();
    return a()({
      h: r,
      s: o * t,
      l: n
    })
  };
t.default = e => t => {
  let r = (0, n.useStateFromStores)([l.default], () => l.default.saturation);
  if (null == t) return {};
  let o = {
    backgroundColors: c(e, t.backgroundColors),
    buttonColors: d(e, t.buttonColors),
    confettiColors: t.confettiColors
  };
  return 1 === r ? {
    ...o,
    isDarkText: !!(null != o.backgroundColors && o.backgroundColors.secondary.isLight())
  } : {
    backgroundColors: null != o.backgroundColors ? {
      primary: u(o.backgroundColors.primary, r),
      secondary: u(o.backgroundColors.secondary, r),
      border: u(o.backgroundColors.border, r),
      label: u(o.backgroundColors.label, r)
    } : void 0,
    buttonColors: null != o.buttonColors ? {
      primary: u(o.buttonColors.primary, r),
      secondary: u(o.buttonColors.secondary, r),
      text: u(o.buttonColors.text, r)
    } : void 0,
    confettiColors: o.confettiColors.map(e => u(e, r)),
    isDarkText: !!(null != o.backgroundColors && o.backgroundColors.secondary.isLight())
  }
}