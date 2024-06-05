"use strict";
a.r(t), a.d(t, {
  default: function() {
    return i
  }
});
var n = a("735250");
a("470079");
var r = a("325767");

function i(e) {
  let {
    width: t = 17,
    height: a = 16,
    color: i = "currentColor",
    foreground: s,
    ...l
  } = e;
  return (0, n.jsxs)("svg", {
    ...(0, r.default)(l),
    width: t,
    height: a,
    viewBox: "0 0 17 16",
    xmlns: "http://www.w3.org/2000/svg",
    children: [(0, n.jsx)("rect", {
      className: s,
      y: "5",
      width: "16",
      height: "2",
      rx: "1",
      fill: i
    }), (0, n.jsx)("rect", {
      className: s,
      y: "9",
      width: "8",
      height: "2",
      rx: "1",
      fill: i
    })]
  })
}