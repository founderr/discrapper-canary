"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
});
var n = s("37983"),
  l = s("884691"),
  o = s("266937"),
  r = s("286458"),
  a = s("796727");
let i = (0, o.CustomPicker)(e => (0, n.jsxs)("div", {
  className: a.wrapper,
  children: [(0, n.jsx)("div", {
    className: a.saturation,
    children: (0, n.jsx)(r.Saturation, {
      ...e
    })
  }), (0, n.jsx)("div", {
    className: a.hue,
    children: (0, n.jsx)(r.Hue, {
      ...e,
      direction: "horizontal"
    })
  })]
}));
var u = l.memo(i)