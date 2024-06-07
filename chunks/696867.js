"use strict";
i.r(s), i.d(s, {
  CheckmarkBoldIcon: function() {
    return r
  }
});
var n = i("735250");
i("470079");
var t = i("692547"),
  E = i("331595");
let r = e => {
  let {
    width: s = 24,
    height: i = 24,
    color: r = t.default.colors.INTERACTIVE_NORMAL,
    colorClass: S = "",
    ...o
  } = e;
  return (0, n.jsx)("svg", {
    ...(0, E.default)(o),
    xmlns: "http://www.w3.org/2000/svg",
    width: s,
    height: i,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, n.jsx)("path", {
      fill: "string" == typeof r ? r : r.css,
      fillRule: "evenodd",
      d: "M22.06 4.94a1.5 1.5 0 0 1 0 2.12l-12 12a1.5 1.5 0 0 1-2.12 0l-6-6a1.5 1.5 0 0 1 2.12-2.12L9 15.88 19.94 4.94a1.5 1.5 0 0 1 2.12 0Z",
      clipRule: "evenodd",
      className: S
    })
  })
}