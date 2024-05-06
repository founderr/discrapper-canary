"use strict";
a.r(t);
var n = a("735250"),
  i = a("470079"),
  r = a("574523"),
  s = a("475521"),
  l = a("248438");
let o = (0, r.CustomPicker)(e => (0, n.jsxs)("div", {
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
t.default = i.memo(o)