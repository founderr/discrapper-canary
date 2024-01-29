"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var l = n("37983"),
  i = n("884691"),
  s = n("414456"),
  r = n.n(s),
  o = n("77078"),
  a = n("760607"),
  u = n("89976");

function d(e) {
  let {
    children: t,
    size: n = 16,
    className: s,
    flowerStarClassName: d,
    ...c
  } = e, f = i.Children.only(t), p = (0, o.useRedesignIconContext)().enabled;
  return (0, l.jsxs)("div", {
    className: r(u.flowerStarContainer, s),
    style: {
      width: n,
      height: n
    },
    children: [(0, l.jsx)(a.default, {
      ...c,
      className: r(d, u.flowerStar)
    }), (0, l.jsx)("div", {
      className: r(u.childContainer, {
        [u.redesignIconChildContainer]: p
      }),
      children: f
    })]
  })
}