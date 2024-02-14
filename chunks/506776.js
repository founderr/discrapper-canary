"use strict";
n("781738"), n("424973");
e.exports = function(e, t, n, r) {
  t = t || "&", n = n || "=";
  var a = {};
  if ("string" != typeof e || 0 === e.length) return a;
  var o = /\+/g;
  e = e.split(t);
  var i = 1e3;
  r && "number" == typeof r.maxKeys && (i = r.maxKeys);
  var s = e.length;
  i > 0 && s > i && (s = i);
  for (var c = 0; c < s; ++c) {
    var l, u, d, p, f, h, m = e[c].replace(o, "%20"),
      v = m.indexOf(n);
    if (v >= 0 ? (d = m.substr(0, v), p = m.substr(v + 1)) : (d = m, p = ""), f = decodeURIComponent(d), h = decodeURIComponent(p), l = a, u = f, Object.prototype.hasOwnProperty.call(l, u)) Array.isArray(a[f]) ? a[f].push(h) : a[f] = [a[f], h];
    else a[f] = h
  }
  return a
}