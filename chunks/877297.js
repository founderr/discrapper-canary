var r = n("68421");
e.exports = function(e, t) {
  var n = -1,
    a = e.length,
    i = a - 1;
  for (t = void 0 === t ? a : t; ++n < t;) {
    var u = r(n, i),
      l = e[u];
    e[u] = e[n], e[n] = l
  }
  return e.length = t, e
}