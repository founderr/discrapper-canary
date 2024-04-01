"use strict";
s.r(t), s.d(t, {
  ExperimentalLootboxIcon: function() {
    return i
  }
});
var a = s("735250");
s("470079");
var n = s("692547"),
  l = s("331595");
let i = e => {
  let {
    width: t = 24,
    height: s = 24,
    color: i = n.default.colors.INTERACTIVE_NORMAL,
    colorClass: r = "",
    ...o
  } = e;
  return (0, a.jsx)("svg", {
    ...(0, l.default)(o),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: s,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, a.jsx)("path", {
      fill: "string" == typeof i ? i : i.css,
      d: "M23 6a3 3 0 0 0-3-3H4a3 3 0 0 0-3 3v4.5c0 .28.22.5.5.5h7c.22 0 .41-.14.5-.34.53-1.3 1.68-2.41 3-2.41s2.47 1.11 3 2.4c.09.2.28.35.5.35h7a.5.5 0 0 0 .5-.5V6ZM23 13.5a.5.5 0 0 0-.5-.5h-7c-.22 0-.41.14-.5.34-.53 1.3-1.68 2.41-3 2.41s-2.47-1.11-3-2.4a.54.54 0 0 0-.5-.35h-7a.5.5 0 0 0-.5.5V18a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3v-4.5Z",
      className: r
    })
  })
}