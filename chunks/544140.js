var l = n("796581"),
  r = n("149912");
e.exports = function e(t, n, a, s, i) {
  var u = -1,
    o = t.length;
  for (a || (a = r), i || (i = []); ++u < o;) {
    var c = t[u];
    n > 0 && a(c) ? n > 1 ? e(c, n - 1, a, s, i) : l(i, c) : !s && (i[i.length] = c)
  }
  return i
}