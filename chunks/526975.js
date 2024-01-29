"use strict";
n.r(l), n.d(l, {
  default: function() {
    return c
  }
});
var r = n("37983"),
  t = n("884691"),
  a = n("266937"),
  o = n("286458"),
  i = n("29799");
let s = (0, a.CustomPicker)(e => (0, r.jsxs)("div", {
  className: i.wrapper,
  children: [(0, r.jsx)("div", {
    className: i.saturation,
    children: (0, r.jsx)(o.Saturation, {
      ...e
    })
  }), (0, r.jsx)("div", {
    className: i.hue,
    children: (0, r.jsx)(o.Hue, {
      ...e,
      direction: "horizontal"
    })
  })]
}));
var c = t.memo(s)