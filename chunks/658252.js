"use strict";
t.r(n), t.d(n, {
  EnvelopeIcon: function() {
    return l
  }
});
var r = t("735250");
t("470079");
var s = t("692547"),
  o = t("331595");
let l = e => {
  let {
    width: n = 24,
    height: t = 24,
    color: l = s.default.colors.INTERACTIVE_NORMAL,
    colorClass: i = "",
    ...a
  } = e;
  return (0, r.jsxs)("svg", {
    ...(0, o.default)(a),
    xmlns: "http://www.w3.org/2000/svg",
    width: n,
    height: t,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [(0, r.jsx)("path", {
      fill: "string" == typeof l ? l : l.css,
      d: "M1.16 5.02c-.1.28.04.58.29.74l10.27 6.85a.5.5 0 0 0 .56 0l10.27-6.85c.25-.16.38-.46.29-.74A3 3 0 0 0 20 3H4a3 3 0 0 0-2.84 2.02Z",
      className: i
    }), (0, r.jsx)("path", {
      fill: "string" == typeof l ? l : l.css,
      d: "M23 8.8a.5.5 0 0 0-.78-.41l-9.53 6.35c-.42.28-.96.28-1.38 0L1.78 8.39A.5.5 0 0 0 1 8.8V18a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V8.8Z",
      className: i
    })]
  })
}