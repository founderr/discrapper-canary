"use strict";
s.r(t), s.d(t, {
  CheckmarkBoldIcon: function() {
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
      d: "M22.06 4.94a1.5 1.5 0 0 1 0 2.12l-12 12a1.5 1.5 0 0 1-2.12 0l-6-6a1.5 1.5 0 0 1 2.12-2.12L9 15.88 19.94 4.94a1.5 1.5 0 0 1 2.12 0Z",
      clipRule: "evenodd",
      className: l
    })
  })
}