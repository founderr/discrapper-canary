"use strict";
n.r(e), n.d(e, {
  FlashIcon: function() {
    return o
  }
});
var r = n("735250");
n("470079");
var i = n("692547"),
  u = n("331595");
let o = t => {
  let {
    width: e = 24,
    height: n = 24,
    color: o = i.default.colors.INTERACTIVE_NORMAL,
    colorClass: a = "",
    ...l
  } = t;
  return (0, r.jsx)("svg", {
    ...(0, u.default)(l),
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, r.jsx)("path", {
      fill: "string" == typeof o ? o : o.css,
      d: "M7.65 21.75a1 1 0 0 0 1.64.96l11.24-9.96a1 1 0 0 0-.66-1.75h-4.81a.5.5 0 0 1-.5-.6l1.79-8.15a1 1 0 0 0-1.64-.96L3.47 11.25A1 1 0 0 0 4.13 13h4.81c.32 0 .56.3.5.6l-1.79 8.15Z",
      className: a
    })
  })
}