"use strict";
a.r(t), a.d(t, {
  FireIcon: function() {
    return i
  }
});
var n = a("735250");
a("470079");
var r = a("692547"),
  l = a("331595");
let i = e => {
  let {
    width: t = 24,
    height: a = 24,
    color: i = r.default.colors.INTERACTIVE_NORMAL,
    colorClass: o = "",
    ...s
  } = e;
  return (0, n.jsx)("svg", {
    ...(0, l.default)(s),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: a,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, n.jsx)("path", {
      fill: "string" == typeof i ? i : i.css,
      fillRule: "evenodd",
      d: "M3 14a9 9 0 1 0 18 0c0-2.63-.61-5.22-1.79-7.58L18.2 4.38a.7.7 0 0 0-1.3.18l-.78 3.9a.66.66 0 0 1-1.27.11L12.22 1.6a.9.9 0 0 0-1.48-.33l-4.2 4.2A12.07 12.07 0 0 0 3 14Zm9.26-.84a.57.57 0 0 0-1-.23L9.6 15a3.08 3.08 0 1 0 5.12.48c-.14-.26-.5-.28-.71-.06L13 16.5l-.74-3.34Z",
      clipRule: "evenodd",
      className: o
    })
  })
}