t.d(n, {
  f: function() {
    return o
  }
});
var a = t(920906),
  r = t(748780),
  s = t(442837),
  i = t(607070);

function o() {
  let e = (0, s.e7)([i.Z], () => i.Z.useReducedMotion);
  return (0, a.useSpring)({
    from: {
      opacity: e ? 1 : 0,
      transform: e ? "scale(1)" : "scale(1.2)"
    },
    to: {
      opacity: 1,
      transform: "scale(1)"
    },
    config: {
      easing: r.Z.Easing.quad,
      duration: e ? 0 : 200,
      clamp: !0
    }
  })
}