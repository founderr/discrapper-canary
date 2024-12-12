e = r.nmd(e);
var i = (function (e) {
    var n = 10000000,
        r = 7,
        a = 9007199254740992,
        s = h(9007199254740992),
        o = '0123456789abcdefghijklmnopqrstuvwxyz',
        l = 'function' == typeof BigInt;
    function u(e, n, r, i) {
        return void 0 === e ? u[0] : void 0 !== n ? (10 != +n || r ? $(e, n, r, i) : es(e)) : es(e);
    }
    function c(e, n) {
        (this.value = e), (this.sign = n), (this.isSmall = !1);
    }
    function d(e) {
        (this.value = e), (this.sign = e < 0), (this.isSmall = !0);
    }
    function f(e) {
        this.value = e;
    }
    function _(e) {
        return -a < e && e < a;
    }
    function h(e) {
        return e < 10000000 ? [e] : e < 100000000000000 ? [e % 10000000, Math.floor(e / 10000000)] : [e % 10000000, Math.floor(e / 10000000) % 10000000, Math.floor(e / 100000000000000)];
    }
    function p(e) {
        m(e);
        var r = e.length;
        if (r < 4 && 0 > k(e, s))
            switch (r) {
                case 0:
                    return 0;
                case 1:
                    return e[0];
                case 2:
                    return e[0] + e[1] * n;
                default:
                    return e[0] + (e[1] + e[2] * n) * n;
            }
        return e;
    }
    function m(e) {
        for (var n = e.length; 0 === e[--n]; );
        e.length = n + 1;
    }
    function g(e) {
        for (var n = Array(e), r = -1; ++r < e; ) n[r] = 0;
        return n;
    }
    function E(e) {
        return e > 0 ? Math.floor(e) : Math.ceil(e);
    }
    function v(e, r) {
        var i,
            a,
            s = e.length,
            o = r.length,
            l = Array(s),
            u = 0,
            c = n;
        for (a = 0; a < o; a++) (u = (i = e[a] + r[a] + u) >= c ? 1 : 0), (l[a] = i - u * c);
        for (; a < s; ) (u = (i = e[a] + u) === c ? 1 : 0), (l[a++] = i - u * c);
        return u > 0 && l.push(u), l;
    }
    function I(e, n) {
        return e.length >= n.length ? v(e, n) : v(n, e);
    }
    function T(e, r) {
        var i,
            a,
            s = e.length,
            o = Array(s),
            l = n;
        for (a = 0; a < s; a++) (r = Math.floor((i = e[a] - l + r) / l)), (o[a] = i - r * l), (r += 1);
        for (; r > 0; ) (o[a++] = r % l), (r = Math.floor(r / l));
        return o;
    }
    function b(e, r) {
        var i,
            a,
            s = e.length,
            o = r.length,
            l = Array(s),
            u = 0,
            c = n;
        for (i = 0; i < o; i++) (a = e[i] - u - r[i]) < 0 ? ((a += c), (u = 1)) : (u = 0), (l[i] = a);
        for (i = o; i < s; i++) {
            if ((a = e[i] - u) < 0) a += c;
            else {
                l[i++] = a;
                break;
            }
            l[i] = a;
        }
        for (; i < s; i++) l[i] = e[i];
        return m(l), l;
    }
    function y(e, n, r) {
        var i;
        return (k(e, n) >= 0 ? (i = b(e, n)) : ((i = b(n, e)), (r = !r)), 'number' == typeof (i = p(i))) ? (r && (i = -i), new d(i)) : new c(i, r);
    }
    function S(e, r, i) {
        var a,
            s,
            o = e.length,
            l = Array(o),
            u = -r,
            f = n;
        for (a = 0; a < o; a++) (u = Math.floor((s = e[a] + u) / f)), (s %= f), (l[a] = s < 0 ? s + f : s);
        return 'number' == typeof (l = p(l)) ? (i && (l = -l), new d(l)) : new c(l, i);
    }
    function A(e, r) {
        var i,
            a,
            s,
            o,
            l = e.length,
            u = r.length,
            c = g(l + u),
            d = n;
        for (s = 0; s < l; ++s) {
            o = e[s];
            for (var f = 0; f < u; ++f) (a = Math.floor((i = o * r[f] + c[s + f]) / d)), (c[s + f] = i - a * d), (c[s + f + 1] += a);
        }
        return m(c), c;
    }
    function N(e, r) {
        var i,
            a,
            s = e.length,
            o = Array(s),
            l = n,
            u = 0;
        for (a = 0; a < s; a++) (u = Math.floor((i = e[a] * r + u) / l)), (o[a] = i - u * l);
        for (; u > 0; ) (o[a++] = u % l), (u = Math.floor(u / l));
        return o;
    }
    function C(e, n) {
        for (var r = []; n-- > 0; ) r.push(0);
        return r.concat(e);
    }
    function R(e, n) {
        var r = Math.max(e.length, n.length);
        if (r <= 30) return A(e, n);
        r = Math.ceil(r / 2);
        var i = e.slice(r),
            a = e.slice(0, r),
            s = n.slice(r),
            o = n.slice(0, r),
            l = R(a, o),
            u = R(i, s),
            c = R(I(a, i), I(o, s)),
            d = I(I(l, C(b(b(c, l), u), r)), C(u, 2 * r));
        return m(d), d;
    }
    function O(e, n) {
        return -0.012 * e - 0.012 * n + 0.000015 * e * n > 0;
    }
    function D(e, r, i) {
        return e < n ? new c(N(r, e), i) : new c(A(r, h(e)), i);
    }
    function L(e) {
        var r,
            i,
            a,
            s,
            o = e.length,
            l = g(o + o),
            u = n;
        for (a = 0; a < o; a++) {
            i = 0 - (s = e[a]) * s;
            for (var c = a; c < o; c++) (i = Math.floor((r = s * e[c] * 2 + l[a + c] + i) / u)), (l[a + c] = r - i * u);
            l[a + o] = i;
        }
        return m(l), l;
    }
    function x(e, r) {
        var i,
            a,
            s,
            o,
            l,
            u,
            c,
            d = e.length,
            f = r.length,
            _ = n,
            h = g(r.length),
            m = r[f - 1],
            E = Math.ceil(_ / (2 * m)),
            v = N(e, E),
            I = N(r, E);
        for (v.length <= d && v.push(0), I.push(0), m = I[f - 1], a = d - f; a >= 0; a--) {
            for (i = _ - 1, v[a + f] !== m && (i = Math.floor((v[a + f] * _ + v[a + f - 1]) / m)), s = 0, o = 0, u = I.length, l = 0; l < u; l++) (s += i * I[l]), (c = Math.floor(s / _)), (o += v[a + l] - (s - c * _)), (s = c), o < 0 ? ((v[a + l] = o + _), (o = -1)) : ((v[a + l] = o), (o = 0));
            for (; 0 !== o; ) {
                for (i -= 1, s = 0, l = 0; l < u; l++) (s += v[a + l] - _ + I[l]) < 0 ? ((v[a + l] = s + _), (s = 0)) : ((v[a + l] = s), (s = 1));
                o += s;
            }
            h[a] = i;
        }
        return (v = P(v, E)[0]), [p(h), p(v)];
    }
    function w(e, r) {
        for (var i, a, s, o, l, u = e.length, c = r.length, d = [], f = [], _ = n; u; ) {
            if ((f.unshift(e[--u]), m(f), 0 > k(f, r))) {
                d.push(0);
                continue;
            }
            (a = f.length), (s = f[a - 1] * _ + f[a - 2]), (o = r[c - 1] * _ + r[c - 2]), a > c && (s = (s + 1) * _), (i = Math.ceil(s / o));
            do {
                if (0 >= k((l = N(r, i)), f)) break;
                i--;
            } while (i);
            d.push(i), (f = b(f, l));
        }
        return d.reverse(), [p(d), p(f)];
    }
    function P(e, r) {
        var i,
            a,
            s,
            o,
            l = e.length,
            u = g(l),
            c = n;
        for (s = 0, i = l - 1; i >= 0; --i) (a = E((o = s * c + e[i]) / r)), (s = o - a * r), (u[i] = 0 | a);
        return [u, 0 | s];
    }
    function M(e, r) {
        var i,
            a,
            s = es(r);
        if (l) return [new f(e.value / s.value), new f(e.value % s.value)];
        var o = e.value,
            _ = s.value;
        if (0 === _) throw Error('Cannot divide by zero');
        if (e.isSmall) return s.isSmall ? [new d(E(o / _)), new d(o % _)] : [u[0], e];
        if (s.isSmall) {
            if (1 === _) return [e, u[0]];
            if (-1 == _) return [e.negate(), u[0]];
            var m = Math.abs(_);
            if (m < n) {
                i = p((a = P(o, m))[0]);
                var g = a[1];
                return (e.sign && (g = -g), 'number' == typeof i) ? (e.sign !== s.sign && (i = -i), [new d(i), new d(g)]) : [new c(i, e.sign !== s.sign), new d(g)];
            }
            _ = h(m);
        }
        var v = k(o, _);
        if (-1 === v) return [u[0], e];
        if (0 === v) return [u[e.sign === s.sign ? 1 : -1], u[0]];
        i = (a = o.length + _.length <= 200 ? x(o, _) : w(o, _))[0];
        var I = e.sign !== s.sign,
            T = a[1],
            b = e.sign;
        return 'number' == typeof i ? (I && (i = -i), (i = new d(i))) : (i = new c(i, I)), 'number' == typeof T ? (b && (T = -T), (T = new d(T))) : (T = new c(T, b)), [i, T];
    }
    function k(e, n) {
        if (e.length !== n.length) return e.length > n.length ? 1 : -1;
        for (var r = e.length - 1; r >= 0; r--) if (e[r] !== n[r]) return e[r] > n[r] ? 1 : -1;
        return 0;
    }
    function U(e) {
        var n = e.abs();
        return !n.isUnit() && (!!(n.equals(2) || n.equals(3) || n.equals(5)) || (!(n.isEven() || n.isDivisibleBy(3) || n.isDivisibleBy(5)) && (!!n.lesser(49) || void 0)));
    }
    function B(e, n) {
        for (var r, a, s, o = e.prev(), l = o, u = 0; l.isEven(); ) (l = l.divide(2)), u++;
        e: for (a = 0; a < n.length; a++) {
            if (!e.lesser(n[a])) {
                if (!((s = i(n[a]).modPow(l, e)).isUnit() || s.equals(o))) {
                    for (r = u - 1; 0 != r && !(s = s.square().mod(e)).isUnit(); r--) {
                        if (s.equals(o)) continue e;
                    }
                    return !1;
                }
            }
        }
        return !0;
    }
    (c.prototype = Object.create(u.prototype)),
        (d.prototype = Object.create(u.prototype)),
        (f.prototype = Object.create(u.prototype)),
        (c.prototype.add = function (e) {
            var n = es(e);
            if (this.sign !== n.sign) return this.subtract(n.negate());
            var r = this.value,
                i = n.value;
            return n.isSmall ? new c(T(r, Math.abs(i)), this.sign) : new c(I(r, i), this.sign);
        }),
        (c.prototype.plus = c.prototype.add),
        (d.prototype.add = function (e) {
            var n = es(e),
                r = this.value;
            if (r < 0 !== n.sign) return this.subtract(n.negate());
            var i = n.value;
            if (n.isSmall) {
                if (_(r + i)) return new d(r + i);
                i = h(Math.abs(i));
            }
            return new c(T(i, Math.abs(r)), r < 0);
        }),
        (d.prototype.plus = d.prototype.add),
        (f.prototype.add = function (e) {
            return new f(this.value + es(e).value);
        }),
        (f.prototype.plus = f.prototype.add),
        (c.prototype.subtract = function (e) {
            var n = es(e);
            if (this.sign !== n.sign) return this.add(n.negate());
            var r = this.value,
                i = n.value;
            return n.isSmall ? S(r, Math.abs(i), this.sign) : y(r, i, this.sign);
        }),
        (c.prototype.minus = c.prototype.subtract),
        (d.prototype.subtract = function (e) {
            var n = es(e),
                r = this.value;
            if (r < 0 !== n.sign) return this.add(n.negate());
            var i = n.value;
            return n.isSmall ? new d(r - i) : S(i, Math.abs(r), r >= 0);
        }),
        (d.prototype.minus = d.prototype.subtract),
        (f.prototype.subtract = function (e) {
            return new f(this.value - es(e).value);
        }),
        (f.prototype.minus = f.prototype.subtract),
        (c.prototype.negate = function () {
            return new c(this.value, !this.sign);
        }),
        (d.prototype.negate = function () {
            var e = this.sign,
                n = new d(-this.value);
            return (n.sign = !e), n;
        }),
        (f.prototype.negate = function () {
            return new f(-this.value);
        }),
        (c.prototype.abs = function () {
            return new c(this.value, !1);
        }),
        (d.prototype.abs = function () {
            return new d(Math.abs(this.value));
        }),
        (f.prototype.abs = function () {
            return new f(this.value >= 0 ? this.value : -this.value);
        }),
        (c.prototype.multiply = function (e) {
            var r,
                i = es(e),
                a = this.value,
                s = i.value,
                o = this.sign !== i.sign;
            if (i.isSmall) {
                if (0 === s) return u[0];
                if (1 === s) return this;
                if (-1 === s) return this.negate();
                if ((r = Math.abs(s)) < n) return new c(N(a, r), o);
                s = h(r);
            }
            return O(a.length, s.length) ? new c(R(a, s), o) : new c(A(a, s), o);
        }),
        (c.prototype.times = c.prototype.multiply),
        (d.prototype._multiplyBySmall = function (e) {
            return _(e.value * this.value) ? new d(e.value * this.value) : D(Math.abs(e.value), h(Math.abs(this.value)), this.sign !== e.sign);
        }),
        (c.prototype._multiplyBySmall = function (e) {
            return 0 === e.value ? u[0] : 1 === e.value ? this : -1 === e.value ? this.negate() : D(Math.abs(e.value), this.value, this.sign !== e.sign);
        }),
        (d.prototype.multiply = function (e) {
            return es(e)._multiplyBySmall(this);
        }),
        (d.prototype.times = d.prototype.multiply),
        (f.prototype.multiply = function (e) {
            return new f(this.value * es(e).value);
        }),
        (f.prototype.times = f.prototype.multiply),
        (c.prototype.square = function () {
            return new c(L(this.value), !1);
        }),
        (d.prototype.square = function () {
            var e = this.value * this.value;
            return _(e) ? new d(e) : new c(L(h(Math.abs(this.value))), !1);
        }),
        (f.prototype.square = function (e) {
            return new f(this.value * this.value);
        }),
        (c.prototype.divmod = function (e) {
            var n = M(this, e);
            return {
                quotient: n[0],
                remainder: n[1]
            };
        }),
        (f.prototype.divmod = d.prototype.divmod = c.prototype.divmod),
        (c.prototype.divide = function (e) {
            return M(this, e)[0];
        }),
        (f.prototype.over = f.prototype.divide =
            function (e) {
                return new f(this.value / es(e).value);
            }),
        (d.prototype.over = d.prototype.divide = c.prototype.over = c.prototype.divide),
        (c.prototype.mod = function (e) {
            return M(this, e)[1];
        }),
        (f.prototype.mod = f.prototype.remainder =
            function (e) {
                return new f(this.value % es(e).value);
            }),
        (d.prototype.remainder = d.prototype.mod = c.prototype.remainder = c.prototype.mod),
        (c.prototype.pow = function (e) {
            var n,
                r,
                i,
                a = es(e),
                s = this.value,
                o = a.value;
            if (0 === o) return u[1];
            if (0 === s) return u[0];
            if (1 === s) return u[1];
            if (-1 === s) return a.isEven() ? u[1] : u[-1];
            if (a.sign) return u[0];
            if (!a.isSmall) throw Error('The exponent ' + a.toString() + ' is too large.');
            if (this.isSmall && _((n = Math.pow(s, o)))) return new d(E(n));
            for (r = this, i = u[1]; !0 & o && ((i = i.times(r)), --o), 0 !== o; ) {
                (o /= 2), (r = r.square());
            }
            return i;
        }),
        (d.prototype.pow = c.prototype.pow),
        (f.prototype.pow = function (e) {
            var n = es(e),
                r = this.value,
                i = n.value,
                a = BigInt(0),
                s = BigInt(1),
                o = BigInt(2);
            if (i === a) return u[1];
            if (r === a) return u[0];
            if (r === s) return u[1];
            if (r === BigInt(-1)) return n.isEven() ? u[1] : u[-1];
            if (n.isNegative()) return new f(a);
            for (var l = this, c = u[1]; (i & s) === s && ((c = c.times(l)), --i), i !== a; ) {
                (i /= o), (l = l.square());
            }
            return c;
        }),
        (c.prototype.modPow = function (e, n) {
            if (((e = es(e)), (n = es(n)).isZero())) throw Error('Cannot take modPow with modulus 0');
            var r = u[1],
                i = this.mod(n);
            for (e.isNegative() && ((e = e.multiply(u[-1])), (i = i.modInv(n))); e.isPositive(); ) {
                if (i.isZero()) return u[0];
                e.isOdd() && (r = r.multiply(i).mod(n)), (e = e.divide(2)), (i = i.square().mod(n));
            }
            return r;
        }),
        (f.prototype.modPow = d.prototype.modPow = c.prototype.modPow),
        (c.prototype.compareAbs = function (e) {
            var n = es(e),
                r = this.value,
                i = n.value;
            return n.isSmall ? 1 : k(r, i);
        }),
        (d.prototype.compareAbs = function (e) {
            var n = es(e),
                r = Math.abs(this.value),
                i = n.value;
            return n.isSmall ? (r === (i = Math.abs(i)) ? 0 : r > i ? 1 : -1) : -1;
        }),
        (f.prototype.compareAbs = function (e) {
            var n = this.value,
                r = es(e).value;
            return (n = n >= 0 ? n : -n) === (r = r >= 0 ? r : -r) ? 0 : n > r ? 1 : -1;
        }),
        (c.prototype.compare = function (e) {
            if (e === 1 / 0) return -1;
            if (e === -1 / 0) return 1;
            var n = es(e),
                r = this.value,
                i = n.value;
            return this.sign !== n.sign ? (n.sign ? 1 : -1) : n.isSmall ? (this.sign ? -1 : 1) : k(r, i) * (this.sign ? -1 : 1);
        }),
        (c.prototype.compareTo = c.prototype.compare),
        (d.prototype.compare = function (e) {
            if (e === 1 / 0) return -1;
            if (e === -1 / 0) return 1;
            var n = es(e),
                r = this.value,
                i = n.value;
            return n.isSmall ? (r == i ? 0 : r > i ? 1 : -1) : r < 0 !== n.sign ? (r < 0 ? -1 : 1) : r < 0 ? 1 : -1;
        }),
        (d.prototype.compareTo = d.prototype.compare),
        (f.prototype.compare = function (e) {
            if (e === 1 / 0) return -1;
            if (e === -1 / 0) return 1;
            var n = this.value,
                r = es(e).value;
            return n === r ? 0 : n > r ? 1 : -1;
        }),
        (f.prototype.compareTo = f.prototype.compare),
        (c.prototype.equals = function (e) {
            return 0 === this.compare(e);
        }),
        (f.prototype.eq = f.prototype.equals = d.prototype.eq = d.prototype.equals = c.prototype.eq = c.prototype.equals),
        (c.prototype.notEquals = function (e) {
            return 0 !== this.compare(e);
        }),
        (f.prototype.neq = f.prototype.notEquals = d.prototype.neq = d.prototype.notEquals = c.prototype.neq = c.prototype.notEquals),
        (c.prototype.greater = function (e) {
            return this.compare(e) > 0;
        }),
        (f.prototype.gt = f.prototype.greater = d.prototype.gt = d.prototype.greater = c.prototype.gt = c.prototype.greater),
        (c.prototype.lesser = function (e) {
            return 0 > this.compare(e);
        }),
        (f.prototype.lt = f.prototype.lesser = d.prototype.lt = d.prototype.lesser = c.prototype.lt = c.prototype.lesser),
        (c.prototype.greaterOrEquals = function (e) {
            return this.compare(e) >= 0;
        }),
        (f.prototype.geq = f.prototype.greaterOrEquals = d.prototype.geq = d.prototype.greaterOrEquals = c.prototype.geq = c.prototype.greaterOrEquals),
        (c.prototype.lesserOrEquals = function (e) {
            return 0 >= this.compare(e);
        }),
        (f.prototype.leq = f.prototype.lesserOrEquals = d.prototype.leq = d.prototype.lesserOrEquals = c.prototype.leq = c.prototype.lesserOrEquals),
        (c.prototype.isEven = function () {
            return (1 & this.value[0]) == 0;
        }),
        (d.prototype.isEven = function () {
            return (1 & this.value) == 0;
        }),
        (f.prototype.isEven = function () {
            return (this.value & BigInt(1)) === BigInt(0);
        }),
        (c.prototype.isOdd = function () {
            return (1 & this.value[0]) == 1;
        }),
        (d.prototype.isOdd = function () {
            return (1 & this.value) == 1;
        }),
        (f.prototype.isOdd = function () {
            return (this.value & BigInt(1)) === BigInt(1);
        }),
        (c.prototype.isPositive = function () {
            return !this.sign;
        }),
        (d.prototype.isPositive = function () {
            return this.value > 0;
        }),
        (f.prototype.isPositive = d.prototype.isPositive),
        (c.prototype.isNegative = function () {
            return this.sign;
        }),
        (d.prototype.isNegative = function () {
            return this.value < 0;
        }),
        (f.prototype.isNegative = d.prototype.isNegative),
        (c.prototype.isUnit = function () {
            return !1;
        }),
        (d.prototype.isUnit = function () {
            return 1 === Math.abs(this.value);
        }),
        (f.prototype.isUnit = function () {
            return this.abs().value === BigInt(1);
        }),
        (c.prototype.isZero = function () {
            return !1;
        }),
        (d.prototype.isZero = function () {
            return 0 === this.value;
        }),
        (f.prototype.isZero = function () {
            return this.value === BigInt(0);
        }),
        (c.prototype.isDivisibleBy = function (e) {
            var n = es(e);
            return !n.isZero() && (!!n.isUnit() || (0 === n.compareAbs(2) ? this.isEven() : this.mod(n).isZero()));
        }),
        (f.prototype.isDivisibleBy = d.prototype.isDivisibleBy = c.prototype.isDivisibleBy),
        (c.prototype.isPrime = function (e) {
            var n = U(this);
            if (void 0 !== n) return n;
            var r = this.abs(),
                a = r.bitLength();
            if (a <= 64) return B(r, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
            for (var s = Math.log(2) * a.toJSNumber(), o = Math.ceil(!0 === e ? 2 * Math.pow(s, 2) : s), l = [], u = 0; u < o; u++) l.push(i(u + 2));
            return B(r, l);
        }),
        (f.prototype.isPrime = d.prototype.isPrime = c.prototype.isPrime),
        (c.prototype.isProbablePrime = function (n, r) {
            var a = U(this);
            if (e !== a) return a;
            for (var s = this.abs(), o = e === n ? 5 : n, l = [], u = 0; u < o; u++) l.push(i.randBetween(2, s.minus(2), r));
            return B(s, l);
        }),
        (f.prototype.isProbablePrime = d.prototype.isProbablePrime = c.prototype.isProbablePrime),
        (c.prototype.modInv = function (e) {
            for (var n, r, a, s = i.zero, o = i.one, l = es(e), u = this.abs(); !u.isZero(); ) (n = l.divide(u)), (r = s), (a = l), (s = o), (l = u), (o = r.subtract(n.multiply(o))), (u = a.subtract(n.multiply(u)));
            if (!l.isUnit()) throw Error(this.toString() + ' and ' + e.toString() + ' are not co-prime');
            return (-1 === s.compare(0) && (s = s.add(e)), this.isNegative()) ? s.negate() : s;
        }),
        (f.prototype.modInv = d.prototype.modInv = c.prototype.modInv),
        (c.prototype.next = function () {
            var e = this.value;
            return this.sign ? S(e, 1, this.sign) : new c(T(e, 1), this.sign);
        }),
        (d.prototype.next = function () {
            var e = this.value;
            return e + 1 < a ? new d(e + 1) : new c(s, !1);
        }),
        (f.prototype.next = function () {
            return new f(this.value + BigInt(1));
        }),
        (c.prototype.prev = function () {
            var e = this.value;
            return this.sign ? new c(T(e, 1), !0) : S(e, 1, this.sign);
        }),
        (d.prototype.prev = function () {
            var e = this.value;
            return e - 1 > -a ? new d(e - 1) : new c(s, !0);
        }),
        (f.prototype.prev = function () {
            return new f(this.value - BigInt(1));
        });
    for (var G = [1]; 2 * G[G.length - 1] <= n; ) G.push(2 * G[G.length - 1]);
    var Z = G.length,
        F = G[Z - 1];
    function V(e) {
        return Math.abs(e) <= n;
    }
    function j(e, n, r) {
        n = es(n);
        for (var a = e.isNegative(), s = n.isNegative(), o = a ? e.not() : e, l = s ? n.not() : n, u = 0, c = 0, d = null, f = null, _ = []; !o.isZero() || !l.isZero(); ) (u = (d = M(o, F))[1].toJSNumber()), a && (u = F - 1 - u), (c = (f = M(l, F))[1].toJSNumber()), s && (c = F - 1 - c), (o = d[0]), (l = f[0]), _.push(r(u, c));
        for (var h = 0 !== r(a ? 1 : 0, s ? 1 : 0) ? i(-1) : i(0), p = _.length - 1; p >= 0; p -= 1) h = h.multiply(F).add(i(_[p]));
        return h;
    }
    (c.prototype.shiftLeft = function (e) {
        var n = es(e).toJSNumber();
        if (!V(n)) throw Error(String(n) + ' is too large for shifting.');
        if (n < 0) return this.shiftRight(-n);
        var r = this;
        if (r.isZero()) return r;
        for (; n >= Z; ) (r = r.multiply(F)), (n -= Z - 1);
        return r.multiply(G[n]);
    }),
        (f.prototype.shiftLeft = d.prototype.shiftLeft = c.prototype.shiftLeft),
        (c.prototype.shiftRight = function (e) {
            var n,
                r = es(e).toJSNumber();
            if (!V(r)) throw Error(String(r) + ' is too large for shifting.');
            if (r < 0) return this.shiftLeft(-r);
            for (var i = this; r >= Z; ) {
                if (i.isZero() || (i.isNegative() && i.isUnit())) return i;
                (i = (n = M(i, F))[1].isNegative() ? n[0].prev() : n[0]), (r -= Z - 1);
            }
            return (n = M(i, G[r]))[1].isNegative() ? n[0].prev() : n[0];
        }),
        (f.prototype.shiftRight = d.prototype.shiftRight = c.prototype.shiftRight),
        (c.prototype.not = function () {
            return this.negate().prev();
        }),
        (f.prototype.not = d.prototype.not = c.prototype.not),
        (c.prototype.and = function (e) {
            return j(this, e, function (e, n) {
                return e & n;
            });
        }),
        (f.prototype.and = d.prototype.and = c.prototype.and),
        (c.prototype.or = function (e) {
            return j(this, e, function (e, n) {
                return e | n;
            });
        }),
        (f.prototype.or = d.prototype.or = c.prototype.or),
        (c.prototype.xor = function (e) {
            return j(this, e, function (e, n) {
                return e ^ n;
            });
        }),
        (f.prototype.xor = d.prototype.xor = c.prototype.xor);
    var H = 1073741824,
        Y = ((n & -n) * (n & -n)) | 1073741824;
    function W(e) {
        var r = e.value,
            i = 'number' == typeof r ? r | H : 'bigint' == typeof r ? r | BigInt(H) : (r[0] + r[1] * n) | Y;
        return i & -i;
    }
    function K(e, n) {
        if (0 >= n.compareTo(e)) {
            var r = K(e, n.square(n)),
                a = r.p,
                s = r.e,
                o = a.multiply(n);
            return 0 >= o.compareTo(e)
                ? {
                      p: o,
                      e: 2 * s + 1
                  }
                : {
                      p: a,
                      e: 2 * s
                  };
        }
        return {
            p: i(1),
            e: 0
        };
    }
    function z(e, n) {
        return (e = es(e)), (n = es(n)), e.greater(n) ? e : n;
    }
    function q(e, n) {
        return (e = es(e)), (n = es(n)), e.lesser(n) ? e : n;
    }
    function Q(e, n) {
        if (((e = es(e).abs()), (n = es(n).abs()), e.equals(n))) return e;
        if (e.isZero()) return n;
        if (n.isZero()) return e;
        for (var r, i, a = u[1]; e.isEven() && n.isEven(); ) (r = q(W(e), W(n))), (e = e.divide(r)), (n = n.divide(r)), (a = a.multiply(r));
        for (; e.isEven(); ) e = e.divide(W(e));
        do {
            for (; n.isEven(); ) n = n.divide(W(n));
            e.greater(n) && ((i = n), (n = e), (e = i)), (n = n.subtract(e));
        } while (!n.isZero());
        return a.isUnit() ? e : e.multiply(a);
    }
    function X(e, n) {
        return (e = es(e).abs()), (n = es(n).abs()), e.divide(Q(e, n)).multiply(n);
    }
    function J(e, r, i) {
        (e = es(e)), (r = es(r));
        var a = i || Math.random,
            s = q(e, r),
            o = z(e, r).subtract(s).add(1);
        if (o.isSmall) return s.add(Math.floor(a() * o));
        for (var l = en(o, n).value, c = [], d = !0, f = 0; f < l.length; f++) {
            var _ = d ? l[f] : n,
                h = E(a() * _);
            c.push(h), h < _ && (d = !1);
        }
        return s.add(u.fromArray(c, n, !1));
    }
    (c.prototype.bitLength = function () {
        var e = this;
        return (0 > e.compareTo(i(0)) && (e = e.negate().subtract(i(1))), 0 === e.compareTo(i(0))) ? i(0) : i(K(e, i(2)).e).add(i(1));
    }),
        (f.prototype.bitLength = d.prototype.bitLength = c.prototype.bitLength);
    var $ = function (e, n, r, i) {
        (r = r || o), (e = String(e)), !i && ((e = e.toLowerCase()), (r = r.toLowerCase()));
        var a,
            s = e.length,
            l = Math.abs(n),
            u = {};
        for (a = 0; a < r.length; a++) u[r[a]] = a;
        for (a = 0; a < s; a++) {
            var c = e[a];
            if ('-' !== c && c in u && u[c] >= l) {
                if ('1' === c && 1 === l) continue;
                throw Error(c + ' is not a valid digit in base ' + n + '.');
            }
        }
        n = es(n);
        var d = [],
            f = '-' === e[0];
        for (a = f ? 1 : 0; a < e.length; a++) {
            var c = e[a];
            if (c in u) d.push(es(u[c]));
            else if ('<' === c) {
                var _ = a;
                do a++;
                while ('>' !== e[a] && a < e.length);
                d.push(es(e.slice(_ + 1, a)));
            } else throw Error(c + ' is not a valid character');
        }
        return ee(d, n, f);
    };
    function ee(e, n, r) {
        var i,
            a = u[0],
            s = u[1];
        for (i = e.length - 1; i >= 0; i--) (a = a.add(e[i].times(s))), (s = s.times(n));
        return r ? a.negate() : a;
    }
    function et(e, n) {
        return e < (n = n || o).length ? n[e] : '<' + e + '>';
    }
    function en(e, n) {
        if ((n = i(n)).isZero()) {
            if (e.isZero())
                return {
                    value: [0],
                    isNegative: !1
                };
            throw Error('Cannot convert nonzero numbers to base 0.');
        }
        if (n.equals(-1)) {
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
        if ((e.isNegative() && n.isPositive() && ((a = !0), (e = e.abs())), n.isUnit()))
            return e.isZero()
                ? {
                      value: [0],
                      isNegative: !1
                  }
                : {
                      value: Array.apply(null, Array(e.toJSNumber())).map(Number.prototype.valueOf, 1),
                      isNegative: a
                  };
        for (var s = [], o, l = e; l.isNegative() || l.compareAbs(n) >= 0; ) {
            l = (o = l.divmod(n)).quotient;
            var u = o.remainder;
            u.isNegative() && ((u = n.minus(u).abs()), (l = l.next())), s.push(u.toJSNumber());
        }
        return (
            s.push(l.toJSNumber()),
            {
                value: s.reverse(),
                isNegative: a
            }
        );
    }
    function er(e, n, r) {
        var i = en(e, n);
        return (
            (i.isNegative ? '-' : '') +
            i.value
                .map(function (e) {
                    return et(e, r);
                })
                .join('')
        );
    }
    function ei(e) {
        if (_(+e)) {
            var n = +e;
            if (n === E(n)) return l ? new f(BigInt(n)) : new d(n);
            throw Error('Invalid integer: ' + e);
        }
        var i = '-' === e[0];
        i && (e = e.slice(1));
        var a = e.split(/e/i);
        if (a.length > 2) throw Error('Invalid integer: ' + a.join('e'));
        if (2 === a.length) {
            var s = a[1];
            if (('+' === s[0] && (s = s.slice(1)), (s = +s) !== E(s) || !_(s))) throw Error('Invalid integer: ' + s + ' is not a valid exponent.');
            var o = a[0],
                u = o.indexOf('.');
            if ((u >= 0 && ((s -= o.length - u - 1), (o = o.slice(0, u) + o.slice(u + 1))), s < 0)) throw Error('Cannot include negative exponent part for integers');
            (o += Array(s + 1).join('0')), (e = o);
        }
        if (!/^([0-9][0-9]*)$/.test(e)) throw Error('Invalid integer: ' + e);
        if (l) return new f(BigInt(i ? '-' + e : e));
        for (var h = [], p = e.length, g = r, v = p - g; p > 0; ) h.push(+e.slice(v, p)), (v -= g) < 0 && (v = 0), (p -= g);
        return m(h), new c(h, i);
    }
    function ea(e) {
        if (l) return new f(BigInt(e));
        if (_(e)) {
            if (e !== E(e)) throw Error(e + ' is not an integer.');
            return new d(e);
        }
        return ei(e.toString());
    }
    function es(e) {
        return 'number' == typeof e ? ea(e) : 'string' == typeof e ? ei(e) : 'bigint' == typeof e ? new f(e) : e;
    }
    (c.prototype.toArray = function (e) {
        return en(this, e);
    }),
        (d.prototype.toArray = function (e) {
            return en(this, e);
        }),
        (f.prototype.toArray = function (e) {
            return en(this, e);
        }),
        (c.prototype.toString = function (n, r) {
            if ((e === n && (n = 10), 10 !== n)) return er(this, n, r);
            for (var i, a = this.value, s = a.length, o = String(a[--s]), l = '0000000'; --s >= 0; ) (i = String(a[s])), (o += l.slice(i.length) + i);
            return (this.sign ? '-' : '') + o;
        }),
        (d.prototype.toString = function (n, r) {
            return (e === n && (n = 10), 10 != n) ? er(this, n, r) : String(this.value);
        }),
        (f.prototype.toString = d.prototype.toString),
        (f.prototype.toJSON =
            c.prototype.toJSON =
            d.prototype.toJSON =
                function () {
                    return this.toString();
                }),
        (c.prototype.valueOf = function () {
            return parseInt(this.toString(), 10);
        }),
        (c.prototype.toJSNumber = c.prototype.valueOf),
        (d.prototype.valueOf = function () {
            return this.value;
        }),
        (d.prototype.toJSNumber = d.prototype.valueOf),
        (f.prototype.valueOf = f.prototype.toJSNumber =
            function () {
                return parseInt(this.toString(), 10);
            });
    for (var eo = 0; eo < 1000; eo++) (u[eo] = es(eo)), eo > 0 && (u[-eo] = es(-eo));
    return (
        (u.one = u[1]),
        (u.zero = u[0]),
        (u.minusOne = u[-1]),
        (u.max = z),
        (u.min = q),
        (u.gcd = Q),
        (u.lcm = X),
        (u.isInstance = function (e) {
            return e instanceof c || e instanceof d || e instanceof f;
        }),
        (u.randBetween = J),
        (u.fromArray = function (e, n, r) {
            return ee(e.map(es), es(n || 10), r);
        }),
        u
    );
})();
e.hasOwnProperty('exports') && (e.exports = i),
    'function' == typeof define &&
        define.amd &&
        define(function () {
            return i;
        });
