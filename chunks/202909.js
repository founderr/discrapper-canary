"use strict";
n.r(t), n.d(t, {
  NitroWheelIcon: function() {
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
  return (0, l.jsxs)("svg", {
    ...(0, s.default)(a),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [(0, l.jsx)("path", {
      fill: "string" == typeof r ? r : r.css,
      d: "M15 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
      className: o
    }), (0, l.jsx)("path", {
      fill: "string" == typeof r ? r : r.css,
      fillRule: "evenodd",
      d: "M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.25A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
      clipRule: "evenodd",
      className: o
    }), (0, l.jsx)("path", {
      fill: "string" == typeof r ? r : r.css,
      d: "M2.5 10a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2h.5Z",
      className: o
    })]
  })
}