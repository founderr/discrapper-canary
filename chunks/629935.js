"use strict";
n.r(t), n.d(t, {
  getThemeColorMixValues: function() {
    return a
  }
}), n("47120");
var i = n("688619"),
  r = n.n(i);

function s(e) {
  let {
    primaryColor: t,
    secondaryColor: n,
    isDarkTheme: i
  } = e, s = r()(t), a = r()(n), [o, l] = s.luminance() > a.luminance() ? [s, a] : [a, s], u = l.get("hsl.h");
  (0 === u || Number.isNaN(u)) && (l = o);
  let d = i ? o.set("hsl.s", 1) : l.set("hsl.s", 1),
    _ = d.get("hsl.h");
  return d = d.set("hsl.l", _ >= 200 && _ <= 300 ? i ? .8 : .25 : i ? .95 : .15), {
    base: i ? l.set("hsl.s", 1).set("hsl.l", .05) : o.set("hsl.s", 1).set("hsl.l", .9),
    text: d
  }
}

function a(e) {
  let {
    enabled: t,
    primaryColor: n,
    secondaryColor: i,
    baseMixAmount: r = 50,
    textMixAmount: a = 38
  } = e, {
    base: l,
    text: u
  } = s({
    primaryColor: n,
    secondaryColor: i,
    isDarkTheme: !0
  }), {
    base: d,
    text: _
  } = s({
    primaryColor: n,
    secondaryColor: i,
    isDarkTheme: !1
  });
  return {
    "--theme-base-color-light-hsl": o(d),
    "--theme-base-color-light": d.css(),
    "--theme-text-color-light": _.css(),
    "--theme-base-color-dark-hsl": o(l),
    "--theme-base-color-dark": l.css(),
    "--theme-text-color-dark": u.css(),
    "--theme-base-color-amount": "".concat(t ? r : 0, "%"),
    "--theme-text-color-amount": "".concat(t ? a : 0, "%"),
    "--bg-overlay-selected": "unset",
    "--bg-overlay-hover": "unset",
    "--bg-overlay-active": "unset"
  }
}

function o(e) {
  let [t, n, i] = e.hsl();
  return "".concat(Number.isNaN(t) ? 0 : t, " ").concat(100 * n, "% ").concat(100 * i, "%")
}