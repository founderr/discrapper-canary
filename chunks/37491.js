"use strict";
n.d(t, {
  c: function() {
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
      d: "M1 6a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v1H1V6Z",
      className: c
    }), (0, i.jsx)("path", {
      fill: "string" == typeof _ ? _ : _.css,
      fillRule: "evenodd",
      d: "M1 10h22v8a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-8Zm4 3a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H5Zm-1 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm13-4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Z",
      clipRule: "evenodd",
      className: c
    })]
  })
}