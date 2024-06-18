"use strict";
n.d(t, {
  L: function() {
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
      d: "m19.7.3 4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4-1.4L20.58 6H15a1 1 0 1 1 0-2h5.59l-2.3-2.3A1 1 0 0 1 19.71.3Z",
      fill: "string" == typeof _ ? _ : _.css,
      className: c
    }), (0, i.jsx)("path", {
      d: "M12.62 2.05c.41.06.46.61.17.92A3 3 0 0 0 15 8h.51c.28 0 .5.22.5.5V10a4 4 0 1 1-8 0V6a4 4 0 0 1 4.62-3.95Z",
      fill: "string" == typeof _ ? _ : _.css,
      className: c
    }), (0, i.jsx)("path", {
      d: "M17.56 12.27a.63.63 0 0 1 .73-.35c.21.05.43.08.65.08.38 0 .72.35.6.7A8 8 0 0 1 13 17.94V20h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-2.06A8 8 0 0 1 4 10a1 1 0 0 1 2 0 6 6 0 0 0 11.56 2.27Z",
      fill: "string" == typeof _ ? _ : _.css,
      className: c
    })]
  })
}