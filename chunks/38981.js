"use strict";
a.r(t);
var l = a("735250");
a("470079");
var s = a("120356"),
  n = a.n(s),
  i = a("481060"),
  r = a("242315"),
  d = a("224070");
t.default = function(e) {
  let {
    count: t,
    className: a
  } = e;
  return (0, l.jsxs)("div", {
    className: n()(d.container, a),
    children: [(0, l.jsx)(r.default, {
      width: 12,
      height: 12,
      className: d.icon
    }), (0, l.jsx)(i.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      children: null != t ? t : 0
    })]
  })
}