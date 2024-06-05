"use strict";
a.r(t), a.d(t, {
  default: function() {
    return o
  }
});
var n = a("735250");
a("470079");
var r = a("120356"),
  s = a.n(r),
  i = a("354676"),
  l = a("255451");

function o(e) {
  let {
    copy: t,
    className: a
  } = e;
  return (0, n.jsxs)("div", {
    className: s()(l.badgeContainer, a),
    children: [(0, n.jsx)("div", {
      className: l.newBadge,
      children: t
    }), (0, n.jsx)("span", {
      className: s()(l.star, l.starLeft),
      children: (0, n.jsx)(i.default, {
        width: "10",
        height: "10"
      })
    }), (0, n.jsx)("span", {
      className: s()(l.star, l.starRight),
      children: (0, n.jsx)(i.default, {
        width: "13",
        height: "13"
      })
    })]
  })
}