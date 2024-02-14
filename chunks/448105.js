"use strict";
e.exports = function(e, t) {
  var n = t.length,
    s = e.length;
  if (s > n) return !1;
  if (s === n) return e === t;
  e: for (var i = 0, a = 0; i < s; i++) {
    for (var l = e.charCodeAt(i); a < n;)
      if (t.charCodeAt(a++) === l) continue e;
    return !1
  }
  return !0
}