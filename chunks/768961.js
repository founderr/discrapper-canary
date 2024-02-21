"use strict";
t.r(s), t.d(s, {
  GlobeEarthIcon: function() {
    return r
  }
});
var a = t("37983");
t("884691");
var l = t("669491"),
  n = t("82169");
let r = e => {
  let {
    width: s = 24,
    height: t = 24,
    color: r = l.default.colors.INTERACTIVE_NORMAL,
    colorClass: c = "",
    ...i
  } = e;
  return (0, a.jsx)("svg", {
    ...(0, n.default)(i),
    xmlns: "http://www.w3.org/2000/svg",
    width: s,
    height: t,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, a.jsx)("path", {
      fill: "string" == typeof r ? r : r.css,
      fillRule: "evenodd",
      d: "M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-4.16 5.85A9 9 0 0 0 15 3.52V4a3 3 0 0 1-3 3h-.77c-.13 0-.23.1-.23.23A2.77 2.77 0 0 1 8.23 10c-.13 0-.23.1-.23.23v1.52c0 .14.11.25.25.25H13a3 3 0 0 1 3 3v.77c0 .13.1.23.23.23 1.2 0 2.23.77 2.61 1.85ZM3.18 10.18A9 9 0 0 0 11 20.94v-2.7c0-.14-.1-.24-.23-.24h-.65A2.12 2.12 0 0 1 8 15.88c0-.56-.22-1.1-.62-1.5l-4.2-4.2Z",
      clipRule: "evenodd",
      className: c
    })
  })
}