"use strict";
n.r(t), n.d(t, {
  ArrowSmallRightIcon: function() {
    return l
  }
});
var i = n("735250");
n("470079");
var r = n("692547"),
  s = n("331595");
let l = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: l = r.default.colors.INTERACTIVE_NORMAL,
    colorClass: o = "",
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
      fill: "string" == typeof l ? l : l.css,
      d: "M20.7 12.7a1 1 0 0 0 0-1.4l-5-5a1 1 0 1 0-1.4 1.4l3.29 3.3H4a1 1 0 1 0 0 2h13.59l-3.3 3.3a1 1 0 0 0 1.42 1.4l5-5Z",
      className: o
    })
  })
}