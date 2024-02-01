n("70102");
var r = n("596659"),
  i = n("664813"),
  o = n("488274"),
  s = n("746067"),
  a = n("963130"),
  c = n("839309"),
  u = n("533971"),
  l = n("422077"),
  d = n("912065").Buffer;
e.exports = function(e, t, n) {
  f = e.padding ? e.padding : n ? 1 : 4;
  var f, p, h = r(e);
  if (4 === f) p = function(e, t) {
    var n = e.modulus.byteLength(),
      r = t.length,
      u = o("sha1").update(d.alloc(0)).digest(),
      l = u.length,
      f = 2 * l;
    if (r > n - f - 2) throw Error("message too long");
    var p = d.alloc(n - r - f - 2),
      h = n - l - 1,
      v = i(l),
      g = a(d.concat([u, p, d.alloc(1, 1), t], h), s(v, h)),
      b = a(v, s(g, l));
    return new c(d.concat([d.alloc(1), b, g], n))
  }(h, t);
  else if (1 === f) p = function(e, t, n) {
    var r, o = t.length,
      s = e.modulus.byteLength();
    if (o > s - 11) throw Error("message too long");
    return r = n ? d.alloc(s - o - 3, 255) : function(e) {
      for (var t, n = d.allocUnsafe(e), r = 0, o = i(2 * e), s = 0; r < e;) s === o.length && (o = i(2 * e), s = 0), (t = o[s++]) && (n[r++] = t);
      return n
    }(s - o - 3), new c(d.concat([d.from([0, n ? 1 : 2]), r, d.alloc(1), t], s))
  }(h, t, n);
  else if (3 === f) {
    if ((p = new c(t)).cmp(h.modulus) >= 0) throw Error("data too long for modulus")
  } else throw Error("unknown padding");
  return n ? l(p, h) : u(p, h)
}