"use strict";
var n = r("911718"),
  o = r("307904"),
  i = r("638839")(),
  a = r("293471"),
  u = n("%TypeError%"),
  l = n("%Math.floor%");
t.exports = function(t, e) {
  if ("function" != typeof t) throw new u("`fn` is not a function");
  if ("number" != typeof e || e < 0 || e > 4294967295 || l(e) !== e) throw new u("`length` must be a positive 32-bit integer");
  var r = arguments.length > 2 && !!arguments[2],
    n = !0,
    s = !0;
  if ("length" in t && a) {
    var c = a(t, "length");
    c && !c.configurable && (n = !1), c && !c.writable && (s = !1)
  }
  return (n || s || !r) && (i ? o(t, "length", e, !0, !0) : o(t, "length", e)), t
}