"use strict";
e.exports = function(e, t) {
  var n = t.length,
    i = e.length;
  if (i > n) return !1;
  if (i === n) return e === t;
  e: for (var r = 0, o = 0; r < i; r++) {
    for (var s = e.charCodeAt(r); o < n;)
      if (t.charCodeAt(o++) === s) continue e;
    return !1
  }
  return !0
}