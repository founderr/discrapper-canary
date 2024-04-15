"use strict";
n.r(t);
var l = n("735250");
n("470079");
var a = n("120356"),
  i = n.n(a),
  u = n("697961");
t.default = e => {
  let {
    aspectRatio: t,
    style: n,
    className: a,
    children: r
  } = e;
  return (0, l.jsx)("div", {
    className: i()(u.outer, a),
    style: {
      paddingTop: "".concat(1 / t * 100, "%"),
      ...n
    },
    children: (0, l.jsx)("div", {
      className: u.inner,
      children: r
    })
  })
}