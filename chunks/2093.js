"use strict";
n.r(t);
var s = n("735250");
n("470079");
var l = n("120356"),
  a = n.n(l),
  i = n("403681");
t.default = e => {
  let {
    value: t = 0,
    text: n,
    className: l,
    ...r
  } = e;
  return null != n ? (0, s.jsx)("div", {
    className: a()(i.wrapper, l),
    ...r,
    children: n
  }) : t > 0 ? (0, s.jsx)("div", {
    className: a()(i.wrapper, l),
    ...r,
    children: t
  }) : null
}