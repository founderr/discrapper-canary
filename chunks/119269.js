"use strict";
r.r(t), r.d(t, {
  ProgressCircleVariation: function() {
    return i
  }
});
var s, i, n = r("735250");
r("470079");
var l = r("120356"),
  a = r.n(l),
  o = r("442837"),
  u = r("607070"),
  d = r("967538"),
  c = r("885302"),
  _ = r("914677"),
  C = r("791432");
(s = i || (i = {}))[s.NITRO_GEM = 0] = "NITRO_GEM", s[s.NITRO_LOGO = 1] = "NITRO_LOGO";
t.default = e => {
  let {
    showAnimations: t = !0,
    iconClassName: r,
    staticPercentage: s,
    innerCircleClassName: i,
    progressCircleStrokeSize: l,
    backgroundCircleSize: f,
    percentage: E,
    initialPercentage: p,
    progressCircleVariation: R = 0
  } = e, x = (0, o.useStateFromStores)([u.default], () => u.default.useReducedMotion), h = t && !x;
  return (0, n.jsx)("div", {
    className: a()(C.gemProgressCircle, r),
    children: (0, n.jsx)(_.default, {
      animationClassName: a()(C.activeProgressCircle, {
        [C.activeProgressCircleAnimation]: h
      }),
      progressCircleStrokeSize: l,
      percentage: null != s ? s : E,
      initialPercentage: null != s ? s : p,
      progressCircleVariation: R,
      children: 0 === R ? (0, n.jsx)(d.default, {
        className: h ? C.nitroGemAnimation : void 0,
        backgroundColor: a()(C.gemBackgroundFill, i),
        backgroundCircleSize: f
      }) : (0, n.jsx)(c.default, {
        percentage: E
      })
    })
  })
}