"use strict";
n.r(t);
var r = n("735250");
n("470079");
var i = n("960259"),
  s = n("589884"),
  a = n("325767");
t.default = (0, i.replaceIcon)(function(e) {
  let {
    width: t = 16,
    height: n = 16,
    color: i = "currentColor",
    foreground: s,
    ...l
  } = e;
  return (0, r.jsx)("svg", {
    ...(0, a.default)(l),
    width: t,
    height: n,
    viewBox: "0 0 24 24",
    children: (0, r.jsx)("path", {
      className: s,
      fill: i,
      d: "M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z"
    })
  })
}, s.DpadIcon, void 0, {
  size: 16
})