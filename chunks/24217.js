e.exports = function(e) {
  for (var t = -1, a = null == e ? 0 : e.length, s = 0, l = []; ++t < a;) {
    var r = e[t];
    r && (l[s++] = r)
  }
  return l
}