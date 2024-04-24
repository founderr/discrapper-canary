"use strict";
a.r(v), a.d(v, {
  useColorIsLowContrastAgainstClientBackground: function() {
    return i
  }
});
var t = a("780384"),
  l = a("866442"),
  e = a("410030");

function i(h) {
  let v = (0, e.default)();
  if (null == h || !(0, l.isValidHex)(h)) return !0;
  let {
    l: a
  } = (0, l.isValidHex)(h) ? (0, l.int2hslRaw)((0, l.hex2int)(h)) : {
    l: 0
  };
  return (0, t.isThemeDark)(v) && a < 30 || !(0, t.isThemeDark)(v) && a > 65
}