"use strict";
a.r(t);
var n = a("735250"),
  r = a("470079"),
  i = a("574523"),
  l = a("475521"),
  s = a("491630");
let o = (0, i.CustomPicker)(e => (0, n.jsxs)("div", {
  className: s.wrapper,
  children: [(0, n.jsx)("div", {
    className: s.saturation,
    children: (0, n.jsx)(l.Saturation, {
      ...e
    })
  }), (0, n.jsx)("div", {
    className: s.hue,
    children: (0, n.jsx)(l.Hue, {
      ...e,
      direction: "horizontal"
    })
  })]
}));
t.default = r.memo(o)