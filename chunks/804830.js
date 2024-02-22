"use strict";
r.r(t), r.d(t, {
  NitroWheelIcon: function() {
    return i
  }
});
var a = r("37983");
r("884691");
var n = r("669491"),
  u = r("82169");
let i = e => {
  let {
    width: t = 24,
    height: r = 24,
    color: i = n.default.colors.INTERACTIVE_NORMAL,
    colorClass: l = "",
    ...s
  } = e;
  return (0, a.jsxs)("svg", {
    ...(0, u.default)(s),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: r,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [(0, a.jsx)("path", {
      fill: "string" == typeof i ? i : i.css,
      d: "M15 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
      className: l
    }), (0, a.jsx)("path", {
      fill: "string" == typeof i ? i : i.css,
      fillRule: "evenodd",
      d: "M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.25A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
      clipRule: "evenodd",
      className: l
    }), (0, a.jsx)("path", {
      fill: "string" == typeof i ? i : i.css,
      d: "M2.5 10a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2h.5Z",
      className: l
    })]
  })
}