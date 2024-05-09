"use strict";
s.r(t), s.d(t, {
  MobilePhoneIcon: function() {
    return E
  }
});
var a = s("735250");
s("470079");
var n = s("692547"),
  i = s("331595");
let E = e => {
  let {
    width: t = 24,
    height: s = 24,
    color: E = n.default.colors.INTERACTIVE_NORMAL,
    colorClass: l = "",
    ..._
  } = e;
  return (0, a.jsx)("svg", {
    ...(0, i.default)(_),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: s,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, a.jsx)("path", {
      fill: "string" == typeof E ? E : E.css,
      fillRule: "evenodd",
      d: "M5 4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V4Zm5 16a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1ZM8 3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H8Z",
      clipRule: "evenodd",
      className: l
    })
  })
}