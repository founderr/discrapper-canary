"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("735250");
n("470079");
var r = n("120356"),
  s = n.n(r),
  i = n("354676"),
  l = n("936476");

function o(e) {
  let {
    copy: t,
    className: n
  } = e;
  return (0, a.jsxs)("div", {
    className: s()(l.badgeContainer, n),
    children: [(0, a.jsx)("div", {
      className: l.newBadge,
      children: t
    }), (0, a.jsx)("span", {
      className: s()(l.star, l.starLeft),
      children: (0, a.jsx)(i.default, {
        width: "10",
        height: "10"
      })
    }), (0, a.jsx)("span", {
      className: s()(l.star, l.starRight),
      children: (0, a.jsx)(i.default, {
        width: "13",
        height: "13"
      })
    })]
  })
}