"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var r = n("37983");
n("884691");
var i = n("414456"),
  s = n.n(i),
  u = n("642032"),
  a = n("767964");

function o(e) {
  let {
    className: t,
    children: n,
    forceUseColor: i = !1,
    hideStars: o
  } = e;
  return (0, r.jsxs)("span", {
    className: s(a.container, t, {
      [a.containerColored]: i
    }),
    children: [n, o ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(u.default, {
        foreground: a.sparkleStarTopRight
      }), (0, r.jsx)(u.default, {
        foreground: a.sparkleStarRight
      }), (0, r.jsx)(u.default, {
        foreground: a.sparkleStarBottomLeft
      })]
    })]
  })
}