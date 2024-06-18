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
      d: "M7.55 2H5a3 3 0 0 0-3 3v.5c0 .28.22.5.5.5h2.8a.5.5 0 0 0 .4-.2l2.25-3a.5.5 0 0 0-.4-.8ZM15.95 2.8a.5.5 0 0 0-.4-.8h-4.29a.5.5 0 0 0-.4.2l-2.26 3A.5.5 0 0 0 9 6h4.3a.5.5 0 0 0 .4-.2l2.25-3ZM16.6 5.2a.5.5 0 0 0 .4.8h4.5a.5.5 0 0 0 .5-.5V5a3 3 0 0 0-2.73-2.99.46.46 0 0 0-.4.19l-2.27 3Z",
      className: c
    }), (0, i.jsx)("path", {
      fill: "string" == typeof _ ? _ : _.css,
      fillRule: "evenodd",
      d: "M2.5 8a.5.5 0 0 0-.5.5v10C2 20.43 3.34 22 5 22h14c1.66 0 3-1.57 3-3.5v-10a.5.5 0 0 0-.5-.5h-19Zm12.01 6.61-3.7-2.96a.5.5 0 0 0-.81.39v5.92c0 .42.48.65.81.39l3.7-2.96a.5.5 0 0 0 0-.78Z",
      clipRule: "evenodd",
      className: c
    })]
  })
}