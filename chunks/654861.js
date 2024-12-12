e = r.nmd(e);
var a = (function (e) {
    var t = s(9007199254740992),
        r = '0123456789abcdefghijklmnopqrstuvwxyz',
        n = 'function' == typeof BigInt;
    function _(e, t, r, a) {
        return void 0 === e ? _[0] : void 0 !== t ? (10 != +t || r ? H(e, t, r, a) : F(e)) : F(e);
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
        I(e);
        var r = e.length;
        if (r < 4 && 0 > P(e, t))
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
    function I(e) {
        for (var t = e.length; 0 === e[--t]; );
        e.length = t + 1;
    }
    function u(e) {
        for (var t = Array(e), r = -1; ++r < e; ) t[r] = 0;
        return t;
    }
    function R(e) {
        return e > 0 ? Math.floor(e) : Math.ceil(e);
    }
    function A(e, t) {
        var r,
            a,
            n = e.length,
            _ = t.length,
            o = Array(n),
            E = 0;
        for (a = 0; a < _; a++) (E = (r = e[a] + t[a] + E) >= 10000000 ? 1 : 0), (o[a] = r - 10000000 * E);
        for (; a < n; ) (E = 10000000 === (r = e[a] + E) ? 1 : 0), (o[a++] = r - 10000000 * E);
        return E > 0 && o.push(E), o;
    }
    function T(e, t) {
        return e.length >= t.length ? A(e, t) : A(t, e);
    }
    function N(e, t) {
        var r,
            a,
            n = e.length,
            _ = Array(n);
        for (a = 0; a < n; a++) (t = Math.floor((r = e[a] - 10000000 + t) / 10000000)), (_[a] = r - 10000000 * t), (t += 1);
        for (; t > 0; ) (_[a++] = t % 10000000), (t = Math.floor(t / 10000000));
        return _;
    }
    function d(e, t) {
        var r,
            a,
            n = e.length,
            _ = t.length,
            o = Array(n),
            E = 0;
        for (r = 0; r < _; r++) (a = e[r] - E - t[r]) < 0 ? ((a += 10000000), (E = 1)) : (E = 0), (o[r] = a);
        for (r = _; r < n; r++) {
            if ((a = e[r] - E) < 0) a += 10000000;
            else {
                o[r++] = a;
                break;
            }
            o[r] = a;
        }
        for (; r < n; r++) o[r] = e[r];
        return I(o), o;
    }
    (o.prototype = Object.create(_.prototype)),
        (E.prototype = Object.create(_.prototype)),
        (i.prototype = Object.create(_.prototype)),
        (o.prototype.add = function (e) {
            var t = F(e);
            if (this.sign !== t.sign) return this.subtract(t.negate());
            var r = this.value,
                a = t.value;
            return t.isSmall ? new o(N(r, Math.abs(a)), this.sign) : new o(T(r, a), this.sign);
        }),
        (o.prototype.plus = o.prototype.add),
        (E.prototype.add = function (e) {
            var t = F(e),
                r = this.value;
            if (r < 0 !== t.sign) return this.subtract(t.negate());
            var a = t.value;
            if (t.isSmall) {
                if (c(r + a)) return new E(r + a);
                a = s(Math.abs(a));
            }
            return new o(N(a, Math.abs(r)), r < 0);
        }),
        (E.prototype.plus = E.prototype.add),
        (i.prototype.add = function (e) {
            return new i(this.value + F(e).value);
        }),
        (i.prototype.plus = i.prototype.add);
    function f(e, t, r) {
        var a,
            n,
            _ = e.length,
            i = Array(_),
            c = -t;
        for (a = 0; a < _; a++) (c = Math.floor((n = e[a] + c) / 10000000)), (n %= 10000000), (i[a] = n < 0 ? n + 10000000 : n);
        return 'number' == typeof (i = l(i)) ? (r && (i = -i), new E(i)) : new o(i, r);
    }
    function O(e, t) {
        var r,
            a,
            n,
            _,
            o = e.length,
            E = t.length,
            i = u(o + E);
        for (n = 0; n < o; ++n) {
            _ = e[n];
            for (var c = 0; c < E; ++c) (a = Math.floor((r = _ * t[c] + i[n + c]) / 10000000)), (i[n + c] = r - 10000000 * a), (i[n + c + 1] += a);
        }
        return I(i), i;
    }
    function L(e, t) {
        var r,
            a,
            n = e.length,
            _ = Array(n),
            o = 0;
        for (a = 0; a < n; a++) (o = Math.floor((r = e[a] * t + o) / 10000000)), (_[a] = r - 10000000 * o);
        for (; o > 0; ) (_[a++] = o % 10000000), (o = Math.floor(o / 10000000));
        return _;
    }
    function p(e, t) {
        for (var r = []; t-- > 0; ) r.push(0);
        return r.concat(e);
    }
    (o.prototype.subtract = function (e) {
        var t,
            r,
            a,
            n,
            _ = F(e);
        if (this.sign !== _.sign) return this.add(_.negate());
        var i = this.value,
            c = _.value;
        if (_.isSmall) return f(i, Math.abs(c), this.sign);
        return (t = i), (r = c), (a = this.sign), (P(t, r) >= 0 ? (n = d(t, r)) : ((n = d(r, t)), (a = !a)), 'number' == typeof (n = l(n))) ? (a && (n = -n), new E(n)) : new o(n, a);
    }),
        (o.prototype.minus = o.prototype.subtract),
        (E.prototype.subtract = function (e) {
            var t = F(e),
                r = this.value;
            if (r < 0 !== t.sign) return this.add(t.negate());
            var a = t.value;
            return t.isSmall ? new E(r - a) : f(a, Math.abs(r), r >= 0);
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
        return e < 10000000 ? new o(L(t, e), r) : new o(O(t, s(e)), r);
    }
    function D(e) {
        var t,
            r,
            a,
            n,
            _ = e.length,
            o = u(_ + _);
        for (a = 0; a < _; a++) {
            r = 0 - (n = e[a]) * n;
            for (var E = a; E < _; E++) (r = Math.floor((t = n * e[E] * 2 + o[a + E] + r) / 10000000)), (o[a + E] = t - 10000000 * r);
            o[a + _] = r;
        }
        return I(o), o;
    }
    (o.prototype.multiply = function (e) {
        var t,
            r,
            a,
            n = F(e),
            E = this.value,
            i = n.value,
            c = this.sign !== n.sign;
        if (n.isSmall) {
            if (0 === i) return _[0];
            if (1 === i) return this;
            if (-1 === i) return this.negate();
            if ((a = Math.abs(i)) < 10000000) return new o(L(E, a), c);
            i = s(a);
        }
        return ((t = E.length), -0.012 * t - 0.012 * (r = i.length) + 0.000015 * t * r > 0)
            ? new o(
                  (function e(t, r) {
                      var a = Math.max(t.length, r.length);
                      if (a <= 30) return O(t, r);
                      a = Math.ceil(a / 2);
                      var n = t.slice(a),
                          _ = t.slice(0, a),
                          o = r.slice(a),
                          E = r.slice(0, a),
                          i = e(_, E),
                          c = e(n, o),
                          s = e(T(_, n), T(E, o)),
                          l = T(T(i, p(d(d(s, i), c), a)), p(c, 2 * a));
                      return I(l), l;
                  })(E, i),
                  c
              )
            : new o(O(E, i), c);
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
            return new o(D(this.value), !1);
        }),
        (E.prototype.square = function () {
            var e = this.value * this.value;
            return c(e) ? new E(e) : new o(D(s(Math.abs(this.value))), !1);
        }),
        (i.prototype.square = function (e) {
            return new i(this.value * this.value);
        });
    function S(e, t) {
        var r,
            a,
            n,
            _,
            o = e.length,
            E = u(o);
        for (n = 0, r = o - 1; r >= 0; --r) (a = R((_ = 10000000 * n + e[r]) / t)), (n = _ - a * t), (E[r] = 0 | a);
        return [E, 0 | n];
    }
    function C(e, t) {
        var r,
            a,
            c = F(t);
        if (n) return [new i(e.value / c.value), new i(e.value % c.value)];
        var A = e.value,
            T = c.value;
        if (0 === T) throw Error('Cannot divide by zero');
        if (e.isSmall) return c.isSmall ? [new E(R(A / T)), new E(A % T)] : [_[0], e];
        if (c.isSmall) {
            if (1 === T) return [e, _[0]];
            if (-1 == T) return [e.negate(), _[0]];
            var N = Math.abs(T);
            if (N < 10000000) {
                r = l((a = S(A, N))[0]);
                var f = a[1];
                return (e.sign && (f = -f), 'number' == typeof r) ? (e.sign !== c.sign && (r = -r), [new E(r), new E(f)]) : [new o(r, e.sign !== c.sign), new E(f)];
            }
            T = s(N);
        }
        var O = P(A, T);
        if (-1 === O) return [_[0], e];
        if (0 === O) return [_[e.sign === c.sign ? 1 : -1], _[0]];
        r = (a =
            A.length + T.length <= 200
                ? (function (e, t) {
                      var r,
                          a,
                          n,
                          _,
                          o,
                          E,
                          i,
                          c = e.length,
                          s = t.length,
                          I = u(t.length),
                          R = t[s - 1],
                          A = Math.ceil(10000000 / (2 * R)),
                          T = L(e, A),
                          N = L(t, A);
                      for (T.length <= c && T.push(0), N.push(0), R = N[s - 1], a = c - s; a >= 0; a--) {
                          for (r = 10000000 - 1, T[a + s] !== R && (r = Math.floor((10000000 * T[a + s] + T[a + s - 1]) / R)), n = 0, _ = 0, E = N.length, o = 0; o < E; o++) (n += r * N[o]), (i = Math.floor(n / 10000000)), (_ += T[a + o] - (n - 10000000 * i)), (n = i), _ < 0 ? ((T[a + o] = _ + 10000000), (_ = -1)) : ((T[a + o] = _), (_ = 0));
                          for (; 0 !== _; ) {
                              for (r -= 1, n = 0, o = 0; o < E; o++) (n += T[a + o] - 10000000 + N[o]) < 0 ? ((T[a + o] = n + 10000000), (n = 0)) : ((T[a + o] = n), (n = 1));
                              _ += n;
                          }
                          I[a] = r;
                      }
                      return (T = S(T, A)[0]), [l(I), l(T)];
                  })(A, T)
                : (function (e, t) {
                      for (var r, a, n, _, o, E = e.length, i = t.length, c = [], s = []; E; ) {
                          if ((s.unshift(e[--E]), I(s), 0 > P(s, t))) {
                              c.push(0);
                              continue;
                          }
                          (a = s.length), (n = 10000000 * s[a - 1] + s[a - 2]), (_ = 10000000 * t[i - 1] + t[i - 2]), a > i && (n = (n + 1) * 10000000), (r = Math.ceil(n / _));
                          do {
                              if (0 >= P((o = L(t, r)), s)) break;
                              r--;
                          } while (r);
                          c.push(r), (s = d(s, o));
                      }
                      return c.reverse(), [l(c), l(s)];
                  })(A, T))[0];
        var p = e.sign !== c.sign,
            h = a[1],
            D = e.sign;
        return 'number' == typeof r ? (p && (r = -r), (r = new E(r))) : (r = new o(r, p)), 'number' == typeof h ? (D && (h = -h), (h = new E(h))) : (h = new o(h, D)), [r, h];
    }
    function P(e, t) {
        if (e.length !== t.length) return e.length > t.length ? 1 : -1;
        for (var r = e.length - 1; r >= 0; r--) if (e[r] !== t[r]) return e[r] > t[r] ? 1 : -1;
        return 0;
    }
    function g(e) {
        var t = e.abs();
        return !t.isUnit() && (!!(t.equals(2) || t.equals(3) || t.equals(5)) || (!(t.isEven() || t.isDivisibleBy(3) || t.isDivisibleBy(5)) && (!!t.lesser(49) || void 0)));
    }
    function U(e, t) {
        for (var r, n, _, o = e.prev(), E = o, i = 0; E.isEven(); ) (E = E.divide(2)), i++;
        e: for (n = 0; n < t.length; n++) {
            if (!e.lesser(t[n])) {
                if (!((_ = a(t[n]).modPow(E, e)).isUnit() || _.equals(o))) {
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
                a,
                n = F(e),
                o = this.value,
                i = n.value;
            if (0 === i) return _[1];
            if (0 === o) return _[0];
            if (1 === o) return _[1];
            if (-1 === o) return n.isEven() ? _[1] : _[-1];
            if (n.sign) return _[0];
            if (!n.isSmall) throw Error('The exponent ' + n.toString() + ' is too large.');
            if (this.isSmall && c((t = Math.pow(o, i)))) return new E(R(t));
            for (r = this, a = _[1]; !0 & i && ((a = a.times(r)), --i), 0 !== i; ) {
                (i /= 2), (r = r.square());
            }
            return a;
        }),
        (E.prototype.pow = o.prototype.pow),
        (i.prototype.pow = function (e) {
            var t = F(e),
                r = this.value,
                a = t.value,
                n = BigInt(0),
                o = BigInt(1),
                E = BigInt(2);
            if (a === n) return _[1];
            if (r === n) return _[0];
            if (r === o) return _[1];
            if (r === BigInt(-1)) return t.isEven() ? _[1] : _[-1];
            if (t.isNegative()) return new i(n);
            for (var c = this, s = _[1]; (a & o) === o && ((s = s.times(c)), --a), a !== n; ) {
                (a /= E), (c = c.square());
            }
            return s;
        }),
        (o.prototype.modPow = function (e, t) {
            if (((e = F(e)), (t = F(t)).isZero())) throw Error('Cannot take modPow with modulus 0');
            var r = _[1],
                a = this.mod(t);
            for (e.isNegative() && ((e = e.multiply(_[-1])), (a = a.modInv(t))); e.isPositive(); ) {
                if (a.isZero()) return _[0];
                e.isOdd() && (r = r.multiply(a).mod(t)), (e = e.divide(2)), (a = a.square().mod(t));
            }
            return r;
        }),
        (i.prototype.modPow = E.prototype.modPow = o.prototype.modPow),
        (o.prototype.compareAbs = function (e) {
            var t = F(e),
                r = this.value,
                a = t.value;
            return t.isSmall ? 1 : P(r, a);
        }),
        (E.prototype.compareAbs = function (e) {
            var t = F(e),
                r = Math.abs(this.value),
                a = t.value;
            return t.isSmall ? (r === (a = Math.abs(a)) ? 0 : r > a ? 1 : -1) : -1;
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
                a = t.value;
            return this.sign !== t.sign ? (t.sign ? 1 : -1) : t.isSmall ? (this.sign ? -1 : 1) : P(r, a) * (this.sign ? -1 : 1);
        }),
        (o.prototype.compareTo = o.prototype.compare),
        (E.prototype.compare = function (e) {
            if (e === 1 / 0) return -1;
            if (e === -1 / 0) return 1;
            var t = F(e),
                r = this.value,
                a = t.value;
            return t.isSmall ? (r == a ? 0 : r > a ? 1 : -1) : r < 0 !== t.sign ? (r < 0 ? -1 : 1) : r < 0 ? 1 : -1;
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
            var t = g(this);
            if (void 0 !== t) return t;
            var r = this.abs(),
                n = r.bitLength();
            if (n <= 64) return U(r, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
            for (var _ = Math.log(2) * n.toJSNumber(), o = Math.ceil(!0 === e ? 2 * Math.pow(_, 2) : _), E = [], i = 0; i < o; i++) E.push(a(i + 2));
            return U(r, E);
        }),
        (i.prototype.isPrime = E.prototype.isPrime = o.prototype.isPrime),
        (o.prototype.isProbablePrime = function (t, r) {
            var n = g(this);
            if (e !== n) return n;
            for (var _ = this.abs(), o = e === t ? 5 : t, E = [], i = 0; i < o; i++) E.push(a.randBetween(2, _.minus(2), r));
            return U(_, E);
        }),
        (i.prototype.isProbablePrime = E.prototype.isProbablePrime = o.prototype.isProbablePrime),
        (o.prototype.modInv = function (e) {
            for (var t, r, n, _ = a.zero, o = a.one, E = F(e), i = this.abs(); !i.isZero(); ) (t = E.divide(i)), (r = _), (n = E), (_ = o), (E = i), (o = r.subtract(t.multiply(o))), (i = n.subtract(t.multiply(i)));
            if (!E.isUnit()) throw Error(this.toString() + ' and ' + e.toString() + ' are not co-prime');
            return (-1 === _.compare(0) && (_ = _.add(e)), this.isNegative()) ? _.negate() : _;
        }),
        (i.prototype.modInv = E.prototype.modInv = o.prototype.modInv),
        (o.prototype.next = function () {
            var e = this.value;
            return this.sign ? f(e, 1, this.sign) : new o(N(e, 1), this.sign);
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
            return this.sign ? new o(N(e, 1), !0) : f(e, 1, this.sign);
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
        for (var n = e.isNegative(), _ = t.isNegative(), o = n ? e.not() : e, E = _ ? t.not() : t, i = 0, c = 0, s = null, l = null, I = []; !o.isZero() || !E.isZero(); ) (i = (s = C(o, m))[1].toJSNumber()), n && (i = m - 1 - i), (c = (l = C(E, m))[1].toJSNumber()), _ && (c = m - 1 - c), (o = s[0]), (E = l[0]), I.push(r(i, c));
        for (var u = 0 !== r(n ? 1 : 0, _ ? 1 : 0) ? a(-1) : a(0), R = I.length - 1; R >= 0; R -= 1) u = u.multiply(m).add(a(I[R]));
        return u;
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
            for (var a = this; r >= G; ) {
                if (a.isZero() || (a.isNegative() && a.isUnit())) return a;
                (a = (t = C(a, m))[1].isNegative() ? t[0].prev() : t[0]), (r -= G - 1);
            }
            return (t = C(a, M[r]))[1].isNegative() ? t[0].prev() : t[0];
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
    function Y(e, t) {
        if (((e = F(e).abs()), (t = F(t).abs()), e.equals(t))) return e;
        if (e.isZero()) return t;
        if (t.isZero()) return e;
        for (var r, a, n = _[1]; e.isEven() && t.isEven(); ) (r = W(w(e), w(t))), (e = e.divide(r)), (t = t.divide(r)), (n = n.multiply(r));
        for (; e.isEven(); ) e = e.divide(w(e));
        do {
            for (; t.isEven(); ) t = t.divide(w(t));
            e.greater(t) && ((a = t), (t = e), (e = a)), (t = t.subtract(e));
        } while (!t.isZero());
        return n.isUnit() ? e : e.multiply(n);
    }
    (o.prototype.bitLength = function () {
        var e = this;
        return (0 > e.compareTo(a(0)) && (e = e.negate().subtract(a(1))), 0 === e.compareTo(a(0)))
            ? a(0)
            : a(
                  (function e(t, r) {
                      if (0 >= r.compareTo(t)) {
                          var n = e(t, r.square(r)),
                              _ = n.p,
                              o = n.e,
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
                          p: a(1),
                          e: 0
                      };
                  })(e, a(2)).e
              ).add(a(1));
    }),
        (i.prototype.bitLength = E.prototype.bitLength = o.prototype.bitLength);
    var H = function (e, t, a, n) {
        (a = a || r), (e = String(e)), !n && ((e = e.toLowerCase()), (a = a.toLowerCase()));
        var _,
            o = e.length,
            E = Math.abs(t),
            i = {};
        for (_ = 0; _ < a.length; _++) i[a[_]] = _;
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
                var I = _;
                do _++;
                while ('>' !== e[_] && _ < e.length);
                s.push(F(e.slice(I + 1, _)));
            } else throw Error(c + ' is not a valid character');
        }
        return x(s, t, l);
    };
    function x(e, t, r) {
        var a,
            n = _[0],
            o = _[1];
        for (a = e.length - 1; a >= 0; a--) (n = n.add(e[a].times(o))), (o = o.times(t));
        return r ? n.negate() : n;
    }
    function K(e, t) {
        if ((t = a(t)).isZero()) {
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
        var n = !1;
        if ((e.isNegative() && t.isPositive() && ((n = !0), (e = e.abs())), t.isUnit()))
            return e.isZero()
                ? {
                      value: [0],
                      isNegative: !1
                  }
                : {
                      value: Array.apply(null, Array(e.toJSNumber())).map(Number.prototype.valueOf, 1),
                      isNegative: n
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
                isNegative: n
            }
        );
    }
    function k(e, t, a) {
        var n = K(e, t);
        return (
            (n.isNegative ? '-' : '') +
            n.value
                .map(function (e) {
                    var t, n;
                    return (t = e) < (n = (n = a) || r).length ? n[t] : '<' + t + '>';
                })
                .join('')
        );
    }
    function V(e) {
        if (c(+e)) {
            var t = +e;
            if (t === R(t)) return n ? new i(BigInt(t)) : new E(t);
            throw Error('Invalid integer: ' + e);
        }
        var r = '-' === e[0];
        r && (e = e.slice(1));
        var a = e.split(/e/i);
        if (a.length > 2) throw Error('Invalid integer: ' + a.join('e'));
        if (2 === a.length) {
            var _ = a[1];
            if (('+' === _[0] && (_ = _.slice(1)), (_ = +_) !== R(_) || !c(_))) throw Error('Invalid integer: ' + _ + ' is not a valid exponent.');
            var s = a[0],
                l = s.indexOf('.');
            if ((l >= 0 && ((_ -= s.length - l - 1), (s = s.slice(0, l) + s.slice(l + 1))), _ < 0)) throw Error('Cannot include negative exponent part for integers');
            (s += Array(_ + 1).join('0')), (e = s);
        }
        if (!/^([0-9][0-9]*)$/.test(e)) throw Error('Invalid integer: ' + e);
        if (n) return new i(BigInt(r ? '-' + e : e));
        for (var u = [], A = e.length, T = A - 7; A > 0; ) u.push(+e.slice(T, A)), (T -= 7) < 0 && (T = 0), (A -= 7);
        return I(u), new o(u, r);
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
            for (var a, n = this.value, _ = n.length, o = String(n[--_]); --_ >= 0; ) (a = String(n[_])), (o += '0000000'.slice(a.length) + a);
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
                  if (n) return new i(BigInt(e));
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
        (_.gcd = Y),
        (_.lcm = function (e, t) {
            return (e = F(e).abs()), (t = F(t).abs()), e.divide(Y(e, t)).multiply(t);
        }),
        (_.isInstance = function (e) {
            return e instanceof o || e instanceof E || e instanceof i;
        }),
        (_.randBetween = function (e, t, r) {
            (e = F(e)), (t = F(t));
            var a = r || Math.random,
                n = W(e, t),
                o = B(e, t).subtract(n).add(1);
            if (o.isSmall) return n.add(Math.floor(a() * o));
            for (var E = K(o, 10000000).value, i = [], c = !0, s = 0; s < E.length; s++) {
                var l = c ? E[s] : 10000000,
                    I = R(a() * l);
                i.push(I), I < l && (c = !1);
            }
            return n.add(_.fromArray(i, 10000000, !1));
        }),
        (_.fromArray = function (e, t, r) {
            return x(e.map(F), F(t || 10), r);
        }),
        _
    );
})();
e.hasOwnProperty('exports') && (e.exports = a),
    'function' == typeof define &&
        define.amd &&
        define(function () {
            return a;
        });
