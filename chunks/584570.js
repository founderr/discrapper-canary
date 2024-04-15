"use strict";
s.r(t), s.d(t, {
  ScreenIcon: function() {
    return r
  }
});
var l = s("735250");
s("470079");
var a = s("692547"),
  n = s("331595");
let r = e => {
  let {
    width: t = 24,
    height: s = 24,
    color: r = a.default.colors.INTERACTIVE_NORMAL,
    colorClass: o = "",
    ...i
  } = e;
  return (0, l.jsx)("svg", {
    ...(0, n.default)(i),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: s,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, l.jsx)("path", {
      fill: "string" == typeof r ? r : r.css,
      d: "M5 2a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5ZM13.5 20a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-.5.5H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-1.5Z",
      className: o
    })
  })
}