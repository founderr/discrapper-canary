"use strict";
s.r(t), s.d(t, {
  MobilePhoneIcon: function() {
    return n
  }
});
var E = s("735250");
s("470079");
var _ = s("692547"),
  a = s("331595");
let n = e => {
  let {
    width: t = 24,
    height: s = 24,
    color: n = _.default.colors.INTERACTIVE_NORMAL,
    colorClass: T = "",
    ...i
  } = e;
  return (0, E.jsx)("svg", {
    ...(0, a.default)(i),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: s,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, E.jsx)("path", {
      fill: "string" == typeof n ? n : n.css,
      fillRule: "evenodd",
      d: "M5 4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V4Zm5 16a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1ZM8 3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H8Z",
      clipRule: "evenodd",
      className: T
    })
  })
}