"use strict";
i.r(t), i.d(t, {
  default: function() {
    return s
  }
});
var n = i("735250");
i("470079");
var r = i("325767");

function s(e) {
  let {
    width: t = 17,
    height: i = 16,
    color: s = "currentColor",
    foreground: a,
    ...l
  } = e;
  return (0, n.jsxs)("svg", {
    ...(0, r.default)(l),
    width: t,
    height: i,
    viewBox: "0 0 17 16",
    xmlns: "http://www.w3.org/2000/svg",
    children: [(0, n.jsx)("rect", {
      className: a,
      y: "5",
      width: "16",
      height: "2",
      rx: "1",
      fill: s
    }), (0, n.jsx)("rect", {
      className: a,
      y: "9",
      width: "8",
      height: "2",
      rx: "1",
      fill: s
    })]
  })
}