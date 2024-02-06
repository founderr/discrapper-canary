"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var i = n("37983"),
  l = n("884691"),
  r = n("414456"),
  o = n.n(r),
  a = n("77078"),
  s = n("760607"),
  u = n("89976");

function c(e) {
  let {
    children: t,
    size: n = 16,
    className: r,
    flowerStarClassName: c,
    ...d
  } = e, f = l.Children.only(t), E = (0, a.useRedesignIconContext)().enabled;
  return (0, i.jsxs)("div", {
    className: o(u.flowerStarContainer, r),
    style: {
      width: n,
      height: n
    },
    children: [(0, i.jsx)(s.default, {
      ...d,
      className: o(c, u.flowerStar)
    }), (0, i.jsx)("div", {
      className: o(u.childContainer, {
        [u.redesignIconChildContainer]: E
      }),
      children: f
    })]
  })
}