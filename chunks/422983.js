"use strict";
n.r(t), n.d(t, {
  MinusIcon: function() {
    return a
  }
});
var s = n("37983");
n("884691");
var r = n("669491"),
  l = n("82169");
let a = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: a = r.default.colors.INTERACTIVE_NORMAL,
    colorClass: i = "",
    ...o
  } = e;
  return (0, s.jsx)("svg", {
    ...(0, l.default)(o),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, s.jsx)("path", {
      fill: "string" == typeof a ? a : a.css,
      fillRule: "evenodd",
      d: "M22 12a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h18a1 1 0 0 1 1 1Z",
      clipRule: "evenodd",
      className: i
    })
  })
}