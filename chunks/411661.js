"use strict";
n.d(t, {
  y: function() {
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
  return (0, i.jsx)("svg", {
    ...(0, s.Z)(d),
    xmlns: "http://www.w3.org/2000/svg",
    width: I,
    height: T,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, i.jsx)("path", {
      fill: "string" == typeof _ ? _ : _.css,
      fillRule: "evenodd",
      d: "M4.46 5.03A4 4 0 0 1 8.34 2h7.32a4 4 0 0 1 3.88 3.03L20.78 10H22a1 1 0 1 1 0 2h-.54c.35.59.54 1.27.54 2v4a2 2 0 0 1-1 1.73V21a1 1 0 1 1-2 0v-1H5v1a1 1 0 1 1-2 0v-1.27A2 2 0 0 1 2 18v-4c0-.73.2-1.41.54-2H2a1 1 0 1 1 0-2h1.22l1.24-4.97Zm13.14.48L18.72 10H5.28L6.4 5.51A2 2 0 0 1 8.34 4h7.32a2 2 0 0 1 1.94 1.51ZM10 14a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4Zm-6 1a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm14-1a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2h-1Z",
      clipRule: "evenodd",
      className: c
    })
  })
}