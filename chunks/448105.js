"use strict";
t.exports = function(t, e) {
  var n = e.length,
    i = t.length;
  if (i > n) return !1;
  if (i === n) return t === e;
  t: for (var r = 0, l = 0; r < i; r++) {
    for (var s = t.charCodeAt(r); l < n;)
      if (e.charCodeAt(l++) === s) continue t;
    return !1
  }
  return !0
}