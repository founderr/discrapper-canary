"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("222007");
var i = n("37983"),
  r = n("884691"),
  l = n("133403"),
  s = n("49622");

function o(e) {
  let {
    hasSetEmoji: t,
    onClick: n,
    children: o
  } = e, [a, u] = r.useState(!1);
  return (0, i.jsxs)("div", {
    className: s.container,
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
    children: [o, t && a && (0, i.jsx)(l.default, {
      onClick: n,
      className: s.removeButton
    })]
  })
}