"use strict";
a.r(t), a("47120");
var r = a("979590"),
  s = a.n(r),
  n = a("399606"),
  o = a("607070"),
  l = a("168631");
let i = (e, t) => {
    let a = e.toRgb(),
      r = t.toRgb(),
      [n, o, i] = (0, l.getValueInColorGradientByPercentage)([a.r, a.g, a.b], [r.r, r.g, r.b], 50);
    return s()({
      r: n,
      g: o,
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
  u = (e, t) => {
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
  d = (e, t) => {
    let {
      h: a,
      s: r,
      l: n
    } = e.toHsl();
    return s()({
      h: a,
      s: r * t,
      l: n
    })
  };
t.default = e => t => {
  let a = (0, n.useStateFromStores)([o.default], () => o.default.saturation);
  if (null == t) return {};
  let r = {
    backgroundColors: c(e, t.backgroundColors),
    buttonColors: u(e, t.buttonColors),
    confettiColors: t.confettiColors
  };
  return 1 === a ? {
    ...r
  } : {
    backgroundColors: null != r.backgroundColors ? {
      primary: d(r.backgroundColors.primary, a),
      secondary: d(r.backgroundColors.secondary, a),
      border: d(r.backgroundColors.border, a),
      label: d(r.backgroundColors.label, a)
    } : void 0,
    buttonColors: null != r.buttonColors ? {
      primary: d(r.buttonColors.primary, a),
      secondary: d(r.buttonColors.secondary, a),
      text: d(r.buttonColors.text, a)
    } : void 0,
    confettiColors: r.confettiColors.map(e => d(e, a))
  }
}