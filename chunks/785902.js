e.exports = function(e, t, n, i) {
  for (var E = -1, I = null == e ? 0 : e.length; ++E < I;) {
    var S = e[E];
    t(i, S, n(S), e)
  }
  return i
}