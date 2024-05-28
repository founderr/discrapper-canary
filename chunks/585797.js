"use strict";
E.r(t), E.d(t, {
  GridVerticalIcon: function() {
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
      d: "M4 22a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h5a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4ZM15 22a2 2 0 0 1-2-2v-5c0-1.1.9-2 2-2h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5ZM13 9c0 1.1.9 2 2 2h5a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-5a2 2 0 0 0-2 2v5Z",
      className: n
    })
  })
}