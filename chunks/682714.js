"use strict";
var r = n("64980"),
  a = /[^\0-\u007E]/,
  o = /[.\u3002\uFF0E\uFF61]/g,
  i = "Overflow: input needs wider integers to process",
  u = 35,
  s = RangeError,
  l = r(o.exec),
  c = Math.floor,
  f = String.fromCharCode,
  d = r("".charCodeAt),
  p = r([].join),
  h = r([].push),
  m = r("".replace),
  _ = r("".split),
  y = r("".toLowerCase),
  g = function(e) {
    for (var t = [], n = 0, r = e.length; n < r;) {
      var a = d(e, n++);
      if (a >= 55296 && a <= 56319 && n < r) {
        var o = d(e, n++);
        (64512 & o) == 56320 ? h(t, ((1023 & a) << 10) + (1023 & o) + 65536) : (h(t, a), n--)
      } else h(t, a)
    }
    return t
  },
  v = function(e) {
    return e + 22 + 75 * (e < 26)
  },
  b = function(e, t, n) {
    var r = 0;
    for (e = n ? c(e / 700) : e >> 1, e += c(e / t); e > 26 * u >> 1;) e = c(e / u), r += 36;
    return c(r + (u + 1) * e / (e + 38))
  },
  M = function(e) {
    var t, n, r = [],
      a = (e = g(e)).length,
      o = 128,
      u = 0,
      l = 72;
    for (t = 0; t < e.length; t++)(n = e[t]) < 128 && h(r, f(n));
    var d = r.length,
      m = d;
    for (d && h(r, "-"); m < a;) {
      var _ = 2147483647;
      for (t = 0; t < e.length; t++)(n = e[t]) >= o && n < _ && (_ = n);
      var y = m + 1;
      if (_ - o > c((2147483647 - u) / y)) throw s(i);
      for (u += (_ - o) * y, o = _, t = 0; t < e.length; t++) {
        if ((n = e[t]) < o && ++u > 2147483647) throw s(i);
        if (n === o) {
          for (var M = u, w = 36;;) {
            var k = w <= l ? 1 : w >= l + 26 ? 26 : w - l;
            if (M < k) break;
            var L = M - k,
              D = 36 - k;
            h(r, f(v(k + L % D))), M = c(L / D), w += 36
          }
          h(r, f(v(M))), l = b(u, y, m === d), u = 0, m++
        }
      }
      u++, o++
    }
    return p(r, "")
  };
e.exports = function(e) {
  var t, n, r = [],
    i = _(m(y(e), o, "."), ".");
  for (t = 0; t < i.length; t++) h(r, l(a, n = i[t]) ? "xn--" + M(n) : n);
  return p(r, ".")
}