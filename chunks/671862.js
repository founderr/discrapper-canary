"use strict";
i.r(t);
var n = i("735250"),
  r = i("470079"),
  s = i("574523"),
  a = i("475521"),
  l = i("688673");
let o = (0, s.CustomPicker)(e => (0, n.jsxs)("div", {
  className: l.wrapper,
  children: [(0, n.jsx)("div", {
    className: l.saturation,
    children: (0, n.jsx)(a.Saturation, {
      ...e
    })
  }), (0, n.jsx)("div", {
    className: l.hue,
    children: (0, n.jsx)(a.Hue, {
      ...e,
      direction: "horizontal"
    })
  })]
}));
t.default = r.memo(o)