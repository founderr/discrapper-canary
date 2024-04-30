"use strict";
a.r(t);
var n = a("735250");
a("470079");
var s = a("120356"),
  l = a.n(s),
  i = a("938868");
t.default = e => {
  let {
    aspectRatio: t,
    style: a,
    className: s,
    children: r
  } = e;
  return (0, n.jsx)("div", {
    className: l()(i.outer, s),
    style: {
      paddingTop: "".concat(1 / t * 100, "%"),
      ...a
    },
    children: (0, n.jsx)("div", {
      className: i.inner,
      children: r
    })
  })
}