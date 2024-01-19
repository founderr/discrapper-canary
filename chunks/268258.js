"use strict";
l("222007"), Object.defineProperty(t, "__esModule", {
  value: !0
}), t.stringSimilarity = void 0;
t.stringSimilarity = function(e, t, l, n) {
  if (void 0 === l && (l = 2), void 0 === n && (n = !1), !n && (e = e.toLowerCase(), t = t.toLowerCase()), e.length < l || t.length < l) return 0;
  for (var s = new Map, a = 0; a < e.length - (l - 1); a++) {
    var r = e.substr(a, l);
    s.set(r, s.has(r) ? s.get(r) + 1 : 1)
  }
  for (var i = 0, u = 0; u < t.length - (l - 1); u++) {
    var o = t.substr(u, l),
      d = s.has(o) ? s.get(o) : 0;
    d > 0 && (s.set(o, d - 1), i++)
  }
  return 2 * i / (e.length + t.length - (l - 1) * 2)
}, t.default = t.stringSimilarity