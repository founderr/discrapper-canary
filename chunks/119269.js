r.d(t, {
  Q: function() {
    return s
  }
});
var n, s, i = r(735250);
r(470079);
var l = r(120356),
  a = r.n(l),
  o = r(442837),
  c = r(607070),
  u = r(967538),
  d = r(885302),
  _ = r(914677),
  p = r(830611);
(n = s || (s = {}))[n.NITRO_GEM = 0] = "NITRO_GEM", n[n.NITRO_LOGO = 1] = "NITRO_LOGO";
t.Z = e => {
  let {
    showAnimations: t = !0,
    iconClassName: r,
    staticPercentage: n,
    innerCircleClassName: s,
    progressCircleStrokeSize: l,
    backgroundCircleSize: f,
    percentage: C,
    initialPercentage: E,
    progressCircleVariation: x = 0,
    ellipseOpacity: h,
    customAnimationClassName: m,
    circleColor: j
  } = e, R = (0, o.e7)([c.Z], () => c.Z.useReducedMotion), g = t && !R;
  return (0, i.jsx)("div", {
    className: a()(p.progressCircle, r, {
      [p.progressCricleBottomMargin]: 0 === x
    }),
    children: (0, i.jsx)(_.Z, {
      animationClassName: a()(p.activeProgressCircle, {
        [p.activeProgressCircleAnimation]: g,
        [null != m ? m : ""]: g
      }),
      progressCircleStrokeSize: l,
      percentage: null != n ? n : C,
      initialPercentage: null != n ? n : E,
      progressCircleVariation: x,
      children: 0 === x ? (0, i.jsx)(u.Z, {
        className: g ? p.nitroGemAnimation : void 0,
        backgroundColor: a()(p.gemBackgroundFill, s),
        backgroundCircleSize: f
      }) : (0, i.jsx)(d.Z, {
        circleColor: j,
        ellipseOpacity: h
      })
    })
  })
}