"use strict";
n.r(t), n.d(t, {
  FiltersHorizontalIcon: function() {
    return a
  }
});
var r = n("735250");
n("470079");
var l = n("692547"),
  o = n("331595");
let a = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: a = l.default.colors.INTERACTIVE_NORMAL,
    colorClass: i = "",
    ...s
  } = e;
  return (0, r.jsx)("svg", {
    ...(0, o.default)(s),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, r.jsx)("path", {
      fill: "string" == typeof a ? a : a.css,
      d: "M22 5a1 1 0 0 1-1 1h-8.2a2.5 2.5 0 1 1 0-2H21a1 1 0 0 1 1 1ZM6 5c0 .34.04.67.11 1H3a1 1 0 0 1 0-2h3.11A4.5 4.5 0 0 0 6 5ZM22 19a1 1 0 0 1-1 1h-8.2a2.5 2.5 0 1 1 0-2H21a1 1 0 0 1 1 1ZM6 19c0 .34.04.67.11 1H3a1 1 0 1 1 0-2h3.11A4.5 4.5 0 0 0 6 19ZM21 13a1 1 0 1 0 0-2h-3.2a2.5 2.5 0 1 0 0 2H21ZM11.11 13a4.5 4.5 0 0 1 0-2H3a1 1 0 1 0 0 2h8.11Z",
      className: i
    })
  })
}