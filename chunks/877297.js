var r = n("68421");
e.exports = function(e, t) {
  var n = -1,
    i = e.length,
    u = i - 1;
  for (t = void 0 === t ? i : t; ++n < t;) {
    var a = r(n, u),
      l = e[a];
    e[a] = e[n], e[n] = l
  }
  return e.length = t, e
}