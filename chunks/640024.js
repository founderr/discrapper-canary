"use strict";
s.r(t), s.d(t, {
  WaveformIcon: function() {
    return E
  }
});
var a = s("735250");
s("470079");
var n = s("692547"),
  i = s("331595");
let E = e => {
  let {
    width: t = 24,
    height: s = 24,
    color: E = n.default.colors.INTERACTIVE_NORMAL,
    colorClass: l = "",
    ..._
  } = e;
  return (0, a.jsx)("svg", {
    ...(0, i.default)(_),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: s,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, a.jsx)("path", {
      fill: "string" == typeof E ? E : E.css,
      d: "M7 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1ZM11 6a1 1 0 1 1 2 0v12a1 1 0 1 1-2 0V6ZM1 8a1 1 0 0 1 2 0v8a1 1 0 1 1-2 0V8ZM16 5a1 1 0 1 1 2 0v14a1 1 0 1 1-2 0V5ZM22 8a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1Z",
      className: l
    })
  })
}