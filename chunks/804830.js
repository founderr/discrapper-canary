"use strict";
n.r(e), n.d(e, {
  NitroWheelIcon: function() {
    return s
  }
});
var i = n("37983");
n("884691");
var r = n("669491"),
  a = n("82169");
let s = t => {
  let {
    width: e = 24,
    height: n = 24,
    color: s = r.default.colors.INTERACTIVE_NORMAL,
    colorClass: l = "",
    ...u
  } = t;
  return (0, i.jsxs)("svg", {
    ...(0, a.default)(u),
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [(0, i.jsx)("path", {
      fill: "string" == typeof s ? s : s.css,
      d: "M15 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
      className: l
    }), (0, i.jsx)("path", {
      fill: "string" == typeof s ? s : s.css,
      fillRule: "evenodd",
      d: "M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.25A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
      clipRule: "evenodd",
      className: l
    }), (0, i.jsx)("path", {
      fill: "string" == typeof s ? s : s.css,
      d: "M2.5 10a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2h.5Z",
      className: l
    })]
  })
}