"use strict";
n.r(t), n.d(t, {
  PlusSmallIcon: function() {
    return r
  }
});
var l = n("37983");
n("884691");
var s = n("669491"),
  i = n("75196");
let r = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: r = s.default.colors.INTERACTIVE_NORMAL,
    colorClass: o = "",
    ...a
  } = e;
  return (0, l.jsx)("svg", {
    ...(0, i.default)(a),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, l.jsx)("path", {
      fill: "string" == typeof r ? r : r.css,
      d: "M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6Z",
      className: o
    })
  })
}