"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var a = n("735250");
n("470079");
var r = n("325767");

function s(e) {
  let {
    width: t = 17,
    height: n = 16,
    color: s = "currentColor",
    foreground: i,
    ...l
  } = e;
  return (0, a.jsxs)("svg", {
    ...(0, r.default)(l),
    width: t,
    height: n,
    viewBox: "0 0 17 16",
    xmlns: "http://www.w3.org/2000/svg",
    children: [(0, a.jsx)("rect", {
      className: i,
      y: "5",
      width: "16",
      height: "2",
      rx: "1",
      fill: s
    }), (0, a.jsx)("rect", {
      className: i,
      y: "9",
      width: "8",
      height: "2",
      rx: "1",
      fill: s
    })]
  })
}