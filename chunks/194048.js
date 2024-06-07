"use strict";
n.r(t), n.d(t, {
  WarningIcon: function() {
    return o
  }
});
var i = n("735250");
n("470079");
var E = n("692547"),
  r = n("331595");
let o = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: o = E.default.colors.INTERACTIVE_NORMAL,
    colorClass: l = "",
    ...s
  } = e;
  return (0, i.jsx)("svg", {
    ...(0, r.default)(s),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, i.jsx)("path", {
      fill: "string" == typeof o ? o : o.css,
      fillRule: "evenodd",
      d: "M10 3.1a2.37 2.37 0 0 1 4 0l8.71 14.75c.84 1.41-.26 3.15-2 3.15H3.29c-1.74 0-2.84-1.74-2-3.15L9.99 3.1Zm3.25 14.65a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM13.06 14l.37-5.94a1 1 0 0 0-1-1.06h-.87a1 1 0 0 0-1 1.06l.38 5.94a1.06 1.06 0 0 0 2.12 0Z",
      clipRule: "evenodd",
      className: l
    })
  })
}