var n = i(735250);
i(470079);
var l = i(920906),
  r = i(399606),
  t = i(607070);
a.Z = e => {
  let {
    children: a,
    initTranslate3d: i
  } = e, s = (0, r.e7)([t.Z], () => t.Z.useReducedMotion), o = (0, l.useSpring)({
    immediate: s,
    from: {
      transform: i
    },
    to: {
      transform: "translate3d(0, 0, 0)"
    }
  });
  return (0, n.jsx)(l.animated.div, {
    style: o,
    children: a
  })
}