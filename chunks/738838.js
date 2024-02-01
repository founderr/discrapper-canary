"use strict";
var r = n("366400"),
  i = n("648352"),
  o = n("812095"),
  s = n("331543"),
  a = n("16662"),
  c = a(),
  u = n("60426"),
  l = o("Array.prototype.slice"),
  d = function(e, t) {
    return i(e), c.apply(e, l(arguments, 1))
  };
r(d, {
  getPolyfill: a,
  implementation: s,
  shim: u
}), e.exports = d