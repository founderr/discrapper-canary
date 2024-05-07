"use strict";
n.r(t);
var l = n("735250");
n("470079");
var a = n("960259"),
  s = n("495056"),
  i = n("325767");
t.default = (0, a.replaceIcon)(function(e) {
  let {
    width: t = 16,
    height: n = 16,
    color: a = "currentColor",
    foreground: s,
    ...r
  } = e;
  return (0, l.jsx)("svg", {
    ...(0, i.default)(r),
    width: t,
    height: n,
    viewBox: "0 0 24 24",
    children: (0, l.jsx)("g", {
      fill: "none",
      fillRule: "evenodd",
      children: (0, l.jsx)("path", {
        className: s,
        fill: a,
        d: "M1,21 L23,21 L12,2 L1,21 L1,21 Z M13,18 L11,18 L11,16 L13,16 L13,18 L13,18 Z M13,14 L11,14 L11,10 L13,10 L13,14 L13,14 Z"
      })
    })
  })
}, s.WarningIcon, void 0, {
  size: 16
})