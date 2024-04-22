"use strict";
a.r(t);
var n = a("735250");
a("470079");
var s = a("960259"),
  l = a("495056"),
  i = a("325767");
t.default = (0, s.replaceIcon)(function(e) {
  let {
    width: t = 16,
    height: a = 16,
    color: s = "currentColor",
    foreground: l,
    ...r
  } = e;
  return (0, n.jsx)("svg", {
    ...(0, i.default)(r),
    width: t,
    height: a,
    viewBox: "0 0 24 24",
    children: (0, n.jsx)("g", {
      fill: "none",
      fillRule: "evenodd",
      children: (0, n.jsx)("path", {
        className: l,
        fill: s,
        d: "M1,21 L23,21 L12,2 L1,21 L1,21 Z M13,18 L11,18 L11,16 L13,16 L13,18 L13,18 Z M13,14 L11,14 L11,10 L13,10 L13,14 L13,14 Z"
      })
    })
  })
}, l.WarningIcon, void 0, {
  size: 16
})