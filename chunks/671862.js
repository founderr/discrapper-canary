"use strict";
A.r(t);
var a = A("735250"),
  l = A("470079"),
  s = A("574523"),
  n = A("475521"),
  r = A("688673");
let i = (0, s.CustomPicker)(e => (0, a.jsxs)("div", {
  className: r.wrapper,
  children: [(0, a.jsx)("div", {
    className: r.saturation,
    children: (0, a.jsx)(n.Saturation, {
      ...e
    })
  }), (0, a.jsx)("div", {
    className: r.hue,
    children: (0, a.jsx)(n.Hue, {
      ...e,
      direction: "horizontal"
    })
  })]
}));
t.default = l.memo(i)