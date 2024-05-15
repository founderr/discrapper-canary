"use strict";
a.r(t), a.d(t, {
  default: function() {
    return o
  }
});
var n = a("735250");
a("470079");
var r = a("120356"),
  i = a.n(r),
  l = a("354676"),
  s = a("255451");

function o(e) {
  let {
    copy: t,
    className: a
  } = e;
  return (0, n.jsxs)("div", {
    className: i()(s.badgeContainer, a),
    children: [(0, n.jsx)("div", {
      className: s.newBadge,
      children: t
    }), (0, n.jsx)("span", {
      className: i()(s.star, s.starLeft),
      children: (0, n.jsx)(l.default, {
        width: "10",
        height: "10"
      })
    }), (0, n.jsx)("span", {
      className: i()(s.star, s.starRight),
      children: (0, n.jsx)(l.default, {
        width: "13",
        height: "13"
      })
    })]
  })
}