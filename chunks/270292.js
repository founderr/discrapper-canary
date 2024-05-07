"use strict";
n.r(t), n.d(t, {
  ArrowLargeLeftIcon: function() {
    return l
  }
});
var a = n("735250");
n("470079");
var s = n("692547"),
  i = n("331595");
let l = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: l = s.default.colors.INTERACTIVE_NORMAL,
    colorClass: r = "",
    ...o
  } = e;
  return (0, a.jsx)("svg", {
    ...(0, i.default)(o),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, a.jsx)("path", {
      fill: "string" == typeof l ? l : l.css,
      d: "M3.3 11.3a1 1 0 0 0 0 1.4l8 8a1 1 0 1 0 1.4-1.4L6.42 13H20a1 1 0 1 0 0-2H6.41l6.3-6.3a1 1 0 0 0-1.42-1.4l-8 8Z",
      className: r
    })
  })
}