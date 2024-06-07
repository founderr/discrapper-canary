"use strict";
E.r(t), E.d(t, {
  EnvelopeIcon: function() {
    return T
  }
});
var s = E("735250");
E("470079");
var _ = E("692547"),
  a = E("331595");
let T = e => {
  let {
    width: t = 24,
    height: E = 24,
    color: T = _.default.colors.INTERACTIVE_NORMAL,
    colorClass: A = "",
    ...n
  } = e;
  return (0, s.jsxs)("svg", {
    ...(0, a.default)(n),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: E,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [(0, s.jsx)("path", {
      fill: "string" == typeof T ? T : T.css,
      d: "M1.16 5.02c-.1.28.04.58.29.74l10.27 6.85a.5.5 0 0 0 .56 0l10.27-6.85c.25-.16.38-.46.29-.74A3 3 0 0 0 20 3H4a3 3 0 0 0-2.84 2.02Z",
      className: A
    }), (0, s.jsx)("path", {
      fill: "string" == typeof T ? T : T.css,
      d: "M23 8.8a.5.5 0 0 0-.78-.41l-9.53 6.35c-.42.28-.96.28-1.38 0L1.78 8.39A.5.5 0 0 0 1 8.8V18a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V8.8Z",
      className: A
    })]
  })
}