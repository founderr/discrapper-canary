"use strict";
n.r(t), n.d(t, {
  DenyIcon: function() {
    return i
  }
});
var r = n("37983");
n("884691");
var u = n("669491"),
  a = n("82169");
let i = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: i = u.default.colors.INTERACTIVE_NORMAL,
    colorClass: l = "",
    ...s
  } = e;
  return (0, r.jsx)("svg", {
    ...(0, a.default)(s),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, r.jsx)("path", {
      fill: "string" == typeof i ? i : i.css,
      fillRule: "evenodd",
      d: "M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-2 0a9 9 0 0 1-14.62 7.03L19.03 6.38A8.96 8.96 0 0 1 21 12ZM4.97 17.62 17.62 4.97A9 9 0 0 0 4.97 17.62Z",
      clipRule: "evenodd",
      className: l
    })
  })
}