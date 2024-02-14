t = e.nmd(t), e("424973"), e("843762"), e("854508"), e("70102"), e("274635");
var n = function(t) {
  "use strict";
  var r = c(9007199254740992),
    e = "0123456789abcdefghijklmnopqrstuvwxyz",
    i = "function" == typeof BigInt;

  function o(t, r, e, n) {
    return void 0 === t ? o[0] : void 0 !== r ? 10 != +r || e ? D(t, r, e, n) : $(t) : $(t)
  }

  function u(t, r) {
    this.value = t, this.sign = r, this.isSmall = !1
  }

  function a(t) {
    this.value = t, this.sign = t < 0, this.isSmall = !0
  }

  function f(t) {
    this.value = t
  }

  function s(t) {
    return -9007199254740992 < t && t < 9007199254740992
  }

  function c(t) {
    return t < 1e7 ? [t] : t < 1e14 ? [t % 1e7, Math.floor(t / 1e7)] : [t % 1e7, Math.floor(t / 1e7) % 1e7, Math.floor(t / 1e14)]
  }

  function l(t) {
    h(t);
    var e = t.length;
    if (e < 4 && 0 > S(t, r)) switch (e) {
      case 0:
        return 0;
      case 1:
        return t[0];
      case 2:
        return t[0] + 1e7 * t[1];
      default:
        return t[0] + (t[1] + 1e7 * t[2]) * 1e7
    }
    return t
  }

  function h(t) {
    for (var r = t.length; 0 === t[--r];);
    t.length = r + 1
  }

  function p(t) {
    for (var r = Array(t), e = -1; ++e < t;) r[e] = 0;
    return r
  }

  function v(t) {
    return t > 0 ? Math.floor(t) : Math.ceil(t)
  }

  function d(t, r) {
    var e, n, i = t.length,
      o = r.length,
      u = Array(i),
      a = 0;
    for (n = 0; n < o; n++) a = (e = t[n] + r[n] + a) >= 1e7 ? 1 : 0, u[n] = e - 1e7 * a;
    for (; n < i;) a = 1e7 === (e = t[n] + a) ? 1 : 0, u[n++] = e - 1e7 * a;
    return a > 0 && u.push(a), u
  }

  function g(t, r) {
    return t.length >= r.length ? d(t, r) : d(r, t)
  }

  function y(t, r) {
    var e, n, i = t.length,
      o = Array(i);
    for (n = 0; n < i; n++) r = Math.floor((e = t[n] - 1e7 + r) / 1e7), o[n] = e - 1e7 * r, r += 1;
    for (; r > 0;) o[n++] = r % 1e7, r = Math.floor(r / 1e7);
    return o
  }

  function b(t, r) {
    var e, n, i = t.length,
      o = r.length,
      u = Array(i),
      a = 0;
    for (e = 0; e < o; e++)(n = t[e] - a - r[e]) < 0 ? (n += 1e7, a = 1) : a = 0, u[e] = n;
    for (e = o; e < i; e++) {
      if ((n = t[e] - a) < 0) n += 1e7;
      else {
        u[e++] = n;
        break
      }
      u[e] = n
    }
    for (; e < i; e++) u[e] = t[e];
    return h(u), u
  }
  u.prototype = Object.create(o.prototype), a.prototype = Object.create(o.prototype), f.prototype = Object.create(o.prototype), u.prototype.add = function(t) {
    var r = $(t);
    if (this.sign !== r.sign) return this.subtract(r.negate());
    var e = this.value,
      n = r.value;
    return r.isSmall ? new u(y(e, Math.abs(n)), this.sign) : new u(g(e, n), this.sign)
  }, u.prototype.plus = u.prototype.add, a.prototype.add = function(t) {
    var r = $(t),
      e = this.value;
    if (e < 0 !== r.sign) return this.subtract(r.negate());
    var n = r.value;
    if (r.isSmall) {
      if (s(e + n)) return new a(e + n);
      n = c(Math.abs(n))
    }
    return new u(y(n, Math.abs(e)), e < 0)
  }, a.prototype.plus = a.prototype.add, f.prototype.add = function(t) {
    return new f(this.value + $(t).value)
  }, f.prototype.plus = f.prototype.add;

  function m(t, r, e) {
    var n, i, o = t.length,
      f = Array(o),
      s = -r;
    for (n = 0; n < o; n++) s = Math.floor((i = t[n] + s) / 1e7), i %= 1e7, f[n] = i < 0 ? i + 1e7 : i;
    return "number" == typeof(f = l(f)) ? (e && (f = -f), new a(f)) : new u(f, e)
  }

  function _(t, r) {
    var e, n, i, o, u = t.length,
      a = r.length,
      f = p(u + a);
    for (i = 0; i < u; ++i) {
      o = t[i];
      for (var s = 0; s < a; ++s) n = Math.floor((e = o * r[s] + f[i + s]) / 1e7), f[i + s] = e - 1e7 * n, f[i + s + 1] += n
    }
    return h(f), f
  }

  function w(t, r) {
    var e, n, i = t.length,
      o = Array(i),
      u = 0;
    for (n = 0; n < i; n++) u = Math.floor((e = t[n] * r + u) / 1e7), o[n] = e - 1e7 * u;
    for (; u > 0;) o[n++] = u % 1e7, u = Math.floor(u / 1e7);
    return o
  }

  function E(t, r) {
    for (var e = []; r-- > 0;) e.push(0);
    return e.concat(t)
  }
  u.prototype.subtract = function(t) {
    var r, e, n, i, o = $(t);
    if (this.sign !== o.sign) return this.add(o.negate());
    var f = this.value,
      s = o.value;
    if (o.isSmall) return m(f, Math.abs(s), this.sign);
    return r = f, e = s, n = this.sign, (S(r, e) >= 0 ? i = b(r, e) : (i = b(e, r), n = !n), "number" == typeof(i = l(i))) ? (n && (i = -i), new a(i)) : new u(i, n)
  }, u.prototype.minus = u.prototype.subtract, a.prototype.subtract = function(t) {
    var r = $(t),
      e = this.value;
    if (e < 0 !== r.sign) return this.add(r.negate());
    var n = r.value;
    return r.isSmall ? new a(e - n) : m(n, Math.abs(e), e >= 0)
  }, a.prototype.minus = a.prototype.subtract, f.prototype.subtract = function(t) {
    return new f(this.value - $(t).value)
  }, f.prototype.minus = f.prototype.subtract, u.prototype.negate = function() {
    return new u(this.value, !this.sign)
  }, a.prototype.negate = function() {
    var t = this.sign,
      r = new a(-this.value);
    return r.sign = !t, r
  }, f.prototype.negate = function() {
    return new f(-this.value)
  }, u.prototype.abs = function() {
    return new u(this.value, !1)
  }, a.prototype.abs = function() {
    return new a(Math.abs(this.value))
  }, f.prototype.abs = function() {
    return new f(this.value >= 0 ? this.value : -this.value)
  };

  function k(t, r, e) {
    return t < 1e7 ? new u(w(r, t), e) : new u(_(r, c(t)), e)
  }

  function A(t) {
    var r, e, n, i, o = t.length,
      u = p(o + o);
    for (n = 0; n < o; n++) {
      e = 0 - (i = t[n]) * i;
      for (var a = n; a < o; a++) e = Math.floor((r = 2 * (i * t[a]) + u[n + a] + e) / 1e7), u[n + a] = r - 1e7 * e;
      u[n + o] = e
    }
    return h(u), u
  }
  u.prototype.multiply = function(t) {
    var r, e, n, i = $(t),
      a = this.value,
      f = i.value,
      s = this.sign !== i.sign;
    if (i.isSmall) {
      if (0 === f) return o[0];
      if (1 === f) return this;
      if (-1 === f) return this.negate();
      if ((n = Math.abs(f)) < 1e7) return new u(w(a, n), s);
      f = c(n)
    }
    return (r = a.length, -.012 * r - .012 * (e = f.length) + 15e-6 * r * e > 0) ? new u(function t(r, e) {
      var n = Math.max(r.length, e.length);
      if (n <= 30) return _(r, e);
      n = Math.ceil(n / 2);
      var i = r.slice(n),
        o = r.slice(0, n),
        u = e.slice(n),
        a = e.slice(0, n),
        f = t(o, a),
        s = t(i, u),
        c = t(g(o, i), g(a, u)),
        l = g(g(f, E(b(b(c, f), s), n)), E(s, 2 * n));
      return h(l), l
    }(a, f), s) : new u(_(a, f), s)
  }, u.prototype.times = u.prototype.multiply, a.prototype._multiplyBySmall = function(t) {
    return s(t.value * this.value) ? new a(t.value * this.value) : k(Math.abs(t.value), c(Math.abs(this.value)), this.sign !== t.sign)
  }, u.prototype._multiplyBySmall = function(t) {
    return 0 === t.value ? o[0] : 1 === t.value ? this : -1 === t.value ? this.negate() : k(Math.abs(t.value), this.value, this.sign !== t.sign)
  }, a.prototype.multiply = function(t) {
    return $(t)._multiplyBySmall(this)
  }, a.prototype.times = a.prototype.multiply, f.prototype.multiply = function(t) {
    return new f(this.value * $(t).value)
  }, f.prototype.times = f.prototype.multiply, u.prototype.square = function() {
    return new u(A(this.value), !1)
  }, a.prototype.square = function() {
    var t = this.value * this.value;
    return s(t) ? new a(t) : new u(A(c(Math.abs(this.value))), !1)
  }, f.prototype.square = function(t) {
    return new f(this.value * this.value)
  };

  function x(t, r) {
    var e, n, i, o, u = t.length,
      a = p(u);
    for (i = 0, e = u - 1; e >= 0; --e) n = v((o = 1e7 * i + t[e]) / r), i = o - n * r, a[e] = 0 | n;
    return [a, 0 | i]
  }

  function R(t, r) {
    var e, n, s = $(r);
    if (i) return [new f(t.value / s.value), new f(t.value % s.value)];
    var d = t.value,
      g = s.value;
    if (0 === g) throw Error("Cannot divide by zero");
    if (t.isSmall) return s.isSmall ? [new a(v(d / g)), new a(d % g)] : [o[0], t];
    if (s.isSmall) {
      if (1 === g) return [t, o[0]];
      if (-1 == g) return [t.negate(), o[0]];
      var y = Math.abs(g);
      if (y < 1e7) {
        e = l((n = x(d, y))[0]);
        var m = n[1];
        return (t.sign && (m = -m), "number" == typeof e) ? (t.sign !== s.sign && (e = -e), [new a(e), new a(m)]) : [new u(e, t.sign !== s.sign), new a(m)]
      }
      g = c(y)
    }
    var _ = S(d, g);
    if (-1 === _) return [o[0], t];
    if (0 === _) return [o[t.sign === s.sign ? 1 : -1], o[0]];
    e = (n = d.length + g.length <= 200 ? function(t, r) {
      var e, n, i, o, u, a, f, s = t.length,
        c = r.length,
        h = p(r.length),
        v = r[c - 1],
        d = Math.ceil(1e7 / (2 * v)),
        g = w(t, d),
        y = w(r, d);
      for (g.length <= s && g.push(0), y.push(0), v = y[c - 1], n = s - c; n >= 0; n--) {
        for (e = 1e7 - 1, g[n + c] !== v && (e = Math.floor((1e7 * g[n + c] + g[n + c - 1]) / v)), i = 0, o = 0, a = y.length, u = 0; u < a; u++) i += e * y[u], f = Math.floor(i / 1e7), o += g[n + u] - (i - 1e7 * f), i = f, o < 0 ? (g[n + u] = o + 1e7, o = -1) : (g[n + u] = o, o = 0);
        for (; 0 !== o;) {
          for (e -= 1, i = 0, u = 0; u < a; u++)(i += g[n + u] - 1e7 + y[u]) < 0 ? (g[n + u] = i + 1e7, i = 0) : (g[n + u] = i, i = 1);
          o += i
        }
        h[n] = e
      }
      return g = x(g, d)[0], [l(h), l(g)]
    }(d, g) : function(t, r) {
      for (var e, n, i, o, u, a = t.length, f = r.length, s = [], c = []; a;) {
        if (c.unshift(t[--a]), h(c), 0 > S(c, r)) {
          s.push(0);
          continue
        }
        n = c.length, i = 1e7 * c[n - 1] + c[n - 2], o = 1e7 * r[f - 1] + r[f - 2], n > f && (i = (i + 1) * 1e7), e = Math.ceil(i / o);
        do {
          if (0 >= S(u = w(r, e), c)) break;
          e--
        } while (e);
        s.push(e), c = b(c, u)
      }
      return s.reverse(), [l(s), l(c)]
    }(d, g))[0];
    var E = t.sign !== s.sign,
      k = n[1],
      A = t.sign;
    return "number" == typeof e ? (E && (e = -e), e = new a(e)) : e = new u(e, E), "number" == typeof k ? (A && (k = -k), k = new a(k)) : k = new u(k, A), [e, k]
  }

  function S(t, r) {
    if (t.length !== r.length) return t.length > r.length ? 1 : -1;
    for (var e = t.length - 1; e >= 0; e--)
      if (t[e] !== r[e]) return t[e] > r[e] ? 1 : -1;
    return 0
  }

  function O(t) {
    var r = t.abs();
    return !r.isUnit() && (!!(r.equals(2) || r.equals(3) || r.equals(5)) || !(r.isEven() || r.isDivisibleBy(3) || r.isDivisibleBy(5)) && (!!r.lesser(49) || void 0))
  }

  function T(t, r) {
    for (var e, i, o, u = t.prev(), a = u, f = 0; a.isEven();) a = a.divide(2), f++;
    t: for (i = 0; i < r.length; i++) {
      if (!t.lesser(r[i])) {
        if (!((o = n(r[i]).modPow(a, t)).isUnit() || o.equals(u))) {
          for (e = f - 1; 0 != e && !(o = o.square().mod(t)).isUnit(); e--) {
            ;
            if (o.equals(u)) continue t
          }
          return !1
        }
      }
    }
    return !0
  }
  u.prototype.divmod = function(t) {
    var r = R(this, t);
    return {
      quotient: r[0],
      remainder: r[1]
    }
  }, f.prototype.divmod = a.prototype.divmod = u.prototype.divmod, u.prototype.divide = function(t) {
    return R(this, t)[0]
  }, f.prototype.over = f.prototype.divide = function(t) {
    return new f(this.value / $(t).value)
  }, a.prototype.over = a.prototype.divide = u.prototype.over = u.prototype.divide, u.prototype.mod = function(t) {
    return R(this, t)[1]
  }, f.prototype.mod = f.prototype.remainder = function(t) {
    return new f(this.value % $(t).value)
  }, a.prototype.remainder = a.prototype.mod = u.prototype.remainder = u.prototype.mod, u.prototype.pow = function(t) {
    var r, e, n, i = $(t),
      u = this.value,
      f = i.value;
    if (0 === f) return o[1];
    if (0 === u) return o[0];
    if (1 === u) return o[1];
    if (-1 === u) return i.isEven() ? o[1] : o[-1];
    if (i.sign) return o[0];
    if (!i.isSmall) throw Error("The exponent " + i.toString() + " is too large.");
    if (this.isSmall && s(r = Math.pow(u, f))) return new a(v(r));
    for (e = this, n = o[1]; !0 & f && (n = n.times(e), --f), 0 !== f;) {
      ;
      f /= 2, e = e.square()
    }
    return n
  }, a.prototype.pow = u.prototype.pow, f.prototype.pow = function(t) {
    var r = $(t),
      e = this.value,
      n = r.value,
      i = BigInt(0),
      u = BigInt(1),
      a = BigInt(2);
    if (n === i) return o[1];
    if (e === i) return o[0];
    if (e === u) return o[1];
    if (e === BigInt(-1)) return r.isEven() ? o[1] : o[-1];
    if (r.isNegative()) return new f(i);
    for (var s = this, c = o[1];
      (n & u) === u && (c = c.times(s), --n), n !== i;) {
      ;
      n /= a, s = s.square()
    }
    return c
  }, u.prototype.modPow = function(t, r) {
    if (t = $(t), (r = $(r)).isZero()) throw Error("Cannot take modPow with modulus 0");
    var e = o[1],
      n = this.mod(r);
    for (t.isNegative() && (t = t.multiply(o[-1]), n = n.modInv(r)); t.isPositive();) {
      if (n.isZero()) return o[0];
      t.isOdd() && (e = e.multiply(n).mod(r)), t = t.divide(2), n = n.square().mod(r)
    }
    return e
  }, f.prototype.modPow = a.prototype.modPow = u.prototype.modPow, u.prototype.compareAbs = function(t) {
    var r = $(t),
      e = this.value,
      n = r.value;
    return r.isSmall ? 1 : S(e, n)
  }, a.prototype.compareAbs = function(t) {
    var r = $(t),
      e = Math.abs(this.value),
      n = r.value;
    return r.isSmall ? e === (n = Math.abs(n)) ? 0 : e > n ? 1 : -1 : -1
  }, f.prototype.compareAbs = function(t) {
    var r = this.value,
      e = $(t).value;
    return (r = r >= 0 ? r : -r) === (e = e >= 0 ? e : -e) ? 0 : r > e ? 1 : -1
  }, u.prototype.compare = function(t) {
    if (t === 1 / 0) return -1;
    if (t === -1 / 0) return 1;
    var r = $(t),
      e = this.value,
      n = r.value;
    return this.sign !== r.sign ? r.sign ? 1 : -1 : r.isSmall ? this.sign ? -1 : 1 : S(e, n) * (this.sign ? -1 : 1)
  }, u.prototype.compareTo = u.prototype.compare, a.prototype.compare = function(t) {
    if (t === 1 / 0) return -1;
    if (t === -1 / 0) return 1;
    var r = $(t),
      e = this.value,
      n = r.value;
    return r.isSmall ? e == n ? 0 : e > n ? 1 : -1 : e < 0 !== r.sign ? e < 0 ? -1 : 1 : e < 0 ? 1 : -1
  }, a.prototype.compareTo = a.prototype.compare, f.prototype.compare = function(t) {
    if (t === 1 / 0) return -1;
    if (t === -1 / 0) return 1;
    var r = this.value,
      e = $(t).value;
    return r === e ? 0 : r > e ? 1 : -1
  }, f.prototype.compareTo = f.prototype.compare, u.prototype.equals = function(t) {
    return 0 === this.compare(t)
  }, f.prototype.eq = f.prototype.equals = a.prototype.eq = a.prototype.equals = u.prototype.eq = u.prototype.equals, u.prototype.notEquals = function(t) {
    return 0 !== this.compare(t)
  }, f.prototype.neq = f.prototype.notEquals = a.prototype.neq = a.prototype.notEquals = u.prototype.neq = u.prototype.notEquals, u.prototype.greater = function(t) {
    return this.compare(t) > 0
  }, f.prototype.gt = f.prototype.greater = a.prototype.gt = a.prototype.greater = u.prototype.gt = u.prototype.greater, u.prototype.lesser = function(t) {
    return 0 > this.compare(t)
  }, f.prototype.lt = f.prototype.lesser = a.prototype.lt = a.prototype.lesser = u.prototype.lt = u.prototype.lesser, u.prototype.greaterOrEquals = function(t) {
    return this.compare(t) >= 0
  }, f.prototype.geq = f.prototype.greaterOrEquals = a.prototype.geq = a.prototype.greaterOrEquals = u.prototype.geq = u.prototype.greaterOrEquals, u.prototype.lesserOrEquals = function(t) {
    return 0 >= this.compare(t)
  }, f.prototype.leq = f.prototype.lesserOrEquals = a.prototype.leq = a.prototype.lesserOrEquals = u.prototype.leq = u.prototype.lesserOrEquals, u.prototype.isEven = function() {
    return (1 & this.value[0]) == 0
  }, a.prototype.isEven = function() {
    return (1 & this.value) == 0
  }, f.prototype.isEven = function() {
    return (this.value & BigInt(1)) === BigInt(0)
  }, u.prototype.isOdd = function() {
    return (1 & this.value[0]) == 1
  }, a.prototype.isOdd = function() {
    return (1 & this.value) == 1
  }, f.prototype.isOdd = function() {
    return (this.value & BigInt(1)) === BigInt(1)
  }, u.prototype.isPositive = function() {
    return !this.sign
  }, a.prototype.isPositive = function() {
    return this.value > 0
  }, f.prototype.isPositive = a.prototype.isPositive, u.prototype.isNegative = function() {
    return this.sign
  }, a.prototype.isNegative = function() {
    return this.value < 0
  }, f.prototype.isNegative = a.prototype.isNegative, u.prototype.isUnit = function() {
    return !1
  }, a.prototype.isUnit = function() {
    return 1 === Math.abs(this.value)
  }, f.prototype.isUnit = function() {
    return this.abs().value === BigInt(1)
  }, u.prototype.isZero = function() {
    return !1
  }, a.prototype.isZero = function() {
    return 0 === this.value
  }, f.prototype.isZero = function() {
    return this.value === BigInt(0)
  }, u.prototype.isDivisibleBy = function(t) {
    var r = $(t);
    return !r.isZero() && (!!r.isUnit() || (0 === r.compareAbs(2) ? this.isEven() : this.mod(r).isZero()))
  }, f.prototype.isDivisibleBy = a.prototype.isDivisibleBy = u.prototype.isDivisibleBy, u.prototype.isPrime = function(r) {
    var e = O(this);
    if (t !== e) return e;
    var i = this.abs(),
      o = i.bitLength();
    if (o <= 64) return T(i, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
    for (var u = Math.log(2) * o.toJSNumber(), a = Math.ceil(!0 === r ? 2 * Math.pow(u, 2) : u), f = [], s = 0; s < a; s++) f.push(n(s + 2));
    return T(i, f)
  }, f.prototype.isPrime = a.prototype.isPrime = u.prototype.isPrime, u.prototype.isProbablePrime = function(r, e) {
    var i = O(this);
    if (t !== i) return i;
    for (var o = this.abs(), u = t === r ? 5 : r, a = [], f = 0; f < u; f++) a.push(n.randBetween(2, o.minus(2), e));
    return T(o, a)
  }, f.prototype.isProbablePrime = a.prototype.isProbablePrime = u.prototype.isProbablePrime, u.prototype.modInv = function(t) {
    for (var r, e, i, o = n.zero, u = n.one, a = $(t), f = this.abs(); !f.isZero();) r = a.divide(f), e = o, i = a, o = u, a = f, u = e.subtract(r.multiply(u)), f = i.subtract(r.multiply(f));
    if (!a.isUnit()) throw Error(this.toString() + " and " + t.toString() + " are not co-prime");
    return (-1 === o.compare(0) && (o = o.add(t)), this.isNegative()) ? o.negate() : o
  }, f.prototype.modInv = a.prototype.modInv = u.prototype.modInv, u.prototype.next = function() {
    var t = this.value;
    return this.sign ? m(t, 1, this.sign) : new u(y(t, 1), this.sign)
  }, a.prototype.next = function() {
    var t = this.value;
    return t + 1 < 9007199254740992 ? new a(t + 1) : new u(r, !1)
  }, f.prototype.next = function() {
    return new f(this.value + BigInt(1))
  }, u.prototype.prev = function() {
    var t = this.value;
    return this.sign ? new u(y(t, 1), !0) : m(t, 1, this.sign)
  }, a.prototype.prev = function() {
    var t = this.value;
    return t - 1 > -9007199254740992 ? new a(t - 1) : new u(r, !0)
  }, f.prototype.prev = function() {
    return new f(this.value - BigInt(1))
  };
  for (var I = [1]; 2 * I[I.length - 1] <= 1e7;) I.push(2 * I[I.length - 1]);
  var M = I.length,
    L = I[M - 1];

  function j(t) {
    return 1e7 >= Math.abs(t)
  }

  function P(t, r, e) {
    r = $(r);
    for (var i = t.isNegative(), o = r.isNegative(), u = i ? t.not() : t, a = o ? r.not() : r, f = 0, s = 0, c = null, l = null, h = []; !u.isZero() || !a.isZero();) f = (c = R(u, L))[1].toJSNumber(), i && (f = L - 1 - f), s = (l = R(a, L))[1].toJSNumber(), o && (s = L - 1 - s), u = c[0], a = l[0], h.push(e(f, s));
    for (var p = 0 !== e(i ? 1 : 0, o ? 1 : 0) ? n(-1) : n(0), v = h.length - 1; v >= 0; v -= 1) p = p.multiply(L).add(n(h[v]));
    return p
  }
  u.prototype.shiftLeft = function(t) {
    var r = $(t).toJSNumber();
    if (!j(r)) throw Error(String(r) + " is too large for shifting.");
    if (r < 0) return this.shiftRight(-r);
    var e = this;
    if (e.isZero()) return e;
    for (; r >= M;) e = e.multiply(L), r -= M - 1;
    return e.multiply(I[r])
  }, f.prototype.shiftLeft = a.prototype.shiftLeft = u.prototype.shiftLeft, u.prototype.shiftRight = function(t) {
    var r, e = $(t).toJSNumber();
    if (!j(e)) throw Error(String(e) + " is too large for shifting.");
    if (e < 0) return this.shiftLeft(-e);
    for (var n = this; e >= M;) {
      if (n.isZero() || n.isNegative() && n.isUnit()) return n;
      n = (r = R(n, L))[1].isNegative() ? r[0].prev() : r[0], e -= M - 1
    }
    return (r = R(n, I[e]))[1].isNegative() ? r[0].prev() : r[0]
  }, f.prototype.shiftRight = a.prototype.shiftRight = u.prototype.shiftRight, u.prototype.not = function() {
    return this.negate().prev()
  }, f.prototype.not = a.prototype.not = u.prototype.not, u.prototype.and = function(t) {
    return P(this, t, function(t, r) {
      return t & r
    })
  }, f.prototype.and = a.prototype.and = u.prototype.and, u.prototype.or = function(t) {
    return P(this, t, function(t, r) {
      return t | r
    })
  }, f.prototype.or = a.prototype.or = u.prototype.or, u.prototype.xor = function(t) {
    return P(this, t, function(t, r) {
      return t ^ r
    })
  }, f.prototype.xor = a.prototype.xor = u.prototype.xor;
  var U = 1073758208;

  function N(t) {
    var r = t.value,
      e = "number" == typeof r ? 1073741824 | r : "bigint" == typeof r ? r | BigInt(1073741824) : r[0] + 1e7 * r[1] | U;
    return e & -e
  }

  function B(t, r) {
    return t = $(t), r = $(r), t.greater(r) ? t : r
  }

  function C(t, r) {
    return t = $(t), r = $(r), t.lesser(r) ? t : r
  }

  function q(t, r) {
    if (t = $(t).abs(), r = $(r).abs(), t.equals(r)) return t;
    if (t.isZero()) return r;
    if (r.isZero()) return t;
    for (var e, n, i = o[1]; t.isEven() && r.isEven();) e = C(N(t), N(r)), t = t.divide(e), r = r.divide(e), i = i.multiply(e);
    for (; t.isEven();) t = t.divide(N(t));
    do {
      for (; r.isEven();) r = r.divide(N(r));
      t.greater(r) && (n = r, r = t, t = n), r = r.subtract(t)
    } while (!r.isZero());
    return i.isUnit() ? t : t.multiply(i)
  }
  u.prototype.bitLength = function() {
    var t = this;
    return (0 > t.compareTo(n(0)) && (t = t.negate().subtract(n(1))), 0 === t.compareTo(n(0))) ? n(0) : n(function t(r, e) {
      if (0 >= e.compareTo(r)) {
        var i = t(r, e.square(e)),
          o = i.p,
          u = i.e,
          a = o.multiply(e);
        return 0 >= a.compareTo(r) ? {
          p: a,
          e: 2 * u + 1
        } : {
          p: o,
          e: 2 * u
        }
      }
      return {
        p: n(1),
        e: 0
      }
    }(t, n(2)).e).add(n(1))
  }, f.prototype.bitLength = a.prototype.bitLength = u.prototype.bitLength;
  var D = function(t, r, n, i) {
    n = n || e, t = String(t), !i && (t = t.toLowerCase(), n = n.toLowerCase());
    var o, u = t.length,
      a = Math.abs(r),
      f = {};
    for (o = 0; o < n.length; o++) f[n[o]] = o;
    for (o = 0; o < u; o++) {
      var s = t[o];
      if ("-" !== s && s in f && f[s] >= a) {
        if ("1" === s && 1 === a) continue;
        throw Error(s + " is not a valid digit in base " + r + ".")
      }
    }
    r = $(r);
    var c = [],
      l = "-" === t[0];
    for (o = l ? 1 : 0; o < t.length; o++) {
      var s = t[o];
      if (s in f) c.push($(f[s]));
      else if ("<" === s) {
        var h = o;
        do o++; while (">" !== t[o] && o < t.length);
        c.push($(t.slice(h + 1, o)))
      } else throw Error(s + " is not a valid character")
    }
    return z(c, r, l)
  };

  function z(t, r, e) {
    var n, i = o[0],
      u = o[1];
    for (n = t.length - 1; n >= 0; n--) i = i.add(t[n].times(u)), u = u.times(r);
    return e ? i.negate() : i
  }

  function F(t, r) {
    if ((r = n(r)).isZero()) {
      if (t.isZero()) return {
        value: [0],
        isNegative: !1
      };
      throw Error("Cannot convert nonzero numbers to base 0.")
    }
    if (r.equals(-1)) {
      if (t.isZero()) return {
        value: [0],
        isNegative: !1
      };
      if (t.isNegative()) return {
        value: [].concat.apply([], Array.apply(null, Array(-t.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
        isNegative: !1
      };
      var e = Array.apply(null, Array(t.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
      return e.unshift([1]), {
        value: [].concat.apply([], e),
        isNegative: !1
      }
    }
    var i = !1;
    if (t.isNegative() && r.isPositive() && (i = !0, t = t.abs()), r.isUnit()) return t.isZero() ? {
      value: [0],
      isNegative: !1
    } : {
      value: Array.apply(null, Array(t.toJSNumber())).map(Number.prototype.valueOf, 1),
      isNegative: i
    };
    for (var o = [], u, a = t; a.isNegative() || a.compareAbs(r) >= 0;) {
      a = (u = a.divmod(r)).quotient;
      var f = u.remainder;
      f.isNegative() && (f = r.minus(f).abs(), a = a.next()), o.push(f.toJSNumber())
    }
    return o.push(a.toJSNumber()), {
      value: o.reverse(),
      isNegative: i
    }
  }

  function H(t, r, n) {
    var i = F(t, r);
    return (i.isNegative ? "-" : "") + i.value.map(function(t) {
      var r, i;
      return (r = t) < (i = (i = n) || e).length ? i[r] : "<" + r + ">"
    }).join("")
  }

  function W(t) {
    if (s(+t)) {
      var r = +t;
      if (r === v(r)) return i ? new f(BigInt(r)) : new a(r);
      throw Error("Invalid integer: " + t)
    }
    var e = "-" === t[0];
    e && (t = t.slice(1));
    var n = t.split(/e/i);
    if (n.length > 2) throw Error("Invalid integer: " + n.join("e"));
    if (2 === n.length) {
      var o = n[1];
      if ("+" === o[0] && (o = o.slice(1)), (o = +o) !== v(o) || !s(o)) throw Error("Invalid integer: " + o + " is not a valid exponent.");
      var c = n[0],
        l = c.indexOf(".");
      if (l >= 0 && (o -= c.length - l - 1, c = c.slice(0, l) + c.slice(l + 1)), o < 0) throw Error("Cannot include negative exponent part for integers");
      c += Array(o + 1).join("0"), t = c
    }
    if (!/^([0-9][0-9]*)$/.test(t)) throw Error("Invalid integer: " + t);
    if (i) return new f(BigInt(e ? "-" + t : t));
    for (var p = [], d = t.length, g = d - 7; d > 0;) p.push(+t.slice(g, d)), (g -= 7) < 0 && (g = 0), d -= 7;
    return h(p), new u(p, e)
  }
  u.prototype.toArray = function(t) {
    return F(this, t)
  }, a.prototype.toArray = function(t) {
    return F(this, t)
  }, f.prototype.toArray = function(t) {
    return F(this, t)
  }, u.prototype.toString = function(r, e) {
    if (t === r && (r = 10), 10 !== r) return H(this, r, e);
    for (var n, i = this.value, o = i.length, u = String(i[--o]); --o >= 0;) n = String(i[o]), u += "0000000".slice(n.length) + n;
    return (this.sign ? "-" : "") + u
  }, a.prototype.toString = function(r, e) {
    return (t === r && (r = 10), 10 != r) ? H(this, r, e) : String(this.value)
  }, f.prototype.toString = a.prototype.toString, f.prototype.toJSON = u.prototype.toJSON = a.prototype.toJSON = function() {
    return this.toString()
  }, u.prototype.valueOf = function() {
    return parseInt(this.toString(), 10)
  }, u.prototype.toJSNumber = u.prototype.valueOf, a.prototype.valueOf = function() {
    return this.value
  }, a.prototype.toJSNumber = a.prototype.valueOf, f.prototype.valueOf = f.prototype.toJSNumber = function() {
    return parseInt(this.toString(), 10)
  };

  function $(t) {
    return "number" == typeof t ? function(t) {
      if (i) return new f(BigInt(t));
      if (s(t)) {
        if (t !== v(t)) throw Error(t + " is not an integer.");
        return new a(t)
      }
      return W(t.toString())
    }(t) : "string" == typeof t ? W(t) : "bigint" == typeof t ? new f(t) : t
  }
  for (var Z = 0; Z < 1e3; Z++) o[Z] = $(Z), Z > 0 && (o[-Z] = $(-Z));
  return o.one = o[1], o.zero = o[0], o.minusOne = o[-1], o.max = B, o.min = C, o.gcd = q, o.lcm = function(t, r) {
    return t = $(t).abs(), r = $(r).abs(), t.divide(q(t, r)).multiply(r)
  }, o.isInstance = function(t) {
    return t instanceof u || t instanceof a || t instanceof f
  }, o.randBetween = function(t, r, e) {
    t = $(t), r = $(r);
    var n = e || Math.random,
      i = C(t, r),
      u = B(t, r).subtract(i).add(1);
    if (u.isSmall) return i.add(Math.floor(n() * u));
    for (var a = F(u, 1e7).value, f = [], s = !0, c = 0; c < a.length; c++) {
      var l = s ? a[c] : 1e7,
        h = v(n() * l);
      f.push(h), h < l && (s = !1)
    }
    return i.add(o.fromArray(f, 1e7, !1))
  }, o.fromArray = function(t, r, e) {
    return z(t.map($), $(r || 10), e)
  }, o
}();
void 0 !== t && t.hasOwnProperty("exports") && (t.exports = n), "function" == typeof define && define.amd && define(function() {
  return n
})