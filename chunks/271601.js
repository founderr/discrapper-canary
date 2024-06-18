"use strict";
n.d(t, {
  R: function() {
    return a
  }
});
var i = n(735250);
n(470079);
var r = n(692547),
  s = n(331595),
  o = n(267843);
let a = e => {
  var t, n;
  let {
    size: a = "md",
    width: l,
    height: u,
    color: _ = r.Z.colors.INTERACTIVE_NORMAL,
    colorClass: c = "",
    ...d
  } = e, E = (0, o.m)(a), I = null !== (t = null == E ? void 0 : E.width) && void 0 !== t ? t : l, T = null !== (n = null == E ? void 0 : E.height) && void 0 !== n ? n : u;
  return (0, i.jsxs)("svg", {
    ...(0, s.Z)(d),
    xmlns: "http://www.w3.org/2000/svg",
    width: I,
    height: T,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [(0, i.jsx)("path", {
      fill: "string" == typeof _ ? _ : _.css,
      d: "M8 1a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h3.67c.38 0 .63-.42.52-.8A4 4 0 0 1 12 21v-3.5a.5.5 0 0 0-.5-.5H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8.5c0 .28.22.5.5.5h1a.5.5 0 0 0 .5-.5V4a3 3 0 0 0-3-3H8Z",
      className: c
    }), (0, i.jsx)("path", {
      fill: "string" == typeof _ ? _ : _.css,
      d: "M14 17c0-1.1.9-2 2-2h3a2 2 0 0 1 2 2v.36c0-.21.14-.4.34-.47l2-.67a.5.5 0 0 1 .66.47v4.62a.5.5 0 0 1-.66.47l-2-.67a.5.5 0 0 1-.34-.47V21a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-4Z",
      className: c
    })]
  })
}