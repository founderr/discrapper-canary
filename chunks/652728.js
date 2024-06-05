"use strict";
n.r(t), n.d(t, {
  CheckmarkSmallBoldIcon: function() {
    return a
  }
});
var i = n("735250");
n("470079");
var r = n("692547"),
  s = n("331595");
let a = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: a = r.default.colors.INTERACTIVE_NORMAL,
    colorClass: o = "",
    ...l
  } = e;
  return (0, i.jsx)("svg", {
    ...(0, s.default)(l),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, i.jsx)("path", {
      fill: "string" == typeof a ? a : a.css,
      fillRule: "evenodd",
      d: "M19.06 6.94a1.5 1.5 0 0 1 0 2.12l-8 8a1.5 1.5 0 0 1-2.12 0l-4-4a1.5 1.5 0 0 1 2.12-2.12L10 13.88l6.94-6.94a1.5 1.5 0 0 1 2.12 0Z",
      clipRule: "evenodd",
      className: o
    })
  })
}