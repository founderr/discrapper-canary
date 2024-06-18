var r = t(796581),
  o = t(149912);
e.exports = function e(n, t, i, s, l) {
  var c = -1,
    u = n.length;
  for (i || (i = o), l || (l = []); ++c < u;) {
    var a = n[c];
    t > 0 && i(a) ? t > 1 ? e(a, t - 1, i, s, l) : r(l, a) : !s && (l[l.length] = a)
  }
  return l
}