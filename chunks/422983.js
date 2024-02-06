"use strict";
n.r(t), n.d(t, {
  MinusIcon: function() {
    return i
  }
});
var r = n("37983");
n("884691");
var s = n("669491"),
  l = n("82169");
let i = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: i = s.default.colors.INTERACTIVE_NORMAL,
    colorClass: a = "",
    ...o
  } = e;
  return (0, r.jsx)("svg", {
    ...(0, l.default)(o),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, r.jsx)("path", {
      fill: "string" == typeof i ? i : i.css,
      fillRule: "evenodd",
      d: "M22 12a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h18a1 1 0 0 1 1 1Z",
      clipRule: "evenodd",
      className: a
    })
  })
}