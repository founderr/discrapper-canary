n("70102");
var r = n("912065").Buffer,
  i = n("708893");
e.exports = function(e, t, n, o) {
  if (!r.isBuffer(e) && (e = r.from(e, "binary")), t && (!r.isBuffer(t) && (t = r.from(t, "binary")), 8 !== t.length)) throw RangeError("salt should be Buffer with 8 byte length");
  for (var s = n / 8, a = r.alloc(s), c = r.alloc(o || 0), u = r.alloc(0); s > 0 || o > 0;) {
    var l = new i;
    l.update(u), l.update(e), t && l.update(t), u = l.digest();
    var d = 0;
    if (s > 0) {
      var f = a.length - s;
      d = Math.min(s, u.length), u.copy(a, f, 0, d), s -= d
    }
    if (d < u.length && o > 0) {
      var p = c.length - o,
        h = Math.min(o, u.length - d);
      u.copy(c, p, d, d + h), o -= h
    }
  }
  return u.fill(0), {
    key: a,
    iv: c
  }
}