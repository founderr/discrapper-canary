"use strict";
r.r(t), r.d(t, {
  default: function() {
    return g
  }
}), r("222007");
var n = r("656280"),
  o = r.n(n),
  a = r("65597"),
  l = r("669491"),
  s = r("206230"),
  i = r("388491");
let c = o(l.default.unsafe_rawColors.WHITE_500.resolve({
    saturation: 1
  }).hex()),
  u = o(l.default.unsafe_rawColors.BLACK_500.resolve({
    saturation: 1
  }).hex()),
  d = (e, t) => {
    let r = e.toRgb(),
      n = t.toRgb(),
      [a, l, s] = (0, i.getValueInColorGradientByPercentage)([r.r, r.g, r.b], [n.r, n.g, n.b], 50);
    return o({
      r: a,
      g: l,
      b: s
    })
  },
  f = e => {
    if (0 !== e.length) return 1 === e.length ? {
      primary: e[0],
      secondary: e[0],
      border: e[0].setAlpha(.4)
    } : {
      primary: e[0],
      secondary: e[1],
      border: d(e[0], e[1]).setAlpha(.4)
    }
  },
  C = e => {
    if (0 !== e.length) return 1 === e.length ? {
      primary: e[0],
      secondary: e[0],
      text: e[0].isLight() ? u : c
    } : {
      primary: e[0],
      secondary: e[1],
      text: d(e[0], e[1]).isLight() ? u : c
    }
  },
  p = (e, t) => {
    let {
      h: r,
      s: n,
      l: a
    } = e.toHsl();
    return o({
      h: r,
      s: n * t,
      l: a
    })
  };
var g = e => {
  let t = (0, a.default)([s.default], () => s.default.saturation);
  if (null == e) return {};
  let r = {
    backgroundColors: f(e.backgroundColors),
    buttonColors: C(e.buttonColors),
    confettiColors: e.confettiColors
  };
  return 1 === t ? r : {
    backgroundColors: null != r.backgroundColors ? {
      primary: p(r.backgroundColors.primary, t),
      secondary: p(r.backgroundColors.secondary, t),
      border: p(r.backgroundColors.border, t)
    } : void 0,
    buttonColors: null != r.buttonColors ? {
      primary: p(r.buttonColors.primary, t),
      secondary: p(r.buttonColors.secondary, t),
      text: p(r.buttonColors.text, t)
    } : void 0,
    confettiColors: r.confettiColors.map(e => p(e, t))
  }
}