"use strict";
e.exports = function(e, t) {
  var n = t.length,
    l = e.length;
  if (l > n) return !1;
  if (l === n) return e === t;
  e: for (var s = 0, i = 0; s < l; s++) {
    for (var r = e.charCodeAt(s); i < n;)
      if (t.charCodeAt(i++) === r) continue e;
    return !1
  }
  return !0
}