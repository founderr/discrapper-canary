"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("14199"),
  i = n("780384"),
  l = n("981631");
let r = e => {
  let {
    theme: t,
    ...n
  } = e, r = (0, i.isThemeDark)(t) ? "dark" : "light";
  return (0, a.jsx)(s.default, {
    sitekey: l.RECAPTCHA_SITE_KEY,
    ...n,
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