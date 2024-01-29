"use strict";
n.r(t), n.d(t, {
  BoostTier2SimpleIcon: function() {
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
      d: "M10.95 1.4a1.59 1.59 0 0 1 2.1 0l4.9 4A3.37 3.37 0 0 1 19 8v8c0 1.07-.4 2.06-1.05 2.6l-4.9 4c-.65.53-1.45.53-2.1 0l-4.9-4A3.37 3.37 0 0 1 5 16V8c0-1.07.4-2.06 1.05-2.6l4.9-4Z",
      className: o
    })
  })
}