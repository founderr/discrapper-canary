"use strict";
t.r(n), t.d(n, {
  MobilePhoneIcon: function() {
    return l
  }
});
var r = t("735250");
t("470079");
var s = t("692547"),
  o = t("331595");
let l = e => {
  let {
    width: n = 24,
    height: t = 24,
    color: l = s.default.colors.INTERACTIVE_NORMAL,
    colorClass: i = "",
    ...a
  } = e;
  return (0, r.jsx)("svg", {
    ...(0, o.default)(a),
    xmlns: "http://www.w3.org/2000/svg",
    width: n,
    height: t,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, r.jsx)("path", {
      fill: "string" == typeof l ? l : l.css,
      fillRule: "evenodd",
      d: "M5 4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V4Zm5 16a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1ZM8 3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H8Z",
      clipRule: "evenodd",
      className: i
    })
  })
}