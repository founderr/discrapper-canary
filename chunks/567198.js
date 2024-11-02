!(function (t) {
    var n,
        r = {
            precision: 20,
            rounding: 4,
            toExpNeg: -7,
            toExpPos: 21,
            LN10: '2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286'
        },
        i = !0,
        a = '[DecimalError] ',
        s = a + 'Invalid argument: ',
        o = a + 'Exponent out of range: ',
        l = Math.floor,
        u = Math.pow,
        c = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        d = l(1286742750677284.5),
        f = {};
    function _(e, t) {
        var n,
            r,
            a,
            s,
            o,
            l,
            u,
            c,
            d = e.constructor,
            f = d.precision;
        if (!e.s || !t.s) return !t.s && (t = new d(e)), i ? b(t, f) : t;
        if (((u = e.d), (c = t.d), (o = e.e), (a = t.e), (u = u.slice()), (s = o - a))) {
            for (s < 0 ? ((r = u), (s = -s), (l = c.length)) : ((r = c), (a = o), (l = u.length)), s > (l = (o = Math.ceil(f / 7)) > l ? o + 1 : l + 1) && ((s = l), (r.length = 1)), r.reverse(); s--; ) r.push(0);
            r.reverse();
        }
        for (l = u.length, l - (s = c.length) < 0 && ((s = l), (r = c), (c = u), (u = r)), n = 0; s; ) (n = ((u[--s] = u[s] + c[s] + n) / 10000000) | 0), (u[s] %= 10000000);
        for (n && (u.unshift(n), ++a), l = u.length; 0 == u[--l]; ) u.pop();
        return (t.d = u), (t.e = a), i ? b(t, f) : t;
    }
    function h(e, t, n) {
        if (e !== ~~e || e < t || e > n) throw Error(s + e);
    }
    function p(e) {
        var t,
            n,
            r,
            i = e.length - 1,
            a = '',
            s = e[0];
        if (i > 0) {
            for (a += s, t = 1; t < i; t++) (n = 7 - (r = e[t] + '').length) && (a += I(n)), (a += r);
            (n = 7 - (r = (s = e[t]) + '').length) && (a += I(n));
        } else if (0 === s) return '0';
        for (; s % 10 == 0; ) s /= 10;
        return a + s;
    }
    (f.absoluteValue = f.abs =
        function () {
            var e = new this.constructor(this);
            return e.s && (e.s = 1), e;
        }),
        (f.comparedTo = f.cmp =
            function (e) {
                var t, n, r, i;
                if (((e = new this.constructor(e)), this.s !== e.s)) return this.s || -e.s;
                if (this.e !== e.e) return (this.e > e.e) ^ (this.s < 0) ? 1 : -1;
                for (t = 0, r = this.d.length, n = r < (i = e.d.length) ? r : i; t < n; ++t) if (this.d[t] !== e.d[t]) return (this.d[t] > e.d[t]) ^ (this.s < 0) ? 1 : -1;
                return r === i ? 0 : (r > i) ^ (this.s < 0) ? 1 : -1;
            }),
        (f.decimalPlaces = f.dp =
            function () {
                var e = this.d.length - 1,
                    t = (e - this.e) * 7;
                if ((e = this.d[e])) for (; e % 10 == 0; e /= 10) t--;
                return t < 0 ? 0 : t;
            }),
        (f.dividedBy = f.div =
            function (e) {
                return m(this, new this.constructor(e));
            }),
        (f.dividedToIntegerBy = f.idiv =
            function (e) {
                var t = this.constructor;
                return b(m(this, new t(e), 0, 1), t.precision);
            }),
        (f.equals = f.eq =
            function (e) {
                return !this.cmp(e);
            }),
        (f.exponent = function () {
            return E(this);
        }),
        (f.greaterThan = f.gt =
            function (e) {
                return this.cmp(e) > 0;
            }),
        (f.greaterThanOrEqualTo = f.gte =
            function (e) {
                return this.cmp(e) >= 0;
            }),
        (f.isInteger = f.isint =
            function () {
                return this.e > this.d.length - 2;
            }),
        (f.isNegative = f.isneg =
            function () {
                return this.s < 0;
            }),
        (f.isPositive = f.ispos =
            function () {
                return this.s > 0;
            }),
        (f.isZero = function () {
            return 0 === this.s;
        }),
        (f.lessThan = f.lt =
            function (e) {
                return 0 > this.cmp(e);
            }),
        (f.lessThanOrEqualTo = f.lte =
            function (e) {
                return 1 > this.cmp(e);
            }),
        (f.logarithm = f.log =
            function (e) {
                var t,
                    r = this.constructor,
                    s = r.precision,
                    o = s + 5;
                if (void 0 === e) e = new r(10);
                else if ((e = new r(e)).s < 1 || e.eq(n)) throw Error(a + 'NaN');
                if (this.s < 1) throw Error(a + (this.s ? 'NaN' : '-Infinity'));
                return this.eq(n) ? new r(0) : ((i = !1), (t = m(S(this, o), S(e, o), o)), (i = !0), b(t, s));
            }),
        (f.minus = f.sub =
            function (e) {
                return (e = new this.constructor(e)), this.s == e.s ? y(this, e) : _(this, ((e.s = -e.s), e));
            }),
        (f.modulo = f.mod =
            function (e) {
                var t,
                    n = this.constructor,
                    r = n.precision;
                if (!(e = new n(e)).s) throw Error(a + 'NaN');
                return this.s ? ((i = !1), (t = m(this, e, 0, 1).times(e)), (i = !0), this.minus(t)) : b(new n(this), r);
            }),
        (f.naturalExponential = f.exp =
            function () {
                return g(this);
            }),
        (f.naturalLogarithm = f.ln =
            function () {
                return S(this);
            }),
        (f.negated = f.neg =
            function () {
                var e = new this.constructor(this);
                return (e.s = -e.s || 0), e;
            }),
        (f.plus = f.add =
            function (e) {
                return (e = new this.constructor(e)), this.s == e.s ? _(this, e) : y(this, ((e.s = -e.s), e));
            }),
        (f.precision = f.sd =
            function (e) {
                var t, n, r;
                if (void 0 !== e && !!e !== e && 1 !== e && 0 !== e) throw Error(s + e);
                if (((t = E(this) + 1), (n = 7 * (r = this.d.length - 1) + 1), (r = this.d[r]))) {
                    for (; r % 10 == 0; r /= 10) n--;
                    for (r = this.d[0]; r >= 10; r /= 10) n++;
                }
                return e && t > n ? t : n;
            }),
        (f.squareRoot = f.sqrt =
            function () {
                var e,
                    t,
                    n,
                    r,
                    s,
                    o,
                    u,
                    c = this.constructor;
                if (this.s < 1) {
                    if (!this.s) return new c(0);
                    throw Error(a + 'NaN');
                }
                for (e = E(this), i = !1, 0 == (s = Math.sqrt(+this)) || s == 1 / 0 ? (((t = p(this.d)).length + e) % 2 == 0 && (t += '0'), (s = Math.sqrt(t)), (e = l((e + 1) / 2) - (e < 0 || e % 2)), (r = new c((t = s == 1 / 0 ? '1e' + e : (t = s.toExponential()).slice(0, t.indexOf('e') + 1) + e)))) : (r = new c(s.toString())), s = u = (n = c.precision) + 3; ; )
                    if (((r = (o = r).plus(m(this, o, u + 2)).times(0.5)), p(o.d).slice(0, u) === (t = p(r.d)).slice(0, u))) {
                        if (((t = t.slice(u - 3, u + 1)), s == u && '4999' == t)) {
                            if ((b(o, n + 1, 0), o.times(o).eq(this))) {
                                r = o;
                                break;
                            }
                        } else if ('9999' != t) break;
                        u += 4;
                    }
                return (i = !0), b(r, n);
            }),
        (f.times = f.mul =
            function (e) {
                var t,
                    n,
                    r,
                    a,
                    s,
                    o,
                    l,
                    u,
                    c,
                    d = this.constructor,
                    f = this.d,
                    _ = (e = new d(e)).d;
                if (!this.s || !e.s) return new d(0);
                for (e.s *= this.s, n = this.e + e.e, u = f.length, u < (c = _.length) && ((s = f), (f = _), (_ = s), (o = u), (u = c), (c = o)), s = [], r = o = u + c; r--; ) s.push(0);
                for (r = c; --r >= 0; ) {
                    for (t = 0, a = u + r; a > r; ) (l = s[a] + _[r] * f[a - r - 1] + t), (s[a--] = l % 10000000 | 0), (t = (l / 10000000) | 0);
                    s[a] = (s[a] + t) % 10000000 | 0;
                }
                for (; !s[--o]; ) s.pop();
                return t ? ++n : s.shift(), (e.d = s), (e.e = n), i ? b(e, d.precision) : e;
            }),
        (f.toDecimalPlaces = f.todp =
            function (e, t) {
                var n = this,
                    r = n.constructor;
                return ((n = new r(n)), void 0 === e) ? n : (h(e, 0, 1000000000), void 0 === t ? (t = r.rounding) : h(t, 0, 8), b(n, e + E(n) + 1, t));
            }),
        (f.toExponential = function (e, t) {
            var n,
                r = this,
                i = r.constructor;
            return void 0 === e ? (n = A(r, !0)) : (h(e, 0, 1000000000), void 0 === t ? (t = i.rounding) : h(t, 0, 8), (n = A((r = b(new i(r), e + 1, t)), !0, e + 1))), n;
        }),
        (f.toFixed = function (e, t) {
            var n,
                r,
                i = this.constructor;
            return void 0 === e ? A(this) : (h(e, 0, 1000000000), void 0 === t ? (t = i.rounding) : h(t, 0, 8), (n = A((r = b(new i(this), e + E(this) + 1, t)).abs(), !1, e + E(r) + 1)), this.isneg() && !this.isZero() ? '-' + n : n);
        }),
        (f.toInteger = f.toint =
            function () {
                var e = this.constructor;
                return b(new e(this), E(this) + 1, e.rounding);
            }),
        (f.toNumber = function () {
            return +this;
        }),
        (f.toPower = f.pow =
            function (e) {
                var t,
                    r,
                    s,
                    o,
                    u,
                    c,
                    d = this,
                    f = d.constructor,
                    _ = +(e = new f(e));
                if (!e.s) return new f(n);
                if (!(d = new f(d)).s) {
                    if (e.s < 1) throw Error(a + 'Infinity');
                    return d;
                }
                if (d.eq(n)) return d;
                if (((s = f.precision), e.eq(n))) return b(d, s);
                if (((t = e.e), (c = t >= (r = e.d.length - 1)), (u = d.s), c)) {
                    if ((r = _ < 0 ? -_ : _) <= 9007199254740991) {
                        for (o = new f(n), t = Math.ceil(s / 7 + 4), i = !1; r % 2 && N((o = o.times(d)).d, t), 0 !== (r = l(r / 2)); ) {
                            N((d = d.times(d)).d, t);
                        }
                        return (i = !0), e.s < 0 ? new f(n).div(o) : b(o, s);
                    }
                } else if (u < 0) throw Error(a + 'NaN');
                return (u = u < 0 && 1 & e.d[Math.max(t, r)] ? -1 : 1), (d.s = 1), (i = !1), (o = e.times(S(d, s + 12))), (i = !0), ((o = g(o)).s = u), o;
            }),
        (f.toPrecision = function (e, t) {
            var n,
                r,
                i = this,
                a = i.constructor;
            return void 0 === e ? ((n = E(i)), (r = A(i, n <= a.toExpNeg || n >= a.toExpPos))) : (h(e, 1, 1000000000), void 0 === t ? (t = a.rounding) : h(t, 0, 8), (n = E((i = b(new a(i), e, t)))), (r = A(i, e <= n || n <= a.toExpNeg, e))), r;
        }),
        (f.toSignificantDigits = f.tosd =
            function (e, t) {
                var n = this.constructor;
                return void 0 === e ? ((e = n.precision), (t = n.rounding)) : (h(e, 1, 1000000000), void 0 === t ? (t = n.rounding) : h(t, 0, 8)), b(new n(this), e, t);
            }),
        (f.toString =
            f.valueOf =
            f.val =
            f.toJSON =
                function () {
                    var e = E(this),
                        t = this.constructor;
                    return A(this, e <= t.toExpNeg || e >= t.toExpPos);
                });
    var m = (function () {
        function e(e, t) {
            var n,
                r = 0,
                i = e.length;
            for (e = e.slice(); i--; ) (n = e[i] * t + r), (e[i] = n % 10000000 | 0), (r = (n / 10000000) | 0);
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
            for (var r = 0; n--; ) (e[n] -= r), (r = e[n] < t[n] ? 1 : 0), (e[n] = 10000000 * r + e[n] - t[n]);
            for (; !e[0] && e.length > 1; ) e.shift();
        }
        return function (r, i, s, o) {
            var l,
                u,
                c,
                d,
                f,
                _,
                h,
                p,
                m,
                g,
                v,
                I,
                S,
                T,
                y,
                A,
                N,
                C,
                R = r.constructor,
                O = r.s == i.s ? 1 : -1,
                D = r.d,
                L = i.d;
            if (!r.s) return new R(r);
            if (!i.s) throw Error(a + 'Division by zero');
            for (c = 0, u = r.e - i.e, N = L.length, y = D.length, p = (h = new R(O)).d = []; L[c] == (D[c] || 0); ) ++c;
            if ((L[c] > (D[c] || 0) && --u, (I = null == s ? (s = R.precision) : o ? s + (E(r) - E(i)) + 1 : s) < 0)) return new R(0);
            if (((I = (I / 7 + 2) | 0), (c = 0), 1 == N)) for (d = 0, L = L[0], I++; (c < y || d) && I--; c++) (S = 10000000 * d + (D[c] || 0)), (p[c] = (S / L) | 0), (d = S % L | 0);
            else {
                for ((d = (10000000 / (L[0] + 1)) | 0) > 1 && ((L = e(L, d)), (D = e(D, d)), (N = L.length), (y = D.length)), T = N, g = (m = D.slice(0, N)).length; g < N; ) m[g++] = 0;
                (C = L.slice()).unshift(0), (A = L[0]), L[1] >= 10000000 / 2 && ++A;
                do (d = 0), (l = t(L, m, N, g)) < 0 ? ((v = m[0]), N != g && (v = 10000000 * v + (m[1] || 0)), (d = (v / A) | 0) > 1 ? (d >= 10000000 && (d = 10000000 - 1), (_ = (f = e(L, d)).length), (g = m.length), 1 == (l = t(f, m, _, g)) && (d--, n(f, N < _ ? C : L, _))) : (0 == d && (l = d = 1), (f = L.slice())), (_ = f.length) < g && f.unshift(0), n(m, f, g), -1 == l && ((g = m.length), (l = t(L, m, N, g)) < 1 && (d++, n(m, N < g ? C : L, g))), (g = m.length)) : 0 === l && (d++, (m = [0])), (p[c++] = d), l && m[0] ? (m[g++] = D[T] || 0) : ((m = [D[T]]), (g = 1));
                while ((T++ < y || void 0 !== m[0]) && I--);
            }
            return !p[0] && p.shift(), (h.e = u), b(h, o ? s + E(h) + 1 : s);
        };
    })();
    function g(e, t) {
        var r,
            a,
            s,
            l,
            c,
            d = 0,
            f = 0,
            _ = e.constructor,
            h = _.precision;
        if (E(e) > 16) throw Error(o + E(e));
        if (!e.s) return new _(n);
        for (null == t ? ((i = !1), (c = h)) : (c = t), l = new _(0.03125); e.abs().gte(0.1); ) (e = e.times(l)), (f += 5);
        for (c += ((Math.log(u(2, f)) / Math.LN10) * 2 + 5) | 0, r = a = s = new _(n), _.precision = c; ; ) {
            if (((a = b(a.times(e), c)), (r = r.times(++d)), p((l = s.plus(m(a, r, c))).d).slice(0, c) === p(s.d).slice(0, c))) {
                for (; f--; ) s = b(s.times(s), c);
                return (_.precision = h), null == t ? ((i = !0), b(s, h)) : s;
            }
            s = l;
        }
    }
    function E(e) {
        for (var t = 7 * e.e, n = e.d[0]; n >= 10; n /= 10) t++;
        return t;
    }
    function v(e, t, n) {
        if (t > e.LN10.sd()) throw ((i = !0), n && (e.precision = n), Error(a + 'LN10 precision limit exceeded'));
        return b(new e(e.LN10), t);
    }
    function I(e) {
        for (var t = ''; e--; ) t += '0';
        return t;
    }
    function S(e, t) {
        var r,
            s,
            o,
            l,
            u,
            c,
            d,
            f,
            _,
            h = 1,
            g = e,
            I = g.d,
            T = g.constructor,
            y = T.precision;
        if (g.s < 1) throw Error(a + (g.s ? 'NaN' : '-Infinity'));
        if (g.eq(n)) return new T(0);
        if ((null == t ? ((i = !1), (f = y)) : (f = t), g.eq(10))) return null == t && (i = !0), v(T, f);
        if (((f += 10), (T.precision = f), (s = (r = p(I)).charAt(0)), !(1500000000000000 > Math.abs((l = E(g)))))) return (d = v(T, f + 2, y).times(l + '')), (g = S(new T(s + '.' + r.slice(1)), f - 10).plus(d)), (T.precision = y), null == t ? ((i = !0), b(g, y)) : g;
        for (; (s < 7 && 1 != s) || (1 == s && r.charAt(1) > 3); ) (s = (r = p((g = g.times(e)).d)).charAt(0)), h++;
        (l = E(g)), s > 1 ? ((g = new T('0.' + r)), l++) : (g = new T(s + '.' + r.slice(1)));
        for (c = u = g = m(g.minus(n), g.plus(n), f), _ = b(g.times(g), f), o = 3; ; ) {
            if (((u = b(u.times(_), f)), p((d = c.plus(m(u, new T(o), f))).d).slice(0, f) === p(c.d).slice(0, f))) return (c = c.times(2)), 0 !== l && (c = c.plus(v(T, f + 2, y).times(l + ''))), (c = m(c, new T(h), f)), (T.precision = y), null == t ? ((i = !0), b(c, y)) : c;
            (c = d), (o += 2);
        }
    }
    function T(e, t) {
        var n, r, a;
        for ((n = t.indexOf('.')) > -1 && (t = t.replace('.', '')), (r = t.search(/e/i)) > 0 ? (n < 0 && (n = r), (n += +t.slice(r + 1)), (t = t.substring(0, r))) : n < 0 && (n = t.length), r = 0; 48 === t.charCodeAt(r); ) ++r;
        for (a = t.length; 48 === t.charCodeAt(a - 1); ) --a;
        if ((t = t.slice(r, a))) {
            if (((a -= r), (n = n - r - 1), (e.e = l(n / 7)), (e.d = []), (r = (n + 1) % 7), n < 0 && (r += 7), r < a)) {
                for (r && e.d.push(+t.slice(0, r)), a -= 7; r < a; ) e.d.push(+t.slice(r, (r += 7)));
                r = 7 - (t = t.slice(r)).length;
            } else r -= a;
            for (; r--; ) t += '0';
            if ((e.d.push(+t), i && (e.e > d || e.e < -d))) throw Error(o + n);
        } else (e.s = 0), (e.e = 0), (e.d = [0]);
        return e;
    }
    function b(e, t, n) {
        var r,
            a,
            s,
            c,
            f,
            _,
            h,
            p,
            m = e.d;
        for (c = 1, s = m[0]; s >= 10; s /= 10) c++;
        if ((r = t - c) < 0) (r += 7), (a = t), (h = m[(p = 0)]);
        else {
            if ((p = Math.ceil((r + 1) / 7)) >= (s = m.length)) return e;
            for (c = 1, h = s = m[p]; s >= 10; s /= 10) c++;
            (r %= 7), (a = r - 7 + c);
        }
        if ((void 0 !== n && ((f = (h / (s = u(10, c - a - 1))) % 10 | 0), (_ = t < 0 || void 0 !== m[p + 1] || h % s), (_ = n < 4 ? (f || _) && (0 == n || n == (e.s < 0 ? 3 : 2)) : f > 5 || (5 == f && (4 == n || _ || (6 == n && (r > 0 ? (a > 0 ? h / u(10, c - a) : 0) : m[p - 1]) % 10 & 1) || n == (e.s < 0 ? 8 : 7))))), t < 1 || !m[0])) return _ ? ((s = E(e)), (m.length = 1), (t = t - s - 1), (m[0] = u(10, (7 - (t % 7)) % 7)), (e.e = l(-t / 7) || 0)) : ((m.length = 1), (m[0] = e.e = e.s = 0)), e;
        if ((0 == r ? ((m.length = p), (s = 1), p--) : ((m.length = p + 1), (s = u(10, 7 - r)), (m[p] = a > 0 ? ((h / u(10, c - a)) % u(10, a) | 0) * s : 0)), _))
            for (;;) {
                if (0 == p) {
                    10000000 == (m[0] += s) && ((m[0] = 1), ++e.e);
                    break;
                }
                if (((m[p] += s), 10000000 != m[p])) break;
                (m[p--] = 0), (s = 1);
            }
        for (r = m.length; 0 === m[--r]; ) m.pop();
        if (i && (e.e > d || e.e < -d)) throw Error(o + E(e));
        return e;
    }
    function y(e, t) {
        var n,
            r,
            a,
            s,
            o,
            l,
            u,
            c,
            d,
            f,
            _ = e.constructor,
            h = _.precision;
        if (!e.s || !t.s) return t.s ? (t.s = -t.s) : (t = new _(e)), i ? b(t, h) : t;
        if (((u = e.d), (f = t.d), (r = t.e), (c = e.e), (u = u.slice()), (o = c - r))) {
            for ((d = o < 0) ? ((n = u), (o = -o), (l = f.length)) : ((n = f), (r = c), (l = u.length)), o > (a = Math.max(Math.ceil(h / 7), l) + 2) && ((o = a), (n.length = 1)), n.reverse(), a = o; a--; ) n.push(0);
            n.reverse();
        } else {
            for (a = u.length, (d = a < (l = f.length)) && (l = a), a = 0; a < l; a++)
                if (u[a] != f[a]) {
                    d = u[a] < f[a];
                    break;
                }
            o = 0;
        }
        for (d && ((n = u), (u = f), (f = n), (t.s = -t.s)), l = u.length, a = f.length - l; a > 0; --a) u[l++] = 0;
        for (a = f.length; a > o; ) {
            if (u[--a] < f[a]) {
                for (s = a; s && 0 === u[--s]; ) u[s] = 10000000 - 1;
                --u[s], (u[a] += 10000000);
            }
            u[a] -= f[a];
        }
        for (; 0 === u[--l]; ) u.pop();
        for (; 0 === u[0]; u.shift()) --r;
        return u[0] ? ((t.d = u), (t.e = r), i ? b(t, h) : t) : new _(0);
    }
    function A(e, t, n) {
        var r,
            i = E(e),
            a = p(e.d),
            s = a.length;
        return t ? (n && (r = n - s) > 0 ? (a = a.charAt(0) + '.' + a.slice(1) + I(r)) : s > 1 && (a = a.charAt(0) + '.' + a.slice(1)), (a = a + (i < 0 ? 'e' : 'e+') + i)) : i < 0 ? ((a = '0.' + I(-i - 1) + a), n && (r = n - s) > 0 && (a += I(r))) : i >= s ? ((a += I(i + 1 - s)), n && (r = n - i - 1) > 0 && (a = a + '.' + I(r))) : ((r = i + 1) < s && (a = a.slice(0, r) + '.' + a.slice(r)), n && (r = n - s) > 0 && (i + 1 === s && (a += '.'), (a += I(r)))), e.s < 0 ? '-' + a : a;
    }
    function N(e, t) {
        if (e.length > t) return (e.length = t), !0;
    }
    function C(e) {
        if (!e || 'object' != typeof e) throw Error(a + 'Object expected');
        var t,
            n,
            r,
            i = ['precision', 1, 1000000000, 'rounding', 0, 8, 'toExpNeg', -Infinity, 0, 'toExpPos', 0, 1 / 0];
        for (t = 0; t < i.length; t += 3)
            if (void 0 !== (r = e[(n = i[t])])) {
                if (l(r) === r && r >= i[t + 1] && r <= i[t + 2]) this[n] = r;
                else throw Error(s + n + ': ' + r);
            }
        if (void 0 !== (r = e[(n = 'LN10')])) {
            if (r == Math.LN10) this[n] = new this(r);
            else throw Error(s + n + ': ' + r);
        }
        return this;
    }
    ((r = (function e(t) {
        var n, r, i;
        function a(e) {
            if (!(this instanceof a)) return new a(e);
            if (((this.constructor = a), e instanceof a)) {
                (this.s = e.s), (this.e = e.e), (this.d = (e = e.d) ? e.slice() : e);
                return;
            }
            if ('number' == typeof e) {
                if (0 * e != 0) throw Error(s + e);
                if (e > 0) this.s = 1;
                else if (e < 0) (e = -e), (this.s = -1);
                else {
                    (this.s = 0), (this.e = 0), (this.d = [0]);
                    return;
                }
                if (e === ~~e && e < 10000000) {
                    (this.e = 0), (this.d = [e]);
                    return;
                }
                return T(this, e.toString());
            }
            if ('string' != typeof e) throw Error(s + e);
            if ((45 === e.charCodeAt(0) ? ((e = e.slice(1)), (this.s = -1)) : (this.s = 1), c.test(e))) T(this, e);
            else throw Error(s + e);
        }
        if (((a.prototype = f), (a.ROUND_UP = 0), (a.ROUND_DOWN = 1), (a.ROUND_CEIL = 2), (a.ROUND_FLOOR = 3), (a.ROUND_HALF_UP = 4), (a.ROUND_HALF_DOWN = 5), (a.ROUND_HALF_EVEN = 6), (a.ROUND_HALF_CEIL = 7), (a.ROUND_HALF_FLOOR = 8), (a.clone = e), (a.config = a.set = C), void 0 === t && (t = {}), t)) for (n = 0, i = ['precision', 'rounding', 'toExpNeg', 'toExpPos', 'LN10']; n < i.length; ) !t.hasOwnProperty((r = i[n++])) && (t[r] = this[r]);
        return a.config(t), a;
    })(r)).default = r.Decimal =
        r),
        (n = new r(1)),
        'function' == typeof define && define.amd
            ? define(function () {
                  return r;
              })
            : e.exports
              ? (e.exports = r)
              : (!t && (t = 'undefined' != typeof self && self && self.self == self ? self : Function('return this')()), (t.Decimal = r));
})(this);
