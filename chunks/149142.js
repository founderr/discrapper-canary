"use strict";
n.d(t, {
  H: function() {
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
      d: "M18.31 6.2A5.04 5.04 0 0 1 16.06 2h-3.55v14.47a3 3 0 0 1-2.98 2.92 3.04 3.04 0 0 1 0-6.07c.3 0 .6.05.88.14V9.77A6.6 6.6 0 0 0 3 16.35c0 2.25 1.1 4.24 2.79 5.45A6.42 6.42 0 0 0 9.53 23a6.6 6.6 0 0 0 6.53-6.65V9.02A8.34 8.34 0 0 0 21 10.63v-3.6c-1 0-1.91-.3-2.69-.82Z",
      className: c
    })
  })
}