"use strict";
n.d(t, {
  A: function() {
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
      d: "M18.94 21.06a1.5 1.5 0 1 0 2.12-2.12L14.12 12l6.94-6.94a1.5 1.5 0 1 0-2.12-2.12L12 9.88 5.06 2.94a1.5 1.5 0 1 0-2.12 2.12L9.88 12l-6.94 6.94a1.5 1.5 0 1 0 2.12 2.12L12 14.12l6.94 6.94Z",
      className: c
    })
  })
}