t.exports = function(t, n, r, i) {
  for (var o = -1, u = null == t ? 0 : t.length; ++o < u;) {
    var e = t[o];
    n(i, e, r(e), t)
  }
  return i
}