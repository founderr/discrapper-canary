"use strict";
n.r(t), n.d(t, {
  QuestsCard: function() {
    return u
  }
}), n("222007");
var s = n("37983"),
  l = n("884691"),
  a = n("775725"),
  i = n("749332"),
  r = n("419292"),
  o = n("896451");
let u = e => {
  let {
    quest: t,
    location: n
  } = e, [u, d] = l.useState(!1), c = l.useCallback(() => d(!0), []), E = l.useCallback(() => d(!1), []);
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)("div", {
      className: o.questsCard,
      onFocus: c,
      onMouseEnter: c,
      onBlur: E,
      onMouseLeave: E,
      children: [(0, s.jsx)(i.default, {
        isFocused: u,
        quest: t,
        location: n
      }), (0, s.jsx)(a.default, {
        quest: t,
        location: n
      })]
    }), (0, s.jsx)(r.default, {
      quest: t,
      location: n
    })]
  })
}