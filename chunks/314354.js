"use strict";
l.r(e), l.d(e, {
  RetryIcon: function() {
    return n
  }
});
var s = l("735250");
l("470079");
var r = l("692547"),
  a = l("331595");
let n = t => {
  let {
    width: e = 24,
    height: l = 24,
    color: n = r.default.colors.INTERACTIVE_NORMAL,
    colorClass: i = "",
    ...c
  } = t;
  return (0, s.jsx)("svg", {
    ...(0, a.default)(c),
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: l,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, s.jsx)("path", {
      fill: "string" == typeof n ? n : n.css,
      d: "M4 12a8 8 0 0 1 14.93-4H15a1 1 0 1 0 0 2h6a1 1 0 0 0 1-1V3a1 1 0 1 0-2 0v3a9.98 9.98 0 0 0-18 6 10 10 0 0 0 16.29 7.78 1 1 0 0 0-1.26-1.56A8 8 0 0 1 4 12Z",
      className: i
    })
  })
}