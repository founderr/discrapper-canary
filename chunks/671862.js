"use strict";
n.r(t);
var a = n("735250"),
  r = n("470079"),
  i = n("574523"),
  s = n("475521"),
  l = n("248438");
let o = (0, i.CustomPicker)(e => (0, a.jsxs)("div", {
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
t.default = r.memo(o)