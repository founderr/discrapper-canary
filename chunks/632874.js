"use strict";
n.r(t), n.d(t, {
  PlusSmallIcon: function() {
    return a
  }
});
var i = n("37983");
n("884691");
var r = n("669491"),
  u = n("82169");
let a = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: a = r.default.colors.INTERACTIVE_NORMAL,
    colorClass: s = "",
    ...l
  } = e;
  return (0, i.jsx)("svg", {
    ...(0, u.default)(l),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, i.jsx)("path", {
      fill: "string" == typeof a ? a : a.css,
      d: "M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6Z",
      className: s
    })
  })
}