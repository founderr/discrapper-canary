"use strict";
e.exports = function(e, t) {
  var n = t.length,
    l = e.length;
  if (l > n) return !1;
  if (l === n) return e === t;
  e: for (var i = 0, s = 0; i < l; i++) {
    for (var r = e.charCodeAt(i); s < n;)
      if (t.charCodeAt(s++) === r) continue e;
    return !1
  }
  return !0
}