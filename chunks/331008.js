"use strict";
s.r(t), s.d(t, {
  CircleInformationIcon: function() {
    return l
  }
});
var n = s("37983");
s("884691");
var r = s("669491"),
  i = s("82169");
let l = e => {
  let {
    width: t = 24,
    height: s = 24,
    secondaryColor: l = "transparent",
    secondaryColorClass: a = "",
    color: o = r.default.colors.INTERACTIVE_NORMAL,
    colorClass: d = "",
    ...u
  } = e;
  return (0, n.jsxs)("svg", {
    ...(0, i.default)(u),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: s,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [(0, n.jsx)("circle", {
      cx: "12",
      cy: "12",
      r: "10",
      fill: "string" == typeof l ? l : l.css,
      className: a
    }), (0, n.jsx)("path", {
      fill: "string" == typeof o ? o : o.css,
      fillRule: "evenodd",
      d: "M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-9.5-4.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.77 3.96a1 1 0 1 0-1.96-.42l-1.04 4.86a2.77 2.77 0 0 0 4.31 2.83l.24-.17a1 1 0 1 0-1.16-1.62l-.24.17a.77.77 0 0 1-1.2-.79l1.05-4.86Z",
      clipRule: "evenodd",
      className: d
    })]
  })
}