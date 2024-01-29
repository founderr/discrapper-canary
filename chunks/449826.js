"use strict";
n.r(l), n.d(l, {
  UndoIcon: function() {
    return o
  }
});
var r = n("37983");
n("884691");
var t = n("669491"),
  a = n("75196");
let o = e => {
  let {
    width: l = 24,
    height: n = 24,
    color: o = t.default.colors.INTERACTIVE_NORMAL,
    colorClass: i = "",
    ...s
  } = e;
  return (0, r.jsx)("svg", {
    ...(0, a.default)(s),
    xmlns: "http://www.w3.org/2000/svg",
    width: l,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, r.jsx)("path", {
      fill: "string" == typeof o ? o : o.css,
      d: "M2 8a1 1 0 0 1 2 0v3.54A10.26 10.26 0 0 1 12.38 7c4.23 0 7.83 2.74 9.53 6.6a1 1 0 1 1-1.82.8c-1.45-3.25-4.4-5.4-7.71-5.4a8.34 8.34 0 0 0-6.96 4H9a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1V8Z",
      className: i
    })
  })
}