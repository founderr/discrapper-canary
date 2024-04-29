"use strict";
t.r(a);
var l = t("735250");
t("470079");
var n = t("718017"),
  i = t("399606"),
  r = t("607070");
a.default = e => {
  let {
    children: a,
    initTranslate3d: t
  } = e, s = (0, i.useStateFromStores)([r.default], () => r.default.useReducedMotion), o = (0, n.useSpring)({
    immediate: s,
    from: {
      transform: t
    },
    to: {
      transform: "translate3d(0, 0, 0)"
    }
  });
  return (0, l.jsx)(n.animated.div, {
    style: o,
    children: a
  })
}