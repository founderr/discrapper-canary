e.exports = function(e) {
  for (var t = -1, l = null == e ? 0 : e.length, a = 0, s = []; ++t < l;) {
    var r = e[t];
    r && (s[a++] = r)
  }
  return s
}