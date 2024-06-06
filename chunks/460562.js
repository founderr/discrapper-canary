"use strict";
n.r(s), n.d(s, {
  default: function() {
    return r
  }
});
var t = n("735250");
n("470079");
var a = n("325767");

function r(e) {
  let {
    width: s = 32,
    height: n = 32,
    color: r = "currentColor",
    ...l
  } = e;
  return (0, t.jsxs)("svg", {
    ...(0, a.default)(l),
    width: s,
    height: n,
    viewBox: "0 0 12 12",
    fill: "none",
    children: [(0, t.jsx)("path", {
      d: "M7.25 1H4.75V7.25H7.25V1Z",
      fill: r
    }), (0, t.jsx)("path", {
      d: "M4.75 9.75C4.75 10.4167 5.33333 11 6 11C6.66667 11 7.25 10.4167 7.25 9.75C7.25 9.08333 6.66667 8.5 6 8.5C5.33333 8.5 4.75 9.08333 4.75 9.75Z",
      fill: r
    })]
  })
}