e = n.nmd(e), n("70102"), n("781738"), n("424973"), ! function(r) {
  var a = "object" == typeof t && t && !t.nodeType && t,
    o = "object" == typeof e && e && !e.nodeType && e,
    i = "object" == typeof n.g && n.g;
  (i.global === i || i.window === i || i.self === i) && (r = i);
  var s, c, l = /^xn--/,
    u = /[^\x20-\x7E]/,
    d = /[\x2E\u3002\uFF0E\uFF61]/g,
    p = {
      overflow: "Overflow: input needs wider integers to process",
      "not-basic": "Illegal input >= 0x80 (not a basic code point)",
      "invalid-input": "Invalid input"
    },
    f = 35,
    h = Math.floor,
    m = String.fromCharCode;

  function v(e) {
    throw RangeError(p[e])
  }

  function g(e, t) {
    for (var n = e.length, r = []; n--;) r[n] = t(e[n]);
    return r
  }

  function y(e, t) {
    var n = e.split("@"),
      r = "";
    return n.length > 1 && (r = n[0] + "@", e = n[1]), r + g((e = e.replace(d, ".")).split("."), t).join(".")
  }

  function b(e) {
    for (var t, n, r = [], a = 0, o = e.length; a < o;)(t = e.charCodeAt(a++)) >= 55296 && t <= 56319 && a < o ? (64512 & (n = e.charCodeAt(a++))) == 56320 ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t), a--) : r.push(t);
    return r
  }

  function x(e) {
    return g(e, function(e) {
      var t = "";
      return e > 65535 && (e -= 65536, t += m(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += m(e)
    }).join("")
  }

  function S(e, t) {
    return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
  }

  function w(e, t, n) {
    var r = 0;
    for (e = n ? h(e / 700) : e >> 1, e += h(e / t); e > 26 * f >> 1; r += 36) e = h(e / f);
    return h(r + (f + 1) * e / (e + 38))
  }

  function D(e) {
    var t, n, r, a, o, i, s, c, l, u, d, p = [],
      f = e.length,
      m = 0,
      g = 128,
      y = 72;
    for ((r = e.lastIndexOf("-")) < 0 && (r = 0), a = 0; a < r; ++a) e.charCodeAt(a) >= 128 && v("not-basic"), p.push(e.charCodeAt(a));
    for (o = r > 0 ? r + 1 : 0; o < f;) {
      for (i = m, s = 1, c = 36;; c += 36) {
        ;
        if (o >= f && v("invalid-input"), ((l = (t = e.charCodeAt(o++)) - 48 < 10 ? t - 22 : t - 65 < 26 ? t - 65 : t - 97 < 26 ? t - 97 : 36) >= 36 || l > h((2147483647 - m) / s)) && v("overflow"), m += l * s, l < (u = c <= y ? 1 : c >= y + 26 ? 26 : c - y)) break;
        s > h(2147483647 / (d = 36 - u)) && v("overflow"), s *= d
      }
      y = w(m - i, n = p.length + 1, 0 == i), h(m / n) > 2147483647 - g && v("overflow"), g += h(m / n), m %= n, p.splice(m++, 0, g)
    }
    return x(p)
  }

  function C(e) {
    var t, n, r, a, o, i, s, c, l, u, d, p, f, g, y, x = [];
    for (i = 0, p = (e = b(e)).length, t = 128, n = 0, o = 72; i < p; ++i)(d = e[i]) < 128 && x.push(m(d));
    for (r = a = x.length, a && x.push("-"); r < p;) {
      for (s = 2147483647, i = 0; i < p; ++i)(d = e[i]) >= t && d < s && (s = d);
      for (s - t > h((2147483647 - n) / (f = r + 1)) && v("overflow"), n += (s - t) * f, t = s, i = 0; i < p; ++i)
        if ((d = e[i]) < t && ++n > 2147483647 && v("overflow"), d == t) {
          for (c = n, l = 36; !(c < (u = l <= o ? 1 : l >= o + 26 ? 26 : l - o)); l += 36) {
            ;
            y = c - u, g = 36 - u, x.push(m(S(u + y % g, 0))), c = h(y / g)
          }
          x.push(m(S(c, 0))), o = w(n, f, r == a), n = 0, ++r
        }++ n, ++t
    }
    return x.join("")
  }
  if (s = {
      version: "1.4.1",
      ucs2: {
        decode: b,
        encode: x
      },
      decode: D,
      encode: C,
      toASCII: function(e) {
        return y(e, function(e) {
          return u.test(e) ? "xn--" + C(e) : e
        })
      },
      toUnicode: function(e) {
        return y(e, function(e) {
          return l.test(e) ? D(e.slice(4).toLowerCase()) : e
        })
      }
    }, "function" == typeof define && "object" == typeof define.amd && define.amd) define("punycode", function() {
    return s
  });
  else if (a && o) {
    if (e.exports == a) o.exports = s;
    else
      for (c in s) s.hasOwnProperty(c) && (a[c] = s[c])
  } else r.punycode = s
}(this)