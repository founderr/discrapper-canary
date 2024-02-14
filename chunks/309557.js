"use strict";
n.r(e), n.d(e, {
  CheckmarkSmallIcon: function() {
    return s
  }
});
var i = n("37983");
n("884691");
var r = n("669491"),
  a = n("82169");
let s = t => {
  let {
    width: e = 24,
    height: n = 24,
    color: s = r.default.colors.INTERACTIVE_NORMAL,
    colorClass: l = "",
    ...u
  } = t;
  return (0, i.jsx)("svg", {
    ...(0, a.default)(u),
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, i.jsx)("path", {
      fill: "string" == typeof s ? s : s.css,
      fillRule: "evenodd",
      d: "M18.7 7.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4l3.3 3.29 7.3-7.3a1 1 0 0 1 1.4 0Z",
      clipRule: "evenodd",
      className: l
    })
  })
}