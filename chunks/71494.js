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
      d: "M4.56 4.22A2.83 2.83 0 0 0 3 6.75v3.03c0 5.6 3.3 10.69 8.42 12.96.37.17.79.17 1.16 0A14.19 14.19 0 0 0 21 9.78V6.75c0-1.07-.6-2.05-1.56-2.53l-6.1-3.05a3 3 0 0 0-2.68 0l-6.1 3.05ZM14 11a2 2 0 0 1-1 1.73v2.77a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-2.77A2 2 0 1 1 14 11Z",
      clipRule: "evenodd",
      className: c
    })
  })
}