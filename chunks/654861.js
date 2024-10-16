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
    function E(e) {
        (this.value = e), (this.sign = e < 0), (this.isSmall = !0);
    }
    function i(e) {
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
    function N(e, t) {
        var r,
            n,
            a = e.length,
            _ = t.length,
            o = Array(a),
            E = 0;
        for (n = 0; n < _; n++) (E = (r = e[n] + t[n] + E) >= 10000000 ? 1 : 0), (o[n] = r - 10000000 * E);
        for (; n < a; ) (E = 10000000 === (r = e[n] + E) ? 1 : 0), (o[n++] = r - 10000000 * E);
        return E > 0 && o.push(E), o;
    }
    function A(e, t) {
        return e.length >= t.length ? N(e, t) : N(t, e);
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
            E = 0;
        for (r = 0; r < _; r++) (n = e[r] - E - t[r]) < 0 ? ((n += 10000000), (E = 1)) : (E = 0), (o[r] = n);
        for (r = _; r < a; r++) {
            if ((n = e[r] - E) < 0) n += 10000000;
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
        (E.prototype = Object.create(_.prototype)),
        (i.prototype = Object.create(_.prototype)),
        (o.prototype.add = function (e) {
            var t = F(e);
            if (this.sign !== t.sign) return this.subtract(t.negate());
            var r = this.value,
                n = t.value;
            return t.isSmall ? new o(T(r, Math.abs(n)), this.sign) : new o(A(r, n), this.sign);
        }),
        (o.prototype.plus = o.prototype.add),
        (E.prototype.add = function (e) {
            var t = F(e),
                r = this.value;
            if (r < 0 !== t.sign) return this.subtract(t.negate());
            var n = t.value;
            if (t.isSmall) {
                if (c(r + n)) return new E(r + n);
                n = s(Math.abs(n));
            }
            return new o(T(n, Math.abs(r)), r < 0);
        }),
        (E.prototype.plus = E.prototype.add),
        (i.prototype.add = function (e) {
            return new i(this.value + F(e).value);
        }),
        (i.prototype.plus = i.prototype.add);
    function L(e, t, r) {
        var n,
            a,
            _ = e.length,
            i = Array(_),
            c = -t;
        for (n = 0; n < _; n++) (c = Math.floor((a = e[n] + c) / 10000000)), (a %= 10000000), (i[n] = a < 0 ? a + 10000000 : a);
        return 'number' == typeof (i = l(i)) ? (r && (i = -i), new E(i)) : new o(i, r);
    }
    function f(e, t) {
        var r,
            n,
            a,
            _,
            o = e.length,
            E = t.length,
            i = I(o + E);
        for (a = 0; a < o; ++a) {
            _ = e[a];
            for (var c = 0; c < E; ++c) (n = Math.floor((r = _ * t[c] + i[a + c]) / 10000000)), (i[a + c] = r - 10000000 * n), (i[a + c + 1] += n);
        }
        return u(i), i;
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
        var i = this.value,
            c = _.value;
        if (_.isSmall) return L(i, Math.abs(c), this.sign);
        return (t = i), (r = c), (n = this.sign), (g(t, r) >= 0 ? (a = d(t, r)) : ((a = d(r, t)), (n = !n)), 'number' == typeof (a = l(a))) ? (n && (a = -a), new E(a)) : new o(a, n);
    }),
        (o.prototype.minus = o.prototype.subtract),
        (E.prototype.subtract = function (e) {
            var t = F(e),
                r = this.value;
            if (r < 0 !== t.sign) return this.add(t.negate());
            var n = t.value;
            return t.isSmall ? new E(r - n) : L(n, Math.abs(r), r >= 0);
        }),
        (E.prototype.minus = E.prototype.subtract),
        (i.prototype.subtract = function (e) {
            return new i(this.value - F(e).value);
        }),
        (i.prototype.minus = i.prototype.subtract),
        (o.prototype.negate = function () {
            return new o(this.value, !this.sign);
        }),
        (E.prototype.negate = function () {
            var e = this.sign,
                t = new E(-this.value);
            return (t.sign = !e), t;
        }),
        (i.prototype.negate = function () {
            return new i(-this.value);
        }),
        (o.prototype.abs = function () {
            return new o(this.value, !1);
        }),
        (E.prototype.abs = function () {
            return new E(Math.abs(this.value));
        }),
        (i.prototype.abs = function () {
            return new i(this.value >= 0 ? this.value : -this.value);
        });
    function h(e, t, r) {
        return e < 10000000 ? new o(O(t, e), r) : new o(f(t, s(e)), r);
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
            for (var E = n; E < _; E++) (r = Math.floor((t = a * e[E] * 2 + o[n + E] + r) / 10000000)), (o[n + E] = t - 10000000 * r);
            o[n + _] = r;
        }
        return u(o), o;
    }
    (o.prototype.multiply = function (e) {
        var t,
            r,
            n,
            a = F(e),
            E = this.value,
            i = a.value,
            c = this.sign !== a.sign;
        if (a.isSmall) {
            if (0 === i) return _[0];
            if (1 === i) return this;
            if (-1 === i) return this.negate();
            if ((n = Math.abs(i)) < 10000000) return new o(O(E, n), c);
            i = s(n);
        }
        return ((t = E.length), -0.012 * t - 0.012 * (r = i.length) + 0.000015 * t * r > 0)
            ? new o(
                  (function e(t, r) {
                      var n = Math.max(t.length, r.length);
                      if (n <= 30) return f(t, r);
                      n = Math.ceil(n / 2);
                      var a = t.slice(n),
                          _ = t.slice(0, n),
                          o = r.slice(n),
                          E = r.slice(0, n),
                          i = e(_, E),
                          c = e(a, o),
                          s = e(A(_, a), A(E, o)),
                          l = A(A(i, p(d(d(s, i), c), n)), p(c, 2 * n));
                      return u(l), l;
                  })(E, i),
                  c
              )
            : new o(f(E, i), c);
    }),
        (o.prototype.times = o.prototype.multiply),
        (E.prototype._multiplyBySmall = function (e) {
            return c(e.value * this.value) ? new E(e.value * this.value) : h(Math.abs(e.value), s(Math.abs(this.value)), this.sign !== e.sign);
        }),
        (o.prototype._multiplyBySmall = function (e) {
            return 0 === e.value ? _[0] : 1 === e.value ? this : -1 === e.value ? this.negate() : h(Math.abs(e.value), this.value, this.sign !== e.sign);
        }),
        (E.prototype.multiply = function (e) {
            return F(e)._multiplyBySmall(this);
        }),
        (E.prototype.times = E.prototype.multiply),
        (i.prototype.multiply = function (e) {
            return new i(this.value * F(e).value);
        }),
        (i.prototype.times = i.prototype.multiply),
        (o.prototype.square = function () {
            return new o(S(this.value), !1);
        }),
        (E.prototype.square = function () {
            var e = this.value * this.value;
            return c(e) ? new E(e) : new o(S(s(Math.abs(this.value))), !1);
        }),
        (i.prototype.square = function (e) {
            return new i(this.value * this.value);
        });
    function D(e, t) {
        var r,
            n,
            a,
            _,
            o = e.length,
            E = I(o);
        for (a = 0, r = o - 1; r >= 0; --r) (n = R((_ = 10000000 * a + e[r]) / t)), (a = _ - n * t), (E[r] = 0 | n);
        return [E, 0 | a];
    }
    function C(e, t) {
        var r,
            n,
            c = F(t);
        if (a) return [new i(e.value / c.value), new i(e.value % c.value)];
        var N = e.value,
            A = c.value;
        if (0 === A) throw Error('Cannot divide by zero');
        if (e.isSmall) return c.isSmall ? [new E(R(N / A)), new E(N % A)] : [_[0], e];
        if (c.isSmall) {
            if (1 === A) return [e, _[0]];
            if (-1 == A) return [e.negate(), _[0]];
            var T = Math.abs(A);
            if (T < 10000000) {
                r = l((n = D(N, T))[0]);
                var L = n[1];
                return (e.sign && (L = -L), 'number' == typeof r) ? (e.sign !== c.sign && (r = -r), [new E(r), new E(L)]) : [new o(r, e.sign !== c.sign), new E(L)];
            }
            A = s(T);
        }
        var f = g(N, A);
        if (-1 === f) return [_[0], e];
        if (0 === f) return [_[e.sign === c.sign ? 1 : -1], _[0]];
        r = (n =
            N.length + A.length <= 200
                ? (function (e, t) {
                      var r,
                          n,
                          a,
                          _,
                          o,
                          E,
                          i,
                          c = e.length,
                          s = t.length,
                          u = I(t.length),
                          R = t[s - 1],
                          N = Math.ceil(10000000 / (2 * R)),
                          A = O(e, N),
                          T = O(t, N);
                      for (A.length <= c && A.push(0), T.push(0), R = T[s - 1], n = c - s; n >= 0; n--) {
                          for (r = 10000000 - 1, A[n + s] !== R && (r = Math.floor((10000000 * A[n + s] + A[n + s - 1]) / R)), a = 0, _ = 0, E = T.length, o = 0; o < E; o++) (a += r * T[o]), (i = Math.floor(a / 10000000)), (_ += A[n + o] - (a - 10000000 * i)), (a = i), _ < 0 ? ((A[n + o] = _ + 10000000), (_ = -1)) : ((A[n + o] = _), (_ = 0));
                          for (; 0 !== _; ) {
                              for (r -= 1, a = 0, o = 0; o < E; o++) (a += A[n + o] - 10000000 + T[o]) < 0 ? ((A[n + o] = a + 10000000), (a = 0)) : ((A[n + o] = a), (a = 1));
                              _ += a;
                          }
                          u[n] = r;
                      }
                      return (A = D(A, N)[0]), [l(u), l(A)];
                  })(N, A)
                : (function (e, t) {
                      for (var r, n, a, _, o, E = e.length, i = t.length, c = [], s = []; E; ) {
                          if ((s.unshift(e[--E]), u(s), 0 > g(s, t))) {
                              c.push(0);
                              continue;
                          }
                          (n = s.length), (a = 10000000 * s[n - 1] + s[n - 2]), (_ = 10000000 * t[i - 1] + t[i - 2]), n > i && (a = (a + 1) * 10000000), (r = Math.ceil(a / _));
                          do {
                              if (0 >= g((o = O(t, r)), s)) break;
                              r--;
                          } while (r);
                          c.push(r), (s = d(s, o));
                      }
                      return c.reverse(), [l(c), l(s)];
                  })(N, A))[0];
        var p = e.sign !== c.sign,
            h = n[1],
            S = e.sign;
        return 'number' == typeof r ? (p && (r = -r), (r = new E(r))) : (r = new o(r, p)), 'number' == typeof h ? (S && (h = -h), (h = new E(h))) : (h = new o(h, S)), [r, h];
    }
    function g(e, t) {
        if (e.length !== t.length) return e.length > t.length ? 1 : -1;
        for (var r = e.length - 1; r >= 0; r--) if (e[r] !== t[r]) return e[r] > t[r] ? 1 : -1;
        return 0;
    }
    function U(e) {
        var t = e.abs();
        return !t.isUnit() && (!!(t.equals(2) || t.equals(3) || t.equals(5)) || (!(t.isEven() || t.isDivisibleBy(3) || t.isDivisibleBy(5)) && (!!t.lesser(49) || void 0)));
    }
    function P(e, t) {
        for (var r, a, _, o = e.prev(), E = o, i = 0; E.isEven(); ) (E = E.divide(2)), i++;
        e: for (a = 0; a < t.length; a++) {
            if (!e.lesser(t[a])) {
                if (!((_ = n(t[a]).modPow(E, e)).isUnit() || _.equals(o))) {
                    for (r = i - 1; 0 != r && !(_ = _.square().mod(e)).isUnit(); r--) {
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
        (i.prototype.divmod = E.prototype.divmod = o.prototype.divmod),
        (o.prototype.divide = function (e) {
            return C(this, e)[0];
        }),
        (i.prototype.over = i.prototype.divide =
            function (e) {
                return new i(this.value / F(e).value);
            }),
        (E.prototype.over = E.prototype.divide = o.prototype.over = o.prototype.divide),
        (o.prototype.mod = function (e) {
            return C(this, e)[1];
        }),
        (i.prototype.mod = i.prototype.remainder =
            function (e) {
                return new i(this.value % F(e).value);
            }),
        (E.prototype.remainder = E.prototype.mod = o.prototype.remainder = o.prototype.mod),
        (o.prototype.pow = function (e) {
            var t,
                r,
                n,
                a = F(e),
                o = this.value,
                i = a.value;
            if (0 === i) return _[1];
            if (0 === o) return _[0];
            if (1 === o) return _[1];
            if (-1 === o) return a.isEven() ? _[1] : _[-1];
            if (a.sign) return _[0];
            if (!a.isSmall) throw Error('The exponent ' + a.toString() + ' is too large.');
            if (this.isSmall && c((t = Math.pow(o, i)))) return new E(R(t));
            for (r = this, n = _[1]; !0 & i && ((n = n.times(r)), --i), 0 !== i; ) {
                (i /= 2), (r = r.square());
            }
            return n;
        }),
        (E.prototype.pow = o.prototype.pow),
        (i.prototype.pow = function (e) {
            var t = F(e),
                r = this.value,
                n = t.value,
                a = BigInt(0),
                o = BigInt(1),
                E = BigInt(2);
            if (n === a) return _[1];
            if (r === a) return _[0];
            if (r === o) return _[1];
            if (r === BigInt(-1)) return t.isEven() ? _[1] : _[-1];
            if (t.isNegative()) return new i(a);
            for (var c = this, s = _[1]; (n & o) === o && ((s = s.times(c)), --n), n !== a; ) {
                (n /= E), (c = c.square());
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
        (i.prototype.modPow = E.prototype.modPow = o.prototype.modPow),
        (o.prototype.compareAbs = function (e) {
            var t = F(e),
                r = this.value,
                n = t.value;
            return t.isSmall ? 1 : g(r, n);
        }),
        (E.prototype.compareAbs = function (e) {
            var t = F(e),
                r = Math.abs(this.value),
                n = t.value;
            return t.isSmall ? (r === (n = Math.abs(n)) ? 0 : r > n ? 1 : -1) : -1;
        }),
        (i.prototype.compareAbs = function (e) {
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
        (E.prototype.compare = function (e) {
            if (e === 1 / 0) return -1;
            if (e === -1 / 0) return 1;
            var t = F(e),
                r = this.value,
                n = t.value;
            return t.isSmall ? (r == n ? 0 : r > n ? 1 : -1) : r < 0 !== t.sign ? (r < 0 ? -1 : 1) : r < 0 ? 1 : -1;
        }),
        (E.prototype.compareTo = E.prototype.compare),
        (i.prototype.compare = function (e) {
            if (e === 1 / 0) return -1;
            if (e === -1 / 0) return 1;
            var t = this.value,
                r = F(e).value;
            return t === r ? 0 : t > r ? 1 : -1;
        }),
        (i.prototype.compareTo = i.prototype.compare),
        (o.prototype.equals = function (e) {
            return 0 === this.compare(e);
        }),
        (i.prototype.eq = i.prototype.equals = E.prototype.eq = E.prototype.equals = o.prototype.eq = o.prototype.equals),
        (o.prototype.notEquals = function (e) {
            return 0 !== this.compare(e);
        }),
        (i.prototype.neq = i.prototype.notEquals = E.prototype.neq = E.prototype.notEquals = o.prototype.neq = o.prototype.notEquals),
        (o.prototype.greater = function (e) {
            return this.compare(e) > 0;
        }),
        (i.prototype.gt = i.prototype.greater = E.prototype.gt = E.prototype.greater = o.prototype.gt = o.prototype.greater),
        (o.prototype.lesser = function (e) {
            return 0 > this.compare(e);
        }),
        (i.prototype.lt = i.prototype.lesser = E.prototype.lt = E.prototype.lesser = o.prototype.lt = o.prototype.lesser),
        (o.prototype.greaterOrEquals = function (e) {
            return this.compare(e) >= 0;
        }),
        (i.prototype.geq = i.prototype.greaterOrEquals = E.prototype.geq = E.prototype.greaterOrEquals = o.prototype.geq = o.prototype.greaterOrEquals),
        (o.prototype.lesserOrEquals = function (e) {
            return 0 >= this.compare(e);
        }),
        (i.prototype.leq = i.prototype.lesserOrEquals = E.prototype.leq = E.prototype.lesserOrEquals = o.prototype.leq = o.prototype.lesserOrEquals),
        (o.prototype.isEven = function () {
            return (1 & this.value[0]) == 0;
        }),
        (E.prototype.isEven = function () {
            return (1 & this.value) == 0;
        }),
        (i.prototype.isEven = function () {
            return (this.value & BigInt(1)) === BigInt(0);
        }),
        (o.prototype.isOdd = function () {
            return (1 & this.value[0]) == 1;
        }),
        (E.prototype.isOdd = function () {
            return (1 & this.value) == 1;
        }),
        (i.prototype.isOdd = function () {
            return (this.value & BigInt(1)) === BigInt(1);
        }),
        (o.prototype.isPositive = function () {
            return !this.sign;
        }),
        (E.prototype.isPositive = function () {
            return this.value > 0;
        }),
        (i.prototype.isPositive = E.prototype.isPositive),
        (o.prototype.isNegative = function () {
            return this.sign;
        }),
        (E.prototype.isNegative = function () {
            return this.value < 0;
        }),
        (i.prototype.isNegative = E.prototype.isNegative),
        (o.prototype.isUnit = function () {
            return !1;
        }),
        (E.prototype.isUnit = function () {
            return 1 === Math.abs(this.value);
        }),
        (i.prototype.isUnit = function () {
            return this.abs().value === BigInt(1);
        }),
        (o.prototype.isZero = function () {
            return !1;
        }),
        (E.prototype.isZero = function () {
            return 0 === this.value;
        }),
        (i.prototype.isZero = function () {
            return this.value === BigInt(0);
        }),
        (o.prototype.isDivisibleBy = function (e) {
            var t = F(e);
            return !t.isZero() && (!!t.isUnit() || (0 === t.compareAbs(2) ? this.isEven() : this.mod(t).isZero()));
        }),
        (i.prototype.isDivisibleBy = E.prototype.isDivisibleBy = o.prototype.isDivisibleBy),
        (o.prototype.isPrime = function (e) {
            var t = U(this);
            if (void 0 !== t) return t;
            var r = this.abs(),
                a = r.bitLength();
            if (a <= 64) return P(r, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
            for (var _ = Math.log(2) * a.toJSNumber(), o = Math.ceil(!0 === e ? 2 * Math.pow(_, 2) : _), E = [], i = 0; i < o; i++) E.push(n(i + 2));
            return P(r, E);
        }),
        (i.prototype.isPrime = E.prototype.isPrime = o.prototype.isPrime),
        (o.prototype.isProbablePrime = function (t, r) {
            var a = U(this);
            if (e !== a) return a;
            for (var _ = this.abs(), o = e === t ? 5 : t, E = [], i = 0; i < o; i++) E.push(n.randBetween(2, _.minus(2), r));
            return P(_, E);
        }),
        (i.prototype.isProbablePrime = E.prototype.isProbablePrime = o.prototype.isProbablePrime),
        (o.prototype.modInv = function (e) {
            for (var t, r, a, _ = n.zero, o = n.one, E = F(e), i = this.abs(); !i.isZero(); ) (t = E.divide(i)), (r = _), (a = E), (_ = o), (E = i), (o = r.subtract(t.multiply(o))), (i = a.subtract(t.multiply(i)));
            if (!E.isUnit()) throw Error(this.toString() + ' and ' + e.toString() + ' are not co-prime');
            return (-1 === _.compare(0) && (_ = _.add(e)), this.isNegative()) ? _.negate() : _;
        }),
        (i.prototype.modInv = E.prototype.modInv = o.prototype.modInv),
        (o.prototype.next = function () {
            var e = this.value;
            return this.sign ? L(e, 1, this.sign) : new o(T(e, 1), this.sign);
        }),
        (E.prototype.next = function () {
            var e = this.value;
            return e + 1 < 9007199254740992 ? new E(e + 1) : new o(t, !1);
        }),
        (i.prototype.next = function () {
            return new i(this.value + BigInt(1));
        }),
        (o.prototype.prev = function () {
            var e = this.value;
            return this.sign ? new o(T(e, 1), !0) : L(e, 1, this.sign);
        }),
        (E.prototype.prev = function () {
            var e = this.value;
            return e - 1 > -9007199254740992 ? new E(e - 1) : new o(t, !0);
        }),
        (i.prototype.prev = function () {
            return new i(this.value - BigInt(1));
        });
    for (var M = [1]; 2 * M[M.length - 1] <= 10000000; ) M.push(2 * M[M.length - 1]);
    var G = M.length,
        m = M[G - 1];
    function y(e) {
        return 10000000 >= Math.abs(e);
    }
    function b(e, t, r) {
        t = F(t);
        for (var a = e.isNegative(), _ = t.isNegative(), o = a ? e.not() : e, E = _ ? t.not() : t, i = 0, c = 0, s = null, l = null, u = []; !o.isZero() || !E.isZero(); ) (i = (s = C(o, m))[1].toJSNumber()), a && (i = m - 1 - i), (c = (l = C(E, m))[1].toJSNumber()), _ && (c = m - 1 - c), (o = s[0]), (E = l[0]), u.push(r(i, c));
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
        (i.prototype.shiftLeft = E.prototype.shiftLeft = o.prototype.shiftLeft),
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
        (i.prototype.shiftRight = E.prototype.shiftRight = o.prototype.shiftRight),
        (o.prototype.not = function () {
            return this.negate().prev();
        }),
        (i.prototype.not = E.prototype.not = o.prototype.not),
        (o.prototype.and = function (e) {
            return b(this, e, function (e, t) {
                return e & t;
            });
        }),
        (i.prototype.and = E.prototype.and = o.prototype.and),
        (o.prototype.or = function (e) {
            return b(this, e, function (e, t) {
                return e | t;
            });
        }),
        (i.prototype.or = E.prototype.or = o.prototype.or),
        (o.prototype.xor = function (e) {
            return b(this, e, function (e, t) {
                return e ^ t;
            });
        }),
        (i.prototype.xor = E.prototype.xor = o.prototype.xor);
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
                              E = _.multiply(r);
                          return 0 >= E.compareTo(t)
                              ? {
                                    p: E,
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
        (i.prototype.bitLength = E.prototype.bitLength = o.prototype.bitLength);
    var Y = function (e, t, n, a) {
        (n = n || r), (e = String(e)), !a && ((e = e.toLowerCase()), (n = n.toLowerCase()));
        var _,
            o = e.length,
            E = Math.abs(t),
            i = {};
        for (_ = 0; _ < n.length; _++) i[n[_]] = _;
        for (_ = 0; _ < o; _++) {
            var c = e[_];
            if ('-' !== c && c in i && i[c] >= E) {
                if ('1' === c && 1 === E) continue;
                throw Error(c + ' is not a valid digit in base ' + t + '.');
            }
        }
        t = F(t);
        var s = [],
            l = '-' === e[0];
        for (_ = l ? 1 : 0; _ < e.length; _++) {
            var c = e[_];
            if (c in i) s.push(F(i[c]));
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
        for (var _ = [], o, E = e; E.isNegative() || E.compareAbs(t) >= 0; ) {
            E = (o = E.divmod(t)).quotient;
            var i = o.remainder;
            i.isNegative() && ((i = t.minus(i).abs()), (E = E.next())), _.push(i.toJSNumber());
        }
        return (
            _.push(E.toJSNumber()),
            {
                value: _.reverse(),
                isNegative: a
            }
        );
    }
    function k(e, t, n) {
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
    function V(e) {
        if (c(+e)) {
            var t = +e;
            if (t === R(t)) return a ? new i(BigInt(t)) : new E(t);
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
        if (a) return new i(BigInt(r ? '-' + e : e));
        for (var I = [], N = e.length, A = N - 7; N > 0; ) I.push(+e.slice(A, N)), (A -= 7) < 0 && (A = 0), (N -= 7);
        return u(I), new o(I, r);
    }
    (o.prototype.toArray = function (e) {
        return K(this, e);
    }),
        (E.prototype.toArray = function (e) {
            return K(this, e);
        }),
        (i.prototype.toArray = function (e) {
            return K(this, e);
        }),
        (o.prototype.toString = function (t, r) {
            if ((e === t && (t = 10), 10 !== t)) return k(this, t, r);
            for (var n, a = this.value, _ = a.length, o = String(a[--_]); --_ >= 0; ) (n = String(a[_])), (o += '0000000'.slice(n.length) + n);
            return (this.sign ? '-' : '') + o;
        }),
        (E.prototype.toString = function (t, r) {
            return (e === t && (t = 10), 10 != t) ? k(this, t, r) : String(this.value);
        }),
        (i.prototype.toString = E.prototype.toString),
        (i.prototype.toJSON =
            o.prototype.toJSON =
            E.prototype.toJSON =
                function () {
                    return this.toString();
                }),
        (o.prototype.valueOf = function () {
            return parseInt(this.toString(), 10);
        }),
        (o.prototype.toJSNumber = o.prototype.valueOf),
        (E.prototype.valueOf = function () {
            return this.value;
        }),
        (E.prototype.toJSNumber = E.prototype.valueOf),
        (i.prototype.valueOf = i.prototype.toJSNumber =
            function () {
                return parseInt(this.toString(), 10);
            });
    function F(e) {
        return 'number' == typeof e
            ? (function (e) {
                  if (a) return new i(BigInt(e));
                  if (c(e)) {
                      if (e !== R(e)) throw Error(e + ' is not an integer.');
                      return new E(e);
                  }
                  return V(e.toString());
              })(e)
            : 'string' == typeof e
              ? V(e)
              : 'bigint' == typeof e
                ? new i(e)
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
            return e instanceof o || e instanceof E || e instanceof i;
        }),
        (_.randBetween = function (e, t, r) {
            (e = F(e)), (t = F(t));
            var n = r || Math.random,
                a = W(e, t),
                o = B(e, t).subtract(a).add(1);
            if (o.isSmall) return a.add(Math.floor(n() * o));
            for (var E = K(o, 10000000).value, i = [], c = !0, s = 0; s < E.length; s++) {
                var l = c ? E[s] : 10000000,
                    u = R(n() * l);
                i.push(u), u < l && (c = !1);
            }
            return a.add(_.fromArray(i, 10000000, !1));
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
