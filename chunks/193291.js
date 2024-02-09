"use strict";
E.r(t), E.d(t, {
  MobilePhoneIcon: function() {
    return T
  }
});
var _ = E("37983");
E("884691");
var s = E("669491"),
  a = E("82169");
let T = e => {
  let {
    width: t = 24,
    height: E = 24,
    color: T = s.default.colors.INTERACTIVE_NORMAL,
    colorClass: n = "",
    ...A
  } = e;
  return (0, _.jsx)("svg", {
    ...(0, a.default)(A),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: E,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, _.jsx)("path", {
      fill: "string" == typeof T ? T : T.css,
      fillRule: "evenodd",
      d: "M5 4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V4Zm5 16a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1ZM8 3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H8Z",
      clipRule: "evenodd",
      className: n
    })
  })
}