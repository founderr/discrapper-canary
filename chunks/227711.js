"use strict";
n.r(t), n.d(t, {
  LockUnlockedIcon: function() {
    return o
  }
});
var s = n("735250");
n("470079");
var r = n("692547"),
  i = n("331595");
let o = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: o = r.default.colors.INTERACTIVE_NORMAL,
    colorClass: u = "",
    ...a
  } = e;
  return (0, s.jsx)("svg", {
    ...(0, i.default)(a),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, s.jsx)("path", {
      fill: "string" == typeof o ? o : o.css,
      fillRule: "evenodd",
      d: "M8.7 2.25A4.98 4.98 0 0 1 17 6v3h1a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3h9V6a3 3 0 0 0-4.98-2.25 1 1 0 0 1-1.33-1.5ZM14 14a2 2 0 0 1-1 1.73V18a1 1 0 1 1-2 0v-2.27A2 2 0 1 1 14 14Z",
      clipRule: "evenodd",
      className: u
    })
  })
}