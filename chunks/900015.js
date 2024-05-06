"use strict";
a.r(t), a.d(t, {
  TagsIcon: function() {
    return s
  }
});
var n = a("735250");
a("470079");
var i = a("692547"),
  r = a("331595");
let s = e => {
  let {
    width: t = 24,
    height: a = 24,
    color: s = i.default.colors.INTERACTIVE_NORMAL,
    colorClass: l = "",
    ...o
  } = e;
  return (0, n.jsxs)("svg", {
    ...(0, r.default)(o),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: a,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [(0, n.jsx)("path", {
      fill: "string" == typeof s ? s : s.css,
      d: "M9.12 1.88A3 3 0 0 1 11.24 1H17a2 2 0 0 1 1.94 1.5c.07.27-.16.5-.44.5h-4.26a4 4 0 0 0-2.83 1.17l-7.25 7.25c-.5.51-.85 1.12-1.03 1.77-.12.45-.74.7-1.06.38l-.2-.2a3 3 0 0 1 0-4.24l7.25-7.25Z",
      className: l
    }), (0, n.jsx)("path", {
      fill: "string" == typeof s ? s : s.css,
      fillRule: "evenodd",
      d: "M13.12 5.88A3 3 0 0 1 15.24 5H21a2 2 0 0 1 2 2v5.76a3 3 0 0 1-.88 2.12l-7.25 7.25a3 3 0 0 1-4.24 0l-4.76-4.76a3 3 0 0 1 0-4.24l7.25-7.25ZM20 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z",
      clipRule: "evenodd",
      className: l
    })]
  })
}