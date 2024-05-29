"use strict";
l.r(t), l.d(t, {
  XNeutralIcon: function() {
    return s
  }
});
var a = l("735250");
l("470079");
var n = l("692547"),
  r = l("331595");
let s = e => {
  let {
    width: t = 24,
    height: l = 24,
    color: s = n.default.colors.INTERACTIVE_NORMAL,
    colorClass: o = "",
    ...i
  } = e;
  return (0, a.jsx)("svg", {
    ...(0, r.default)(i),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: l,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, a.jsx)("path", {
      fill: "string" == typeof s ? s : s.css,
      d: "M13.86 10.47 21.15 2h-1.73l-6.33 7.35L8.04 2H2.22l7.64 11.12L2.22 22h1.72l6.68-7.77L15.96 22h5.82l-7.92-11.53Zm-2.36 2.75-.78-1.11L4.57 3.3h2.65l4.97 7.11.77 1.1 6.46 9.25h-2.65l-5.27-7.54Z",
      className: o
    })
  })
}