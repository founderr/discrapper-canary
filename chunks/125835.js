"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var r = n("37983");
n("884691");
var i = n("414456"),
  s = n.n(i),
  a = n("642032"),
  u = n("767964");

function l(e) {
  let {
    className: t,
    children: n,
    forceUseColor: i = !1,
    hideStars: l
  } = e;
  return (0, r.jsxs)("span", {
    className: s(u.container, t, {
      [u.containerColored]: i
    }),
    children: [n, l ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(a.default, {
        foreground: u.sparkleStarTopRight
      }), (0, r.jsx)(a.default, {
        foreground: u.sparkleStarRight
      }), (0, r.jsx)(a.default, {
        foreground: u.sparkleStarBottomLeft
      })]
    })]
  })
}