"use strict";
s.r(t), s.d(t, {
  default: function() {
    return i
  }
});
var a = s("735250");
s("470079");
var n = s("325767");

function i(e) {
  let {
    width: t = 17,
    height: s = 16,
    color: i = "currentColor",
    foreground: E,
    ...l
  } = e;
  return (0, a.jsxs)("svg", {
    ...(0, n.default)(l),
    width: t,
    height: s,
    viewBox: "0 0 17 16",
    xmlns: "http://www.w3.org/2000/svg",
    children: [(0, a.jsx)("rect", {
      className: E,
      y: "5",
      width: "16",
      height: "2",
      rx: "1",
      fill: i
    }), (0, a.jsx)("rect", {
      className: E,
      y: "9",
      width: "8",
      height: "2",
      rx: "1",
      fill: i
    })]
  })
}