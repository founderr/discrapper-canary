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
      d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3Z",
      className: c
    }), (0, i.jsx)("path", {
      fill: "string" == typeof _ ? _ : _.css,
      fillRule: "evenodd",
      d: "M19.53 6.47a.75.75 0 0 0-1.28.53v3.8l-2.76-2.37a.75.75 0 1 0-.98 1.14l3.42 2.93-3.42 2.93a.75.75 0 1 0 .98 1.14l2.76-2.37V18a.75.75 0 0 0 1.28.53l3-3a.75.75 0 0 0-.04-1.1l-2.25-1.93 2.25-1.93a.75.75 0 0 0 .04-1.1l-3-3Zm1.37 8.57-1.15-.98v2.13l1.15-1.15Zm-1.15-6.23v2.13l1.15-.98-1.15-1.15Z",
      clipRule: "evenodd",
      className: c
    })]
  })
}