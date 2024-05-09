"use strict";
s.r(t), s.d(t, {
  useFullScreenModalAnimationStyle: function() {
    return l
  }
});
var a = s("685626"),
  n = s("748780"),
  i = s("442837"),
  E = s("607070");

function l() {
  let e = (0, i.useStateFromStores)([E.default], () => E.default.useReducedMotion);
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
      easing: n.default.Easing.quad,
      duration: e ? 0 : 200,
      clamp: !0
    }
  })
}