"use strict";
n.r(t), n.d(t, {
  QuestsCard: function() {
    return o
  }
}), n("222007");
var s = n("37983"),
  l = n("884691"),
  a = n("775725"),
  i = n("749332"),
  r = n("896451");
let o = e => {
  let {
    quest: t,
    location: n
  } = e, [o, u] = l.useState(!1), d = l.useCallback(() => u(!0), []), c = l.useCallback(() => u(!1), []);
  return (0, s.jsxs)("div", {
    className: r.questsCard,
    onFocus: d,
    onMouseEnter: d,
    onBlur: c,
    onMouseLeave: c,
    children: [(0, s.jsx)(i.default, {
      isFocused: o,
      quest: t,
      location: n
    }), (0, s.jsx)(a.default, {
      quest: t,
      location: n
    })]
  })
}