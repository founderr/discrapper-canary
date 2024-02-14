"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var r = n("37983");
n("884691");
var i = n("414456"),
  a = n.n(i),
  u = n("870984");

function l(e) {
  let {
    icon: t,
    iconClassName: n,
    description: i,
    color: l
  } = e;
  return (0, r.jsxs)("div", {
    className: u.perkRow,
    children: [(0, r.jsx)("div", {
      className: u.perkIconContainer,
      children: (0, r.jsx)(t, {
        color: l,
        className: a(u.perkIcon, n)
      })
    }), (0, r.jsx)("div", {
      className: u.perkDescription,
      children: i
    })]
  })
}