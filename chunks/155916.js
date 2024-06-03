"use strict";
l.r(a);
var t = l("735250");
l("470079");
var i = l("920906"),
  n = l("399606"),
  r = l("607070");
a.default = e => {
  let {
    children: a,
    initTranslate3d: l
  } = e, o = (0, n.useStateFromStores)([r.default], () => r.default.useReducedMotion), s = (0, i.useSpring)({
    immediate: o,
    from: {
      transform: l
    },
    to: {
      transform: "translate3d(0, 0, 0)"
    }
  });
  return (0, t.jsx)(i.animated.div, {
    style: s,
    children: a
  })
}