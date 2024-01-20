"use strict";
e.exports = function(e, t) {
  var n = t.length,
    i = e.length;
  if (i > n) return !1;
  if (i === n) return e === t;
  e: for (var s = 0, l = 0; s < i; s++) {
    for (var r = e.charCodeAt(s); l < n;)
      if (t.charCodeAt(l++) === r) continue e;
    return !1
  }
  return !0
}