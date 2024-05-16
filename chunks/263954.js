"use strict";
l.r(r), l.d(r, {
  default: function() {
    return i
  }
});
var t = l("735250");
l("470079");
var n = l("120356"),
  s = l.n(n),
  a = l("809832");

function i(e) {
  let {
    icon: r,
    iconClassName: l,
    description: n,
    color: i
  } = e;
  return (0, t.jsxs)("div", {
    className: a.perkRow,
    children: [(0, t.jsx)("div", {
      className: a.perkIconContainer,
      children: (0, t.jsx)(r, {
        color: i,
        className: s()(a.perkIcon, l)
      })
    }), (0, t.jsx)("div", {
      className: a.perkDescription,
      children: n
    })]
  })
}