"use strict";
a.r(t), a.d(t, {
  StarShootingIcon: function() {
    return i
  }
});
var n = a("735250");
a("470079");
var r = a("692547"),
  l = a("331595");
let i = e => {
  let {
    width: t = 24,
    height: a = 24,
    color: i = r.default.colors.INTERACTIVE_NORMAL,
    colorClass: o = "",
    ...s
  } = e;
  return (0, n.jsx)("svg", {
    ...(0, l.default)(s),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: a,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, n.jsx)("path", {
      fill: "string" == typeof i ? i : i.css,
      d: "M17.93 1.51a.74.74 0 0 0-1.41 0l-1.13 3.47h-3.65a.74.74 0 0 0-.43 1.35l2.95 2.14-1.13 3.47a.74.74 0 0 0 1.14.83l2.95-2.15 2.96 2.15a.74.74 0 0 0 1.14-.83l-1.13-3.47 2.95-2.14a.74.74 0 0 0-.43-1.35h-3.65l-1.13-3.47ZM10.7 14.7a1 1 0 0 0-1.4-1.4l-8 8a1 1 0 1 0 1.4 1.4l8-8ZM9.7 8.3a1 1 0 0 1 0 1.4l-6 6a1 1 0 0 1-1.4-1.4l6-6a1 1 0 0 1 1.4 0ZM15.7 15.7a1 1 0 0 0-1.4-1.4l-6 6a1 1 0 1 0 1.4 1.4l6-6Z",
      className: o
    })
  })
}