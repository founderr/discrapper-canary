"use strict";
e.exports = function(e, t) {
  var n = t.length,
    u = e.length;
  if (u > n) return !1;
  if (u === n) return e === t;
  e: for (var i = 0, a = 0; i < u; i++) {
    for (var l = e.charCodeAt(i); a < n;)
      if (t.charCodeAt(a++) === l) continue e;
    return !1
  }
  return !0
}