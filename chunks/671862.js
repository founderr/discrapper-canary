"use strict";
r.r(t);
var s = r("735250"),
  n = r("470079"),
  l = r("574523"),
  i = r("475521"),
  a = r("491630");
let o = (0, l.CustomPicker)(e => (0, s.jsxs)("div", {
  className: a.wrapper,
  children: [(0, s.jsx)("div", {
    className: a.saturation,
    children: (0, s.jsx)(i.Saturation, {
      ...e
    })
  }), (0, s.jsx)("div", {
    className: a.hue,
    children: (0, s.jsx)(i.Hue, {
      ...e,
      direction: "horizontal"
    })
  })]
}));
t.default = n.memo(o)