"use strict";
n.r(t);
var r = n("735250"),
  s = n("470079"),
  i = n("574523"),
  l = n("475521"),
  a = n("248438");
let o = (0, i.CustomPicker)(e => (0, r.jsxs)("div", {
  className: a.wrapper,
  children: [(0, r.jsx)("div", {
    className: a.saturation,
    children: (0, r.jsx)(l.Saturation, {
      ...e
    })
  }), (0, r.jsx)("div", {
    className: a.hue,
    children: (0, r.jsx)(l.Hue, {
      ...e,
      direction: "horizontal"
    })
  })]
}));
t.default = s.memo(o)