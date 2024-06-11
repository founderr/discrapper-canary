"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var r = s("735250");
s("470079");
var n = s("120356"),
  i = s.n(n),
  a = s("354676"),
  l = s("255451");

function o(e) {
  let {
    copy: t,
    className: s
  } = e;
  return (0, r.jsxs)("div", {
    className: i()(l.badgeContainer, s),
    children: [(0, r.jsx)("div", {
      className: l.newBadge,
      children: t
    }), (0, r.jsx)("span", {
      className: i()(l.star, l.starLeft),
      children: (0, r.jsx)(a.default, {
        width: "10",
        height: "10"
      })
    }), (0, r.jsx)("span", {
      className: i()(l.star, l.starRight),
      children: (0, r.jsx)(a.default, {
        width: "13",
        height: "13"
      })
    })]
  })
}