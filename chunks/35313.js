"use strict";
a.r(t), a.d(t, {
  useFullScreenModalAnimationStyle: function() {
    return r
  }
});
var n = a("718017"),
  s = a("748780"),
  l = a("442837"),
  i = a("607070");

function r() {
  let e = (0, l.useStateFromStores)([i.default], () => i.default.useReducedMotion);
  return (0, n.useSpring)({
    from: {
      opacity: e ? 1 : 0,
      transform: e ? "scale(1)" : "scale(1.2)"
    },
    to: {
      opacity: 1,
      transform: "scale(1)"
    },
    config: {
      easing: s.default.Easing.quad,
      duration: e ? 0 : 200,
      clamp: !0
    }
  })
}