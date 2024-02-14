"use strict";
var n = e("64980"),
  i = /[^\0-\u007E]/,
  o = /[.\u3002\uFF0E\uFF61]/g,
  u = "Overflow: input needs wider integers to process",
  a = 35,
  f = RangeError,
  s = n(o.exec),
  c = Math.floor,
  l = String.fromCharCode,
  h = n("".charCodeAt),
  p = n([].join),
  v = n([].push),
  d = n("".replace),
  g = n("".split),
  y = n("".toLowerCase),
  b = function(t) {
    for (var r = [], e = 0, n = t.length; e < n;) {
      var i = h(t, e++);
      if (i >= 55296 && i <= 56319 && e < n) {
        var o = h(t, e++);
        (64512 & o) == 56320 ? v(r, ((1023 & i) << 10) + (1023 & o) + 65536) : (v(r, i), e--)
      } else v(r, i)
    }
    return r
  },
  m = function(t) {
    return t + 22 + 75 * (t < 26)
  },
  _ = function(t, r, e) {
    var n = 0;
    for (t = e ? c(t / 700) : t >> 1, t += c(t / r); t > 26 * a >> 1;) t = c(t / a), n += 36;
    return c(n + (a + 1) * t / (t + 38))
  },
  w = function(t) {
    var r, e, n = [],
      i = (t = b(t)).length,
      o = 128,
      a = 0,
      s = 72;
    for (r = 0; r < t.length; r++)(e = t[r]) < 128 && v(n, l(e));
    var h = n.length,
      d = h;
    for (h && v(n, "-"); d < i;) {
      var g = 2147483647;
      for (r = 0; r < t.length; r++)(e = t[r]) >= o && e < g && (g = e);
      var y = d + 1;
      if (g - o > c((2147483647 - a) / y)) throw f(u);
      for (a += (g - o) * y, o = g, r = 0; r < t.length; r++) {
        if ((e = t[r]) < o && ++a > 2147483647) throw f(u);
        if (e === o) {
          for (var w = a, E = 36;;) {
            var k = E <= s ? 1 : E >= s + 26 ? 26 : E - s;
            if (w < k) break;
            var A = w - k,
              x = 36 - k;
            v(n, l(m(k + A % x))), w = c(A / x), E += 36
          }
          v(n, l(m(w))), s = _(a, y, d === h), a = 0, d++
        }
      }
      a++, o++
    }
    return p(n, "")
  };
t.exports = function(t) {
  var r, e, n = [],
    u = g(d(y(t), o, "."), ".");
  for (r = 0; r < u.length; r++) v(n, s(i, e = u[r]) ? "xn--" + w(e) : e);
  return p(n, ".")
}