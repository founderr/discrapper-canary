"use strict";
a.r(v), a.d(v, {
  getTransformedBadgeColors: function() {
    return i
  }
}), a("411104");
var t = a("688619"),
  l = a.n(t);

function e(h, v, a) {
  if (!l().valid(v)) throw Error("Invalid badge tint color ".concat(v));
  let t = l()(v),
    e = t.luminance();
  return h.map((h, v) => t.luminance((h * a[v].base + e * a[v].tint) / (a[v].base + a[v].tint)).hex())
}

function i(h) {
  let {
    primaryBaseColors: v,
    primaryTintColor: a,
    primaryTintLuminances: t,
    primaryLuminanceWeights: l,
    secondaryBaseColors: i,
    secondaryTintColor: s,
    secondaryTintLuminances: n,
    secondaryLuminanceWeights: r
  } = h, d = null != a ? e(t, a, l) : v, M = [];
  return null != i && null != n && null != r && (M = null != s ? e(n, s, r) : i), {
    primaryColorsTransformed: d,
    secondaryColorsTransformed: M
  }
}