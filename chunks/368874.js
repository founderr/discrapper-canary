"use strict";
t.r(a);
var i = t("735250");
t("470079");
var s = t("120356"),
  n = t.n(s),
  r = t("697961");
a.default = e => {
  let {
    aspectRatio: a,
    style: t,
    className: s,
    children: o
  } = e;
  return (0, i.jsx)("div", {
    className: n()(r.outer, s),
    style: {
      paddingTop: "".concat(1 / a * 100, "%"),
      ...t
    },
    children: (0, i.jsx)("div", {
      className: r.inner,
      children: o
    })
  })
}