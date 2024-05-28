"use strict";
s.r(t), s.d(t, {
  RetryIcon: function() {
    return n
  }
});
var E = s("735250");
s("470079");
var _ = s("692547"),
  a = s("331595");
let n = e => {
  let {
    width: t = 24,
    height: s = 24,
    color: n = _.default.colors.INTERACTIVE_NORMAL,
    colorClass: T = "",
    ...i
  } = e;
  return (0, E.jsx)("svg", {
    ...(0, a.default)(i),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: s,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, E.jsx)("path", {
      fill: "string" == typeof n ? n : n.css,
      d: "M4 12a8 8 0 0 1 14.93-4H15a1 1 0 1 0 0 2h6a1 1 0 0 0 1-1V3a1 1 0 1 0-2 0v3a9.98 9.98 0 0 0-18 6 10 10 0 0 0 16.29 7.78 1 1 0 0 0-1.26-1.56A8 8 0 0 1 4 12Z",
      className: T
    })
  })
}