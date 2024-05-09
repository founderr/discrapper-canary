"use strict";
s.r(t);
var a = s("735250");
s("470079");
var n = s("960259"),
  i = s("495056"),
  E = s("325767");
t.default = (0, n.replaceIcon)(function(e) {
  let {
    width: t = 16,
    height: s = 16,
    color: n = "currentColor",
    foreground: i,
    ...l
  } = e;
  return (0, a.jsx)("svg", {
    ...(0, E.default)(l),
    width: t,
    height: s,
    viewBox: "0 0 24 24",
    children: (0, a.jsx)("g", {
      fill: "none",
      fillRule: "evenodd",
      children: (0, a.jsx)("path", {
        className: i,
        fill: n,
        d: "M1,21 L23,21 L12,2 L1,21 L1,21 Z M13,18 L11,18 L11,16 L13,16 L13,18 L13,18 Z M13,14 L11,14 L11,10 L13,10 L13,14 L13,14 Z"
      })
    })
  })
}, i.WarningIcon, void 0, {
  size: 16
})