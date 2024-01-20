var i = n("68421");
e.exports = function(e, t) {
  var n = -1,
    r = e.length,
    u = r - 1;
  for (t = void 0 === t ? r : t; ++n < t;) {
    var o = i(n, u),
      l = e[o];
    e[o] = e[n], e[n] = l
  }
  return e.length = t, e
}