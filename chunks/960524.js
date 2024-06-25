"use strict";
n.d(t, {
  g: function() {
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
    secondaryColor: _ = "transparent",
    secondaryColorClass: c = "",
    color: d = r.Z.colors.INTERACTIVE_NORMAL,
    colorClass: E = "",
    ...I
  } = e, T = (0, o.m)(a), h = null !== (t = null == T ? void 0 : T.width) && void 0 !== t ? t : l, f = null !== (n = null == T ? void 0 : T.height) && void 0 !== n ? n : u;
  return (0, i.jsxs)("svg", {
    ...(0, s.Z)(I),
    xmlns: "http://www.w3.org/2000/svg",
    width: h,
    height: f,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [(0, i.jsx)("circle", {
      cx: "12",
      cy: "12",
      r: "10",
      fill: "string" == typeof _ ? _ : _.css,
      className: c
    }), (0, i.jsx)("path", {
      fill: "string" == typeof d ? d : d.css,
      fillRule: "evenodd",
      d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22ZM9 8.09c0-.88 1-1.4 1.73-.9l5.8 3.91c.63.44.63 1.36 0 1.8l-5.8 3.9C10 17.3 9 16.8 9 15.92V8.1Z",
      clipRule: "evenodd",
      className: E
    })]
  })
}