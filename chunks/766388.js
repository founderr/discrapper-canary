"use strict";
r.r(t), r.d(t, {
  BoostTier2SimpleIcon: function() {
    return a
  }
});
var n = r("37983");
r("884691");
var l = r("669491"),
  s = r("82169");
let a = e => {
  let {
    width: t = 24,
    height: r = 24,
    color: a = l.default.colors.INTERACTIVE_NORMAL,
    colorClass: i = "",
    ...u
  } = e;
  return (0, n.jsx)("svg", {
    ...(0, s.default)(u),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: r,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, n.jsx)("path", {
      fill: "string" == typeof a ? a : a.css,
      d: "M10.95 1.4a1.59 1.59 0 0 1 2.1 0l4.9 4A3.37 3.37 0 0 1 19 8v8c0 1.07-.4 2.06-1.05 2.6l-4.9 4c-.65.53-1.45.53-2.1 0l-4.9-4A3.37 3.37 0 0 1 5 16V8c0-1.07.4-2.06 1.05-2.6l4.9-4Z",
      className: i
    })
  })
}