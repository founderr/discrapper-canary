"use strict";
E.r(t), E.d(t, {
  CheckmarkBoldIcon: function() {
    return T
  }
});
var s = E("735250");
E("470079");
var _ = E("692547"),
  a = E("331595");
let T = e => {
  let {
    width: t = 24,
    height: E = 24,
    color: T = _.default.colors.INTERACTIVE_NORMAL,
    colorClass: n = "",
    ...A
  } = e;
  return (0, s.jsx)("svg", {
    ...(0, a.default)(A),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: E,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, s.jsx)("path", {
      fill: "string" == typeof T ? T : T.css,
      fillRule: "evenodd",
      d: "M22.06 4.94a1.5 1.5 0 0 1 0 2.12l-12 12a1.5 1.5 0 0 1-2.12 0l-6-6a1.5 1.5 0 0 1 2.12-2.12L9 15.88 19.94 4.94a1.5 1.5 0 0 1 2.12 0Z",
      clipRule: "evenodd",
      className: n
    })
  })
}