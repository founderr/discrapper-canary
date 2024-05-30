"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("918701"),
  o = n("439826"),
  u = n("43779"),
  d = n("73060");

function c(e) {
  let {
    quest: t
  } = e, n = (0, r.isQuestExpired)(t), [l, c] = s.useState(!1);
  return (0, a.jsxs)("div", {
    className: i()(d.container, {
      [d.expired]: n,
      [d.live]: !n
    }),
    onMouseEnter: () => c(!0),
    onMouseLeave: () => c(!1),
    children: [(0, a.jsx)(o.default, {
      quest: t,
      isHovering: l
    }), (0, a.jsx)(u.default, {
      quest: t
    })]
  })
}