"use strict";
n.r(t), n.d(t, {
  useFullScreenModalAnimationStyle: function() {
    return r
  }
});
var a = n("718017"),
  s = n("748780"),
  l = n("442837"),
  i = n("607070");

function r() {
  let e = (0, l.useStateFromStores)([i.default], () => i.default.useReducedMotion);
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
      easing: s.default.Easing.quad,
      duration: e ? 0 : 200,
      clamp: !0
    }
  })
}