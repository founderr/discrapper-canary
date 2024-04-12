"use strict";
t.r(l), t.d(l, {
  CheckmarkBoldIcon: function() {
    return i
  }
});
var a = t("735250");
t("470079");
var s = t("692547"),
  n = t("331595");
let i = e => {
  let {
    width: l = 24,
    height: t = 24,
    color: i = s.default.colors.INTERACTIVE_NORMAL,
    colorClass: o = "",
    ...d
  } = e;
  return (0, a.jsx)("svg", {
    ...(0, n.default)(d),
    xmlns: "http://www.w3.org/2000/svg",
    width: l,
    height: t,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, a.jsx)("path", {
      fill: "string" == typeof i ? i : i.css,
      fillRule: "evenodd",
      d: "M22.06 4.94a1.5 1.5 0 0 1 0 2.12l-12 12a1.5 1.5 0 0 1-2.12 0l-6-6a1.5 1.5 0 0 1 2.12-2.12L9 15.88 19.94 4.94a1.5 1.5 0 0 1 2.12 0Z",
      clipRule: "evenodd",
      className: o
    })
  })
}