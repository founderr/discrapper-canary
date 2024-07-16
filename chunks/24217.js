e.exports = function(e) {
  for (var t = -1, s = null == e ? 0 : e.length, n = 0, r = []; ++t < s;) {
var a = e[t];
a && (r[n++] = a);
  }
  return r;
};