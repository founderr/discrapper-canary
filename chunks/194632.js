"use strict";
n.r(t), n.d(t, {
  FlashIcon: function() {
    return E
  }
});
var r = n("735250");
n("470079");
var s = n("692547"),
  a = n("331595");
let E = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: E = s.default.colors.INTERACTIVE_NORMAL,
    colorClass: u = "",
    ...T
  } = e;
  return (0, r.jsx)("svg", {
    ...(0, a.default)(T),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, r.jsx)("path", {
      fill: "string" == typeof E ? E : E.css,
      d: "M7.65 21.75a1 1 0 0 0 1.64.96l11.24-9.96a1 1 0 0 0-.66-1.75h-4.81a.5.5 0 0 1-.5-.6l1.79-8.15a1 1 0 0 0-1.64-.96L3.47 11.25A1 1 0 0 0 4.13 13h4.81c.32 0 .56.3.5.6l-1.79 8.15Z",
      className: u
    })
  })
}