"use strict";
n.r(t), n.d(t, {
  CompassIcon: function() {
    return r
  }
});
var s = n("37983");
n("884691");
var i = n("669491"),
  l = n("82169");
let r = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: r = i.default.colors.INTERACTIVE_NORMAL,
    colorClass: a = "",
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
      fill: "string" == typeof r ? r : r.css,
      d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
      className: a
    }), (0, s.jsx)("path", {
      fill: "string" == typeof r ? r : r.css,
      fillRule: "evenodd",
      d: "M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0ZM7.74 9.3A2 2 0 0 1 9.3 7.75l7.22-1.45a1 1 0 0 1 1.18 1.18l-1.45 7.22a2 2 0 0 1-1.57 1.57l-7.22 1.45a1 1 0 0 1-1.18-1.18L7.74 9.3Z",
      clipRule: "evenodd",
      className: a
    })]
  })
}