"use strict";
l.r(a), l.d(a, {
  useColorIsLowContrastAgainstClientBackground: function() {
    return s
  }
});
var t = l("780384"),
  i = l("866442"),
  n = l("410030");

function s(e) {
  let a = (0, n.default)();
  if (null == e || !(0, i.isValidHex)(e)) return !0;
  let {
    l: l
  } = (0, i.isValidHex)(e) ? (0, i.int2hslRaw)((0, i.hex2int)(e)) : {
    l: 0
  };
  return (0, t.isThemeDark)(a) && l < 30 || !(0, t.isThemeDark)(a) && l > 65
}