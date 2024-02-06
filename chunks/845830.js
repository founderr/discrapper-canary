"use strict";
l.r(t), l.d(t, {
  SignPostIcon: function() {
    return i
  }
});
var n = l("37983");
l("884691");
var s = l("669491"),
  a = l("82169");
let i = e => {
  let {
    width: t = 24,
    height: l = 24,
    color: i = s.default.colors.INTERACTIVE_NORMAL,
    colorClass: r = "",
    ...c
  } = e;
  return (0, n.jsx)("svg", {
    ...(0, a.default)(c),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: l,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, n.jsx)("path", {
      fill: "string" == typeof i ? i : i.css,
      d: "M11 3a1 1 0 1 1 2 0v2h5.75c.16 0 .3.07.4.2l2.63 3.5a.5.5 0 0 1 0 .6l-2.63 3.5a.5.5 0 0 1-.4.2H13v5h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1c0-1.1.9-2 2-2h2v-5H2.8a.5.5 0 0 1-.44-.72L3.9 9.22a.5.5 0 0 0 0-.44L2.36 5.72A.5.5 0 0 1 2.81 5H11V3Z",
      className: r
    })
  })
}