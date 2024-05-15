"use strict";
a.r(t), a.d(t, {
  useFullScreenModalAnimationStyle: function() {
    return s
  }
});
var n = a("685626"),
  r = a("748780"),
  i = a("442837"),
  l = a("607070");

function s() {
  let e = (0, i.useStateFromStores)([l.default], () => l.default.useReducedMotion);
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
      easing: r.default.Easing.quad,
      duration: e ? 0 : 200,
      clamp: !0
    }
  })
}