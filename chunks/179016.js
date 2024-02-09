"use strict";
s.r(t), s.d(t, {
  default: function() {
    return n
  }
});
var a = s("37983");
s("884691");
var l = s("75196");

function n(e) {
  let {
    width: t = 17,
    height: s = 16,
    color: n = "currentColor",
    foreground: i,
    ...r
  } = e;
  return (0, a.jsxs)("svg", {
    ...(0, l.default)(r),
    width: t,
    height: s,
    viewBox: "0 0 17 16",
    xmlns: "http://www.w3.org/2000/svg",
    children: [(0, a.jsx)("rect", {
      className: i,
      y: "5",
      width: "16",
      height: "2",
      rx: "1",
      fill: n
    }), (0, a.jsx)("rect", {
      className: i,
      y: "9",
      width: "8",
      height: "2",
      rx: "1",
      fill: n
    })]
  })
}