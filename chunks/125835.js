"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var r = n("37983");
n("884691");
var i = n("414456"),
  s = n.n(i),
  a = n("642032"),
  l = n("625948");

function u(e) {
  let {
    className: t,
    children: n,
    forceUseColor: i = !1,
    hideStars: u
  } = e;
  return (0, r.jsxs)("span", {
    className: s(l.container, t, {
      [l.containerColored]: i
    }),
    children: [n, u ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(a.default, {
        foreground: l.sparkleStarTopRight
      }), (0, r.jsx)(a.default, {
        foreground: l.sparkleStarRight
      }), (0, r.jsx)(a.default, {
        foreground: l.sparkleStarBottomLeft
      })]
    })]
  })
}