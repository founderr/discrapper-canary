"use strict";
n.r(t), n.d(t, {
  StopIcon: function() {
    return l
  }
});
var a = n("37983");
n("884691");
var r = n("669491"),
  i = n("82169");
let l = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: l = r.default.colors.INTERACTIVE_NORMAL,
    colorClass: s = "",
    ...u
  } = e;
  return (0, a.jsx)("svg", {
    ...(0, i.default)(u),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, a.jsx)("rect", {
      width: t,
      height: n,
      x: "3",
      y: "3",
      fill: "string" == typeof l ? l : l.css,
      rx: "3",
      className: s
    })
  })
}