"use strict";
n.d(t, {
  W: function() {
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
      fillRule: "evenodd",
      d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h9c.1 0 .12-.11.04-.15a3 3 0 0 1-2.03-3.16c.04-.34-.2-.69-.55-.69H6a1 1 0 1 1 0-2h9.5a.5.5 0 0 0 .5-.5V15a3 3 0 0 1 .19-1.05c.15-.4-.11-.95-.54-.95H6a1 1 0 1 1 0-2h12a1 1 0 0 1 .88.52c.13.24.35.48.62.52A3 3 0 0 1 21.83 14v.02c.02.06.17.05.17-.02V5a3 3 0 0 0-3-3H5Zm1 4a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2H6Z",
      clipRule: "evenodd",
      className: c
    }), (0, i.jsx)("path", {
      fill: "string" == typeof _ ? _ : _.css,
      d: "M19 14a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
      className: c
    })]
  })
}