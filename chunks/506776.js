"use strict";
r("781738"), r("424973");
t.exports = function(t, e, r, n) {
  e = e || "&", r = r || "=";
  var o = {};
  if ("string" != typeof t || 0 === t.length) return o;
  var i = /\+/g;
  t = t.split(e);
  var a = 1e3;
  n && "number" == typeof n.maxKeys && (a = n.maxKeys);
  var u = t.length;
  a > 0 && u > a && (u = a);
  for (var l = 0; l < u; ++l) {
    var s, c, p, f, y, h, d = t[l].replace(i, "%20"),
      b = d.indexOf(r);
    if (b >= 0 ? (p = d.substr(0, b), f = d.substr(b + 1)) : (p = d, f = ""), y = decodeURIComponent(p), h = decodeURIComponent(f), s = o, c = y, Object.prototype.hasOwnProperty.call(s, c)) Array.isArray(o[y]) ? o[y].push(h) : o[y] = [o[y], h];
    else o[y] = h
  }
  return o
}