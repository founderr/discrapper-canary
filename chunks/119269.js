"use strict";
r.r(t), r.d(t, {
  ProgressCircleVariation: function() {
    return n
  }
});
var s, n, i = r("735250");
r("470079");
var l = r("120356"),
  a = r.n(l),
  o = r("442837"),
  u = r("607070"),
  d = r("967538"),
  c = r("885302"),
  _ = r("914677"),
  f = r("915510");
(s = n || (n = {}))[s.NITRO_GEM = 0] = "NITRO_GEM", s[s.NITRO_LOGO = 1] = "NITRO_LOGO";
t.default = e => {
  let {
    showAnimations: t = !0,
    iconClassName: r,
    staticPercentage: s,
    innerCircleClassName: n,
    progressCircleStrokeSize: l,
    backgroundCircleSize: C,
    percentage: p,
    initialPercentage: E,
    progressCircleVariation: x = 0
  } = e, m = (0, o.useStateFromStores)([u.default], () => u.default.useReducedMotion), R = t && !m;
  return (0, i.jsx)("div", {
    className: a()(f.progressCircle, r, {
      [f.progressCricleBottomMargin]: 0 === x
    }),
    children: (0, i.jsx)(_.default, {
      animationClassName: a()(f.activeProgressCircle, {
        [f.activeProgressCircleAnimation]: R
      }),
      progressCircleStrokeSize: l,
      percentage: null != s ? s : p,
      initialPercentage: null != s ? s : E,
      progressCircleVariation: x,
      children: 0 === x ? (0, i.jsx)(d.default, {
        className: R ? f.nitroGemAnimation : void 0,
        backgroundColor: a()(f.gemBackgroundFill, n),
        backgroundCircleSize: C
      }) : (0, i.jsx)(c.default, {
        percentage: p
      })
    })
  })
}