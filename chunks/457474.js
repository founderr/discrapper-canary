"use strict";
n.d(t, {
  l: function() {
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
      d: "M15 5a3 3 0 0 0-3-3 1 1 0 0 0-1 1v2a3 3 0 0 1-.19 1.05L6.55 8.93a7.9 7.9 0 0 0-3.26 8.4c.43 1.77 1.44 3.42 3.14 4.07.86.34 1.89.6 2.95.6h8.03a2.09 2.09 0 0 0 1.93-2.88l-.4-.97a.2.2 0 0 1 .08-.24l.54-.33a1.99 1.99 0 0 0 .8-2.44l-.43-1.02a.25.25 0 0 1 .03-.23l.6-.9a1.92 1.92 0 0 0-1.6-2.99h-5.39A8 8 0 0 0 15 5.44V5Z",
      className: c
    })
  })
}