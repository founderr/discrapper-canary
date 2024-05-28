"use strict";
E.r(t), E.d(t, {
  ListBulletsIcon: function() {
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
      d: "M4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM4 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM2 20a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM9 3a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2H9ZM8 12a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1ZM9 19a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2H9Z",
      className: n
    })
  })
}