e.exports = function(e, t, n, i) {
  for (var r = -1, l = null == e ? 0 : e.length; ++r < l;) {
    var a = e[r];
    t(i, a, n(a), e)
  }
  return i
}