s.d(t, {
  Z: function() {
    return i
  }
});
var n = s(735250);
s(470079);
var a = s(325767);

function i(e) {
  let {
    width: t = 80,
    height: s = 20,
    color: i = "currentColor",
    foreground: r,
    ...l
  } = e;
  return (0, n.jsxs)("svg", {
    ...(0, a.Z)(l),
    width: t,
    height: s,
    viewBox: "0 0 ".concat(t, " ").concat(s),
    children: [(0, n.jsx)("pattern", {
      id: "pill-frame-pattern",
      width: 8 / t,
      height: "1",
      children: (0, n.jsx)("path", {
        d: "m0 0h8v20h-8zm4 2c-1.1045695 0-2 .8954305-2 2v12c0 1.1045695.8954305 2 2 2s2-.8954305 2-2v-12c0-1.1045695-.8954305-2-2-2z",
        fillRule: "evenodd",
        fill: i,
        className: r
      })
    }), (0, n.jsx)("rect", {
      fill: "url(#pill-frame-pattern)",
      height: "100%",
      width: "100%"
    })]
  })
}