n.d(t, {
  Z: function() {
    return r
  }
});
var s = n(735250);
n(470079);
var i = n(886364),
  l = n(325767);

function a(e) {
  return "CloudDone-".concat(e)
}

function r(e) {
  let {
    width: t = 24,
    height: n = 24,
    color: r = "currentColor",
    foreground: o,
    gradientConfig: c,
    ...u
  } = e, d = null;
  return null != c && (d = (0, s.jsx)(i.Z, {
    ...c,
    color: r,
    id: a(c.id)
  })), (0, s.jsxs)("svg", {
    ...(0, l.Z)(u),
    width: t,
    height: n,
    viewBox: "0 0 24 24",
    children: [(0, s.jsx)("defs", {
      children: d
    }), (0, s.jsx)("path", {
      d: "M0 0h24v24H0z",
      fill: "none"
    }), (0, s.jsx)("path", {
      fill: null != c ? "url(#".concat(a(c.id), ")") : r,
      className: o,
      d: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17 15.18 9l1.41 1.41L10 17z"
    })]
  })
}