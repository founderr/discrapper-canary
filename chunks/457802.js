"use strict";
n.r(t), n.d(t, {
  MinusIcon: function() {
    return r
  }
});
var l = n("37983");
n("884691");
var i = n("669491"),
  s = n("75196");
let r = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: r = i.default.colors.INTERACTIVE_NORMAL,
    colorClass: o = "",
    ...a
  } = e;
  return (0, l.jsx)("svg", {
    ...(0, s.default)(a),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, l.jsx)("path", {
      fill: "string" == typeof r ? r : r.css,
      fillRule: "evenodd",
      d: "M22 12a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h18a1 1 0 0 1 1 1Z",
      clipRule: "evenodd",
      className: o
    })
  })
}