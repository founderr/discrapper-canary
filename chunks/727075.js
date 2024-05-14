"use strict";
n.r(t), n.d(t, {
  CloseSmallIcon: function() {
    return s
  }
});
var i = n("735250");
n("470079");
var l = n("692547"),
  r = n("331595");
let s = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: s = l.default.colors.INTERACTIVE_NORMAL,
    colorClass: a = "",
    ...o
  } = e;
  return (0, i.jsx)("svg", {
    ...(0, r.default)(o),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, i.jsx)("path", {
      fill: "string" == typeof s ? s : s.css,
      d: "M17.3 18.7a1 1 0 0 0 1.4-1.4L13.42 12l5.3-5.3a1 1 0 0 0-1.42-1.4L12 10.58l-5.3-5.3a1 1 0 0 0-1.4 1.42L10.58 12l-5.3 5.3a1 1 0 1 0 1.42 1.4L12 13.42l5.3 5.3Z",
      className: a
    })
  })
}