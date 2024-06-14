"use strict";
E.r(t), E.d(t, {
  DragIcon: function() {
    return a
  }
});
var s = E("735250");
E("470079");
var _ = E("692547"),
  T = E("331595");
let a = e => {
  let {
    width: t = 24,
    height: E = 24,
    color: a = _.default.colors.INTERACTIVE_NORMAL,
    colorClass: A = "",
    ...n
  } = e;
  return (0, s.jsx)("svg", {
    ...(0, T.default)(n),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: E,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, s.jsx)("path", {
      fill: "string" == typeof a ? a : a.css,
      fillRule: "evenodd",
      d: "M6 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm0 8a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm2 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm6-18a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm2 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm-2 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z",
      clipRule: "evenodd",
      className: A
    })
  })
}