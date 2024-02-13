"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var a = n("37983");
n("884691");
var r = n("75196");

function i(e) {
  let {
    width: t = 12,
    height: n = 12,
    color: i = "currentColor",
    foreground: s,
    ...l
  } = e;
  return (0, a.jsx)("svg", {
    ...(0, r.default)(l),
    width: t,
    height: n,
    viewBox: "0 0 12 12",
    children: (0, a.jsx)("rect", {
      fill: i,
      className: s,
      width: "8",
      height: "2",
      x: "2",
      y: "5",
      fillRule: "evenodd"
    })
  })
}