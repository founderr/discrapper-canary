"use strict";
n.r(t), n.d(t, {
  StopIcon: function() {
    return r
  }
});
var i = n("37983");
n("884691");
var l = n("669491"),
  s = n("82169");
let r = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: r = l.default.colors.INTERACTIVE_NORMAL,
    colorClass: a = "",
    ...u
  } = e;
  return (0, i.jsx)("svg", {
    ...(0, s.default)(u),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, i.jsx)("rect", {
      width: t,
      height: n,
      x: "3",
      y: "3",
      fill: "string" == typeof r ? r : r.css,
      rx: "3",
      className: a
    })
  })
}