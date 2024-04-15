"use strict";
n.r(t), n.d(t, {
  CompassIcon: function() {
    return a
  }
});
var s = n("735250");
n("470079");
var i = n("692547"),
  l = n("331595");
let a = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: a = i.default.colors.INTERACTIVE_NORMAL,
    colorClass: r = "",
    ...u
  } = e;
  return (0, s.jsxs)("svg", {
    ...(0, l.default)(u),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [(0, s.jsx)("path", {
      fill: "string" == typeof a ? a : a.css,
      d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
      className: r
    }), (0, s.jsx)("path", {
      fill: "string" == typeof a ? a : a.css,
      fillRule: "evenodd",
      d: "M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0ZM7.74 9.3A2 2 0 0 1 9.3 7.75l7.22-1.45a1 1 0 0 1 1.18 1.18l-1.45 7.22a2 2 0 0 1-1.57 1.57l-7.22 1.45a1 1 0 0 1-1.18-1.18L7.74 9.3Z",
      clipRule: "evenodd",
      className: r
    })]
  })
}