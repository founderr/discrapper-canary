"use strict";
n.r(t);
var i = n("735250"),
  r = n("470079"),
  s = n("574523"),
  a = n("475521"),
  o = n("404631");
let l = (0, s.CustomPicker)(e => (0, i.jsxs)("div", {
  className: o.wrapper,
  children: [(0, i.jsx)("div", {
    className: o.saturation,
    children: (0, i.jsx)(a.Saturation, {
      ...e
    })
  }), (0, i.jsx)("div", {
    className: o.hue,
    children: (0, i.jsx)(a.Hue, {
      ...e,
      direction: "horizontal"
    })
  })]
}));
t.default = r.memo(l)