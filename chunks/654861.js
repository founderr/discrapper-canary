e = r.nmd(e);
var n = (function (e) {
    var t = s(9007199254740992),
        r = '0123456789abcdefghijklmnopqrstuvwxyz',
        a = 'function' == typeof BigInt;
    function _(e, t, r, n) {
        return void 0 === e ? _[0] : void 0 !== t ? (10 != +t || r ? Y(e, t, r, n) : F(e)) : F(e);
    }
    function o(e, t) {
        (this.value = e), (this.sign = t), (this.isSmall = !1);
    }
    function i(e) {
        (this.value = e), (this.sign = e < 0), (this.isSmall = !0);
    }
    function E(e) {
        this.value = e;
    }
    function c(e) {
        return -9007199254740992 < e && e < 9007199254740992;
    }
    function s(e) {
        return e < 10000000 ? [e] : e < 100000000000000 ? [e % 10000000, Math.floor(e / 10000000)] : [e % 10000000, Math.floor(e / 10000000) % 10000000, Math.floor(e / 100000000000000)];
    }
    function l(e) {
        u(e);
        var r = e.length;
        if (r < 4 && 0 > g(e, t))
            switch (r) {
                case 0:
                    return 0;
                case 1:
                    return e[0];
                case 2:
                    return e[0] + 10000000 * e[1];
                default:
                    return e[0] + (e[1] + 10000000 * e[2]) * 10000000;
            }
        return e;
    }
    function u(e) {
        for (var t = e.length; 0 === e[--t]; );
        e.length = t + 1;
    }
    function I(e) {
        for (var t = Array(e), r = -1; ++r < e; ) t[r] = 0;
        return t;
    }
    function R(e) {
        return e > 0 ? Math.floor(e) : Math.ceil(e);
    }
    function A(e, t) {
        var r,
            n,
            a = e.length,
            _ = t.length,
            o = Array(a),
            i = 0;
        for (n = 0; n < _; n++) (i = (r = e[n] + t[n] + i) >= 10000000 ? 1 : 0), (o[n] = r - 10000000 * i);
        for (; n < a; ) (i = 10000000 === (r = e[n] + i) ? 1 : 0), (o[n++] = r - 10000000 * i);
        return i > 0 && o.push(i), o;
    }
    function N(e, t) {
        return e.length >= t.length ? A(e, t) : A(t, e);
    }
    function T(e, t) {
        var r,
            n,
            a = e.length,
            _ = Array(a);
        for (n = 0; n < a; n++) (t = Math.floor((r = e[n] - 10000000 + t) / 10000000)), (_[n] = r - 10000000 * t), (t += 1);
        for (; t > 0; ) (_[n++] = t % 10000000), (t = Math.floor(t / 10000000));
        return _;
    }
    function d(e, t) {
        var r,
            n,
            a = e.length,
            _ = t.length,
            o = Array(a),
            i = 0;
        for (r = 0; r < _; r++) (n = e[r] - i - t[r]) < 0 ? ((n += 10000000), (i = 1)) : (i = 0), (o[r] = n);
        for (r = _; r < a; r++) {
            if ((n = e[r] - i) < 0) n += 10000000;
            else {
                o[r++] = n;
                break;
            }
            o[r] = n;
        }
        for (; r < a; r++) o[r] = e[r];
        return u(o), o;
    }
    (o.prototype = Object.create(_.prototype)),
        (i.prototype = Object.create(_.prototype)),
        (E.prototype = Object.create(_.prototype)),
        (o.prototype.add = function (e) {
            var t = F(e);
            if (this.sign !== t.sign) return this.subtract(t.negate());
            var r = this.value,
                n = t.value;
            return t.isSmall ? new o(T(r, Math.abs(n)), this.sign) : new o(N(r, n), this.sign);
        }),
        (o.prototype.plus = o.prototype.add),
        (i.prototype.add = function (e) {
            var t = F(e),
                r = this.value;
            if (r < 0 !== t.sign) return this.subtract(t.negate());
            var n = t.value;
            if (t.isSmall) {
                if (c(r + n)) return new i(r + n);
                n = s(Math.abs(n));
            }
            return new o(T(n, Math.abs(r)), r < 0);
        }),
        (i.prototype.plus = i.prototype.add),
        (E.prototype.add = function (e) {
            return new E(this.value + F(e).value);
        }),
        (E.prototype.plus = E.prototype.add);
    function f(e, t, r) {
        var n,
            a,
            _ = e.length,
            E = Array(_),
            c = -t;
        for (n = 0; n < _; n++) (c = Math.floor((a = e[n] + c) / 10000000)), (a %= 10000000), (E[n] = a < 0 ? a + 10000000 : a);
        return 'number' == typeof (E = l(E)) ? (r && (E = -E), new i(E)) : new o(E, r);
    }
    function L(e, t) {
        var r,
            n,
            a,
            _,
            o = e.length,
            i = t.length,
            E = I(o + i);
        for (a = 0; a < o; ++a) {
            _ = e[a];
            for (var c = 0; c < i; ++c) (n = Math.floor((r = _ * t[c] + E[a + c]) / 10000000)), (E[a + c] = r - 10000000 * n), (E[a + c + 1] += n);
        }
        return u(E), E;
    }
    function O(e, t) {
        var r,
            n,
            a = e.length,
            _ = Array(a),
            o = 0;
        for (n = 0; n < a; n++) (o = Math.floor((r = e[n] * t + o) / 10000000)), (_[n] = r - 10000000 * o);
        for (; o > 0; ) (_[n++] = o % 10000000), (o = Math.floor(o / 10000000));
        return _;
    }
    function p(e, t) {
        for (var r = []; t-- > 0; ) r.push(0);
        return r.concat(e);
    }
    (o.prototype.subtract = function (e) {
        var t,
            r,
            n,
            a,
            _ = F(e);
        if (this.sign !== _.sign) return this.add(_.negate());
        var E = this.value,
            c = _.value;
        if (_.isSmall) return f(E, Math.abs(c), this.sign);
        return (t = E), (r = c), (n = this.sign), (g(t, r) >= 0 ? (a = d(t, r)) : ((a = d(r, t)), (n = !n)), 'number' == typeof (a = l(a))) ? (n && (a = -a), new i(a)) : new o(a, n);
    }),
        (o.prototype.minus = o.prototype.subtract),
        (i.prototype.subtract = function (e) {
            var t = F(e),
                r = this.value;
            if (r < 0 !== t.sign) return this.add(t.negate());
            var n = t.value;
            return t.isSmall ? new i(r - n) : f(n, Math.abs(r), r >= 0);
        }),
        (i.prototype.minus = i.prototype.subtract),
        (E.prototype.subtract = function (e) {
            return new E(this.value - F(e).value);
        }),
        (E.prototype.minus = E.prototype.subtract),
        (o.prototype.negate = function () {
            return new o(this.value, !this.sign);
        }),
        (i.prototype.negate = function () {
            var e = this.sign,
                t = new i(-this.value);
            return (t.sign = !e), t;
        }),
        (E.prototype.negate = function () {
            return new E(-this.value);
        }),
        (o.prototype.abs = function () {
            return new o(this.value, !1);
        }),
        (i.prototype.abs = function () {
            return new i(Math.abs(this.value));
        }),
        (E.prototype.abs = function () {
            return new E(this.value >= 0 ? this.value : -this.value);
        });
    function h(e, t, r) {
        return e < 10000000 ? new o(O(t, e), r) : new o(L(t, s(e)), r);
    }
    function S(e) {
        var t,
            r,
            n,
            a,
            _ = e.length,
            o = I(_ + _);
        for (n = 0; n < _; n++) {
            r = 0 - (a = e[n]) * a;
            for (var i = n; i < _; i++) (r = Math.floor((t = a * e[i] * 2 + o[n + i] + r) / 10000000)), (o[n + i] = t - 10000000 * r);
            o[n + _] = r;
        }
        return u(o), o;
    }
    (o.prototype.multiply = function (e) {
        var t,
            r,
            n,
            a = F(e),
            i = this.value,
            E = a.value,
            c = this.sign !== a.sign;
        if (a.isSmall) {
            if (0 === E) return _[0];
            if (1 === E) return this;
            if (-1 === E) return this.negate();
            if ((n = Math.abs(E)) < 10000000) return new o(O(i, n), c);
            E = s(n);
        }
        return ((t = i.length), -0.012 * t - 0.012 * (r = E.length) + 0.000015 * t * r > 0)
            ? new o(
                  (function e(t, r) {
                      var n = Math.max(t.length, r.length);
                      if (n <= 30) return L(t, r);
                      n = Math.ceil(n / 2);
                      var a = t.slice(n),
                          _ = t.slice(0, n),
                          o = r.slice(n),
                          i = r.slice(0, n),
                          E = e(_, i),
                          c = e(a, o),
                          s = e(N(_, a), N(i, o)),
                          l = N(N(E, p(d(d(s, E), c), n)), p(c, 2 * n));
                      return u(l), l;
                  })(i, E),
                  c
              )
            : new o(L(i, E), c);
    }),
        (o.prototype.times = o.prototype.multiply),
        (i.prototype._multiplyBySmall = function (e) {
            return c(e.value * this.value) ? new i(e.value * this.value) : h(Math.abs(e.value), s(Math.abs(this.value)), this.sign !== e.sign);
        }),
        (o.prototype._multiplyBySmall = function (e) {
            return 0 === e.value ? _[0] : 1 === e.value ? this : -1 === e.value ? this.negate() : h(Math.abs(e.value), this.value, this.sign !== e.sign);
        }),
        (i.prototype.multiply = function (e) {
            return F(e)._multiplyBySmall(this);
        }),
        (i.prototype.times = i.prototype.multiply),
        (E.prototype.multiply = function (e) {
            return new E(this.value * F(e).value);
        }),
        (E.prototype.times = E.prototype.multiply),
        (o.prototype.square = function () {
            return new o(S(this.value), !1);
        }),
        (i.prototype.square = function () {
            var e = this.value * this.value;
            return c(e) ? new i(e) : new o(S(s(Math.abs(this.value))), !1);
        }),
        (E.prototype.square = function (e) {
            return new E(this.value * this.value);
        });
    function D(e, t) {
        var r,
            n,
            a,
            _,
            o = e.length,
            i = I(o);
        for (a = 0, r = o - 1; r >= 0; --r) (n = R((_ = 10000000 * a + e[r]) / t)), (a = _ - n * t), (i[r] = 0 | n);
        return [i, 0 | a];
    }
    function C(e, t) {
        var r,
            n,
            c = F(t);
        if (a) return [new E(e.value / c.value), new E(e.value % c.value)];
        var A = e.value,
            N = c.value;
        if (0 === N) throw Error('Cannot divide by zero');
        if (e.isSmall) return c.isSmall ? [new i(R(A / N)), new i(A % N)] : [_[0], e];
        if (c.isSmall) {
            if (1 === N) return [e, _[0]];
            if (-1 == N) return [e.negate(), _[0]];
            var T = Math.abs(N);
            if (T < 10000000) {
                r = l((n = D(A, T))[0]);
                var f = n[1];
                return (e.sign && (f = -f), 'number' == typeof r) ? (e.sign !== c.sign && (r = -r), [new i(r), new i(f)]) : [new o(r, e.sign !== c.sign), new i(f)];
            }
            N = s(T);
        }
        var L = g(A, N);
        if (-1 === L) return [_[0], e];
        if (0 === L) return [_[e.sign === c.sign ? 1 : -1], _[0]];
        r = (n =
            A.length + N.length <= 200
                ? (function (e, t) {
                      var r,
                          n,
                          a,
                          _,
                          o,
                          i,
                          E,
                          c = e.length,
                          s = t.length,
                          u = I(t.length),
                          R = t[s - 1],
                          A = Math.ceil(10000000 / (2 * R)),
                          N = O(e, A),
                          T = O(t, A);
                      for (N.length <= c && N.push(0), T.push(0), R = T[s - 1], n = c - s; n >= 0; n--) {
                          for (r = 10000000 - 1, N[n + s] !== R && (r = Math.floor((10000000 * N[n + s] + N[n + s - 1]) / R)), a = 0, _ = 0, i = T.length, o = 0; o < i; o++) (a += r * T[o]), (E = Math.floor(a / 10000000)), (_ += N[n + o] - (a - 10000000 * E)), (a = E), _ < 0 ? ((N[n + o] = _ + 10000000), (_ = -1)) : ((N[n + o] = _), (_ = 0));
                          for (; 0 !== _; ) {
                              for (r -= 1, a = 0, o = 0; o < i; o++) (a += N[n + o] - 10000000 + T[o]) < 0 ? ((N[n + o] = a + 10000000), (a = 0)) : ((N[n + o] = a), (a = 1));
                              _ += a;
                          }
                          u[n] = r;
                      }
                      return (N = D(N, A)[0]), [l(u), l(N)];
                  })(A, N)
                : (function (e, t) {
                      for (var r, n, a, _, o, i = e.length, E = t.length, c = [], s = []; i; ) {
                          if ((s.unshift(e[--i]), u(s), 0 > g(s, t))) {
                              c.push(0);
                              continue;
                          }
                          (n = s.length), (a = 10000000 * s[n - 1] + s[n - 2]), (_ = 10000000 * t[E - 1] + t[E - 2]), n > E && (a = (a + 1) * 10000000), (r = Math.ceil(a / _));
                          do {
                              if (0 >= g((o = O(t, r)), s)) break;
                              r--;
                          } while (r);
                          c.push(r), (s = d(s, o));
                      }
                      return c.reverse(), [l(c), l(s)];
                  })(A, N))[0];
        var p = e.sign !== c.sign,
            h = n[1],
            S = e.sign;
        return 'number' == typeof r ? (p && (r = -r), (r = new i(r))) : (r = new o(r, p)), 'number' == typeof h ? (S && (h = -h), (h = new i(h))) : (h = new o(h, S)), [r, h];
    }
    function g(e, t) {
        if (e.length !== t.length) return e.length > t.length ? 1 : -1;
        for (var r = e.length - 1; r >= 0; r--) if (e[r] !== t[r]) return e[r] > t[r] ? 1 : -1;
        return 0;
    }
    function P(e) {
        var t = e.abs();
        return !t.isUnit() && (!!(t.equals(2) || t.equals(3) || t.equals(5)) || (!(t.isEven() || t.isDivisibleBy(3) || t.isDivisibleBy(5)) && (!!t.lesser(49) || void 0)));
    }
    function U(e, t) {
        for (var r, a, _, o = e.prev(), i = o, E = 0; i.isEven(); ) (i = i.divide(2)), E++;
        e: for (a = 0; a < t.length; a++) {
            if (!e.lesser(t[a])) {
                if (!((_ = n(t[a]).modPow(i, e)).isUnit() || _.equals(o))) {
                    for (r = E - 1; 0 != r && !(_ = _.square().mod(e)).isUnit(); r--) {
                        if (_.equals(o)) continue e;
                    }
                    return !1;
                }
            }
        }
        return !0;
    }
    (o.prototype.divmod = function (e) {
        var t = C(this, e);
        return {
            quotient: t[0],
            remainder: t[1]
        };
    }),
        (E.prototype.divmod = i.prototype.divmod = o.prototype.divmod),
        (o.prototype.divide = function (e) {
            return C(this, e)[0];
        }),
        (E.prototype.over = E.prototype.divide =
            function (e) {
                return new E(this.value / F(e).value);
            }),
        (i.prototype.over = i.prototype.divide = o.prototype.over = o.prototype.divide),
        (o.prototype.mod = function (e) {
            return C(this, e)[1];
        }),
        (E.prototype.mod = E.prototype.remainder =
            function (e) {
                return new E(this.value % F(e).value);
            }),
        (i.prototype.remainder = i.prototype.mod = o.prototype.remainder = o.prototype.mod),
        (o.prototype.pow = function (e) {
            var t,
                r,
                n,
                a = F(e),
                o = this.value,
                E = a.value;
            if (0 === E) return _[1];
            if (0 === o) return _[0];
            if (1 === o) return _[1];
            if (-1 === o) return a.isEven() ? _[1] : _[-1];
            if (a.sign) return _[0];
            if (!a.isSmall) throw Error('The exponent ' + a.toString() + ' is too large.');
            if (this.isSmall && c((t = Math.pow(o, E)))) return new i(R(t));
            for (r = this, n = _[1]; !0 & E && ((n = n.times(r)), --E), 0 !== E; ) {
                (E /= 2), (r = r.square());
            }
            return n;
        }),
        (i.prototype.pow = o.prototype.pow),
        (E.prototype.pow = function (e) {
            var t = F(e),
                r = this.value,
                n = t.value,
                a = BigInt(0),
                o = BigInt(1),
                i = BigInt(2);
            if (n === a) return _[1];
            if (r === a) return _[0];
            if (r === o) return _[1];
            if (r === BigInt(-1)) return t.isEven() ? _[1] : _[-1];
            if (t.isNegative()) return new E(a);
            for (var c = this, s = _[1]; (n & o) === o && ((s = s.times(c)), --n), n !== a; ) {
                (n /= i), (c = c.square());
            }
            return s;
        }),
        (o.prototype.modPow = function (e, t) {
            if (((e = F(e)), (t = F(t)).isZero())) throw Error('Cannot take modPow with modulus 0');
            var r = _[1],
                n = this.mod(t);
            for (e.isNegative() && ((e = e.multiply(_[-1])), (n = n.modInv(t))); e.isPositive(); ) {
                if (n.isZero()) return _[0];
                e.isOdd() && (r = r.multiply(n).mod(t)), (e = e.divide(2)), (n = n.square().mod(t));
            }
            return r;
        }),
        (E.prototype.modPow = i.prototype.modPow = o.prototype.modPow),
        (o.prototype.compareAbs = function (e) {
            var t = F(e),
                r = this.value,
                n = t.value;
            return t.isSmall ? 1 : g(r, n);
        }),
        (i.prototype.compareAbs = function (e) {
            var t = F(e),
                r = Math.abs(this.value),
                n = t.value;
            return t.isSmall ? (r === (n = Math.abs(n)) ? 0 : r > n ? 1 : -1) : -1;
        }),
        (E.prototype.compareAbs = function (e) {
            var t = this.value,
                r = F(e).value;
            return (t = t >= 0 ? t : -t) === (r = r >= 0 ? r : -r) ? 0 : t > r ? 1 : -1;
        }),
        (o.prototype.compare = function (e) {
            if (e === 1 / 0) return -1;
            if (e === -1 / 0) return 1;
            var t = F(e),
                r = this.value,
                n = t.value;
            return this.sign !== t.sign ? (t.sign ? 1 : -1) : t.isSmall ? (this.sign ? -1 : 1) : g(r, n) * (this.sign ? -1 : 1);
        }),
        (o.prototype.compareTo = o.prototype.compare),
        (i.prototype.compare = function (e) {
            if (e === 1 / 0) return -1;
            if (e === -1 / 0) return 1;
            var t = F(e),
                r = this.value,
                n = t.value;
            return t.isSmall ? (r == n ? 0 : r > n ? 1 : -1) : r < 0 !== t.sign ? (r < 0 ? -1 : 1) : r < 0 ? 1 : -1;
        }),
        (i.prototype.compareTo = i.prototype.compare),
        (E.prototype.compare = function (e) {
            if (e === 1 / 0) return -1;
            if (e === -1 / 0) return 1;
            var t = this.value,
                r = F(e).value;
            return t === r ? 0 : t > r ? 1 : -1;
        }),
        (E.prototype.compareTo = E.prototype.compare),
        (o.prototype.equals = function (e) {
            return 0 === this.compare(e);
        }),
        (E.prototype.eq = E.prototype.equals = i.prototype.eq = i.prototype.equals = o.prototype.eq = o.prototype.equals),
        (o.prototype.notEquals = function (e) {
            return 0 !== this.compare(e);
        }),
        (E.prototype.neq = E.prototype.notEquals = i.prototype.neq = i.prototype.notEquals = o.prototype.neq = o.prototype.notEquals),
        (o.prototype.greater = function (e) {
            return this.compare(e) > 0;
        }),
        (E.prototype.gt = E.prototype.greater = i.prototype.gt = i.prototype.greater = o.prototype.gt = o.prototype.greater),
        (o.prototype.lesser = function (e) {
            return 0 > this.compare(e);
        }),
        (E.prototype.lt = E.prototype.lesser = i.prototype.lt = i.prototype.lesser = o.prototype.lt = o.prototype.lesser),
        (o.prototype.greaterOrEquals = function (e) {
            return this.compare(e) >= 0;
        }),
        (E.prototype.geq = E.prototype.greaterOrEquals = i.prototype.geq = i.prototype.greaterOrEquals = o.prototype.geq = o.prototype.greaterOrEquals),
        (o.prototype.lesserOrEquals = function (e) {
            return 0 >= this.compare(e);
        }),
        (E.prototype.leq = E.prototype.lesserOrEquals = i.prototype.leq = i.prototype.lesserOrEquals = o.prototype.leq = o.prototype.lesserOrEquals),
        (o.prototype.isEven = function () {
            return (1 & this.value[0]) == 0;
        }),
        (i.prototype.isEven = function () {
            return (1 & this.value) == 0;
        }),
        (E.prototype.isEven = function () {
            return (this.value & BigInt(1)) === BigInt(0);
        }),
        (o.prototype.isOdd = function () {
            return (1 & this.value[0]) == 1;
        }),
        (i.prototype.isOdd = function () {
            return (1 & this.value) == 1;
        }),
        (E.prototype.isOdd = function () {
            return (this.value & BigInt(1)) === BigInt(1);
        }),
        (o.prototype.isPositive = function () {
            return !this.sign;
        }),
        (i.prototype.isPositive = function () {
            return this.value > 0;
        }),
        (E.prototype.isPositive = i.prototype.isPositive),
        (o.prototype.isNegative = function () {
            return this.sign;
        }),
        (i.prototype.isNegative = function () {
            return this.value < 0;
        }),
        (E.prototype.isNegative = i.prototype.isNegative),
        (o.prototype.isUnit = function () {
            return !1;
        }),
        (i.prototype.isUnit = function () {
            return 1 === Math.abs(this.value);
        }),
        (E.prototype.isUnit = function () {
            return this.abs().value === BigInt(1);
        }),
        (o.prototype.isZero = function () {
            return !1;
        }),
        (i.prototype.isZero = function () {
            return 0 === this.value;
        }),
        (E.prototype.isZero = function () {
            return this.value === BigInt(0);
        }),
        (o.prototype.isDivisibleBy = function (e) {
            var t = F(e);
            return !t.isZero() && (!!t.isUnit() || (0 === t.compareAbs(2) ? this.isEven() : this.mod(t).isZero()));
        }),
        (E.prototype.isDivisibleBy = i.prototype.isDivisibleBy = o.prototype.isDivisibleBy),
        (o.prototype.isPrime = function (e) {
            var t = P(this);
            if (void 0 !== t) return t;
            var r = this.abs(),
                a = r.bitLength();
            if (a <= 64) return U(r, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
            for (var _ = Math.log(2) * a.toJSNumber(), o = Math.ceil(!0 === e ? 2 * Math.pow(_, 2) : _), i = [], E = 0; E < o; E++) i.push(n(E + 2));
            return U(r, i);
        }),
        (E.prototype.isPrime = i.prototype.isPrime = o.prototype.isPrime),
        (o.prototype.isProbablePrime = function (t, r) {
            var a = P(this);
            if (e !== a) return a;
            for (var _ = this.abs(), o = e === t ? 5 : t, i = [], E = 0; E < o; E++) i.push(n.randBetween(2, _.minus(2), r));
            return U(_, i);
        }),
        (E.prototype.isProbablePrime = i.prototype.isProbablePrime = o.prototype.isProbablePrime),
        (o.prototype.modInv = function (e) {
            for (var t, r, a, _ = n.zero, o = n.one, i = F(e), E = this.abs(); !E.isZero(); ) (t = i.divide(E)), (r = _), (a = i), (_ = o), (i = E), (o = r.subtract(t.multiply(o))), (E = a.subtract(t.multiply(E)));
            if (!i.isUnit()) throw Error(this.toString() + ' and ' + e.toString() + ' are not co-prime');
            return (-1 === _.compare(0) && (_ = _.add(e)), this.isNegative()) ? _.negate() : _;
        }),
        (E.prototype.modInv = i.prototype.modInv = o.prototype.modInv),
        (o.prototype.next = function () {
            var e = this.value;
            return this.sign ? f(e, 1, this.sign) : new o(T(e, 1), this.sign);
        }),
        (i.prototype.next = function () {
            var e = this.value;
            return e + 1 < 9007199254740992 ? new i(e + 1) : new o(t, !1);
        }),
        (E.prototype.next = function () {
            return new E(this.value + BigInt(1));
        }),
        (o.prototype.prev = function () {
            var e = this.value;
            return this.sign ? new o(T(e, 1), !0) : f(e, 1, this.sign);
        }),
        (i.prototype.prev = function () {
            var e = this.value;
            return e - 1 > -9007199254740992 ? new i(e - 1) : new o(t, !0);
        }),
        (E.prototype.prev = function () {
            return new E(this.value - BigInt(1));
        });
    for (var M = [1]; 2 * M[M.length - 1] <= 10000000; ) M.push(2 * M[M.length - 1]);
    var G = M.length,
        m = M[G - 1];
    function y(e) {
        return 10000000 >= Math.abs(e);
    }
    function b(e, t, r) {
        t = F(t);
        for (var a = e.isNegative(), _ = t.isNegative(), o = a ? e.not() : e, i = _ ? t.not() : t, E = 0, c = 0, s = null, l = null, u = []; !o.isZero() || !i.isZero(); ) (E = (s = C(o, m))[1].toJSNumber()), a && (E = m - 1 - E), (c = (l = C(i, m))[1].toJSNumber()), _ && (c = m - 1 - c), (o = s[0]), (i = l[0]), u.push(r(E, c));
        for (var I = 0 !== r(a ? 1 : 0, _ ? 1 : 0) ? n(-1) : n(0), R = u.length - 1; R >= 0; R -= 1) I = I.multiply(m).add(n(u[R]));
        return I;
    }
    (o.prototype.shiftLeft = function (e) {
        var t = F(e).toJSNumber();
        if (!y(t)) throw Error(String(t) + ' is too large for shifting.');
        if (t < 0) return this.shiftRight(-t);
        var r = this;
        if (r.isZero()) return r;
        for (; t >= G; ) (r = r.multiply(m)), (t -= G - 1);
        return r.multiply(M[t]);
    }),
        (E.prototype.shiftLeft = i.prototype.shiftLeft = o.prototype.shiftLeft),
        (o.prototype.shiftRight = function (e) {
            var t,
                r = F(e).toJSNumber();
            if (!y(r)) throw Error(String(r) + ' is too large for shifting.');
            if (r < 0) return this.shiftLeft(-r);
            for (var n = this; r >= G; ) {
                if (n.isZero() || (n.isNegative() && n.isUnit())) return n;
                (n = (t = C(n, m))[1].isNegative() ? t[0].prev() : t[0]), (r -= G - 1);
            }
            return (t = C(n, M[r]))[1].isNegative() ? t[0].prev() : t[0];
        }),
        (E.prototype.shiftRight = i.prototype.shiftRight = o.prototype.shiftRight),
        (o.prototype.not = function () {
            return this.negate().prev();
        }),
        (E.prototype.not = i.prototype.not = o.prototype.not),
        (o.prototype.and = function (e) {
            return b(this, e, function (e, t) {
                return e & t;
            });
        }),
        (E.prototype.and = i.prototype.and = o.prototype.and),
        (o.prototype.or = function (e) {
            return b(this, e, function (e, t) {
                return e | t;
            });
        }),
        (E.prototype.or = i.prototype.or = o.prototype.or),
        (o.prototype.xor = function (e) {
            return b(this, e, function (e, t) {
                return e ^ t;
            });
        }),
        (E.prototype.xor = i.prototype.xor = o.prototype.xor);
    var v = 1073758208;
    function w(e) {
        var t = e.value,
            r = 'number' == typeof t ? 1073741824 | t : 'bigint' == typeof t ? t | BigInt(1073741824) : (t[0] + 10000000 * t[1]) | v;
        return r & -r;
    }
    function B(e, t) {
        return (e = F(e)), (t = F(t)), e.greater(t) ? e : t;
    }
    function W(e, t) {
        return (e = F(e)), (t = F(t)), e.lesser(t) ? e : t;
    }
    function H(e, t) {
        if (((e = F(e).abs()), (t = F(t).abs()), e.equals(t))) return e;
        if (e.isZero()) return t;
        if (t.isZero()) return e;
        for (var r, n, a = _[1]; e.isEven() && t.isEven(); ) (r = W(w(e), w(t))), (e = e.divide(r)), (t = t.divide(r)), (a = a.multiply(r));
        for (; e.isEven(); ) e = e.divide(w(e));
        do {
            for (; t.isEven(); ) t = t.divide(w(t));
            e.greater(t) && ((n = t), (t = e), (e = n)), (t = t.subtract(e));
        } while (!t.isZero());
        return a.isUnit() ? e : e.multiply(a);
    }
    (o.prototype.bitLength = function () {
        var e = this;
        return (0 > e.compareTo(n(0)) && (e = e.negate().subtract(n(1))), 0 === e.compareTo(n(0)))
            ? n(0)
            : n(
                  (function e(t, r) {
                      if (0 >= r.compareTo(t)) {
                          var a = e(t, r.square(r)),
                              _ = a.p,
                              o = a.e,
                              i = _.multiply(r);
                          return 0 >= i.compareTo(t)
                              ? {
                                    p: i,
                                    e: 2 * o + 1
                                }
                              : {
                                    p: _,
                                    e: 2 * o
                                };
                      }
                      return {
                          p: n(1),
                          e: 0
                      };
                  })(e, n(2)).e
              ).add(n(1));
    }),
        (E.prototype.bitLength = i.prototype.bitLength = o.prototype.bitLength);
    var Y = function (e, t, n, a) {
        (n = n || r), (e = String(e)), !a && ((e = e.toLowerCase()), (n = n.toLowerCase()));
        var _,
            o = e.length,
            i = Math.abs(t),
            E = {};
        for (_ = 0; _ < n.length; _++) E[n[_]] = _;
        for (_ = 0; _ < o; _++) {
            var c = e[_];
            if ('-' !== c && c in E && E[c] >= i) {
                if ('1' === c && 1 === i) continue;
                throw Error(c + ' is not a valid digit in base ' + t + '.');
            }
        }
        t = F(t);
        var s = [],
            l = '-' === e[0];
        for (_ = l ? 1 : 0; _ < e.length; _++) {
            var c = e[_];
            if (c in E) s.push(F(E[c]));
            else if ('<' === c) {
                var u = _;
                do _++;
                while ('>' !== e[_] && _ < e.length);
                s.push(F(e.slice(u + 1, _)));
            } else throw Error(c + ' is not a valid character');
        }
        return x(s, t, l);
    };
    function x(e, t, r) {
        var n,
            a = _[0],
            o = _[1];
        for (n = e.length - 1; n >= 0; n--) (a = a.add(e[n].times(o))), (o = o.times(t));
        return r ? a.negate() : a;
    }
    function K(e, t) {
        if ((t = n(t)).isZero()) {
            if (e.isZero())
                return {
                    value: [0],
                    isNegative: !1
                };
            throw Error('Cannot convert nonzero numbers to base 0.');
        }
        if (t.equals(-1)) {
            if (e.isZero())
                return {
                    value: [0],
                    isNegative: !1
                };
            if (e.isNegative())
                return {
                    value: [].concat.apply([], Array.apply(null, Array(-e.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
                    isNegative: !1
                };
            var r = Array.apply(null, Array(e.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
            return (
                r.unshift([1]),
                {
                    value: [].concat.apply([], r),
                    isNegative: !1
                }
            );
        }
        var a = !1;
        if ((e.isNegative() && t.isPositive() && ((a = !0), (e = e.abs())), t.isUnit()))
            return e.isZero()
                ? {
                      value: [0],
                      isNegative: !1
                  }
                : {
                      value: Array.apply(null, Array(e.toJSNumber())).map(Number.prototype.valueOf, 1),
                      isNegative: a
                  };
        for (var _ = [], o, i = e; i.isNegative() || i.compareAbs(t) >= 0; ) {
            i = (o = i.divmod(t)).quotient;
            var E = o.remainder;
            E.isNegative() && ((E = t.minus(E).abs()), (i = i.next())), _.push(E.toJSNumber());
        }
        return (
            _.push(i.toJSNumber()),
            {
                value: _.reverse(),
                isNegative: a
            }
        );
    }
    function V(e, t, n) {
        var a = K(e, t);
        return (
            (a.isNegative ? '-' : '') +
            a.value
                .map(function (e) {
                    var t, a;
                    return (t = e) < (a = (a = n) || r).length ? a[t] : '<' + t + '>';
                })
                .join('')
        );
    }
    function k(e) {
        if (c(+e)) {
            var t = +e;
            if (t === R(t)) return a ? new E(BigInt(t)) : new i(t);
            throw Error('Invalid integer: ' + e);
        }
        var r = '-' === e[0];
        r && (e = e.slice(1));
        var n = e.split(/e/i);
        if (n.length > 2) throw Error('Invalid integer: ' + n.join('e'));
        if (2 === n.length) {
            var _ = n[1];
            if (('+' === _[0] && (_ = _.slice(1)), (_ = +_) !== R(_) || !c(_))) throw Error('Invalid integer: ' + _ + ' is not a valid exponent.');
            var s = n[0],
                l = s.indexOf('.');
            if ((l >= 0 && ((_ -= s.length - l - 1), (s = s.slice(0, l) + s.slice(l + 1))), _ < 0)) throw Error('Cannot include negative exponent part for integers');
            (s += Array(_ + 1).join('0')), (e = s);
        }
        if (!/^([0-9][0-9]*)$/.test(e)) throw Error('Invalid integer: ' + e);
        if (a) return new E(BigInt(r ? '-' + e : e));
        for (var I = [], A = e.length, N = A - 7; A > 0; ) I.push(+e.slice(N, A)), (N -= 7) < 0 && (N = 0), (A -= 7);
        return u(I), new o(I, r);
    }
    (o.prototype.toArray = function (e) {
        return K(this, e);
    }),
        (i.prototype.toArray = function (e) {
            return K(this, e);
        }),
        (E.prototype.toArray = function (e) {
            return K(this, e);
        }),
        (o.prototype.toString = function (t, r) {
            if ((e === t && (t = 10), 10 !== t)) return V(this, t, r);
            for (var n, a = this.value, _ = a.length, o = String(a[--_]); --_ >= 0; ) (n = String(a[_])), (o += '0000000'.slice(n.length) + n);
            return (this.sign ? '-' : '') + o;
        }),
        (i.prototype.toString = function (t, r) {
            return (e === t && (t = 10), 10 != t) ? V(this, t, r) : String(this.value);
        }),
        (E.prototype.toString = i.prototype.toString),
        (E.prototype.toJSON =
            o.prototype.toJSON =
            i.prototype.toJSON =
                function () {
                    return this.toString();
                }),
        (o.prototype.valueOf = function () {
            return parseInt(this.toString(), 10);
        }),
        (o.prototype.toJSNumber = o.prototype.valueOf),
        (i.prototype.valueOf = function () {
            return this.value;
        }),
        (i.prototype.toJSNumber = i.prototype.valueOf),
        (E.prototype.valueOf = E.prototype.toJSNumber =
            function () {
                return parseInt(this.toString(), 10);
            });
    function F(e) {
        return 'number' == typeof e
            ? (function (e) {
                  if (a) return new E(BigInt(e));
                  if (c(e)) {
                      if (e !== R(e)) throw Error(e + ' is not an integer.');
                      return new i(e);
                  }
                  return k(e.toString());
              })(e)
            : 'string' == typeof e
              ? k(e)
              : 'bigint' == typeof e
                ? new E(e)
                : e;
    }
    for (var X = 0; X < 1000; X++) (_[X] = F(X)), X > 0 && (_[-X] = F(-X));
    return (
        (_.one = _[1]),
        (_.zero = _[0]),
        (_.minusOne = _[-1]),
        (_.max = B),
        (_.min = W),
        (_.gcd = H),
        (_.lcm = function (e, t) {
            return (e = F(e).abs()), (t = F(t).abs()), e.divide(H(e, t)).multiply(t);
        }),
        (_.isInstance = function (e) {
            return e instanceof o || e instanceof i || e instanceof E;
        }),
        (_.randBetween = function (e, t, r) {
            (e = F(e)), (t = F(t));
            var n = r || Math.random,
                a = W(e, t),
                o = B(e, t).subtract(a).add(1);
            if (o.isSmall) return a.add(Math.floor(n() * o));
            for (var i = K(o, 10000000).value, E = [], c = !0, s = 0; s < i.length; s++) {
                var l = c ? i[s] : 10000000,
                    u = R(n() * l);
                E.push(u), u < l && (c = !1);
            }
            return a.add(_.fromArray(E, 10000000, !1));
        }),
        (_.fromArray = function (e, t, r) {
            return x(e.map(F), F(t || 10), r);
        }),
        _
    );
})();
e.hasOwnProperty('exports') && (e.exports = n),
    'function' == typeof define &&
        define.amd &&
        define(function () {
            return n;
        });
