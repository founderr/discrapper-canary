e.exports = function(e, t, n, i) {
  for (var l = -1, r = null == e ? 0 : e.length; ++l < r;) {
    var a = e[l];
    t(i, a, n(a), e)
  }
  return i
}