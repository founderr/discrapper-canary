r.exports = function(r, n, p) {
  var a = -1,
    t = r.length;
  n < 0 && (n = -n > t ? 0 : t + n), (p = p > t ? t : p) < 0 && (p += t), t = n > p ? 0 : p - n >>> 0, n >>>= 0;
  for (var c = Array(t); ++a < t;) c[a] = r[a + n];
  return c
}