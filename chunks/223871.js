"use strict";
t.r(A), t.d(A, {
  UndoIcon: function() {
    return n
  }
});
var a = t("735250");
t("470079");
var l = t("692547"),
  s = t("331595");
let n = e => {
  let {
    width: A = 24,
    height: t = 24,
    color: n = l.default.colors.INTERACTIVE_NORMAL,
    colorClass: r = "",
    ...o
  } = e;
  return (0, a.jsx)("svg", {
    ...(0, s.default)(o),
    xmlns: "http://www.w3.org/2000/svg",
    width: A,
    height: t,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, a.jsx)("path", {
      fill: "string" == typeof n ? n : n.css,
      d: "M2 8a1 1 0 0 1 2 0v3.54A10.26 10.26 0 0 1 12.38 7c4.23 0 7.83 2.74 9.53 6.6a1 1 0 1 1-1.82.8c-1.45-3.25-4.4-5.4-7.71-5.4a8.34 8.34 0 0 0-6.96 4H9a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1V8Z",
      className: r
    })
  })
}