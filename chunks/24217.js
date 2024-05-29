e.exports = function(e) {
  for (var t = -1, a = null == e ? 0 : e.length, l = 0, s = []; ++t < a;) {
    var r = e[t];
    r && (s[l++] = r)
  }
  return s
}