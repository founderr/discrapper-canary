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
  d = r(607070),
  c = r(967538),
  u = r(885302),
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
    initialPercentage: x,
    progressCircleVariation: E = 0,
    ellipseOpacity: h,
    customAnimationClassName: m,
    circleColor: j
  } = e, R = (0, o.e7)([d.Z], () => d.Z.useReducedMotion), g = t && !R;
  return (0, i.jsx)("div", {
    className: a()(p.progressCircle, r, {
      [p.progressCricleBottomMargin]: 0 === E
    }),
    children: (0, i.jsx)(_.Z, {
      animationClassName: a()(p.activeProgressCircle, {
        [p.activeProgressCircleAnimation]: g,
        [null != m ? m : ""]: g
      }),
      progressCircleStrokeSize: l,
      percentage: null != n ? n : C,
      initialPercentage: null != n ? n : x,
      progressCircleVariation: E,
      children: 0 === E ? (0, i.jsx)(c.Z, {
        className: g ? p.nitroGemAnimation : void 0,
        backgroundColor: a()(p.gemBackgroundFill, s),
        backgroundCircleSize: f
      }) : (0, i.jsx)(u.Z, {
        circleColor: j,
        ellipseOpacity: h
      })
    })
  })
}