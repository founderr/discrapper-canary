"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var a = n("735250");
n("470079");
var r = n("325767");

function i(e) {
  let {
    width: t = 17,
    height: n = 16,
    color: i = "currentColor",
    foreground: s,
    ...l
  } = e;
  return (0, a.jsxs)("svg", {
    ...(0, r.default)(l),
    width: t,
    height: n,
    viewBox: "0 0 17 16",
    xmlns: "http://www.w3.org/2000/svg",
    children: [(0, a.jsx)("rect", {
      className: s,
      y: "5",
      width: "16",
      height: "2",
      rx: "1",
      fill: i
    }), (0, a.jsx)("rect", {
      className: s,
      y: "9",
      width: "8",
      height: "2",
      rx: "1",
      fill: i
    })]
  })
}