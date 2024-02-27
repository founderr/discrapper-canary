"use strict";
t.exports = function(t, n) {
  var r = n.length,
    i = t.length;
  if (i > r) return !1;
  if (i === r) return t === n;
  t: for (var o = 0, u = 0; o < i; o++) {
    for (var e = t.charCodeAt(o); u < r;)
      if (n.charCodeAt(u++) === e) continue t;
    return !1
  }
  return !0
}