"use strict";
n.r(t), n.d(t, {
  MenuIcon: function() {
    return s
  }
});
var a = n("735250");
n("470079");
var i = n("692547"),
  r = n("331595");
let s = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: s = i.default.colors.INTERACTIVE_NORMAL,
    colorClass: l = "",
    ...o
  } = e;
  return (0, a.jsx)("svg", {
    ...(0, r.default)(o),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, a.jsx)("path", {
      fill: "string" == typeof s ? s : s.css,
      d: "M1 5a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1ZM1 12a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1ZM2 18a1 1 0 1 0 0 2h20a1 1 0 1 0 0-2H2Z",
      className: l
    })
  })
}