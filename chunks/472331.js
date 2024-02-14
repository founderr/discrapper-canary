e = n.nmd(e), n("70102"), n("424973"), n("274635"), n("843762"), n("781738"), n("854508"), ! function(t) {
  "use strict";
  var n, r = {
      precision: 20,
      rounding: 4,
      toExpNeg: -7,
      toExpPos: 21,
      LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
    },
    a = !0,
    o = "[DecimalError] ",
    i = o + "Invalid argument: ",
    s = o + "Exponent out of range: ",
    c = Math.floor,
    l = Math.pow,
    u = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
    d = c(1286742750677284.5),
    p = {};

  function f(e, t) {
    var n, r, o, i, s, c, l, u, d = e.constructor,
      p = d.precision;
    if (!e.s || !t.s) return !t.s && (t = new d(e)), a ? D(t, p) : t;
    if (l = e.d, u = t.d, s = e.e, o = t.e, l = l.slice(), i = s - o) {
      for (i < 0 ? (r = l, i = -i, c = u.length) : (r = u, o = s, c = l.length), i > (c = (s = Math.ceil(p / 7)) > c ? s + 1 : c + 1) && (i = c, r.length = 1), r.reverse(); i--;) r.push(0);
      r.reverse()
    }
    for (c = l.length, c - (i = u.length) < 0 && (i = c, r = u, u = l, l = r), n = 0; i;) n = (l[--i] = l[i] + u[i] + n) / 1e7 | 0, l[i] %= 1e7;
    for (n && (l.unshift(n), ++o), c = l.length; 0 == l[--c];) l.pop();
    return t.d = l, t.e = o, a ? D(t, p) : t
  }

  function h(e, t, n) {
    if (e !== ~~e || e < t || e > n) throw Error(i + e)
  }

  function m(e) {
    var t, n, r, a = e.length - 1,
      o = "",
      i = e[0];
    if (a > 0) {
      for (o += i, t = 1; t < a; t++)(n = 7 - (r = e[t] + "").length) && (o += x(n)), o += r;
      (n = 7 - (r = (i = e[t]) + "").length) && (o += x(n))
    } else if (0 === i) return "0";
    for (; i % 10 == 0;) i /= 10;
    return o + i
  }
  p.absoluteValue = p.abs = function() {
    var e = new this.constructor(this);
    return e.s && (e.s = 1), e
  }, p.comparedTo = p.cmp = function(e) {
    var t, n, r, a;
    if (e = new this.constructor(e), this.s !== e.s) return this.s || -e.s;
    if (this.e !== e.e) return this.e > e.e ^ this.s < 0 ? 1 : -1;
    for (t = 0, r = this.d.length, n = r < (a = e.d.length) ? r : a; t < n; ++t)
      if (this.d[t] !== e.d[t]) return this.d[t] > e.d[t] ^ this.s < 0 ? 1 : -1;
    return r === a ? 0 : r > a ^ this.s < 0 ? 1 : -1
  }, p.decimalPlaces = p.dp = function() {
    var e = this.d.length - 1,
      t = (e - this.e) * 7;
    if (e = this.d[e])
      for (; e % 10 == 0; e /= 10) t--;
    return t < 0 ? 0 : t
  }, p.dividedBy = p.div = function(e) {
    return v(this, new this.constructor(e))
  }, p.dividedToIntegerBy = p.idiv = function(e) {
    var t = this.constructor;
    return D(v(this, new t(e), 0, 1), t.precision)
  }, p.equals = p.eq = function(e) {
    return !this.cmp(e)
  }, p.exponent = function() {
    return y(this)
  }, p.greaterThan = p.gt = function(e) {
    return this.cmp(e) > 0
  }, p.greaterThanOrEqualTo = p.gte = function(e) {
    return this.cmp(e) >= 0
  }, p.isInteger = p.isint = function() {
    return this.e > this.d.length - 2
  }, p.isNegative = p.isneg = function() {
    return this.s < 0
  }, p.isPositive = p.ispos = function() {
    return this.s > 0
  }, p.isZero = function() {
    return 0 === this.s
  }, p.lessThan = p.lt = function(e) {
    return 0 > this.cmp(e)
  }, p.lessThanOrEqualTo = p.lte = function(e) {
    return 1 > this.cmp(e)
  }, p.logarithm = p.log = function(e) {
    var t, r = this.constructor,
      i = r.precision,
      s = i + 5;
    if (void 0 === e) e = new r(10);
    else if ((e = new r(e)).s < 1 || e.eq(n)) throw Error(o + "NaN");
    if (this.s < 1) throw Error(o + (this.s ? "NaN" : "-Infinity"));
    return this.eq(n) ? new r(0) : (a = !1, t = v(S(this, s), S(e, s), s), a = !0, D(t, i))
  }, p.minus = p.sub = function(e) {
    return e = new this.constructor(e), this.s == e.s ? C(this, e) : f(this, (e.s = -e.s, e))
  }, p.modulo = p.mod = function(e) {
    var t, n = this.constructor,
      r = n.precision;
    if (!(e = new n(e)).s) throw Error(o + "NaN");
    return this.s ? (a = !1, t = v(this, e, 0, 1).times(e), a = !0, this.minus(t)) : D(new n(this), r)
  }, p.naturalExponential = p.exp = function() {
    return g(this)
  }, p.naturalLogarithm = p.ln = function() {
    return S(this)
  }, p.negated = p.neg = function() {
    var e = new this.constructor(this);
    return e.s = -e.s || 0, e
  }, p.plus = p.add = function(e) {
    return e = new this.constructor(e), this.s == e.s ? f(this, e) : C(this, (e.s = -e.s, e))
  }, p.precision = p.sd = function(e) {
    var t, n, r;
    if (void 0 !== e && !!e !== e && 1 !== e && 0 !== e) throw Error(i + e);
    if (t = y(this) + 1, n = 7 * (r = this.d.length - 1) + 1, r = this.d[r]) {
      for (; r % 10 == 0; r /= 10) n--;
      for (r = this.d[0]; r >= 10; r /= 10) n++
    }
    return e && t > n ? t : n
  }, p.squareRoot = p.sqrt = function() {
    var e, t, n, r, i, s, l, u = this.constructor;
    if (this.s < 1) {
      if (!this.s) return new u(0);
      throw Error(o + "NaN")
    }
    for (e = y(this), a = !1, 0 == (i = Math.sqrt(+this)) || i == 1 / 0 ? (((t = m(this.d)).length + e) % 2 == 0 && (t += "0"), i = Math.sqrt(t), e = c((e + 1) / 2) - (e < 0 || e % 2), r = new u(t = i == 1 / 0 ? "1e" + e : (t = i.toExponential()).slice(0, t.indexOf("e") + 1) + e)) : r = new u(i.toString()), i = l = (n = u.precision) + 3;;)
      if (r = (s = r).plus(v(this, s, l + 2)).times(.5), m(s.d).slice(0, l) === (t = m(r.d)).slice(0, l)) {
        if (t = t.slice(l - 3, l + 1), i == l && "4999" == t) {
          if (D(s, n + 1, 0), s.times(s).eq(this)) {
            r = s;
            break
          }
        } else if ("9999" != t) break;
        l += 4
      } return a = !0, D(r, n)
  }, p.times = p.mul = function(e) {
    var t, n, r, o, i, s, c, l, u, d = this.constructor,
      p = this.d,
      f = (e = new d(e)).d;
    if (!this.s || !e.s) return new d(0);
    for (e.s *= this.s, n = this.e + e.e, l = p.length, l < (u = f.length) && (i = p, p = f, f = i, s = l, l = u, u = s), i = [], r = s = l + u; r--;) i.push(0);
    for (r = u; --r >= 0;) {
      for (t = 0, o = l + r; o > r;) c = i[o] + f[r] * p[o - r - 1] + t, i[o--] = c % 1e7 | 0, t = c / 1e7 | 0;
      i[o] = (i[o] + t) % 1e7 | 0
    }
    for (; !i[--s];) i.pop();
    return t ? ++n : i.shift(), e.d = i, e.e = n, a ? D(e, d.precision) : e
  }, p.toDecimalPlaces = p.todp = function(e, t) {
    var n = this,
      r = n.constructor;
    return (n = new r(n), void 0 === e) ? n : (h(e, 0, 1e9), void 0 === t ? t = r.rounding : h(t, 0, 8), D(n, e + y(n) + 1, t))
  }, p.toExponential = function(e, t) {
    var n, r = this,
      a = r.constructor;
    return void 0 === e ? n = k(r, !0) : (h(e, 0, 1e9), void 0 === t ? t = a.rounding : h(t, 0, 8), n = k(r = D(new a(r), e + 1, t), !0, e + 1)), n
  }, p.toFixed = function(e, t) {
    var n, r, a = this.constructor;
    return void 0 === e ? k(this) : (h(e, 0, 1e9), void 0 === t ? t = a.rounding : h(t, 0, 8), n = k((r = D(new a(this), e + y(this) + 1, t)).abs(), !1, e + y(r) + 1), this.isneg() && !this.isZero() ? "-" + n : n)
  }, p.toInteger = p.toint = function() {
    var e = this.constructor;
    return D(new e(this), y(this) + 1, e.rounding)
  }, p.toNumber = function() {
    return +this
  }, p.toPower = p.pow = function(e) {
    var t, r, i, s, l, u, d = this,
      p = d.constructor,
      f = +(e = new p(e));
    if (!e.s) return new p(n);
    if (!(d = new p(d)).s) {
      if (e.s < 1) throw Error(o + "Infinity");
      return d
    }
    if (d.eq(n)) return d;
    if (i = p.precision, e.eq(n)) return D(d, i);
    if (t = e.e, u = t >= (r = e.d.length - 1), l = d.s, u) {
      if ((r = f < 0 ? -f : f) <= 9007199254740991) {
        for (s = new p(n), t = Math.ceil(i / 7 + 4), a = !1; r % 2 && P((s = s.times(d)).d, t), 0 !== (r = c(r / 2));) {
          ;
          P((d = d.times(d)).d, t)
        }
        return a = !0, e.s < 0 ? new p(n).div(s) : D(s, i)
      }
    } else if (l < 0) throw Error(o + "NaN");
    return l = l < 0 && 1 & e.d[Math.max(t, r)] ? -1 : 1, d.s = 1, a = !1, s = e.times(S(d, i + 12)), a = !0, (s = g(s)).s = l, s
  }, p.toPrecision = function(e, t) {
    var n, r, a = this,
      o = a.constructor;
    return void 0 === e ? (n = y(a), r = k(a, n <= o.toExpNeg || n >= o.toExpPos)) : (h(e, 1, 1e9), void 0 === t ? t = o.rounding : h(t, 0, 8), n = y(a = D(new o(a), e, t)), r = k(a, e <= n || n <= o.toExpNeg, e)), r
  }, p.toSignificantDigits = p.tosd = function(e, t) {
    var n = this.constructor;
    return void 0 === e ? (e = n.precision, t = n.rounding) : (h(e, 1, 1e9), void 0 === t ? t = n.rounding : h(t, 0, 8)), D(new n(this), e, t)
  }, p.toString = p.valueOf = p.val = p.toJSON = function() {
    var e = y(this),
      t = this.constructor;
    return k(this, e <= t.toExpNeg || e >= t.toExpPos)
  };
  var v = function() {
    function e(e, t) {
      var n, r = 0,
        a = e.length;
      for (e = e.slice(); a--;) n = e[a] * t + r, e[a] = n % 1e7 | 0, r = n / 1e7 | 0;
      return r && e.unshift(r), e
    }

    function t(e, t, n, r) {
      var a, o;
      if (n != r) o = n > r ? 1 : -1;
      else
        for (a = o = 0; a < n; a++)
          if (e[a] != t[a]) {
            o = e[a] > t[a] ? 1 : -1;
            break
          } return o
    }

    function n(e, t, n) {
      for (var r = 0; n--;) e[n] -= r, r = e[n] < t[n] ? 1 : 0, e[n] = 1e7 * r + e[n] - t[n];
      for (; !e[0] && e.length > 1;) e.shift()
    }
    return function(r, a, i, s) {
      var c, l, u, d, p, f, h, m, v, g, b, x, S, w, C, k, P, E, T = r.constructor,
        M = r.s == a.s ? 1 : -1,
        R = r.d,
        O = a.d;
      if (!r.s) return new T(r);
      if (!a.s) throw Error(o + "Division by zero");
      for (u = 0, l = r.e - a.e, P = O.length, C = R.length, m = (h = new T(M)).d = []; O[u] == (R[u] || 0);) ++u;
      if (O[u] > (R[u] || 0) && --l, (x = null == i ? i = T.precision : s ? i + (y(r) - y(a)) + 1 : i) < 0) return new T(0);
      if (x = x / 7 + 2 | 0, u = 0, 1 == P)
        for (d = 0, O = O[0], x++;
          (u < C || d) && x--; u++) S = 1e7 * d + (R[u] || 0), m[u] = S / O | 0, d = S % O | 0;
      else {
        for ((d = 1e7 / (O[0] + 1) | 0) > 1 && (O = e(O, d), R = e(R, d), P = O.length, C = R.length), w = P, g = (v = R.slice(0, P)).length; g < P;) v[g++] = 0;
        (E = O.slice()).unshift(0), k = O[0], O[1] >= 1e7 / 2 && ++k;
        do d = 0, (c = t(O, v, P, g)) < 0 ? (b = v[0], P != g && (b = 1e7 * b + (v[1] || 0)), (d = b / k | 0) > 1 ? (d >= 1e7 && (d = 1e7 - 1), f = (p = e(O, d)).length, g = v.length, 1 == (c = t(p, v, f, g)) && (d--, n(p, P < f ? E : O, f))) : (0 == d && (c = d = 1), p = O.slice()), (f = p.length) < g && p.unshift(0), n(v, p, g), -1 == c && (g = v.length, (c = t(O, v, P, g)) < 1 && (d++, n(v, P < g ? E : O, g))), g = v.length) : 0 === c && (d++, v = [0]), m[u++] = d, c && v[0] ? v[g++] = R[w] || 0 : (v = [R[w]], g = 1); while ((w++ < C || void 0 !== v[0]) && x--)
      }
      return !m[0] && m.shift(), h.e = l, D(h, s ? i + y(h) + 1 : i)
    }
  }();

  function g(e, t) {
    var r, o, i, c, u, d = 0,
      p = 0,
      f = e.constructor,
      h = f.precision;
    if (y(e) > 16) throw Error(s + y(e));
    if (!e.s) return new f(n);
    for (null == t ? (a = !1, u = h) : u = t, c = new f(.03125); e.abs().gte(.1);) e = e.times(c), p += 5;
    for (u += Math.log(l(2, p)) / Math.LN10 * 2 + 5 | 0, r = o = i = new f(n), f.precision = u;;) {
      if (o = D(o.times(e), u), r = r.times(++d), m((c = i.plus(v(o, r, u))).d).slice(0, u) === m(i.d).slice(0, u)) {
        for (; p--;) i = D(i.times(i), u);
        return f.precision = h, null == t ? (a = !0, D(i, h)) : i
      }
      i = c
    }
  }

  function y(e) {
    for (var t = 7 * e.e, n = e.d[0]; n >= 10; n /= 10) t++;
    return t
  }

  function b(e, t, n) {
    if (t > e.LN10.sd()) throw a = !0, n && (e.precision = n), Error(o + "LN10 precision limit exceeded");
    return D(new e(e.LN10), t)
  }

  function x(e) {
    for (var t = ""; e--;) t += "0";
    return t
  }

  function S(e, t) {
    var r, i, s, c, l, u, d, p, f, h = 1,
      g = e,
      x = g.d,
      w = g.constructor,
      C = w.precision;
    if (g.s < 1) throw Error(o + (g.s ? "NaN" : "-Infinity"));
    if (g.eq(n)) return new w(0);
    if (null == t ? (a = !1, p = C) : p = t, g.eq(10)) return null == t && (a = !0), b(w, p);
    if (p += 10, w.precision = p, i = (r = m(x)).charAt(0), !(15e14 > Math.abs(c = y(g)))) return d = b(w, p + 2, C).times(c + ""), g = S(new w(i + "." + r.slice(1)), p - 10).plus(d), w.precision = C, null == t ? (a = !0, D(g, C)) : g;
    for (; i < 7 && 1 != i || 1 == i && r.charAt(1) > 3;) i = (r = m((g = g.times(e)).d)).charAt(0), h++;
    c = y(g), i > 1 ? (g = new w("0." + r), c++) : g = new w(i + "." + r.slice(1));
    for (u = l = g = v(g.minus(n), g.plus(n), p), f = D(g.times(g), p), s = 3;;) {
      if (l = D(l.times(f), p), m((d = u.plus(v(l, new w(s), p))).d).slice(0, p) === m(u.d).slice(0, p)) return u = u.times(2), 0 !== c && (u = u.plus(b(w, p + 2, C).times(c + ""))), u = v(u, new w(h), p), w.precision = C, null == t ? (a = !0, D(u, C)) : u;
      u = d, s += 2
    }
  }

  function w(e, t) {
    var n, r, o;
    for ((n = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (r = t.search(/e/i)) > 0 ? (n < 0 && (n = r), n += +t.slice(r + 1), t = t.substring(0, r)) : n < 0 && (n = t.length), r = 0; 48 === t.charCodeAt(r);) ++r;
    for (o = t.length; 48 === t.charCodeAt(o - 1);) --o;
    if (t = t.slice(r, o)) {
      if (o -= r, n = n - r - 1, e.e = c(n / 7), e.d = [], r = (n + 1) % 7, n < 0 && (r += 7), r < o) {
        for (r && e.d.push(+t.slice(0, r)), o -= 7; r < o;) e.d.push(+t.slice(r, r += 7));
        r = 7 - (t = t.slice(r)).length
      } else r -= o;
      for (; r--;) t += "0";
      if (e.d.push(+t), a && (e.e > d || e.e < -d)) throw Error(s + n)
    } else e.s = 0, e.e = 0, e.d = [0];
    return e
  }

  function D(e, t, n) {
    var r, o, i, u, p, f, h, m, v = e.d;
    for (u = 1, i = v[0]; i >= 10; i /= 10) u++;
    if ((r = t - u) < 0) r += 7, o = t, h = v[m = 0];
    else {
      if ((m = Math.ceil((r + 1) / 7)) >= (i = v.length)) return e;
      for (u = 1, h = i = v[m]; i >= 10; i /= 10) u++;
      r %= 7, o = r - 7 + u
    }
    if (void 0 !== n && (p = h / (i = l(10, u - o - 1)) % 10 | 0, f = t < 0 || void 0 !== v[m + 1] || h % i, f = n < 4 ? (p || f) && (0 == n || n == (e.s < 0 ? 3 : 2)) : p > 5 || 5 == p && (4 == n || f || 6 == n && (r > 0 ? o > 0 ? h / l(10, u - o) : 0 : v[m - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7))), t < 1 || !v[0]) return f ? (i = y(e), v.length = 1, t = t - i - 1, v[0] = l(10, (7 - t % 7) % 7), e.e = c(-t / 7) || 0) : (v.length = 1, v[0] = e.e = e.s = 0), e;
    if (0 == r ? (v.length = m, i = 1, m--) : (v.length = m + 1, i = l(10, 7 - r), v[m] = o > 0 ? (h / l(10, u - o) % l(10, o) | 0) * i : 0), f)
      for (;;)
        if (0 == m) {
          1e7 == (v[0] += i) && (v[0] = 1, ++e.e);
          break
        } else {
          if (v[m] += i, 1e7 != v[m]) break;
          v[m--] = 0, i = 1
        } for (r = v.length; 0 === v[--r];) v.pop();
    if (a && (e.e > d || e.e < -d)) throw Error(s + y(e));
    return e
  }

  function C(e, t) {
    var n, r, o, i, s, c, l, u, d, p, f = e.constructor,
      h = f.precision;
    if (!e.s || !t.s) return t.s ? t.s = -t.s : t = new f(e), a ? D(t, h) : t;
    if (l = e.d, p = t.d, r = t.e, u = e.e, l = l.slice(), s = u - r) {
      for ((d = s < 0) ? (n = l, s = -s, c = p.length) : (n = p, r = u, c = l.length), s > (o = Math.max(Math.ceil(h / 7), c) + 2) && (s = o, n.length = 1), n.reverse(), o = s; o--;) n.push(0);
      n.reverse()
    } else {
      for (o = l.length, (d = o < (c = p.length)) && (c = o), o = 0; o < c; o++)
        if (l[o] != p[o]) {
          d = l[o] < p[o];
          break
        } s = 0
    }
    for (d && (n = l, l = p, p = n, t.s = -t.s), c = l.length, o = p.length - c; o > 0; --o) l[c++] = 0;
    for (o = p.length; o > s;) {
      if (l[--o] < p[o]) {
        for (i = o; i && 0 === l[--i];) l[i] = 1e7 - 1;
        --l[i], l[o] += 1e7
      }
      l[o] -= p[o]
    }
    for (; 0 === l[--c];) l.pop();
    for (; 0 === l[0]; l.shift()) --r;
    return l[0] ? (t.d = l, t.e = r, a ? D(t, h) : t) : new f(0)
  }

  function k(e, t, n) {
    var r, a = y(e),
      o = m(e.d),
      i = o.length;
    return t ? (n && (r = n - i) > 0 ? o = o.charAt(0) + "." + o.slice(1) + x(r) : i > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (a < 0 ? "e" : "e+") + a) : a < 0 ? (o = "0." + x(-a - 1) + o, n && (r = n - i) > 0 && (o += x(r))) : a >= i ? (o += x(a + 1 - i), n && (r = n - a - 1) > 0 && (o = o + "." + x(r))) : ((r = a + 1) < i && (o = o.slice(0, r) + "." + o.slice(r)), n && (r = n - i) > 0 && (a + 1 === i && (o += "."), o += x(r))), e.s < 0 ? "-" + o : o
  }

  function P(e, t) {
    if (e.length > t) return e.length = t, !0
  }

  function E(e) {
    if (!e || "object" != typeof e) throw Error(o + "Object expected");
    var t, n, r, a = ["precision", 1, 1e9, "rounding", 0, 8, "toExpNeg", -Infinity, 0, "toExpPos", 0, 1 / 0];
    for (t = 0; t < a.length; t += 3)
      if (void 0 !== (r = e[n = a[t]])) {
        if (c(r) === r && r >= a[t + 1] && r <= a[t + 2]) this[n] = r;
        else throw Error(i + n + ": " + r)
      } if (void 0 !== (r = e[n = "LN10"])) {
      if (r == Math.LN10) this[n] = new this(r);
      else throw Error(i + n + ": " + r)
    }
    return this
  }(r = function e(t) {
    var n, r, a;

    function o(e) {
      if (!(this instanceof o)) return new o(e);
      if (this.constructor = o, e instanceof o) {
        this.s = e.s, this.e = e.e, this.d = (e = e.d) ? e.slice() : e;
        return
      }
      if ("number" == typeof e) {
        if (0 * e != 0) throw Error(i + e);
        if (e > 0) this.s = 1;
        else if (e < 0) e = -e, this.s = -1;
        else {
          this.s = 0, this.e = 0, this.d = [0];
          return
        }
        if (e === ~~e && e < 1e7) {
          this.e = 0, this.d = [e];
          return
        }
        return w(this, e.toString())
      }
      if ("string" != typeof e) throw Error(i + e);
      if (45 === e.charCodeAt(0) ? (e = e.slice(1), this.s = -1) : this.s = 1, u.test(e)) w(this, e);
      else throw Error(i + e)
    }
    if (o.prototype = p, o.ROUND_UP = 0, o.ROUND_DOWN = 1, o.ROUND_CEIL = 2, o.ROUND_FLOOR = 3, o.ROUND_HALF_UP = 4, o.ROUND_HALF_DOWN = 5, o.ROUND_HALF_EVEN = 6, o.ROUND_HALF_CEIL = 7, o.ROUND_HALF_FLOOR = 8, o.clone = e, o.config = o.set = E, void 0 === t && (t = {}), t)
      for (n = 0, a = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"]; n < a.length;) !t.hasOwnProperty(r = a[n++]) && (t[r] = this[r]);
    return o.config(t), o
  }(r)).default = r.Decimal = r, n = new r(1), "function" == typeof define && define.amd ? define(function() {
    return r
  }) : void 0 !== e && e.exports ? e.exports = r : (!t && (t = "undefined" != typeof self && self && self.self == self ? self : Function("return this")()), t.Decimal = r)
}(this)