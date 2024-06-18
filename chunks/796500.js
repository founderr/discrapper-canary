"use strict";
n.d(t, {
  z: function() {
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
      d: "M6 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V5.41l-6.64 6.64A4.66 4.66 0 0 0 4 15.35V17a3 3 0 0 0 3 3 1 1 0 1 1 0 2 5 5 0 0 1-5-5v-1.66c0-1.76.7-3.46 1.95-4.7L10.59 4H7a1 1 0 0 1-1-1Z",
      className: c
    }), (0, i.jsx)("path", {
      fill: "string" == typeof _ ? _ : _.css,
      d: "M18 21a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-6a1 1 0 1 1 2 0v3.59l6.64-6.64A4.66 4.66 0 0 0 20 8.65V7a3 3 0 0 0-3-3 1 1 0 1 1 0-2 5 5 0 0 1 5 5v1.66c0 1.76-.7 3.46-1.95 4.7L13.41 20H17a1 1 0 0 1 1 1Z",
      className: c
    })]
  })
}