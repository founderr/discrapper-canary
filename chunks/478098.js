n("70102");
var r = n("952133"),
  o = n("645942"),
  l = n("261497"),
  i = Math.max,
  a = Math.min;
e.exports = function(e, t, n) {
  var s, u, c, d, f, p, x = 0,
    h = !1,
    v = !1,
    m = !0;
  if ("function" != typeof e) throw TypeError("Expected a function");

  function g(t) {
    var n = s,
      r = u;
    return s = u = void 0, x = t, d = e.apply(r, n)
  }
  t = l(t) || 0, r(n) && (h = !!n.leading, c = (v = "maxWait" in n) ? i(l(n.maxWait) || 0, t) : c, m = "trailing" in n ? !!n.trailing : m);

  function j(e) {
    var n = e - p,
      r = e - x;
    return void 0 === p || n >= t || n < 0 || v && r >= c
  }

  function C() {
    var e, n, r, l, i = o();
    if (j(i)) return b(i);
    f = setTimeout(C, (n = (e = i) - p, r = e - x, l = t - n, v ? a(l, c - r) : l))
  }

  function b(e) {
    return (f = void 0, m && s) ? g(e) : (s = u = void 0, d)
  }

  function y() {
    var e, n = o(),
      r = j(n);
    if (s = arguments, u = this, p = n, r) {
      if (void 0 === f) {
        ;
        return x = e = p, f = setTimeout(C, t), h ? g(e) : d
      }
      if (v) return clearTimeout(f), f = setTimeout(C, t), g(p)
    }
    return void 0 === f && (f = setTimeout(C, t)), d
  }
  return y.cancel = function() {
    void 0 !== f && clearTimeout(f), x = 0, s = p = u = f = void 0
  }, y.flush = function() {
    return void 0 === f ? d : b(o())
  }, y
}