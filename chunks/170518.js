"use strict";
n.d(t, {
  t: function() {
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
      d: "M11.55 12.9c.28.17.62.17.9 0 1.15-.72 4.13-2.82 4.13-5.25a2.4 2.4 0 0 0-2.4-2.4c-.97 0-1.6.38-2.18.94a2.91 2.91 0 0 0-2.19-.94 2.4 2.4 0 0 0-2.4 2.4c0 2.43 2.99 4.53 4.14 5.25Z",
      className: c
    }), (0, i.jsx)("path", {
      fill: "string" == typeof _ ? _ : _.css,
      d: "M6.62 13a.62.62 0 0 0-.62.62c0 2.3 2.06 4.04 4.32 3.66l.68-.11V18a1 1 0 1 0 2 0v-.83l.68.11A3.71 3.71 0 0 0 18 13.62a.62.62 0 0 0-.62-.62h-1.5c-1.34 0-2.59.72-3.25 1.9L12 16l-.63-1.1A3.75 3.75 0 0 0 8.11 13h-1.5Z",
      className: c
    })]
  })
}