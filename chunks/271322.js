"use strict";
a.r(t);
var n = a("735250");
a("470079");
var s = a("960259"),
  l = a("594158"),
  i = a("886364"),
  r = a("325767");

function o(e) {
  return "CloudUpload-".concat(e)
}
t.default = (0, s.replaceIcon)(function(e) {
  let {
    width: t = 24,
    height: a = 24,
    color: s = "currentColor",
    foreground: l,
    gradientConfig: u,
    ...d
  } = e, c = null;
  return null != u && (c = (0, n.jsx)(i.default, {
    ...u,
    color: s,
    id: o(u.id)
  })), (0, n.jsxs)("svg", {
    ...(0, r.default)(d),
    width: t,
    height: a,
    viewBox: "0 0 24 24",
    children: [(0, n.jsx)("defs", {
      children: c
    }), (0, n.jsx)("path", {
      d: "M0 0h24v24H0z",
      fill: "none"
    }), (0, n.jsx)("path", {
      fill: null != u ? "url(#".concat(o(u.id), ")") : s,
      className: l,
      d: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"
    })]
  })
}, l.UploadIcon, void 0, {
  size: 24
})