"use strict";
n.d(t, {
  I: function() {
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
      d: "M2 11a1 1 0 1 0 0 2h20a1 1 0 1 0 0-2H2ZM2 19a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4ZM3 10a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1ZM22 7a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V7ZM2 4c0-1.1.9-2 2-2a1 1 0 1 1 0 2 1 1 0 0 1-2 0ZM20 2a1 1 0 1 0 0 2 1 1 0 1 0 2 0 2 2 0 0 0-2-2ZM7 3a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1ZM14 2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Z",
      className: c
    })
  })
}