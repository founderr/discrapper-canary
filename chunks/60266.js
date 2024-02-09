e.exports = function(e, t, n, i) {
  for (var o = -1, r = null == e ? 0 : e.length; ++o < r;) {
    var E = e[o];
    t(i, E, n(E), e)
  }
  return i
}