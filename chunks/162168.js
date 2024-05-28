"use strict";
s.r(t), s.d(t, {
  default: function() {
    return l
  }
});
var a = s("735250");
s("470079");
var n = s("325767");

function l(e) {
  let {
    width: t = 80,
    height: s = 20,
    color: l = "currentColor",
    foreground: i,
    ...r
  } = e;
  return (0, a.jsxs)("svg", {
    ...(0, n.default)(r),
    width: t,
    height: s,
    viewBox: "0 0 ".concat(t, " ").concat(s),
    children: [(0, a.jsx)("pattern", {
      id: "pill-frame-pattern",
      width: 8 / t,
      height: "1",
      children: (0, a.jsx)("path", {
        d: "m0 0h8v20h-8zm4 2c-1.1045695 0-2 .8954305-2 2v12c0 1.1045695.8954305 2 2 2s2-.8954305 2-2v-12c0-1.1045695-.8954305-2-2-2z",
        fillRule: "evenodd",
        fill: l,
        className: i
      })
    }), (0, a.jsx)("rect", {
      fill: "url(#pill-frame-pattern)",
      height: "100%",
      width: "100%"
    })]
  })
}