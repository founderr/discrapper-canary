"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var i = n("37983"),
  r = n("884691"),
  o = n("414456"),
  s = n.n(o),
  l = n("77078"),
  a = n("760607"),
  u = n("89976");

function c(e) {
  let {
    children: t,
    size: n = 16,
    className: o,
    flowerStarClassName: c,
    ...d
  } = e, f = r.Children.only(t), E = (0, l.useRedesignIconContext)().enabled;
  return (0, i.jsxs)("div", {
    className: s(u.flowerStarContainer, o),
    style: {
      width: n,
      height: n
    },
    children: [(0, i.jsx)(a.default, {
      ...d,
      className: s(c, u.flowerStar)
    }), (0, i.jsx)("div", {
      className: s(u.childContainer, {
        [u.redesignIconChildContainer]: E
      }),
      children: f
    })]
  })
}