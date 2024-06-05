"use strict";
n.r(t), n.d(t, {
  getThemeColorMixValues: function() {
    return s
  }
}), n("47120");
var i = n("688619"),
  r = n.n(i);

function s(e) {
  let {
    enabled: t,
    primaryColor: n,
    secondaryColor: i,
    isDarkTheme: s,
    baseMixAmount: a = 30,
    textMixAmount: o = 40
  } = e, l = r()(n), u = r()(i), [d, _] = l.luminance() > u.luminance() ? [l, u] : [u, l], c = _.get("hsl.h");
  (0 === c || Number.isNaN(c)) && (_ = d);
  let E = s ? d.set("lch.l", 98).set("lch.c", 15) : _.set("lch.l", 10),
    I = s ? _.set("hsl.s", 1).set("hsl.l", .05) : d.set("hsl.s", 1).set("hsl.l", .94),
    [T, f, S] = I.hsl();
  return {
    "--custom-theme-mix-base-hsl": "".concat(Number.isNaN(T) ? 0 : T, " ").concat(100 * f, "% ").concat(100 * S, "%"),
    "--custom-theme-mix-base": I.css(),
    "--custom-theme-mix-text": E.css(),
    "--custom-theme-mix-amount-base": "".concat(t ? a : 0, "%"),
    "--custom-theme-mix-amount-text": "".concat(t ? o : 0, "%")
  }
}