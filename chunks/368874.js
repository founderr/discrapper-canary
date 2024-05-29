"use strict";
l.r(t);
var i = l("735250");
l("470079");
var a = l("120356"),
  n = l.n(a),
  s = l("358725");
t.default = e => {
  let {
    aspectRatio: t,
    style: l,
    className: a,
    children: r
  } = e;
  return (0, i.jsx)("div", {
    className: n()(s.outer, a),
    style: {
      paddingTop: "".concat(1 / t * 100, "%"),
      ...l
    },
    children: (0, i.jsx)("div", {
      className: s.inner,
      children: r
    })
  })
}