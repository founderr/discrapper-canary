"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("120356"),
  i = n.n(s),
  l = n("938868");
t.default = e => {
  let {
    aspectRatio: t,
    style: n,
    className: s,
    children: r
  } = e;
  return (0, a.jsx)("div", {
    className: i()(l.outer, s),
    style: {
      paddingTop: "".concat(1 / t * 100, "%"),
      ...n
    },
    children: (0, a.jsx)("div", {
      className: l.inner,
      children: r
    })
  })
}