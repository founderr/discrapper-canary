e.exports = function(e) {
  for (var t = -1, s = null == e ? 0 : e.length, a = 0, l = []; ++t < s;) {
    var r = e[t];
    r && (l[a++] = r)
  }
  return l
}