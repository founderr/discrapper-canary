e("70102");
var r = e("952133"),
  u = e("645942"),
  o = e("261497"),
  i = Math.max,
  a = Math.min;
t.exports = function(t, n, e) {
  var f, c, s, l, p, v, h = 0,
    d = !1,
    M = !1,
    b = !0;
  if ("function" != typeof t) throw TypeError("Expected a function");

  function O(n) {
    var e = f,
      r = c;
    return f = c = void 0, h = n, l = t.apply(r, e)
  }
  n = o(n) || 0, r(e) && (d = !!e.leading, s = (M = "maxWait" in e) ? i(o(e.maxWait) || 0, n) : s, b = "trailing" in e ? !!e.trailing : b);

  function g(t) {
    var e = t - v,
      r = t - h;
    return void 0 === v || e >= n || e < 0 || M && r >= s
  }

  function I() {
    var t, e, r, o, i = u();
    if (g(i)) return y(i);
    p = setTimeout(I, (e = (t = i) - v, r = t - h, o = n - e, M ? a(o, s - r) : o))
  }

  function y(t) {
    return (p = void 0, b && f) ? O(t) : (f = c = void 0, l)
  }

  function x() {
    var t, e = u(),
      r = g(e);
    if (f = arguments, c = this, v = e, r) {
      if (void 0 === p) {
        ;
        return h = t = v, p = setTimeout(I, n), d ? O(t) : l
      }
      if (M) return clearTimeout(p), p = setTimeout(I, n), O(v)
    }
    return void 0 === p && (p = setTimeout(I, n)), l
  }
  return x.cancel = function() {
    void 0 !== p && clearTimeout(p), h = 0, f = v = c = p = void 0
  }, x.flush = function() {
    return void 0 === p ? l : y(u())
  }, x
}