"use strict";
n.r(t), n.d(t, {
  ChevronLargeDownIcon: function() {
    return r
  }
});
var i = n("735250");
n("470079");
var a = n("692547"),
  s = n("331595");
let r = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: r = a.default.colors.INTERACTIVE_NORMAL,
    colorClass: l = "",
    ...u
  } = e;
  return (0, i.jsx)("svg", {
    ...(0, s.default)(u),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, i.jsx)("path", {
      fill: "string" == typeof r ? r : r.css,
      d: "M3.3 8.3a1 1 0 0 1 1.4 0l7.3 7.29 7.3-7.3a1 1 0 1 1 1.4 1.42l-8 8a1 1 0 0 1-1.4 0l-8-8a1 1 0 0 1 0-1.42Z",
      className: l
    })
  })
}