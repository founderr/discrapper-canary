"use strict";
r.r(l), r.d(l, {
  default: function() {
    return o
  }
});
var n = r("735250");
r("470079");
var t = r("120356"),
  s = r.n(t),
  a = r("809832");

function o(e) {
  let {
    icon: l,
    iconClassName: r,
    description: t,
    color: o
  } = e;
  return (0, n.jsxs)("div", {
    className: a.perkRow,
    children: [(0, n.jsx)("div", {
      className: a.perkIconContainer,
      children: (0, n.jsx)(l, {
        color: o,
        className: s()(a.perkIcon, r)
      })
    }), (0, n.jsx)("div", {
      className: a.perkDescription,
      children: t
    })]
  })
}