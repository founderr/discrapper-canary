"use strict";
n.r(t);
var i = n("735250"),
  r = n("470079"),
  s = n("574523"),
  a = n("475521"),
  l = n("491630");
let o = (0, s.CustomPicker)(e => (0, i.jsxs)("div", {
  className: l.wrapper,
  children: [(0, i.jsx)("div", {
    className: l.saturation,
    children: (0, i.jsx)(a.Saturation, {
      ...e
    })
  }), (0, i.jsx)("div", {
    className: l.hue,
    children: (0, i.jsx)(a.Hue, {
      ...e,
      direction: "horizontal"
    })
  })]
}));
t.default = r.memo(o)