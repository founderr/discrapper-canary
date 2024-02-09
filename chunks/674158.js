"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var r = n("37983");
n("884691");
var i = n("414456"),
  u = n.n(i),
  a = n("288264");

function l(e) {
  let {
    icon: t,
    iconClassName: n,
    description: i,
    color: l
  } = e;
  return (0, r.jsxs)("div", {
    className: a.perkRow,
    children: [(0, r.jsx)("div", {
      className: a.perkIconContainer,
      children: (0, r.jsx)(t, {
        color: l,
        className: u(a.perkIcon, n)
      })
    }), (0, r.jsx)("div", {
      className: a.perkDescription,
      children: i
    })]
  })
}