"use strict";
s.r(t), s.d(t, {
  EnvelopeIcon: function() {
    return E
  }
});
var a = s("735250");
s("470079");
var n = s("692547"),
  i = s("331595");
let E = e => {
  let {
    width: t = 24,
    height: s = 24,
    color: E = n.default.colors.INTERACTIVE_NORMAL,
    colorClass: l = "",
    ..._
  } = e;
  return (0, a.jsxs)("svg", {
    ...(0, i.default)(_),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: s,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [(0, a.jsx)("path", {
      fill: "string" == typeof E ? E : E.css,
      d: "M1.16 5.02c-.1.28.04.58.29.74l10.27 6.85a.5.5 0 0 0 .56 0l10.27-6.85c.25-.16.38-.46.29-.74A3 3 0 0 0 20 3H4a3 3 0 0 0-2.84 2.02Z",
      className: l
    }), (0, a.jsx)("path", {
      fill: "string" == typeof E ? E : E.css,
      d: "M23 8.8a.5.5 0 0 0-.78-.41l-9.53 6.35c-.42.28-.96.28-1.38 0L1.78 8.39A.5.5 0 0 0 1 8.8V18a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V8.8Z",
      className: l
    })]
  })
}