"use strict";
l.r(a);
var t = l("735250");
l("470079");
var i = l("920906"),
  r = l("399606"),
  n = l("607070");
a.default = e => {
  let {
    children: a,
    initTranslate3d: l
  } = e, s = (0, r.useStateFromStores)([n.default], () => n.default.useReducedMotion), o = (0, i.useSpring)({
    immediate: s,
    from: {
      transform: l
    },
    to: {
      transform: "translate3d(0, 0, 0)"
    }
  });
  return (0, t.jsx)(i.animated.div, {
    style: o,
    children: a
  })
}