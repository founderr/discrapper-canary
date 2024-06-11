"use strict";
n.r(t);
var r = n("776914"),
  i = n("97445"),
  a = n("175056"),
  o = n("532455"),
  s = n("429296"),
  u = n("676067"),
  c = Object.prototype.hasOwnProperty;
t.default = function(e, t) {
  var n = (0, a.default)(e),
    l = !n && (0, i.default)(e),
    d = !n && !l && (0, o.default)(e),
    f = !n && !l && !d && (0, u.default)(e),
    p = n || l || d || f,
    h = p ? (0, r.default)(e.length, String) : [],
    m = h.length;
  for (var g in e)(t || c.call(e, g)) && !(p && ("length" == g || d && ("offset" == g || "parent" == g) || f && ("buffer" == g || "byteLength" == g || "byteOffset" == g) || (0, s.default)(g, m))) && h.push(g);
  return h
}