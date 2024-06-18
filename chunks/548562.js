"use strict";
n.d(t, {
  Q: function() {
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
      d: "M22.7 2.7a1 1 0 0 0-1.4-1.4l-20 20a1 1 0 1 0 1.4 1.4l20-20ZM4.5 1h13.17a.5.5 0 0 1 .36.85L4.62 15.25c-.2.22-.56.2-.6-.1A1 1 0 0 1 4 15v-.95a2 2 0 0 1 .61-1.44L8 9.35V5h-.91C5.39 5 4 3.48 4 1.6v-.1c0-.28.22-.5.5-.5ZM17.77 11.05a.5.5 0 0 0-.7 0l-4.1 4.1a.5.5 0 0 0 .36.85H19a1 1 0 0 0 1-1v-.95a2 2 0 0 0-.61-1.44l-1.62-1.56ZM11.08 17.25a.5.5 0 0 0-.36.15l-.36.37a.5.5 0 0 0-.14.46l.99 4.38a.5.5 0 0 0 .49.39h.6a.5.5 0 0 0 .49-.39l1.07-4.75a.5.5 0 0 0-.49-.61h-2.3Z",
      className: c
    })
  })
}