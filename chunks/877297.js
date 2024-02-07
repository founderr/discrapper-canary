var r = n("68421");
t.exports = function(t, e) {
  var n = -1,
    i = t.length,
    u = i - 1;
  for (e = void 0 === e ? i : e; ++n < e;) {
    var o = r(n, u),
      a = t[o];
    t[o] = t[n], t[n] = a
  }
  return t.length = e, t
}