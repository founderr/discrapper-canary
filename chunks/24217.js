e.exports = function(e) {
  for (var t = -1, a = null == e ? 0 : e.length, s = 0, r = []; ++t < a;) {
    var n = e[t];
    n && (r[s++] = n)
  }
  return r
}