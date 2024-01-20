e = n.nmd(e), n("70102"), n("781738"), n("424973"), ! function(r) {
  var i = "object" == typeof t && t && !t.nodeType && t,
    o = "object" == typeof e && e && !e.nodeType && e,
    s = "object" == typeof n.g && n.g;
  (s.global === s || s.window === s || s.self === s) && (r = s);
  var a, c, u = /^xn--/,
    d = /[^\x20-\x7E]/,
    l = /[\x2E\u3002\uFF0E\uFF61]/g,
    f = {
      overflow: "Overflow: input needs wider integers to process",
      "not-basic": "Illegal input >= 0x80 (not a basic code point)",
      "invalid-input": "Invalid input"
    },
    p = 35,
    h = Math.floor,
    g = String.fromCharCode;

  function b(e) {
    throw RangeError(f[e])
  }

  function v(e, t) {
    for (var n = e.length, r = []; n--;) r[n] = t(e[n]);
    return r
  }

  function m(e, t) {
    var n = e.split("@"),
      r = "";
    return n.length > 1 && (r = n[0] + "@", e = n[1]), r + v((e = e.replace(l, ".")).split("."), t).join(".")
  }

  function y(e) {
    for (var t, n, r = [], i = 0, o = e.length; i < o;)(t = e.charCodeAt(i++)) >= 55296 && t <= 56319 && i < o ? (64512 & (n = e.charCodeAt(i++))) == 56320 ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t), i--) : r.push(t);
    return r
  }

  function x(e) {
    return v(e, function(e) {
      var t = "";
      return e > 65535 && (e -= 65536, t += g(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += g(e)
    }).join("")
  }

  function w(e, t) {
    return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
  }

  function S(e, t, n) {
    var r = 0;
    for (e = n ? h(e / 700) : e >> 1, e += h(e / t); e > 26 * p >> 1; r += 36) e = h(e / p);
    return h(r + (p + 1) * e / (e + 38))
  }

  function k(e) {
    var t, n, r, i, o, s, a, c, u, d, l, f = [],
      p = e.length,
      g = 0,
      v = 128,
      m = 72;
    for ((r = e.lastIndexOf("-")) < 0 && (r = 0), i = 0; i < r; ++i) e.charCodeAt(i) >= 128 && b("not-basic"), f.push(e.charCodeAt(i));
    for (o = r > 0 ? r + 1 : 0; o < p;) {
      for (s = g, a = 1, c = 36;; c += 36) {
        ;
        if (o >= p && b("invalid-input"), ((u = (t = e.charCodeAt(o++)) - 48 < 10 ? t - 22 : t - 65 < 26 ? t - 65 : t - 97 < 26 ? t - 97 : 36) >= 36 || u > h((2147483647 - g) / a)) && b("overflow"), g += u * a, u < (d = c <= m ? 1 : c >= m + 26 ? 26 : c - m)) break;
        a > h(2147483647 / (l = 36 - d)) && b("overflow"), a *= l
      }
      m = S(g - s, n = f.length + 1, 0 == s), h(g / n) > 2147483647 - v && b("overflow"), v += h(g / n), g %= n, f.splice(g++, 0, v)
    }
    return x(f)
  }

  function _(e) {
    var t, n, r, i, o, s, a, c, u, d, l, f, p, v, m, x = [];
    for (s = 0, f = (e = y(e)).length, t = 128, n = 0, o = 72; s < f; ++s)(l = e[s]) < 128 && x.push(g(l));
    for (r = i = x.length, i && x.push("-"); r < f;) {
      for (a = 2147483647, s = 0; s < f; ++s)(l = e[s]) >= t && l < a && (a = l);
      for (a - t > h((2147483647 - n) / (p = r + 1)) && b("overflow"), n += (a - t) * p, t = a, s = 0; s < f; ++s)
        if ((l = e[s]) < t && ++n > 2147483647 && b("overflow"), l == t) {
          for (c = n, u = 36; !(c < (d = u <= o ? 1 : u >= o + 26 ? 26 : u - o)); u += 36) {
            ;
            m = c - d, v = 36 - d, x.push(g(w(d + m % v, 0))), c = h(m / v)
          }
          x.push(g(w(c, 0))), o = S(n, p, r == i), n = 0, ++r
        }++ n, ++t
    }
    return x.join("")
  }
  if (a = {
      version: "1.4.1",
      ucs2: {
        decode: y,
        encode: x
      },
      decode: k,
      encode: _,
      toASCII: function(e) {
        return m(e, function(e) {
          return d.test(e) ? "xn--" + _(e) : e
        })
      },
      toUnicode: function(e) {
        return m(e, function(e) {
          return u.test(e) ? k(e.slice(4).toLowerCase()) : e
        })
      }
    }, "function" == typeof define && "object" == typeof define.amd && define.amd) define("punycode", function() {
    return a
  });
  else if (i && o) {
    if (e.exports == i) o.exports = a;
    else
      for (c in a) a.hasOwnProperty(c) && (i[c] = a[c])
  } else r.punycode = a
}(this)