"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("222007");
var i = n("37983"),
  r = n("884691"),
  s = n("133403"),
  l = n("49622");

function o(e) {
  let {
    hasSetEmoji: t,
    onClick: n,
    children: o
  } = e, [a, u] = r.useState(!1);
  return (0, i.jsxs)("div", {
    className: l.container,
    onMouseEnter: () => {
      if (t) {
        u(!0);
        return
      }
      u(!1)
    },
    onMouseLeave: () => {
      u(!1)
    },
    children: [o, t && a && (0, i.jsx)(s.default, {
      onClick: n,
      className: l.removeButton
    })]
  })
}