"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var r = n("735250");
n("470079");
var i = n("803997"),
  s = n.n(i),
  a = n("354676"),
  l = n("349357");

function o(e) {
  let {
    copy: t,
    className: n
  } = e;
  return (0, r.jsxs)("div", {
    className: s()(l.badgeContainer, n),
    children: [(0, r.jsx)("div", {
      className: l.newBadge,
      children: t
    }), (0, r.jsx)("span", {
      className: s()(l.star, l.starLeft),
      children: (0, r.jsx)(a.default, {
        width: "10",
        height: "10"
      })
    }), (0, r.jsx)("span", {
      className: s()(l.star, l.starRight),
      children: (0, r.jsx)(a.default, {
        width: "13",
        height: "13"
      })
    })]
  })
}