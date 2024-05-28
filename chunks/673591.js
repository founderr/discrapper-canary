"use strict";
r.r(t), r.d(t, {
  default: function() {
    return o
  }
});
var s = r("735250");
r("470079");
var n = r("120356"),
  l = r.n(n),
  i = r("354676"),
  a = r("255451");

function o(e) {
  let {
    copy: t,
    className: r
  } = e;
  return (0, s.jsxs)("div", {
    className: l()(a.badgeContainer, r),
    children: [(0, s.jsx)("div", {
      className: a.newBadge,
      children: t
    }), (0, s.jsx)("span", {
      className: l()(a.star, a.starLeft),
      children: (0, s.jsx)(i.default, {
        width: "10",
        height: "10"
      })
    }), (0, s.jsx)("span", {
      className: l()(a.star, a.starRight),
      children: (0, s.jsx)(i.default, {
        width: "13",
        height: "13"
      })
    })]
  })
}