"use strict";
n.d(t, {
  j: function() {
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
      d: "M8 1a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-6.46c0-.35-.34-.6-.69-.56-.2.03-.41.03-.62 0-.35-.03-.69.21-.69.56V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6.82c.2 0 .4-.14.49-.33a3 3 0 0 1 .8-1c.27-.22.23-.67-.11-.67H8Zm3 18a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Z",
      clipRule: "evenodd",
      className: c
    }), (0, i.jsx)("path", {
      fill: "string" == typeof _ ? _ : _.css,
      d: "M22 7a1 1 0 0 0-.3-.7l-3-3a1 1 0 1 0-1.4 1.4L18.58 6H18a7 7 0 0 0-7 7 1 1 0 1 0 2 0 5 5 0 0 1 5-5h.59l-1.3 1.3a1 1 0 0 0 1.42 1.4l3-3A1 1 0 0 0 22 7Z",
      className: c
    })]
  })
}