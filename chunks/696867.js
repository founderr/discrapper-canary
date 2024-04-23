"use strict";
t.r(l), t.d(l, {
  CheckmarkBoldIcon: function() {
    return n
  }
});
var s = t("735250");
t("470079");
var a = t("692547"),
  o = t("331595");
let n = e => {
  let {
    width: l = 24,
    height: t = 24,
    color: n = a.default.colors.INTERACTIVE_NORMAL,
    colorClass: i = "",
    ...d
  } = e;
  return (0, s.jsx)("svg", {
    ...(0, o.default)(d),
    xmlns: "http://www.w3.org/2000/svg",
    width: l,
    height: t,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, s.jsx)("path", {
      fill: "string" == typeof n ? n : n.css,
      fillRule: "evenodd",
      d: "M22.06 4.94a1.5 1.5 0 0 1 0 2.12l-12 12a1.5 1.5 0 0 1-2.12 0l-6-6a1.5 1.5 0 0 1 2.12-2.12L9 15.88 19.94 4.94a1.5 1.5 0 0 1 2.12 0Z",
      clipRule: "evenodd",
      className: i
    })
  })
}