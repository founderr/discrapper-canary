"use strict";
t.r(s), t.d(s, {
  CloseSmallIcon: function() {
    return i
  }
});
var a = t("735250");
t("470079");
var r = t("692547"),
  l = t("331595");
let i = e => {
  let {
    width: s = 24,
    height: t = 24,
    color: i = r.default.colors.INTERACTIVE_NORMAL,
    colorClass: n = "",
    ...C
  } = e;
  return (0, a.jsx)("svg", {
    ...(0, l.default)(C),
    xmlns: "http://www.w3.org/2000/svg",
    width: s,
    height: t,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, a.jsx)("path", {
      fill: "string" == typeof i ? i : i.css,
      d: "M17.3 18.7a1 1 0 0 0 1.4-1.4L13.42 12l5.3-5.3a1 1 0 0 0-1.42-1.4L12 10.58l-5.3-5.3a1 1 0 0 0-1.4 1.42L10.58 12l-5.3 5.3a1 1 0 1 0 1.42 1.4L12 13.42l5.3 5.3Z",
      className: n
    })
  })
}