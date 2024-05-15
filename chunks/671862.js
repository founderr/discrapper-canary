"use strict";
a.r(t);
var n = a("735250"),
  r = a("470079"),
  s = a("574523"),
  i = a("475521"),
  l = a("491630");
let o = (0, s.CustomPicker)(e => (0, n.jsxs)("div", {
  className: l.wrapper,
  children: [(0, n.jsx)("div", {
    className: l.saturation,
    children: (0, n.jsx)(i.Saturation, {
      ...e
    })
  }), (0, n.jsx)("div", {
    className: l.hue,
    children: (0, n.jsx)(i.Hue, {
      ...e,
      direction: "horizontal"
    })
  })]
}));
t.default = r.memo(o)