"use strict";
a.r(t), a.d(t, {
  default: function() {
    return r
  }
});
var n = a("735250");
a("470079");
var i = a("325767");

function r(e) {
  let {
    width: t = 17,
    height: a = 16,
    color: r = "currentColor",
    foreground: s,
    ...l
  } = e;
  return (0, n.jsxs)("svg", {
    ...(0, i.default)(l),
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
      fill: r
    }), (0, n.jsx)("rect", {
      className: s,
      y: "9",
      width: "8",
      height: "2",
      rx: "1",
      fill: r
    })]
  })
}