"use strict";
e.exports = function(e, t) {
  var n = t.length,
    i = e.length;
  if (i > n) return !1;
  if (i === n) return e === t;
  e: for (var r = 0, l = 0; r < i; r++) {
    for (var u = e.charCodeAt(r); l < n;)
      if (t.charCodeAt(l++) === u) continue e;
    return !1
  }
  return !0
}