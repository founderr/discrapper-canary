"use strict";
n.r(t), n.d(t, {
  MinusIcon: function() {
    return a
  }
});
var r = n("37983");
n("884691");
var i = n("669491"),
  s = n("82169");
let a = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: a = i.default.colors.INTERACTIVE_NORMAL,
    colorClass: l = "",
    ...u
  } = e;
  return (0, r.jsx)("svg", {
    ...(0, s.default)(u),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, r.jsx)("path", {
      fill: "string" == typeof a ? a : a.css,
      fillRule: "evenodd",
      d: "M22 12a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h18a1 1 0 0 1 1 1Z",
      clipRule: "evenodd",
      className: l
    })
  })
}