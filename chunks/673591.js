"use strict";
i.r(t), i.d(t, {
  default: function() {
    return o
  }
});
var n = i("735250");
i("470079");
var r = i("120356"),
  s = i.n(r),
  a = i("354676"),
  l = i("349357");

function o(e) {
  let {
    copy: t,
    className: i
  } = e;
  return (0, n.jsxs)("div", {
    className: s()(l.badgeContainer, i),
    children: [(0, n.jsx)("div", {
      className: l.newBadge,
      children: t
    }), (0, n.jsx)("span", {
      className: s()(l.star, l.starLeft),
      children: (0, n.jsx)(a.default, {
        width: "10",
        height: "10"
      })
    }), (0, n.jsx)("span", {
      className: s()(l.star, l.starRight),
      children: (0, n.jsx)(a.default, {
        width: "13",
        height: "13"
      })
    })]
  })
}