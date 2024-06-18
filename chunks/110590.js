"use strict";
n.d(t, {
  O: function() {
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
      d: "M7.3 2.3a1 1 0 0 1 1.4 0l5 5a1 1 0 0 1-1.4 1.4L9 5.42V11a7 7 0 0 0 7 7h4a1 1 0 1 1 0 2h-4a9 9 0 0 1-9-9V5.41l-3.3 3.3a1 1 0 0 1-1.4-1.42l5-5Z",
      className: c
    })
  })
}