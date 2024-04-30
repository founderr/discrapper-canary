"use strict";
a.r(t);
var n = a("735250");
a("470079");
var s = a("14199"),
  l = a("780384"),
  i = a("981631");
let r = e => {
  let {
    theme: t,
    ...a
  } = e, r = (0, l.isThemeDark)(t) ? "dark" : "light";
  return (0, n.jsx)(s.default, {
    sitekey: i.RECAPTCHA_SITE_KEY,
    ...a,
    theme: r
  })
};
r.Themes = {
  LIGHT: "light",
  DARK: "dark"
}, r.Sizes = {
  COMPACT: "compact",
  NORMAL: "normal",
  INVISIBLE: "invisible"
}, t.default = r