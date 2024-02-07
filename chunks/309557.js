"use strict";
n.r(e), n.d(e, {
  CheckmarkSmallIcon: function() {
    return o
  }
});
var r = n("37983");
n("884691");
var i = n("669491"),
  u = n("82169");
let o = t => {
  let {
    width: e = 24,
    height: n = 24,
    color: o = i.default.colors.INTERACTIVE_NORMAL,
    colorClass: a = "",
    ...l
  } = t;
  return (0, r.jsx)("svg", {
    ...(0, u.default)(l),
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, r.jsx)("path", {
      fill: "string" == typeof o ? o : o.css,
      fillRule: "evenodd",
      d: "M18.7 7.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4l3.3 3.29 7.3-7.3a1 1 0 0 1 1.4 0Z",
      clipRule: "evenodd",
      className: a
    })
  })
}