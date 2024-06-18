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
      d: "M3 5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3h-.13l.96 1.45a1 1 0 0 1-1.66 1.1L15.47 20H8.53l-1.7 2.55a1 1 0 0 1-1.67-1.1L6.13 20H6a3 3 0 0 1-3-3V5Zm5 11.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm9.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 5a1 1 0 0 1 1-1h5v8H6a1 1 0 0 1-1-1V5Zm8 7h5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-5v8Z",
      clipRule: "evenodd",
      className: c
    })
  })
}