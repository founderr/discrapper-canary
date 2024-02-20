e = n.nmd(e), n("424973"), n("843762"), n("854508"), n("70102"), n("274635");
var r = function(e) {
  "use strict";
  var t = c(9007199254740992),
    n = "0123456789abcdefghijklmnopqrstuvwxyz",
    a = "function" == typeof BigInt;

  function o(e, t, n, r) {
    return void 0 === e ? o[0] : void 0 !== t ? 10 != +t || n ? R(e, t, n, r) : K(e) : K(e)
  }

  function i(e, t) {
    this.value = e, this.sign = t, this.isSmall = !1
  }

  function u(e) {
    this.value = e, this.sign = e < 0, this.isSmall = !0
  }

  function s(e) {
    this.value = e
  }

  function l(e) {
    return -9007199254740992 < e && e < 9007199254740992
  }

  function c(e) {
    return e < 1e7 ? [e] : e < 1e14 ? [e % 1e7, Math.floor(e / 1e7)] : [e % 1e7, Math.floor(e / 1e7) % 1e7, Math.floor(e / 1e14)]
  }

  function f(e) {
    d(e);
    var n = e.length;
    if (n < 4 && 0 > T(e, t)) switch (n) {
      case 0:
        return 0;
      case 1:
        return e[0];
      case 2:
        return e[0] + 1e7 * e[1];
      default:
        return e[0] + (e[1] + 1e7 * e[2]) * 1e7
    }
    return e
  }

  function d(e) {
    for (var t = e.length; 0 === e[--t];);
    e.length = t + 1
  }

  function p(e) {
    for (var t = Array(e), n = -1; ++n < e;) t[n] = 0;
    return t
  }

  function h(e) {
    return e > 0 ? Math.floor(e) : Math.ceil(e)
  }

  function m(e, t) {
    var n, r, a = e.length,
      o = t.length,
      i = Array(a),
      u = 0;
    for (r = 0; r < o; r++) u = (n = e[r] + t[r] + u) >= 1e7 ? 1 : 0, i[r] = n - 1e7 * u;
    for (; r < a;) u = 1e7 === (n = e[r] + u) ? 1 : 0, i[r++] = n - 1e7 * u;
    return u > 0 && i.push(u), i
  }

  function _(e, t) {
    return e.length >= t.length ? m(e, t) : m(t, e)
  }

  function y(e, t) {
    var n, r, a = e.length,
      o = Array(a);
    for (r = 0; r < a; r++) t = Math.floor((n = e[r] - 1e7 + t) / 1e7), o[r] = n - 1e7 * t, t += 1;
    for (; t > 0;) o[r++] = t % 1e7, t = Math.floor(t / 1e7);
    return o
  }

  function g(e, t) {
    var n, r, a = e.length,
      o = t.length,
      i = Array(a),
      u = 0;
    for (n = 0; n < o; n++)(r = e[n] - u - t[n]) < 0 ? (r += 1e7, u = 1) : u = 0, i[n] = r;
    for (n = o; n < a; n++) {
      if ((r = e[n] - u) < 0) r += 1e7;
      else {
        i[n++] = r;
        break
      }
      i[n] = r
    }
    for (; n < a; n++) i[n] = e[n];
    return d(i), i
  }
  i.prototype = Object.create(o.prototype), u.prototype = Object.create(o.prototype), s.prototype = Object.create(o.prototype), i.prototype.add = function(e) {
    var t = K(e);
    if (this.sign !== t.sign) return this.subtract(t.negate());
    var n = this.value,
      r = t.value;
    return t.isSmall ? new i(y(n, Math.abs(r)), this.sign) : new i(_(n, r), this.sign)
  }, i.prototype.plus = i.prototype.add, u.prototype.add = function(e) {
    var t = K(e),
      n = this.value;
    if (n < 0 !== t.sign) return this.subtract(t.negate());
    var r = t.value;
    if (t.isSmall) {
      if (l(n + r)) return new u(n + r);
      r = c(Math.abs(r))
    }
    return new i(y(r, Math.abs(n)), n < 0)
  }, u.prototype.plus = u.prototype.add, s.prototype.add = function(e) {
    return new s(this.value + K(e).value)
  }, s.prototype.plus = s.prototype.add;

  function v(e, t, n) {
    var r, a, o = e.length,
      s = Array(o),
      l = -t;
    for (r = 0; r < o; r++) l = Math.floor((a = e[r] + l) / 1e7), a %= 1e7, s[r] = a < 0 ? a + 1e7 : a;
    return "number" == typeof(s = f(s)) ? (n && (s = -s), new u(s)) : new i(s, n)
  }

  function b(e, t) {
    var n, r, a, o, i = e.length,
      u = t.length,
      s = p(i + u);
    for (a = 0; a < i; ++a) {
      o = e[a];
      for (var l = 0; l < u; ++l) r = Math.floor((n = o * t[l] + s[a + l]) / 1e7), s[a + l] = n - 1e7 * r, s[a + l + 1] += r
    }
    return d(s), s
  }

  function M(e, t) {
    var n, r, a = e.length,
      o = Array(a),
      i = 0;
    for (r = 0; r < a; r++) i = Math.floor((n = e[r] * t + i) / 1e7), o[r] = n - 1e7 * i;
    for (; i > 0;) o[r++] = i % 1e7, i = Math.floor(i / 1e7);
    return o
  }

  function w(e, t) {
    for (var n = []; t-- > 0;) n.push(0);
    return n.concat(e)
  }
  i.prototype.subtract = function(e) {
    var t, n, r, a, o = K(e);
    if (this.sign !== o.sign) return this.add(o.negate());
    var s = this.value,
      l = o.value;
    if (o.isSmall) return v(s, Math.abs(l), this.sign);
    return t = s, n = l, r = this.sign, (T(t, n) >= 0 ? a = g(t, n) : (a = g(n, t), r = !r), "number" == typeof(a = f(a))) ? (r && (a = -a), new u(a)) : new i(a, r)
  }, i.prototype.minus = i.prototype.subtract, u.prototype.subtract = function(e) {
    var t = K(e),
      n = this.value;
    if (n < 0 !== t.sign) return this.add(t.negate());
    var r = t.value;
    return t.isSmall ? new u(n - r) : v(r, Math.abs(n), n >= 0)
  }, u.prototype.minus = u.prototype.subtract, s.prototype.subtract = function(e) {
    return new s(this.value - K(e).value)
  }, s.prototype.minus = s.prototype.subtract, i.prototype.negate = function() {
    return new i(this.value, !this.sign)
  }, u.prototype.negate = function() {
    var e = this.sign,
      t = new u(-this.value);
    return t.sign = !e, t
  }, s.prototype.negate = function() {
    return new s(-this.value)
  }, i.prototype.abs = function() {
    return new i(this.value, !1)
  }, u.prototype.abs = function() {
    return new u(Math.abs(this.value))
  }, s.prototype.abs = function() {
    return new s(this.value >= 0 ? this.value : -this.value)
  };

  function k(e, t, n) {
    return e < 1e7 ? new i(M(t, e), n) : new i(b(t, c(e)), n)
  }

  function L(e) {
    var t, n, r, a, o = e.length,
      i = p(o + o);
    for (r = 0; r < o; r++) {
      n = 0 - (a = e[r]) * a;
      for (var u = r; u < o; u++) n = Math.floor((t = 2 * (a * e[u]) + i[r + u] + n) / 1e7), i[r + u] = t - 1e7 * n;
      i[r + o] = n
    }
    return d(i), i
  }
  i.prototype.multiply = function(e) {
    var t, n, r, a = K(e),
      u = this.value,
      s = a.value,
      l = this.sign !== a.sign;
    if (a.isSmall) {
      if (0 === s) return o[0];
      if (1 === s) return this;
      if (-1 === s) return this.negate();
      if ((r = Math.abs(s)) < 1e7) return new i(M(u, r), l);
      s = c(r)
    }
    return (t = u.length, -.012 * t - .012 * (n = s.length) + 15e-6 * t * n > 0) ? new i(function e(t, n) {
      var r = Math.max(t.length, n.length);
      if (r <= 30) return b(t, n);
      r = Math.ceil(r / 2);
      var a = t.slice(r),
        o = t.slice(0, r),
        i = n.slice(r),
        u = n.slice(0, r),
        s = e(o, u),
        l = e(a, i),
        c = e(_(o, a), _(u, i)),
        f = _(_(s, w(g(g(c, s), l), r)), w(l, 2 * r));
      return d(f), f
    }(u, s), l) : new i(b(u, s), l)
  }, i.prototype.times = i.prototype.multiply, u.prototype._multiplyBySmall = function(e) {
    return l(e.value * this.value) ? new u(e.value * this.value) : k(Math.abs(e.value), c(Math.abs(this.value)), this.sign !== e.sign)
  }, i.prototype._multiplyBySmall = function(e) {
    return 0 === e.value ? o[0] : 1 === e.value ? this : -1 === e.value ? this.negate() : k(Math.abs(e.value), this.value, this.sign !== e.sign)
  }, u.prototype.multiply = function(e) {
    return K(e)._multiplyBySmall(this)
  }, u.prototype.times = u.prototype.multiply, s.prototype.multiply = function(e) {
    return new s(this.value * K(e).value)
  }, s.prototype.times = s.prototype.multiply, i.prototype.square = function() {
    return new i(L(this.value), !1)
  }, u.prototype.square = function() {
    var e = this.value * this.value;
    return l(e) ? new u(e) : new i(L(c(Math.abs(this.value))), !1)
  }, s.prototype.square = function(e) {
    return new s(this.value * this.value)
  };

  function D(e, t) {
    var n, r, a, o, i = e.length,
      u = p(i);
    for (a = 0, n = i - 1; n >= 0; --n) r = h((o = 1e7 * a + e[n]) / t), a = o - r * t, u[n] = 0 | r;
    return [u, 0 | a]
  }

  function S(e, t) {
    var n, r, l = K(t);
    if (a) return [new s(e.value / l.value), new s(e.value % l.value)];
    var m = e.value,
      _ = l.value;
    if (0 === _) throw Error("Cannot divide by zero");
    if (e.isSmall) return l.isSmall ? [new u(h(m / _)), new u(m % _)] : [o[0], e];
    if (l.isSmall) {
      if (1 === _) return [e, o[0]];
      if (-1 == _) return [e.negate(), o[0]];
      var y = Math.abs(_);
      if (y < 1e7) {
        n = f((r = D(m, y))[0]);
        var v = r[1];
        return (e.sign && (v = -v), "number" == typeof n) ? (e.sign !== l.sign && (n = -n), [new u(n), new u(v)]) : [new i(n, e.sign !== l.sign), new u(v)]
      }
      _ = c(y)
    }
    var b = T(m, _);
    if (-1 === b) return [o[0], e];
    if (0 === b) return [o[e.sign === l.sign ? 1 : -1], o[0]];
    n = (r = m.length + _.length <= 200 ? function(e, t) {
      var n, r, a, o, i, u, s, l = e.length,
        c = t.length,
        d = p(t.length),
        h = t[c - 1],
        m = Math.ceil(1e7 / (2 * h)),
        _ = M(e, m),
        y = M(t, m);
      for (_.length <= l && _.push(0), y.push(0), h = y[c - 1], r = l - c; r >= 0; r--) {
        for (n = 1e7 - 1, _[r + c] !== h && (n = Math.floor((1e7 * _[r + c] + _[r + c - 1]) / h)), a = 0, o = 0, u = y.length, i = 0; i < u; i++) a += n * y[i], s = Math.floor(a / 1e7), o += _[r + i] - (a - 1e7 * s), a = s, o < 0 ? (_[r + i] = o + 1e7, o = -1) : (_[r + i] = o, o = 0);
        for (; 0 !== o;) {
          for (n -= 1, a = 0, i = 0; i < u; i++)(a += _[r + i] - 1e7 + y[i]) < 0 ? (_[r + i] = a + 1e7, a = 0) : (_[r + i] = a, a = 1);
          o += a
        }
        d[r] = n
      }
      return _ = D(_, m)[0], [f(d), f(_)]
    }(m, _) : function(e, t) {
      for (var n, r, a, o, i, u = e.length, s = t.length, l = [], c = []; u;) {
        if (c.unshift(e[--u]), d(c), 0 > T(c, t)) {
          l.push(0);
          continue
        }
        r = c.length, a = 1e7 * c[r - 1] + c[r - 2], o = 1e7 * t[s - 1] + t[s - 2], r > s && (a = (a + 1) * 1e7), n = Math.ceil(a / o);
        do {
          if (0 >= T(i = M(t, n), c)) break;
          n--
        } while (n);
        l.push(n), c = g(c, i)
      }
      return l.reverse(), [f(l), f(c)]
    }(m, _))[0];
    var w = e.sign !== l.sign,
      k = r[1],
      L = e.sign;
    return "number" == typeof n ? (w && (n = -n), n = new u(n)) : n = new i(n, w), "number" == typeof k ? (L && (k = -k), k = new u(k)) : k = new i(k, L), [n, k]
  }

  function T(e, t) {
    if (e.length !== t.length) return e.length > t.length ? 1 : -1;
    for (var n = e.length - 1; n >= 0; n--)
      if (e[n] !== t[n]) return e[n] > t[n] ? 1 : -1;
    return 0
  }

  function Y(e) {
    var t = e.abs();
    return !t.isUnit() && (!!(t.equals(2) || t.equals(3) || t.equals(5)) || !(t.isEven() || t.isDivisibleBy(3) || t.isDivisibleBy(5)) && (!!t.lesser(49) || void 0))
  }

  function x(e, t) {
    for (var n, a, o, i = e.prev(), u = i, s = 0; u.isEven();) u = u.divide(2), s++;
    e: for (a = 0; a < t.length; a++) {
      if (!e.lesser(t[a])) {
        if (!((o = r(t[a]).modPow(u, e)).isUnit() || o.equals(i))) {
          for (n = s - 1; 0 != n && !(o = o.square().mod(e)).isUnit(); n--) {
            ;
            if (o.equals(i)) continue e
          }
          return !1
        }
      }
    }
    return !0
  }
  i.prototype.divmod = function(e) {
    var t = S(this, e);
    return {
      quotient: t[0],
      remainder: t[1]
    }
  }, s.prototype.divmod = u.prototype.divmod = i.prototype.divmod, i.prototype.divide = function(e) {
    return S(this, e)[0]
  }, s.prototype.over = s.prototype.divide = function(e) {
    return new s(this.value / K(e).value)
  }, u.prototype.over = u.prototype.divide = i.prototype.over = i.prototype.divide, i.prototype.mod = function(e) {
    return S(this, e)[1]
  }, s.prototype.mod = s.prototype.remainder = function(e) {
    return new s(this.value % K(e).value)
  }, u.prototype.remainder = u.prototype.mod = i.prototype.remainder = i.prototype.mod, i.prototype.pow = function(e) {
    var t, n, r, a = K(e),
      i = this.value,
      s = a.value;
    if (0 === s) return o[1];
    if (0 === i) return o[0];
    if (1 === i) return o[1];
    if (-1 === i) return a.isEven() ? o[1] : o[-1];
    if (a.sign) return o[0];
    if (!a.isSmall) throw Error("The exponent " + a.toString() + " is too large.");
    if (this.isSmall && l(t = Math.pow(i, s))) return new u(h(t));
    for (n = this, r = o[1]; !0 & s && (r = r.times(n), --s), 0 !== s;) {
      ;
      s /= 2, n = n.square()
    }
    return r
  }, u.prototype.pow = i.prototype.pow, s.prototype.pow = function(e) {
    var t = K(e),
      n = this.value,
      r = t.value,
      a = BigInt(0),
      i = BigInt(1),
      u = BigInt(2);
    if (r === a) return o[1];
    if (n === a) return o[0];
    if (n === i) return o[1];
    if (n === BigInt(-1)) return t.isEven() ? o[1] : o[-1];
    if (t.isNegative()) return new s(a);
    for (var l = this, c = o[1];
      (r & i) === i && (c = c.times(l), --r), r !== a;) {
      ;
      r /= u, l = l.square()
    }
    return c
  }, i.prototype.modPow = function(e, t) {
    if (e = K(e), (t = K(t)).isZero()) throw Error("Cannot take modPow with modulus 0");
    var n = o[1],
      r = this.mod(t);
    for (e.isNegative() && (e = e.multiply(o[-1]), r = r.modInv(t)); e.isPositive();) {
      if (r.isZero()) return o[0];
      e.isOdd() && (n = n.multiply(r).mod(t)), e = e.divide(2), r = r.square().mod(t)
    }
    return n
  }, s.prototype.modPow = u.prototype.modPow = i.prototype.modPow, i.prototype.compareAbs = function(e) {
    var t = K(e),
      n = this.value,
      r = t.value;
    return t.isSmall ? 1 : T(n, r)
  }, u.prototype.compareAbs = function(e) {
    var t = K(e),
      n = Math.abs(this.value),
      r = t.value;
    return t.isSmall ? n === (r = Math.abs(r)) ? 0 : n > r ? 1 : -1 : -1
  }, s.prototype.compareAbs = function(e) {
    var t = this.value,
      n = K(e).value;
    return (t = t >= 0 ? t : -t) === (n = n >= 0 ? n : -n) ? 0 : t > n ? 1 : -1
  }, i.prototype.compare = function(e) {
    if (e === 1 / 0) return -1;
    if (e === -1 / 0) return 1;
    var t = K(e),
      n = this.value,
      r = t.value;
    return this.sign !== t.sign ? t.sign ? 1 : -1 : t.isSmall ? this.sign ? -1 : 1 : T(n, r) * (this.sign ? -1 : 1)
  }, i.prototype.compareTo = i.prototype.compare, u.prototype.compare = function(e) {
    if (e === 1 / 0) return -1;
    if (e === -1 / 0) return 1;
    var t = K(e),
      n = this.value,
      r = t.value;
    return t.isSmall ? n == r ? 0 : n > r ? 1 : -1 : n < 0 !== t.sign ? n < 0 ? -1 : 1 : n < 0 ? 1 : -1
  }, u.prototype.compareTo = u.prototype.compare, s.prototype.compare = function(e) {
    if (e === 1 / 0) return -1;
    if (e === -1 / 0) return 1;
    var t = this.value,
      n = K(e).value;
    return t === n ? 0 : t > n ? 1 : -1
  }, s.prototype.compareTo = s.prototype.compare, i.prototype.equals = function(e) {
    return 0 === this.compare(e)
  }, s.prototype.eq = s.prototype.equals = u.prototype.eq = u.prototype.equals = i.prototype.eq = i.prototype.equals, i.prototype.notEquals = function(e) {
    return 0 !== this.compare(e)
  }, s.prototype.neq = s.prototype.notEquals = u.prototype.neq = u.prototype.notEquals = i.prototype.neq = i.prototype.notEquals, i.prototype.greater = function(e) {
    return this.compare(e) > 0
  }, s.prototype.gt = s.prototype.greater = u.prototype.gt = u.prototype.greater = i.prototype.gt = i.prototype.greater, i.prototype.lesser = function(e) {
    return 0 > this.compare(e)
  }, s.prototype.lt = s.prototype.lesser = u.prototype.lt = u.prototype.lesser = i.prototype.lt = i.prototype.lesser, i.prototype.greaterOrEquals = function(e) {
    return this.compare(e) >= 0
  }, s.prototype.geq = s.prototype.greaterOrEquals = u.prototype.geq = u.prototype.greaterOrEquals = i.prototype.geq = i.prototype.greaterOrEquals, i.prototype.lesserOrEquals = function(e) {
    return 0 >= this.compare(e)
  }, s.prototype.leq = s.prototype.lesserOrEquals = u.prototype.leq = u.prototype.lesserOrEquals = i.prototype.leq = i.prototype.lesserOrEquals, i.prototype.isEven = function() {
    return (1 & this.value[0]) == 0
  }, u.prototype.isEven = function() {
    return (1 & this.value) == 0
  }, s.prototype.isEven = function() {
    return (this.value & BigInt(1)) === BigInt(0)
  }, i.prototype.isOdd = function() {
    return (1 & this.value[0]) == 1
  }, u.prototype.isOdd = function() {
    return (1 & this.value) == 1
  }, s.prototype.isOdd = function() {
    return (this.value & BigInt(1)) === BigInt(1)
  }, i.prototype.isPositive = function() {
    return !this.sign
  }, u.prototype.isPositive = function() {
    return this.value > 0
  }, s.prototype.isPositive = u.prototype.isPositive, i.prototype.isNegative = function() {
    return this.sign
  }, u.prototype.isNegative = function() {
    return this.value < 0
  }, s.prototype.isNegative = u.prototype.isNegative, i.prototype.isUnit = function() {
    return !1
  }, u.prototype.isUnit = function() {
    return 1 === Math.abs(this.value)
  }, s.prototype.isUnit = function() {
    return this.abs().value === BigInt(1)
  }, i.prototype.isZero = function() {
    return !1
  }, u.prototype.isZero = function() {
    return 0 === this.value
  }, s.prototype.isZero = function() {
    return this.value === BigInt(0)
  }, i.prototype.isDivisibleBy = function(e) {
    var t = K(e);
    return !t.isZero() && (!!t.isUnit() || (0 === t.compareAbs(2) ? this.isEven() : this.mod(t).isZero()))
  }, s.prototype.isDivisibleBy = u.prototype.isDivisibleBy = i.prototype.isDivisibleBy, i.prototype.isPrime = function(t) {
    var n = Y(this);
    if (e !== n) return n;
    var a = this.abs(),
      o = a.bitLength();
    if (o <= 64) return x(a, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
    for (var i = Math.log(2) * o.toJSNumber(), u = Math.ceil(!0 === t ? 2 * Math.pow(i, 2) : i), s = [], l = 0; l < u; l++) s.push(r(l + 2));
    return x(a, s)
  }, s.prototype.isPrime = u.prototype.isPrime = i.prototype.isPrime, i.prototype.isProbablePrime = function(t, n) {
    var a = Y(this);
    if (e !== a) return a;
    for (var o = this.abs(), i = e === t ? 5 : t, u = [], s = 0; s < i; s++) u.push(r.randBetween(2, o.minus(2), n));
    return x(o, u)
  }, s.prototype.isProbablePrime = u.prototype.isProbablePrime = i.prototype.isProbablePrime, i.prototype.modInv = function(e) {
    for (var t, n, a, o = r.zero, i = r.one, u = K(e), s = this.abs(); !s.isZero();) t = u.divide(s), n = o, a = u, o = i, u = s, i = n.subtract(t.multiply(i)), s = a.subtract(t.multiply(s));
    if (!u.isUnit()) throw Error(this.toString() + " and " + e.toString() + " are not co-prime");
    return (-1 === o.compare(0) && (o = o.add(e)), this.isNegative()) ? o.negate() : o
  }, s.prototype.modInv = u.prototype.modInv = i.prototype.modInv, i.prototype.next = function() {
    var e = this.value;
    return this.sign ? v(e, 1, this.sign) : new i(y(e, 1), this.sign)
  }, u.prototype.next = function() {
    var e = this.value;
    return e + 1 < 9007199254740992 ? new u(e + 1) : new i(t, !1)
  }, s.prototype.next = function() {
    return new s(this.value + BigInt(1))
  }, i.prototype.prev = function() {
    var e = this.value;
    return this.sign ? new i(y(e, 1), !0) : v(e, 1, this.sign)
  }, u.prototype.prev = function() {
    var e = this.value;
    return e - 1 > -9007199254740992 ? new u(e - 1) : new i(t, !0)
  }, s.prototype.prev = function() {
    return new s(this.value - BigInt(1))
  };
  for (var E = [1]; 2 * E[E.length - 1] <= 1e7;) E.push(2 * E[E.length - 1]);
  var O = E.length,
    P = E[O - 1];

  function j(e) {
    return 1e7 >= Math.abs(e)
  }

  function C(e, t, n) {
    t = K(t);
    for (var a = e.isNegative(), o = t.isNegative(), i = a ? e.not() : e, u = o ? t.not() : t, s = 0, l = 0, c = null, f = null, d = []; !i.isZero() || !u.isZero();) s = (c = S(i, P))[1].toJSNumber(), a && (s = P - 1 - s), l = (f = S(u, P))[1].toJSNumber(), o && (l = P - 1 - l), i = c[0], u = f[0], d.push(n(s, l));
    for (var p = 0 !== n(a ? 1 : 0, o ? 1 : 0) ? r(-1) : r(0), h = d.length - 1; h >= 0; h -= 1) p = p.multiply(P).add(r(d[h]));
    return p
  }
  i.prototype.shiftLeft = function(e) {
    var t = K(e).toJSNumber();
    if (!j(t)) throw Error(String(t) + " is too large for shifting.");
    if (t < 0) return this.shiftRight(-t);
    var n = this;
    if (n.isZero()) return n;
    for (; t >= O;) n = n.multiply(P), t -= O - 1;
    return n.multiply(E[t])
  }, s.prototype.shiftLeft = u.prototype.shiftLeft = i.prototype.shiftLeft, i.prototype.shiftRight = function(e) {
    var t, n = K(e).toJSNumber();
    if (!j(n)) throw Error(String(n) + " is too large for shifting.");
    if (n < 0) return this.shiftLeft(-n);
    for (var r = this; n >= O;) {
      if (r.isZero() || r.isNegative() && r.isUnit()) return r;
      r = (t = S(r, P))[1].isNegative() ? t[0].prev() : t[0], n -= O - 1
    }
    return (t = S(r, E[n]))[1].isNegative() ? t[0].prev() : t[0]
  }, s.prototype.shiftRight = u.prototype.shiftRight = i.prototype.shiftRight, i.prototype.not = function() {
    return this.negate().prev()
  }, s.prototype.not = u.prototype.not = i.prototype.not, i.prototype.and = function(e) {
    return C(this, e, function(e, t) {
      return e & t
    })
  }, s.prototype.and = u.prototype.and = i.prototype.and, i.prototype.or = function(e) {
    return C(this, e, function(e, t) {
      return e | t
    })
  }, s.prototype.or = u.prototype.or = i.prototype.or, i.prototype.xor = function(e) {
    return C(this, e, function(e, t) {
      return e ^ t
    })
  }, s.prototype.xor = u.prototype.xor = i.prototype.xor;
  var H = 1073758208;

  function N(e) {
    var t = e.value,
      n = "number" == typeof t ? 1073741824 | t : "bigint" == typeof t ? t | BigInt(1073741824) : t[0] + 1e7 * t[1] | H;
    return n & -n
  }

  function F(e, t) {
    return e = K(e), t = K(t), e.greater(t) ? e : t
  }

  function I(e, t) {
    return e = K(e), t = K(t), e.lesser(t) ? e : t
  }

  function A(e, t) {
    if (e = K(e).abs(), t = K(t).abs(), e.equals(t)) return e;
    if (e.isZero()) return t;
    if (t.isZero()) return e;
    for (var n, r, a = o[1]; e.isEven() && t.isEven();) n = I(N(e), N(t)), e = e.divide(n), t = t.divide(n), a = a.multiply(n);
    for (; e.isEven();) e = e.divide(N(e));
    do {
      for (; t.isEven();) t = t.divide(N(t));
      e.greater(t) && (r = t, t = e, e = r), t = t.subtract(e)
    } while (!t.isZero());
    return a.isUnit() ? e : e.multiply(a)
  }
  i.prototype.bitLength = function() {
    var e = this;
    return (0 > e.compareTo(r(0)) && (e = e.negate().subtract(r(1))), 0 === e.compareTo(r(0))) ? r(0) : r(function e(t, n) {
      if (0 >= n.compareTo(t)) {
        var a = e(t, n.square(n)),
          o = a.p,
          i = a.e,
          u = o.multiply(n);
        return 0 >= u.compareTo(t) ? {
          p: u,
          e: 2 * i + 1
        } : {
          p: o,
          e: 2 * i
        }
      }
      return {
        p: r(1),
        e: 0
      }
    }(e, r(2)).e).add(r(1))
  }, s.prototype.bitLength = u.prototype.bitLength = i.prototype.bitLength;
  var R = function(e, t, r, a) {
    r = r || n, e = String(e), !a && (e = e.toLowerCase(), r = r.toLowerCase());
    var o, i = e.length,
      u = Math.abs(t),
      s = {};
    for (o = 0; o < r.length; o++) s[r[o]] = o;
    for (o = 0; o < i; o++) {
      var l = e[o];
      if ("-" !== l && l in s && s[l] >= u) {
        if ("1" === l && 1 === u) continue;
        throw Error(l + " is not a valid digit in base " + t + ".")
      }
    }
    t = K(t);
    var c = [],
      f = "-" === e[0];
    for (o = f ? 1 : 0; o < e.length; o++) {
      var l = e[o];
      if (l in s) c.push(K(s[l]));
      else if ("<" === l) {
        var d = o;
        do o++; while (">" !== e[o] && o < e.length);
        c.push(K(e.slice(d + 1, o)))
      } else throw Error(l + " is not a valid character")
    }
    return W(c, t, f)
  };

  function W(e, t, n) {
    var r, a = o[0],
      i = o[1];
    for (r = e.length - 1; r >= 0; r--) a = a.add(e[r].times(i)), i = i.times(t);
    return n ? a.negate() : a
  }

  function z(e, t) {
    if ((t = r(t)).isZero()) {
      if (e.isZero()) return {
        value: [0],
        isNegative: !1
      };
      throw Error("Cannot convert nonzero numbers to base 0.")
    }
    if (t.equals(-1)) {
      if (e.isZero()) return {
        value: [0],
        isNegative: !1
      };
      if (e.isNegative()) return {
        value: [].concat.apply([], Array.apply(null, Array(-e.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
        isNegative: !1
      };
      var n = Array.apply(null, Array(e.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
      return n.unshift([1]), {
        value: [].concat.apply([], n),
        isNegative: !1
      }
    }
    var a = !1;
    if (e.isNegative() && t.isPositive() && (a = !0, e = e.abs()), t.isUnit()) return e.isZero() ? {
      value: [0],
      isNegative: !1
    } : {
      value: Array.apply(null, Array(e.toJSNumber())).map(Number.prototype.valueOf, 1),
      isNegative: a
    };
    for (var o = [], i, u = e; u.isNegative() || u.compareAbs(t) >= 0;) {
      u = (i = u.divmod(t)).quotient;
      var s = i.remainder;
      s.isNegative() && (s = t.minus(s).abs(), u = u.next()), o.push(s.toJSNumber())
    }
    return o.push(u.toJSNumber()), {
      value: o.reverse(),
      isNegative: a
    }
  }

  function U(e, t, r) {
    var a = z(e, t);
    return (a.isNegative ? "-" : "") + a.value.map(function(e) {
      var t, a;
      return (t = e) < (a = (a = r) || n).length ? a[t] : "<" + t + ">"
    }).join("")
  }

  function B(e) {
    if (l(+e)) {
      var t = +e;
      if (t === h(t)) return a ? new s(BigInt(t)) : new u(t);
      throw Error("Invalid integer: " + e)
    }
    var n = "-" === e[0];
    n && (e = e.slice(1));
    var r = e.split(/e/i);
    if (r.length > 2) throw Error("Invalid integer: " + r.join("e"));
    if (2 === r.length) {
      var o = r[1];
      if ("+" === o[0] && (o = o.slice(1)), (o = +o) !== h(o) || !l(o)) throw Error("Invalid integer: " + o + " is not a valid exponent.");
      var c = r[0],
        f = c.indexOf(".");
      if (f >= 0 && (o -= c.length - f - 1, c = c.slice(0, f) + c.slice(f + 1)), o < 0) throw Error("Cannot include negative exponent part for integers");
      c += Array(o + 1).join("0"), e = c
    }
    if (!/^([0-9][0-9]*)$/.test(e)) throw Error("Invalid integer: " + e);
    if (a) return new s(BigInt(n ? "-" + e : e));
    for (var p = [], m = e.length, _ = m - 7; m > 0;) p.push(+e.slice(_, m)), (_ -= 7) < 0 && (_ = 0), m -= 7;
    return d(p), new i(p, n)
  }
  i.prototype.toArray = function(e) {
    return z(this, e)
  }, u.prototype.toArray = function(e) {
    return z(this, e)
  }, s.prototype.toArray = function(e) {
    return z(this, e)
  }, i.prototype.toString = function(t, n) {
    if (e === t && (t = 10), 10 !== t) return U(this, t, n);
    for (var r, a = this.value, o = a.length, i = String(a[--o]); --o >= 0;) r = String(a[o]), i += "0000000".slice(r.length) + r;
    return (this.sign ? "-" : "") + i
  }, u.prototype.toString = function(t, n) {
    return (e === t && (t = 10), 10 != t) ? U(this, t, n) : String(this.value)
  }, s.prototype.toString = u.prototype.toString, s.prototype.toJSON = i.prototype.toJSON = u.prototype.toJSON = function() {
    return this.toString()
  }, i.prototype.valueOf = function() {
    return parseInt(this.toString(), 10)
  }, i.prototype.toJSNumber = i.prototype.valueOf, u.prototype.valueOf = function() {
    return this.value
  }, u.prototype.toJSNumber = u.prototype.valueOf, s.prototype.valueOf = s.prototype.toJSNumber = function() {
    return parseInt(this.toString(), 10)
  };

  function K(e) {
    return "number" == typeof e ? function(e) {
      if (a) return new s(BigInt(e));
      if (l(e)) {
        if (e !== h(e)) throw Error(e + " is not an integer.");
        return new u(e)
      }
      return B(e.toString())
    }(e) : "string" == typeof e ? B(e) : "bigint" == typeof e ? new s(e) : e
  }
  for (var q = 0; q < 1e3; q++) o[q] = K(q), q > 0 && (o[-q] = K(-q));
  return o.one = o[1], o.zero = o[0], o.minusOne = o[-1], o.max = F, o.min = I, o.gcd = A, o.lcm = function(e, t) {
    return e = K(e).abs(), t = K(t).abs(), e.divide(A(e, t)).multiply(t)
  }, o.isInstance = function(e) {
    return e instanceof i || e instanceof u || e instanceof s
  }, o.randBetween = function(e, t, n) {
    e = K(e), t = K(t);
    var r = n || Math.random,
      a = I(e, t),
      i = F(e, t).subtract(a).add(1);
    if (i.isSmall) return a.add(Math.floor(r() * i));
    for (var u = z(i, 1e7).value, s = [], l = !0, c = 0; c < u.length; c++) {
      var f = l ? u[c] : 1e7,
        d = h(r() * f);
      s.push(d), d < f && (l = !1)
    }
    return a.add(o.fromArray(s, 1e7, !1))
  }, o.fromArray = function(e, t, n) {
    return W(e.map(K), K(t || 10), n)
  }, o
}();
void 0 !== e && e.hasOwnProperty("exports") && (e.exports = r), "function" == typeof define && define.amd && define(function() {
  return r
})