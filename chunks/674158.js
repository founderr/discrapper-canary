"use strict";
l.r(r), l.d(r, {
  default: function() {
    return o
  }
});
var n = l("37983");
l("884691");
var t = l("414456"),
  s = l.n(t),
  a = l("870984");

function o(e) {
  let {
    icon: r,
    iconClassName: l,
    description: t,
    color: o
  } = e;
  return (0, n.jsxs)("div", {
    className: a.perkRow,
    children: [(0, n.jsx)("div", {
      className: a.perkIconContainer,
      children: (0, n.jsx)(r, {
        color: o,
        className: s(a.perkIcon, l)
      })
    }), (0, n.jsx)("div", {
      className: a.perkDescription,
      children: t
    })]
  })
}