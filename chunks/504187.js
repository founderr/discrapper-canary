"use strict";
var r = n("407611"),
  i = n("37549"),
  o = r() && i("%Object.defineProperty%", !0),
  s = r.hasArrayLengthDefineBug(),
  a = s && n("291025"),
  c = n("812095")("Object.prototype.propertyIsEnumerable");
e.exports = function(e, t, n, r, i, u) {
  if (!o) {
    if (!e(u) || !u["[[Configurable]]"] || !u["[[Writable]]"] || i in r && c(r, i) !== !!u["[[Enumerable]]"]) return !1;
    var l = u["[[Value]]"];
    return r[i] = l, t(r[i], l)
  }
  return s && "length" === i && "[[Value]]" in u && a(r) && r.length !== u["[[Value]]"] ? (r.length = u["[[Value]]"], r.length === u["[[Value]]"]) : (o(r, i, n(u)), !0)
}