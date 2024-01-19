"use strict";
l.r(t), l.d(t, {
  default: function() {
    return o
  }
});
var n = l("37983"),
  s = l("884691"),
  a = l("414456"),
  r = l.n(a),
  i = l("202933");
let u = e => {
  let {
    keybind: t,
    separator: l,
    className: a
  } = e;
  return (0, n.jsx)(n.Fragment, {
    children: t.map((e, u) => (0, n.jsxs)(s.Fragment, {
      children: [(0, n.jsx)("span", {
        className: r(i.key, a),
        children: e
      }), u === t.length - 1 ? void 0 : l]
    }, u))
  })
};
u.defaultProps = {
  separator: "+"
};
var o = u