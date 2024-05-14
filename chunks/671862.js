"use strict";
a.r(t);
var n = a("735250"),
  r = a("470079"),
  i = a("574523"),
  s = a("475521"),
  l = a("491630");
let o = (0, i.CustomPicker)(e => (0, n.jsxs)("div", {
  className: l.wrapper,
  children: [(0, n.jsx)("div", {
    className: l.saturation,
    children: (0, n.jsx)(s.Saturation, {
      ...e
    })
  }), (0, n.jsx)("div", {
    className: l.hue,
    children: (0, n.jsx)(s.Hue, {
      ...e,
      direction: "horizontal"
    })
  })]
}));
t.default = r.memo(o)