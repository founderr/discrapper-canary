"use strict";
n.r(e), n.d(e, {
  LockUnlockedIcon: function() {
    return a
  }
});
var i = n("735250");
n("470079");
var o = n("692547"),
  s = n("331595");
let a = t => {
  let {
    width: e = 24,
    height: n = 24,
    color: a = o.default.colors.INTERACTIVE_NORMAL,
    colorClass: c = "",
    ...u
  } = t;
  return (0, i.jsx)("svg", {
    ...(0, s.default)(u),
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, i.jsx)("path", {
      fill: "string" == typeof a ? a : a.css,
      fillRule: "evenodd",
      d: "M8.7 2.25A4.98 4.98 0 0 1 17 6v3h1a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3h9V6a3 3 0 0 0-4.98-2.25 1 1 0 0 1-1.33-1.5ZM14 14a2 2 0 0 1-1 1.73V18a1 1 0 1 1-2 0v-2.27A2 2 0 1 1 14 14Z",
      clipRule: "evenodd",
      className: c
    })
  })
}