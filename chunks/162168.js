"use strict";
a.r(t), a.d(t, {
  default: function() {
    return l
  }
});
var n = a("735250");
a("470079");
var s = a("325767");

function l(e) {
  let {
    width: t = 80,
    height: a = 20,
    color: l = "currentColor",
    foreground: i,
    ...r
  } = e;
  return (0, n.jsxs)("svg", {
    ...(0, s.default)(r),
    width: t,
    height: a,
    viewBox: "0 0 ".concat(t, " ").concat(a),
    children: [(0, n.jsx)("pattern", {
      id: "pill-frame-pattern",
      width: 8 / t,
      height: "1",
      children: (0, n.jsx)("path", {
        d: "m0 0h8v20h-8zm4 2c-1.1045695 0-2 .8954305-2 2v12c0 1.1045695.8954305 2 2 2s2-.8954305 2-2v-12c0-1.1045695-.8954305-2-2-2z",
        fillRule: "evenodd",
        fill: l,
        className: i
      })
    }), (0, n.jsx)("rect", {
      fill: "url(#pill-frame-pattern)",
      height: "100%",
      width: "100%"
    })]
  })
}