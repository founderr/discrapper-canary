"use strict";
s.r(t), s.d(t, {
  ChevronLargeDownIcon: function() {
    return a
  }
});
var n = s("735250");
s("470079");
var i = s("692547"),
  l = s("331595");
let a = e => {
  let {
    width: t = 24,
    height: s = 24,
    color: a = i.default.colors.INTERACTIVE_NORMAL,
    colorClass: r = "",
    ...u
  } = e;
  return (0, n.jsx)("svg", {
    ...(0, l.default)(u),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: s,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, n.jsx)("path", {
      fill: "string" == typeof a ? a : a.css,
      d: "M3.3 8.3a1 1 0 0 1 1.4 0l7.3 7.29 7.3-7.3a1 1 0 1 1 1.4 1.42l-8 8a1 1 0 0 1-1.4 0l-8-8a1 1 0 0 1 0-1.42Z",
      className: r
    })
  })
}