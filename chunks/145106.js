"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
}), n("222007");
var i = n("37983"),
  r = n("884691"),
  s = n("133403"),
  l = n("164527");

function a(e) {
  let {
    hasSetEmoji: t,
    onClick: n,
    children: a
  } = e, [o, u] = r.useState(!1);
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
    children: [a, t && o && (0, i.jsx)(s.default, {
      onClick: n,
      className: l.removeButton
    })]
  })
}