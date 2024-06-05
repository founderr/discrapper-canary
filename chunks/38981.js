"use strict";
n.r(t);
var a = n("735250");
n("470079");
var l = n("120356"),
  s = n.n(l),
  i = n("481060"),
  r = n("242315"),
  d = n("224070");
t.default = function(e) {
  let {
    count: t,
    className: n
  } = e;
  return (0, a.jsxs)("div", {
    className: s()(d.container, n),
    children: [(0, a.jsx)(r.default, {
      width: 12,
      height: 12,
      className: d.icon
    }), (0, a.jsx)(i.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      children: null != t ? t : 0
    })]
  })
}