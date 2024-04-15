"use strict";
n.r(t);
var a = n("735250");
n("470079");
var l = n("960259"),
  s = n("8386"),
  i = n("325767");
t.default = (0, l.replaceIcon)(function(e) {
  let {
    width: t = 18,
    height: n = 18,
    color: l = "currentColor",
    foreground: s,
    ...r
  } = e;
  return (0, a.jsx)("svg", {
    ...(0, i.default)(r),
    width: t,
    height: n,
    viewBox: "0 0 18 18",
    children: (0, a.jsx)("polygon", {
      fillRule: "nonzero",
      className: s,
      fill: l,
      points: "15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8"
    })
  })
}, s.PlusSmallIcon, void 0, {
  size: 18
})