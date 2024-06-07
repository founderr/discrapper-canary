"use strict";
n.r(t), n.d(t, {
  WaveformIcon: function() {
    return i
  }
});
var a = n("735250");
n("470079");
var r = n("692547"),
  s = n("331595");
let i = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: i = r.default.colors.INTERACTIVE_NORMAL,
    colorClass: l = "",
    ...o
  } = e;
  return (0, a.jsx)("svg", {
    ...(0, s.default)(o),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, a.jsx)("path", {
      fill: "string" == typeof i ? i : i.css,
      d: "M7 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1ZM11 6a1 1 0 1 1 2 0v12a1 1 0 1 1-2 0V6ZM1 8a1 1 0 0 1 2 0v8a1 1 0 1 1-2 0V8ZM16 5a1 1 0 1 1 2 0v14a1 1 0 1 1-2 0V5ZM22 8a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1Z",
      className: l
    })
  })
}