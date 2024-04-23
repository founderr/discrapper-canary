e.exports = function(e, t, n, i) {
  for (var E = -1, r = null == e ? 0 : e.length; ++E < r;) {
    var o = e[E];
    t(i, o, n(o), e)
  }
  return i
}