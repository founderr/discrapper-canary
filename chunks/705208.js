"use strict";
n.d(t, {
  $: function() {
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
      d: "M13 7a3 3 0 0 0 2.98-3.31c-.03-.35.21-.69.56-.69H19a3 3 0 0 1 3 3v5.82c0 .2-.14.4-.33.49h-.02a.58.58 0 0 1-.44.05 7 7 0 0 0-9.08 7.99c.06.33-.18.65-.51.65H7a3 3 0 0 1-3-3v-2.5c0-.28-.23-.5-.5-.54a3 3 0 0 1 0-5.92c.27-.04.5-.26.5-.54V6a3 3 0 0 1 3-3h2.46c.35 0 .6.34.56.69L10 4a3 3 0 0 0 3 3Z",
      className: c
    }), (0, i.jsx)("path", {
      fill: "string" == typeof _ ? _ : _.css,
      d: "M19 16a3 3 0 1 0 1.98 5.25 1 1 0 1 1 1.33 1.5A4.98 4.98 0 0 1 14 19a5 5 0 0 1 8-4 1 1 0 0 1 2 0v3a1 1 0 0 1-1 1h-3a1 1 0 1 1 0-2h1.24A3 3 0 0 0 19 16Z",
      className: c
    })]
  })
}