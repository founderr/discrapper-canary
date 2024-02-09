"use strict";
n.r(e), n.d(e, {
  PlayIcon: function() {
    return s
  }
});
var i = n("37983");
n("884691");
var r = n("669491"),
  l = n("82169");
let s = t => {
  let {
    width: e = 24,
    height: n = 24,
    color: s = r.default.colors.INTERACTIVE_NORMAL,
    colorClass: a = "",
    ...o
  } = t;
  return (0, i.jsx)("svg", {
    ...(0, l.default)(o),
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, i.jsx)("path", {
      fill: "string" == typeof s ? s : s.css,
      d: "M9.25 3.35C7.87 2.45 6 3.38 6 4.96v14.08c0 1.58 1.87 2.5 3.25 1.61l10.85-7.04a1.9 1.9 0 0 0 0-3.22L9.25 3.35Z",
      className: a
    })
  })
}