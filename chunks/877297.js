var l = n("68421");
e.exports = function(e, t) {
  var n = -1,
    i = e.length,
    r = i - 1;
  for (t = void 0 === t ? i : t; ++n < t;) {
    var a = l(n, r),
      o = e[a];
    e[a] = e[n], e[n] = o
  }
  return e.length = t, e
}