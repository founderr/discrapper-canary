!(function (t) {
    var n,
        r = 1000000000,
        i = {
            precision: 20,
            rounding: 4,
            toExpNeg: -7,
            toExpPos: 21,
            LN10: '2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286'
        },
        a = !0,
        o = '[DecimalError] ',
        s = o + 'Invalid argument: ',
        l = o + 'Exponent out of range: ',
        u = Math.floor,
        c = Math.pow,
        d = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        _ = 10000000,
        E = 7,
        f = 9007199254740991,
        h = u(1286742750677284.5),
        p = {};
    function m(e, t) {
        var n,
            r,
            i,
            o,
            s,
            l,
            u,
            c,
            d = e.constructor,
            f = d.precision;
        if (!e.s || !t.s) return !t.s && (t = new d(e)), a ? C(t, f) : t;
        if (((u = e.d), (c = t.d), (s = e.e), (i = t.e), (u = u.slice()), (o = s - i))) {
            for (o < 0 ? ((r = u), (o = -o), (l = c.length)) : ((r = c), (i = s), (l = u.length)), o > (l = (s = Math.ceil(f / E)) > l ? s + 1 : l + 1) && ((o = l), (r.length = 1)), r.reverse(); o--; ) r.push(0);
            r.reverse();
        }
        for (l = u.length, l - (o = c.length) < 0 && ((o = l), (r = c), (c = u), (u = r)), n = 0; o; ) (n = ((u[--o] = u[o] + c[o] + n) / _) | 0), (u[o] %= _);
        for (n && (u.unshift(n), ++i), l = u.length; 0 == u[--l]; ) u.pop();
        return (t.d = u), (t.e = i), a ? C(t, f) : t;
    }
    function I(e, t, n) {
        if (e !== ~~e || e < t || e > n) throw Error(s + e);
    }
    function T(e) {
        var t,
            n,
            r,
            i = e.length - 1,
            a = '',
            o = e[0];
        if (i > 0) {
            for (a += o, t = 1; t < i; t++) (n = E - (r = e[t] + '').length) && (a += N(n)), (a += r);
            (n = E - (r = (o = e[t]) + '').length) && (a += N(n));
        } else if (0 === o) return '0';
        for (; o % 10 == 0; ) o /= 10;
        return a + o;
    }
    (p.absoluteValue = p.abs =
        function () {
            var e = new this.constructor(this);
            return e.s && (e.s = 1), e;
        }),
        (p.comparedTo = p.cmp =
            function (e) {
                var t,
                    n,
                    r,
                    i,
                    a = this;
                if (((e = new a.constructor(e)), a.s !== e.s)) return a.s || -e.s;
                if (a.e !== e.e) return (a.e > e.e) ^ (a.s < 0) ? 1 : -1;
                for (t = 0, r = a.d.length, n = r < (i = e.d.length) ? r : i; t < n; ++t) if (a.d[t] !== e.d[t]) return (a.d[t] > e.d[t]) ^ (a.s < 0) ? 1 : -1;
                return r === i ? 0 : (r > i) ^ (a.s < 0) ? 1 : -1;
            }),
        (p.decimalPlaces = p.dp =
            function () {
                var e = this,
                    t = e.d.length - 1,
                    n = (t - e.e) * E;
                if ((t = e.d[t])) for (; t % 10 == 0; t /= 10) n--;
                return n < 0 ? 0 : n;
            }),
        (p.dividedBy = p.div =
            function (e) {
                return g(this, new this.constructor(e));
            }),
        (p.dividedToIntegerBy = p.idiv =
            function (e) {
                var t = this,
                    n = t.constructor;
                return C(g(t, new n(e), 0, 1), n.precision);
            }),
        (p.equals = p.eq =
            function (e) {
                return !this.cmp(e);
            }),
        (p.exponent = function () {
            return A(this);
        }),
        (p.greaterThan = p.gt =
            function (e) {
                return this.cmp(e) > 0;
            }),
        (p.greaterThanOrEqualTo = p.gte =
            function (e) {
                return this.cmp(e) >= 0;
            }),
        (p.isInteger = p.isint =
            function () {
                return this.e > this.d.length - 2;
            }),
        (p.isNegative = p.isneg =
            function () {
                return this.s < 0;
            }),
        (p.isPositive = p.ispos =
            function () {
                return this.s > 0;
            }),
        (p.isZero = function () {
            return 0 === this.s;
        }),
        (p.lessThan = p.lt =
            function (e) {
                return 0 > this.cmp(e);
            }),
        (p.lessThanOrEqualTo = p.lte =
            function (e) {
                return 1 > this.cmp(e);
            }),
        (p.logarithm = p.log =
            function (e) {
                var t,
                    r = this,
                    i = r.constructor,
                    s = i.precision,
                    l = s + 5;
                if (void 0 === e) e = new i(10);
                else if ((e = new i(e)).s < 1 || e.eq(n)) throw Error(o + 'NaN');
                if (r.s < 1) throw Error(o + (r.s ? 'NaN' : '-Infinity'));
                return r.eq(n) ? new i(0) : ((a = !1), (t = g(O(r, l), O(e, l), l)), (a = !0), C(t, s));
            }),
        (p.minus = p.sub =
            function (e) {
                var t = this;
                return (e = new t.constructor(e)), t.s == e.s ? y(t, e) : m(t, ((e.s = -e.s), e));
            }),
        (p.modulo = p.mod =
            function (e) {
                var t,
                    n = this,
                    r = n.constructor,
                    i = r.precision;
                if (!(e = new r(e)).s) throw Error(o + 'NaN');
                return n.s ? ((a = !1), (t = g(n, e, 0, 1).times(e)), (a = !0), n.minus(t)) : C(new r(n), i);
            }),
        (p.naturalExponential = p.exp =
            function () {
                return S(this);
            }),
        (p.naturalLogarithm = p.ln =
            function () {
                return O(this);
            }),
        (p.negated = p.neg =
            function () {
                var e = new this.constructor(this);
                return (e.s = -e.s || 0), e;
            }),
        (p.plus = p.add =
            function (e) {
                var t = this;
                return (e = new t.constructor(e)), t.s == e.s ? m(t, e) : y(t, ((e.s = -e.s), e));
            }),
        (p.precision = p.sd =
            function (e) {
                var t,
                    n,
                    r,
                    i = this;
                if (void 0 !== e && !!e !== e && 1 !== e && 0 !== e) throw Error(s + e);
                if (((t = A(i) + 1), (n = (r = i.d.length - 1) * E + 1), (r = i.d[r]))) {
                    for (; r % 10 == 0; r /= 10) n--;
                    for (r = i.d[0]; r >= 10; r /= 10) n++;
                }
                return e && t > n ? t : n;
            }),
        (p.squareRoot = p.sqrt =
            function () {
                var e,
                    t,
                    n,
                    r,
                    i,
                    s,
                    l,
                    c = this,
                    d = c.constructor;
                if (c.s < 1) {
                    if (!c.s) return new d(0);
                    throw Error(o + 'NaN');
                }
                for (e = A(c), a = !1, 0 == (i = Math.sqrt(+c)) || i == 1 / 0 ? (((t = T(c.d)).length + e) % 2 == 0 && (t += '0'), (i = Math.sqrt(t)), (e = u((e + 1) / 2) - (e < 0 || e % 2)), (r = new d((t = i == 1 / 0 ? '1e' + e : (t = i.toExponential()).slice(0, t.indexOf('e') + 1) + e)))) : (r = new d(i.toString())), i = l = (n = d.precision) + 3; ; )
                    if (((r = (s = r).plus(g(c, s, l + 2)).times(0.5)), T(s.d).slice(0, l) === (t = T(r.d)).slice(0, l))) {
                        if (((t = t.slice(l - 3, l + 1)), i == l && '4999' == t)) {
                            if ((C(s, n + 1, 0), s.times(s).eq(c))) {
                                r = s;
                                break;
                            }
                        } else if ('9999' != t) break;
                        l += 4;
                    }
                return (a = !0), C(r, n);
            }),
        (p.times = p.mul =
            function (e) {
                var t,
                    n,
                    r,
                    i,
                    o,
                    s,
                    l,
                    u,
                    c,
                    d = this,
                    E = d.constructor,
                    f = d.d,
                    h = (e = new E(e)).d;
                if (!d.s || !e.s) return new E(0);
                for (e.s *= d.s, n = d.e + e.e, u = f.length, u < (c = h.length) && ((o = f), (f = h), (h = o), (s = u), (u = c), (c = s)), o = [], r = s = u + c; r--; ) o.push(0);
                for (r = c; --r >= 0; ) {
                    for (t = 0, i = u + r; i > r; ) (l = o[i] + h[r] * f[i - r - 1] + t), (o[i--] = l % _ | 0), (t = (l / _) | 0);
                    o[i] = (o[i] + t) % _ | 0;
                }
                for (; !o[--s]; ) o.pop();
                return t ? ++n : o.shift(), (e.d = o), (e.e = n), a ? C(e, E.precision) : e;
            }),
        (p.toDecimalPlaces = p.todp =
            function (e, t) {
                var n = this,
                    i = n.constructor;
                return ((n = new i(n)), void 0 === e) ? n : (I(e, 0, r), void 0 === t ? (t = i.rounding) : I(t, 0, 8), C(n, e + A(n) + 1, t));
            }),
        (p.toExponential = function (e, t) {
            var n,
                i = this,
                a = i.constructor;
            return void 0 === e ? (n = L(i, !0)) : (I(e, 0, r), void 0 === t ? (t = a.rounding) : I(t, 0, 8), (n = L((i = C(new a(i), e + 1, t)), !0, e + 1))), n;
        }),
        (p.toFixed = function (e, t) {
            var n,
                i,
                a = this,
                o = a.constructor;
            return void 0 === e ? L(a) : (I(e, 0, r), void 0 === t ? (t = o.rounding) : I(t, 0, 8), (n = L((i = C(new o(a), e + A(a) + 1, t)).abs(), !1, e + A(i) + 1)), a.isneg() && !a.isZero() ? '-' + n : n);
        }),
        (p.toInteger = p.toint =
            function () {
                var e = this,
                    t = e.constructor;
                return C(new t(e), A(e) + 1, t.rounding);
            }),
        (p.toNumber = function () {
            return +this;
        }),
        (p.toPower = p.pow =
            function (e) {
                var t,
                    r,
                    i,
                    s,
                    l,
                    c,
                    d = this,
                    _ = d.constructor,
                    h = 12,
                    p = +(e = new _(e));
                if (!e.s) return new _(n);
                if (!(d = new _(d)).s) {
                    if (e.s < 1) throw Error(o + 'Infinity');
                    return d;
                }
                if (d.eq(n)) return d;
                if (((i = _.precision), e.eq(n))) return C(d, i);
                if (((t = e.e), (c = t >= (r = e.d.length - 1)), (l = d.s), c)) {
                    if ((r = p < 0 ? -p : p) <= f) {
                        for (s = new _(n), t = Math.ceil(i / E + 4), a = !1; r % 2 && b((s = s.times(d)).d, t), 0 !== (r = u(r / 2)); ) {
                            b((d = d.times(d)).d, t);
                        }
                        return (a = !0), e.s < 0 ? new _(n).div(s) : C(s, i);
                    }
                } else if (l < 0) throw Error(o + 'NaN');
                return (l = l < 0 && 1 & e.d[Math.max(t, r)] ? -1 : 1), (d.s = 1), (a = !1), (s = e.times(O(d, i + h))), (a = !0), ((s = S(s)).s = l), s;
            }),
        (p.toPrecision = function (e, t) {
            var n,
                i,
                a = this,
                o = a.constructor;
            return void 0 === e ? ((n = A(a)), (i = L(a, n <= o.toExpNeg || n >= o.toExpPos))) : (I(e, 1, r), void 0 === t ? (t = o.rounding) : I(t, 0, 8), (n = A((a = C(new o(a), e, t)))), (i = L(a, e <= n || n <= o.toExpNeg, e))), i;
        }),
        (p.toSignificantDigits = p.tosd =
            function (e, t) {
                var n = this,
                    i = n.constructor;
                return void 0 === e ? ((e = i.precision), (t = i.rounding)) : (I(e, 1, r), void 0 === t ? (t = i.rounding) : I(t, 0, 8)), C(new i(n), e, t);
            }),
        (p.toString =
            p.valueOf =
            p.val =
            p.toJSON =
                function () {
                    var e = this,
                        t = A(e),
                        n = e.constructor;
                    return L(e, t <= n.toExpNeg || t >= n.toExpPos);
                });
    var g = (function () {
        function e(e, t) {
            var n,
                r = 0,
                i = e.length;
            for (e = e.slice(); i--; ) (n = e[i] * t + r), (e[i] = n % _ | 0), (r = (n / _) | 0);
            return r && e.unshift(r), e;
        }
        function t(e, t, n, r) {
            var i, a;
            if (n != r) a = n > r ? 1 : -1;
            else
                for (i = a = 0; i < n; i++)
                    if (e[i] != t[i]) {
                        a = e[i] > t[i] ? 1 : -1;
                        break;
                    }
            return a;
        }
        function n(e, t, n) {
            for (var r = 0; n--; ) (e[n] -= r), (r = e[n] < t[n] ? 1 : 0), (e[n] = r * _ + e[n] - t[n]);
            for (; !e[0] && e.length > 1; ) e.shift();
        }
        return function (r, i, a, s) {
            var l,
                u,
                c,
                d,
                f,
                h,
                p,
                m,
                I,
                T,
                g,
                S,
                v,
                N,
                O,
                R,
                y,
                L,
                b = r.constructor,
                D = r.s == i.s ? 1 : -1,
                M = r.d,
                P = i.d;
            if (!r.s) return new b(r);
            if (!i.s) throw Error(o + 'Division by zero');
            for (c = 0, u = r.e - i.e, y = P.length, O = M.length, m = (p = new b(D)).d = []; P[c] == (M[c] || 0); ) ++c;
            if ((P[c] > (M[c] || 0) && --u, (S = null == a ? (a = b.precision) : s ? a + (A(r) - A(i)) + 1 : a) < 0)) return new b(0);
            if (((S = (S / E + 2) | 0), (c = 0), 1 == y)) for (d = 0, P = P[0], S++; (c < O || d) && S--; c++) (v = d * _ + (M[c] || 0)), (m[c] = (v / P) | 0), (d = v % P | 0);
            else {
                for ((d = (_ / (P[0] + 1)) | 0) > 1 && ((P = e(P, d)), (M = e(M, d)), (y = P.length), (O = M.length)), N = y, T = (I = M.slice(0, y)).length; T < y; ) I[T++] = 0;
                (L = P.slice()).unshift(0), (R = P[0]), P[1] >= _ / 2 && ++R;
                do (d = 0), (l = t(P, I, y, T)) < 0 ? ((g = I[0]), y != T && (g = g * _ + (I[1] || 0)), (d = (g / R) | 0) > 1 ? (d >= _ && (d = _ - 1), (h = (f = e(P, d)).length), (T = I.length), 1 == (l = t(f, I, h, T)) && (d--, n(f, y < h ? L : P, h))) : (0 == d && (l = d = 1), (f = P.slice())), (h = f.length) < T && f.unshift(0), n(I, f, T), -1 == l && ((T = I.length), (l = t(P, I, y, T)) < 1 && (d++, n(I, y < T ? L : P, T))), (T = I.length)) : 0 === l && (d++, (I = [0])), (m[c++] = d), l && I[0] ? (I[T++] = M[N] || 0) : ((I = [M[N]]), (T = 1));
                while ((N++ < O || void 0 !== I[0]) && S--);
            }
            return !m[0] && m.shift(), (p.e = u), C(p, s ? a + A(p) + 1 : a);
        };
    })();
    function S(e, t) {
        var r,
            i,
            o,
            s,
            u,
            d = 0,
            _ = 0,
            E = e.constructor,
            f = E.precision;
        if (A(e) > 16) throw Error(l + A(e));
        if (!e.s) return new E(n);
        for (null == t ? ((a = !1), (u = f)) : (u = t), s = new E(0.03125); e.abs().gte(0.1); ) (e = e.times(s)), (_ += 5);
        for (u += ((Math.log(c(2, _)) / Math.LN10) * 2 + 5) | 0, r = i = o = new E(n), E.precision = u; ; ) {
            if (((i = C(i.times(e), u)), (r = r.times(++d)), T((s = o.plus(g(i, r, u))).d).slice(0, u) === T(o.d).slice(0, u))) {
                for (; _--; ) o = C(o.times(o), u);
                return (E.precision = f), null == t ? ((a = !0), C(o, f)) : o;
            }
            o = s;
        }
    }
    function A(e) {
        for (var t = e.e * E, n = e.d[0]; n >= 10; n /= 10) t++;
        return t;
    }
    function v(e, t, n) {
        if (t > e.LN10.sd()) throw ((a = !0), n && (e.precision = n), Error(o + 'LN10 precision limit exceeded'));
        return C(new e(e.LN10), t);
    }
    function N(e) {
        for (var t = ''; e--; ) t += '0';
        return t;
    }
    function O(e, t) {
        var r,
            i,
            s,
            l,
            u,
            c,
            d,
            _,
            E,
            f = 1,
            h = 10,
            p = e,
            m = p.d,
            I = p.constructor,
            S = I.precision;
        if (p.s < 1) throw Error(o + (p.s ? 'NaN' : '-Infinity'));
        if (p.eq(n)) return new I(0);
        if ((null == t ? ((a = !1), (_ = S)) : (_ = t), p.eq(10))) return null == t && (a = !0), v(I, _);
        if (((_ += h), (I.precision = _), (i = (r = T(m)).charAt(0)), !(1500000000000000 > Math.abs((l = A(p)))))) return (d = v(I, _ + 2, S).times(l + '')), (p = O(new I(i + '.' + r.slice(1)), _ - h).plus(d)), (I.precision = S), null == t ? ((a = !0), C(p, S)) : p;
        for (; (i < 7 && 1 != i) || (1 == i && r.charAt(1) > 3); ) (i = (r = T((p = p.times(e)).d)).charAt(0)), f++;
        (l = A(p)), i > 1 ? ((p = new I('0.' + r)), l++) : (p = new I(i + '.' + r.slice(1)));
        for (c = u = p = g(p.minus(n), p.plus(n), _), E = C(p.times(p), _), s = 3; ; ) {
            if (((u = C(u.times(E), _)), T((d = c.plus(g(u, new I(s), _))).d).slice(0, _) === T(c.d).slice(0, _))) return (c = c.times(2)), 0 !== l && (c = c.plus(v(I, _ + 2, S).times(l + ''))), (c = g(c, new I(f), _)), (I.precision = S), null == t ? ((a = !0), C(c, S)) : c;
            (c = d), (s += 2);
        }
    }
    function R(e, t) {
        var n, r, i;
        for ((n = t.indexOf('.')) > -1 && (t = t.replace('.', '')), (r = t.search(/e/i)) > 0 ? (n < 0 && (n = r), (n += +t.slice(r + 1)), (t = t.substring(0, r))) : n < 0 && (n = t.length), r = 0; 48 === t.charCodeAt(r); ) ++r;
        for (i = t.length; 48 === t.charCodeAt(i - 1); ) --i;
        if ((t = t.slice(r, i))) {
            if (((i -= r), (n = n - r - 1), (e.e = u(n / E)), (e.d = []), (r = (n + 1) % E), n < 0 && (r += E), r < i)) {
                for (r && e.d.push(+t.slice(0, r)), i -= E; r < i; ) e.d.push(+t.slice(r, (r += E)));
                r = E - (t = t.slice(r)).length;
            } else r -= i;
            for (; r--; ) t += '0';
            if ((e.d.push(+t), a && (e.e > h || e.e < -h))) throw Error(l + n);
        } else (e.s = 0), (e.e = 0), (e.d = [0]);
        return e;
    }
    function C(e, t, n) {
        var r,
            i,
            o,
            s,
            d,
            f,
            p,
            m,
            I = e.d;
        for (s = 1, o = I[0]; o >= 10; o /= 10) s++;
        if ((r = t - s) < 0) (r += E), (i = t), (p = I[(m = 0)]);
        else {
            if ((m = Math.ceil((r + 1) / E)) >= (o = I.length)) return e;
            for (s = 1, p = o = I[m]; o >= 10; o /= 10) s++;
            (r %= E), (i = r - E + s);
        }
        if ((void 0 !== n && ((d = (p / (o = c(10, s - i - 1))) % 10 | 0), (f = t < 0 || void 0 !== I[m + 1] || p % o), (f = n < 4 ? (d || f) && (0 == n || n == (e.s < 0 ? 3 : 2)) : d > 5 || (5 == d && (4 == n || f || (6 == n && (r > 0 ? (i > 0 ? p / c(10, s - i) : 0) : I[m - 1]) % 10 & 1) || n == (e.s < 0 ? 8 : 7))))), t < 1 || !I[0])) return f ? ((o = A(e)), (I.length = 1), (t = t - o - 1), (I[0] = c(10, (E - (t % E)) % E)), (e.e = u(-t / E) || 0)) : ((I.length = 1), (I[0] = e.e = e.s = 0)), e;
        if ((0 == r ? ((I.length = m), (o = 1), m--) : ((I.length = m + 1), (o = c(10, E - r)), (I[m] = i > 0 ? ((p / c(10, s - i)) % c(10, i) | 0) * o : 0)), f))
            for (;;) {
                if (0 == m) {
                    (I[0] += o) == _ && ((I[0] = 1), ++e.e);
                    break;
                }
                if (((I[m] += o), I[m] != _)) break;
                (I[m--] = 0), (o = 1);
            }
        for (r = I.length; 0 === I[--r]; ) I.pop();
        if (a && (e.e > h || e.e < -h)) throw Error(l + A(e));
        return e;
    }
    function y(e, t) {
        var n,
            r,
            i,
            o,
            s,
            l,
            u,
            c,
            d,
            f,
            h = e.constructor,
            p = h.precision;
        if (!e.s || !t.s) return t.s ? (t.s = -t.s) : (t = new h(e)), a ? C(t, p) : t;
        if (((u = e.d), (f = t.d), (r = t.e), (c = e.e), (u = u.slice()), (s = c - r))) {
            for ((d = s < 0) ? ((n = u), (s = -s), (l = f.length)) : ((n = f), (r = c), (l = u.length)), s > (i = Math.max(Math.ceil(p / E), l) + 2) && ((s = i), (n.length = 1)), n.reverse(), i = s; i--; ) n.push(0);
            n.reverse();
        } else {
            for (i = u.length, (d = i < (l = f.length)) && (l = i), i = 0; i < l; i++)
                if (u[i] != f[i]) {
                    d = u[i] < f[i];
                    break;
                }
            s = 0;
        }
        for (d && ((n = u), (u = f), (f = n), (t.s = -t.s)), l = u.length, i = f.length - l; i > 0; --i) u[l++] = 0;
        for (i = f.length; i > s; ) {
            if (u[--i] < f[i]) {
                for (o = i; o && 0 === u[--o]; ) u[o] = _ - 1;
                --u[o], (u[i] += _);
            }
            u[i] -= f[i];
        }
        for (; 0 === u[--l]; ) u.pop();
        for (; 0 === u[0]; u.shift()) --r;
        return u[0] ? ((t.d = u), (t.e = r), a ? C(t, p) : t) : new h(0);
    }
    function L(e, t, n) {
        var r,
            i = A(e),
            a = T(e.d),
            o = a.length;
        return t ? (n && (r = n - o) > 0 ? (a = a.charAt(0) + '.' + a.slice(1) + N(r)) : o > 1 && (a = a.charAt(0) + '.' + a.slice(1)), (a = a + (i < 0 ? 'e' : 'e+') + i)) : i < 0 ? ((a = '0.' + N(-i - 1) + a), n && (r = n - o) > 0 && (a += N(r))) : i >= o ? ((a += N(i + 1 - o)), n && (r = n - i - 1) > 0 && (a = a + '.' + N(r))) : ((r = i + 1) < o && (a = a.slice(0, r) + '.' + a.slice(r)), n && (r = n - o) > 0 && (i + 1 === o && (a += '.'), (a += N(r)))), e.s < 0 ? '-' + a : a;
    }
    function b(e, t) {
        if (e.length > t) return (e.length = t), !0;
    }
    function D(e) {
        var t, n, r;
        function i(e) {
            var t = this;
            if (!(t instanceof i)) return new i(e);
            if (((t.constructor = i), e instanceof i)) {
                (t.s = e.s), (t.e = e.e), (t.d = (e = e.d) ? e.slice() : e);
                return;
            }
            if ('number' == typeof e) {
                if (0 * e != 0) throw Error(s + e);
                if (e > 0) t.s = 1;
                else if (e < 0) (e = -e), (t.s = -1);
                else {
                    (t.s = 0), (t.e = 0), (t.d = [0]);
                    return;
                }
                if (e === ~~e && e < 10000000) {
                    (t.e = 0), (t.d = [e]);
                    return;
                }
                return R(t, e.toString());
            }
            if ('string' != typeof e) throw Error(s + e);
            if ((45 === e.charCodeAt(0) ? ((e = e.slice(1)), (t.s = -1)) : (t.s = 1), d.test(e))) R(t, e);
            else throw Error(s + e);
        }
        if (((i.prototype = p), (i.ROUND_UP = 0), (i.ROUND_DOWN = 1), (i.ROUND_CEIL = 2), (i.ROUND_FLOOR = 3), (i.ROUND_HALF_UP = 4), (i.ROUND_HALF_DOWN = 5), (i.ROUND_HALF_EVEN = 6), (i.ROUND_HALF_CEIL = 7), (i.ROUND_HALF_FLOOR = 8), (i.clone = D), (i.config = i.set = M), void 0 === e && (e = {}), e)) for (t = 0, r = ['precision', 'rounding', 'toExpNeg', 'toExpPos', 'LN10']; t < r.length; ) !e.hasOwnProperty((n = r[t++])) && (e[n] = this[n]);
        return i.config(e), i;
    }
    function M(e) {
        if (!e || 'object' != typeof e) throw Error(o + 'Object expected');
        var t,
            n,
            i,
            a = ['precision', 1, r, 'rounding', 0, 8, 'toExpNeg', -Infinity, 0, 'toExpPos', 0, 1 / 0];
        for (t = 0; t < a.length; t += 3)
            if (void 0 !== (i = e[(n = a[t])])) {
                if (u(i) === i && i >= a[t + 1] && i <= a[t + 2]) this[n] = i;
                else throw Error(s + n + ': ' + i);
            }
        if (void 0 !== (i = e[(n = 'LN10')])) {
            if (i == Math.LN10) this[n] = new this(i);
            else throw Error(s + n + ': ' + i);
        }
        return this;
    }
    ((i = D(i)).default = i.Decimal = i),
        (n = new i(1)),
        'function' == typeof define && define.amd
            ? define(function () {
                  return i;
              })
            : e.exports
              ? (e.exports = i)
              : (!t && (t = 'undefined' != typeof self && self && self.self == self ? self : Function('return this')()), (t.Decimal = i));
})(this);
