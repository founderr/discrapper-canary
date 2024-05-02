"use strict";
n.r(t);
var a = n("735250"),
  r = n("470079"),
  s = n("574523"),
  i = n("475521"),
  l = n("248438");
let o = (0, s.CustomPicker)(e => (0, a.jsxs)("div", {
  className: l.wrapper,
  children: [(0, a.jsx)("div", {
    className: l.saturation,
    children: (0, a.jsx)(i.Saturation, {
      ...e
    })
  }), (0, a.jsx)("div", {
    className: l.hue,
    children: (0, a.jsx)(i.Hue, {
      ...e,
      direction: "horizontal"
    })
  })]
}));
t.default = r.memo(o)