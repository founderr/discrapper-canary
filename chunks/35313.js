"use strict";
n.r(t), n.d(t, {
  useFullScreenModalAnimationStyle: function() {
    return l
  }
});
var a = n("718017"),
  r = n("748780"),
  i = n("442837"),
  s = n("607070");

function l() {
  let e = (0, i.useStateFromStores)([s.default], () => s.default.useReducedMotion);
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
      easing: r.default.Easing.quad,
      duration: e ? 0 : 200,
      clamp: !0
    }
  })
}