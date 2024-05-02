"use strict";
n.r(t);
var a = n("735250"),
  i = n("470079"),
  r = n("574523"),
  s = n("475521"),
  l = n("248438");
let o = (0, r.CustomPicker)(e => (0, a.jsxs)("div", {
  className: l.wrapper,
  children: [(0, a.jsx)("div", {
    className: l.saturation,
    children: (0, a.jsx)(s.Saturation, {
      ...e
    })
  }), (0, a.jsx)("div", {
    className: l.hue,
    children: (0, a.jsx)(s.Hue, {
      ...e,
      direction: "horizontal"
    })
  })]
}));
t.default = i.memo(o)