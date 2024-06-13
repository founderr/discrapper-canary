"use strict";
n.r(t);
var a = n("735250");
n("470079");
var l = n("960259"),
  s = n("589884"),
  i = n("325767");
t.default = (0, l.replaceIcon)(function(e) {
  let {
    width: t = 16,
    height: n = 16,
    color: l = "currentColor",
    foreground: s,
    ...r
  } = e;
  return (0, a.jsx)("svg", {
    ...(0, i.default)(r),
    width: t,
    height: n,
    viewBox: "0 0 24 24",
    children: (0, a.jsx)("path", {
      className: s,
      fill: l,
      d: "M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z"
    })
  })
}, s.DpadIcon, void 0, {
  size: 16
})