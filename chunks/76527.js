"use strict";
n.r(e), n.d(e, {
  ChatIcon: function() {
    return s
  }
});
var i = n("37983");
n("884691");
var r = n("669491"),
  l = n("82169");
let s = t => {
  let {
    width: e = 24,
    height: n = 24,
    color: s = r.default.colors.INTERACTIVE_NORMAL,
    colorClass: a = "",
    ...o
  } = t;
  return (0, i.jsx)("svg", {
    ...(0, l.default)(o),
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, i.jsx)("path", {
      fill: "string" == typeof s ? s : s.css,
      d: "M12 22a10 10 0 1 0-8.45-4.64c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12Z",
      className: a
    })
  })
}