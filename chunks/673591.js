"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("735250");
n("470079");
var i = n("120356"),
  r = n.n(i),
  s = n("354676"),
  l = n("936476");

function o(e) {
  let {
    copy: t,
    className: n
  } = e;
  return (0, a.jsxs)("div", {
    className: r()(l.badgeContainer, n),
    children: [(0, a.jsx)("div", {
      className: l.newBadge,
      children: t
    }), (0, a.jsx)("span", {
      className: r()(l.star, l.starLeft),
      children: (0, a.jsx)(s.default, {
        width: "10",
        height: "10"
      })
    }), (0, a.jsx)("span", {
      className: r()(l.star, l.starRight),
      children: (0, a.jsx)(s.default, {
        width: "13",
        height: "13"
      })
    })]
  })
}