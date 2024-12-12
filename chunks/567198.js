!(function (n) {
    var r,
        i = 1000000000,
        a = {
            precision: 20,
            rounding: 4,
            toExpNeg: -7,
            toExpPos: 21,
            LN10: '2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286'
        },
        s = !0,
        o = '[DecimalError] ',
        l = o + 'Invalid argument: ',
        u = o + 'Exponent out of range: ',
        c = Math.floor,
        d = Math.pow,
        f = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        _ = 10000000,
        h = 7,
        p = 9007199254740991,
        m = c(1286742750677284.5),
        g = {};
    function E(e, n) {
        var r,
            i,
            a,
            o,
            l,
            u,
            c,
            d,
            f = e.constructor,
            p = f.precision;
        if (!e.s || !n.s) return !n.s && (n = new f(e)), s ? R(n, p) : n;
        if (((c = e.d), (d = n.d), (l = e.e), (a = n.e), (c = c.slice()), (o = l - a))) {
            for (o < 0 ? ((i = c), (o = -o), (u = d.length)) : ((i = d), (a = l), (u = c.length)), o > (u = (l = Math.ceil(p / h)) > u ? l + 1 : u + 1) && ((o = u), (i.length = 1)), i.reverse(); o--; ) i.push(0);
            i.reverse();
        }
        for (u = c.length, u - (o = d.length) < 0 && ((o = u), (i = d), (d = c), (c = i)), r = 0; o; ) (r = ((c[--o] = c[o] + d[o] + r) / _) | 0), (c[o] %= _);
        for (r && (c.unshift(r), ++a), u = c.length; 0 == c[--u]; ) c.pop();
        return (n.d = c), (n.e = a), s ? R(n, p) : n;
    }
    function v(e, n, r) {
        if (e !== ~~e || e < n || e > r) throw Error(l + e);
    }
    function I(e) {
        var n,
            r,
            i,
            a = e.length - 1,
            s = '',
            o = e[0];
        if (a > 0) {
            for (s += o, n = 1; n < a; n++) (r = h - (i = e[n] + '').length) && (s += A(r)), (s += i);
            (r = h - (i = (o = e[n]) + '').length) && (s += A(r));
        } else if (0 === o) return '0';
        for (; o % 10 == 0; ) o /= 10;
        return s + o;
    }
    (g.absoluteValue = g.abs =
        function () {
            var e = new this.constructor(this);
            return e.s && (e.s = 1), e;
        }),
        (g.comparedTo = g.cmp =
            function (e) {
                var n,
                    r,
                    i,
                    a,
                    s = this;
                if (((e = new s.constructor(e)), s.s !== e.s)) return s.s || -e.s;
                if (s.e !== e.e) return (s.e > e.e) ^ (s.s < 0) ? 1 : -1;
                for (n = 0, i = s.d.length, r = i < (a = e.d.length) ? i : a; n < r; ++n) if (s.d[n] !== e.d[n]) return (s.d[n] > e.d[n]) ^ (s.s < 0) ? 1 : -1;
                return i === a ? 0 : (i > a) ^ (s.s < 0) ? 1 : -1;
            }),
        (g.decimalPlaces = g.dp =
            function () {
                var e = this,
                    n = e.d.length - 1,
                    r = (n - e.e) * h;
                if ((n = e.d[n])) for (; n % 10 == 0; n /= 10) r--;
                return r < 0 ? 0 : r;
            }),
        (g.dividedBy = g.div =
            function (e) {
                return T(this, new this.constructor(e));
            }),
        (g.dividedToIntegerBy = g.idiv =
            function (e) {
                var n = this,
                    r = n.constructor;
                return R(T(n, new r(e), 0, 1), r.precision);
            }),
        (g.equals = g.eq =
            function (e) {
                return !this.cmp(e);
            }),
        (g.exponent = function () {
            return y(this);
        }),
        (g.greaterThan = g.gt =
            function (e) {
                return this.cmp(e) > 0;
            }),
        (g.greaterThanOrEqualTo = g.gte =
            function (e) {
                return this.cmp(e) >= 0;
            }),
        (g.isInteger = g.isint =
            function () {
                return this.e > this.d.length - 2;
            }),
        (g.isNegative = g.isneg =
            function () {
                return this.s < 0;
            }),
        (g.isPositive = g.ispos =
            function () {
                return this.s > 0;
            }),
        (g.isZero = function () {
            return 0 === this.s;
        }),
        (g.lessThan = g.lt =
            function (e) {
                return 0 > this.cmp(e);
            }),
        (g.lessThanOrEqualTo = g.lte =
            function (e) {
                return 1 > this.cmp(e);
            }),
        (g.logarithm = g.log =
            function (e) {
                var n,
                    i = this,
                    a = i.constructor,
                    l = a.precision,
                    u = l + 5;
                if (void 0 === e) e = new a(10);
                else if ((e = new a(e)).s < 1 || e.eq(r)) throw Error(o + 'NaN');
                if (i.s < 1) throw Error(o + (i.s ? 'NaN' : '-Infinity'));
                return i.eq(r) ? new a(0) : ((s = !1), (n = T(N(i, u), N(e, u), u)), (s = !0), R(n, l));
            }),
        (g.minus = g.sub =
            function (e) {
                var n = this;
                return (e = new n.constructor(e)), n.s == e.s ? O(n, e) : E(n, ((e.s = -e.s), e));
            }),
        (g.modulo = g.mod =
            function (e) {
                var n,
                    r = this,
                    i = r.constructor,
                    a = i.precision;
                if (!(e = new i(e)).s) throw Error(o + 'NaN');
                return r.s ? ((s = !1), (n = T(r, e, 0, 1).times(e)), (s = !0), r.minus(n)) : R(new i(r), a);
            }),
        (g.naturalExponential = g.exp =
            function () {
                return b(this);
            }),
        (g.naturalLogarithm = g.ln =
            function () {
                return N(this);
            }),
        (g.negated = g.neg =
            function () {
                var e = new this.constructor(this);
                return (e.s = -e.s || 0), e;
            }),
        (g.plus = g.add =
            function (e) {
                var n = this;
                return (e = new n.constructor(e)), n.s == e.s ? E(n, e) : O(n, ((e.s = -e.s), e));
            }),
        (g.precision = g.sd =
            function (e) {
                var n,
                    r,
                    i,
                    a = this;
                if (void 0 !== e && !!e !== e && 1 !== e && 0 !== e) throw Error(l + e);
                if (((n = y(a) + 1), (r = (i = a.d.length - 1) * h + 1), (i = a.d[i]))) {
                    for (; i % 10 == 0; i /= 10) r--;
                    for (i = a.d[0]; i >= 10; i /= 10) r++;
                }
                return e && n > r ? n : r;
            }),
        (g.squareRoot = g.sqrt =
            function () {
                var e,
                    n,
                    r,
                    i,
                    a,
                    l,
                    u,
                    d = this,
                    f = d.constructor;
                if (d.s < 1) {
                    if (!d.s) return new f(0);
                    throw Error(o + 'NaN');
                }
                for (e = y(d), s = !1, 0 == (a = Math.sqrt(+d)) || a == 1 / 0 ? (((n = I(d.d)).length + e) % 2 == 0 && (n += '0'), (a = Math.sqrt(n)), (e = c((e + 1) / 2) - (e < 0 || e % 2)), (i = new f((n = a == 1 / 0 ? '1e' + e : (n = a.toExponential()).slice(0, n.indexOf('e') + 1) + e)))) : (i = new f(a.toString())), a = u = (r = f.precision) + 3; ; )
                    if (((i = (l = i).plus(T(d, l, u + 2)).times(0.5)), I(l.d).slice(0, u) === (n = I(i.d)).slice(0, u))) {
                        if (((n = n.slice(u - 3, u + 1)), a == u && '4999' == n)) {
                            if ((R(l, r + 1, 0), l.times(l).eq(d))) {
                                i = l;
                                break;
                            }
                        } else if ('9999' != n) break;
                        u += 4;
                    }
                return (s = !0), R(i, r);
            }),
        (g.times = g.mul =
            function (e) {
                var n,
                    r,
                    i,
                    a,
                    o,
                    l,
                    u,
                    c,
                    d,
                    f = this,
                    h = f.constructor,
                    p = f.d,
                    m = (e = new h(e)).d;
                if (!f.s || !e.s) return new h(0);
                for (e.s *= f.s, r = f.e + e.e, c = p.length, c < (d = m.length) && ((o = p), (p = m), (m = o), (l = c), (c = d), (d = l)), o = [], i = l = c + d; i--; ) o.push(0);
                for (i = d; --i >= 0; ) {
                    for (n = 0, a = c + i; a > i; ) (u = o[a] + m[i] * p[a - i - 1] + n), (o[a--] = u % _ | 0), (n = (u / _) | 0);
                    o[a] = (o[a] + n) % _ | 0;
                }
                for (; !o[--l]; ) o.pop();
                return n ? ++r : o.shift(), (e.d = o), (e.e = r), s ? R(e, h.precision) : e;
            }),
        (g.toDecimalPlaces = g.todp =
            function (e, n) {
                var r = this,
                    a = r.constructor;
                return ((r = new a(r)), void 0 === e) ? r : (v(e, 0, i), void 0 === n ? (n = a.rounding) : v(n, 0, 8), R(r, e + y(r) + 1, n));
            }),
        (g.toExponential = function (e, n) {
            var r,
                a = this,
                s = a.constructor;
            return void 0 === e ? (r = D(a, !0)) : (v(e, 0, i), void 0 === n ? (n = s.rounding) : v(n, 0, 8), (r = D((a = R(new s(a), e + 1, n)), !0, e + 1))), r;
        }),
        (g.toFixed = function (e, n) {
            var r,
                a,
                s = this,
                o = s.constructor;
            return void 0 === e ? D(s) : (v(e, 0, i), void 0 === n ? (n = o.rounding) : v(n, 0, 8), (r = D((a = R(new o(s), e + y(s) + 1, n)).abs(), !1, e + y(a) + 1)), s.isneg() && !s.isZero() ? '-' + r : r);
        }),
        (g.toInteger = g.toint =
            function () {
                var e = this,
                    n = e.constructor;
                return R(new n(e), y(e) + 1, n.rounding);
            }),
        (g.toNumber = function () {
            return +this;
        }),
        (g.toPower = g.pow =
            function (e) {
                var n,
                    i,
                    a,
                    l,
                    u,
                    d,
                    f = this,
                    _ = f.constructor,
                    m = 12,
                    g = +(e = new _(e));
                if (!e.s) return new _(r);
                if (!(f = new _(f)).s) {
                    if (e.s < 1) throw Error(o + 'Infinity');
                    return f;
                }
                if (f.eq(r)) return f;
                if (((a = _.precision), e.eq(r))) return R(f, a);
                if (((n = e.e), (d = n >= (i = e.d.length - 1)), (u = f.s), d)) {
                    if ((i = g < 0 ? -g : g) <= p) {
                        for (l = new _(r), n = Math.ceil(a / h + 4), s = !1; i % 2 && L((l = l.times(f)).d, n), 0 !== (i = c(i / 2)); ) {
                            L((f = f.times(f)).d, n);
                        }
                        return (s = !0), e.s < 0 ? new _(r).div(l) : R(l, a);
                    }
                } else if (u < 0) throw Error(o + 'NaN');
                return (u = u < 0 && 1 & e.d[Math.max(n, i)] ? -1 : 1), (f.s = 1), (s = !1), (l = e.times(N(f, a + m))), (s = !0), ((l = b(l)).s = u), l;
            }),
        (g.toPrecision = function (e, n) {
            var r,
                a,
                s = this,
                o = s.constructor;
            return void 0 === e ? ((r = y(s)), (a = D(s, r <= o.toExpNeg || r >= o.toExpPos))) : (v(e, 1, i), void 0 === n ? (n = o.rounding) : v(n, 0, 8), (r = y((s = R(new o(s), e, n)))), (a = D(s, e <= r || r <= o.toExpNeg, e))), a;
        }),
        (g.toSignificantDigits = g.tosd =
            function (e, n) {
                var r = this,
                    a = r.constructor;
                return void 0 === e ? ((e = a.precision), (n = a.rounding)) : (v(e, 1, i), void 0 === n ? (n = a.rounding) : v(n, 0, 8)), R(new a(r), e, n);
            }),
        (g.toString =
            g.valueOf =
            g.val =
            g.toJSON =
                function () {
                    var e = this,
                        n = y(e),
                        r = e.constructor;
                    return D(e, n <= r.toExpNeg || n >= r.toExpPos);
                });
    var T = (function () {
        function e(e, n) {
            var r,
                i = 0,
                a = e.length;
            for (e = e.slice(); a--; ) (r = e[a] * n + i), (e[a] = r % _ | 0), (i = (r / _) | 0);
            return i && e.unshift(i), e;
        }
        function n(e, n, r, i) {
            var a, s;
            if (r != i) s = r > i ? 1 : -1;
            else
                for (a = s = 0; a < r; a++)
                    if (e[a] != n[a]) {
                        s = e[a] > n[a] ? 1 : -1;
                        break;
                    }
            return s;
        }
        function r(e, n, r) {
            for (var i = 0; r--; ) (e[r] -= i), (i = e[r] < n[r] ? 1 : 0), (e[r] = i * _ + e[r] - n[r]);
            for (; !e[0] && e.length > 1; ) e.shift();
        }
        return function (i, a, s, l) {
            var u,
                c,
                d,
                f,
                p,
                m,
                g,
                E,
                v,
                I,
                T,
                b,
                S,
                A,
                N,
                C,
                O,
                D,
                L = i.constructor,
                x = i.s == a.s ? 1 : -1,
                w = i.d,
                P = a.d;
            if (!i.s) return new L(i);
            if (!a.s) throw Error(o + 'Division by zero');
            for (d = 0, c = i.e - a.e, O = P.length, N = w.length, E = (g = new L(x)).d = []; P[d] == (w[d] || 0); ) ++d;
            if ((P[d] > (w[d] || 0) && --c, (b = null == s ? (s = L.precision) : l ? s + (y(i) - y(a)) + 1 : s) < 0)) return new L(0);
            if (((b = (b / h + 2) | 0), (d = 0), 1 == O)) for (f = 0, P = P[0], b++; (d < N || f) && b--; d++) (S = f * _ + (w[d] || 0)), (E[d] = (S / P) | 0), (f = S % P | 0);
            else {
                for ((f = (_ / (P[0] + 1)) | 0) > 1 && ((P = e(P, f)), (w = e(w, f)), (O = P.length), (N = w.length)), A = O, I = (v = w.slice(0, O)).length; I < O; ) v[I++] = 0;
                (D = P.slice()).unshift(0), (C = P[0]), P[1] >= _ / 2 && ++C;
                do (f = 0), (u = n(P, v, O, I)) < 0 ? ((T = v[0]), O != I && (T = T * _ + (v[1] || 0)), (f = (T / C) | 0) > 1 ? (f >= _ && (f = _ - 1), (m = (p = e(P, f)).length), (I = v.length), 1 == (u = n(p, v, m, I)) && (f--, r(p, O < m ? D : P, m))) : (0 == f && (u = f = 1), (p = P.slice())), (m = p.length) < I && p.unshift(0), r(v, p, I), -1 == u && ((I = v.length), (u = n(P, v, O, I)) < 1 && (f++, r(v, O < I ? D : P, I))), (I = v.length)) : 0 === u && (f++, (v = [0])), (E[d++] = f), u && v[0] ? (v[I++] = w[A] || 0) : ((v = [w[A]]), (I = 1));
                while ((A++ < N || void 0 !== v[0]) && b--);
            }
            return !E[0] && E.shift(), (g.e = c), R(g, l ? s + y(g) + 1 : s);
        };
    })();
    function b(e, n) {
        var i,
            a,
            o,
            l,
            c,
            f = 0,
            _ = 0,
            h = e.constructor,
            p = h.precision;
        if (y(e) > 16) throw Error(u + y(e));
        if (!e.s) return new h(r);
        for (null == n ? ((s = !1), (c = p)) : (c = n), l = new h(0.03125); e.abs().gte(0.1); ) (e = e.times(l)), (_ += 5);
        for (c += ((Math.log(d(2, _)) / Math.LN10) * 2 + 5) | 0, i = a = o = new h(r), h.precision = c; ; ) {
            if (((a = R(a.times(e), c)), (i = i.times(++f)), I((l = o.plus(T(a, i, c))).d).slice(0, c) === I(o.d).slice(0, c))) {
                for (; _--; ) o = R(o.times(o), c);
                return (h.precision = p), null == n ? ((s = !0), R(o, p)) : o;
            }
            o = l;
        }
    }
    function y(e) {
        for (var n = e.e * h, r = e.d[0]; r >= 10; r /= 10) n++;
        return n;
    }
    function S(e, n, r) {
        if (n > e.LN10.sd()) throw ((s = !0), r && (e.precision = r), Error(o + 'LN10 precision limit exceeded'));
        return R(new e(e.LN10), n);
    }
    function A(e) {
        for (var n = ''; e--; ) n += '0';
        return n;
    }
    function N(e, n) {
        var i,
            a,
            l,
            u,
            c,
            d,
            f,
            _,
            h,
            p = 1,
            m = 10,
            g = e,
            E = g.d,
            v = g.constructor,
            b = v.precision;
        if (g.s < 1) throw Error(o + (g.s ? 'NaN' : '-Infinity'));
        if (g.eq(r)) return new v(0);
        if ((null == n ? ((s = !1), (_ = b)) : (_ = n), g.eq(10))) return null == n && (s = !0), S(v, _);
        if (((_ += m), (v.precision = _), (a = (i = I(E)).charAt(0)), !(1500000000000000 > Math.abs((u = y(g)))))) return (f = S(v, _ + 2, b).times(u + '')), (g = N(new v(a + '.' + i.slice(1)), _ - m).plus(f)), (v.precision = b), null == n ? ((s = !0), R(g, b)) : g;
        for (; (a < 7 && 1 != a) || (1 == a && i.charAt(1) > 3); ) (a = (i = I((g = g.times(e)).d)).charAt(0)), p++;
        (u = y(g)), a > 1 ? ((g = new v('0.' + i)), u++) : (g = new v(a + '.' + i.slice(1)));
        for (d = c = g = T(g.minus(r), g.plus(r), _), h = R(g.times(g), _), l = 3; ; ) {
            if (((c = R(c.times(h), _)), I((f = d.plus(T(c, new v(l), _))).d).slice(0, _) === I(d.d).slice(0, _))) return (d = d.times(2)), 0 !== u && (d = d.plus(S(v, _ + 2, b).times(u + ''))), (d = T(d, new v(p), _)), (v.precision = b), null == n ? ((s = !0), R(d, b)) : d;
            (d = f), (l += 2);
        }
    }
    function C(e, n) {
        var r, i, a;
        for ((r = n.indexOf('.')) > -1 && (n = n.replace('.', '')), (i = n.search(/e/i)) > 0 ? (r < 0 && (r = i), (r += +n.slice(i + 1)), (n = n.substring(0, i))) : r < 0 && (r = n.length), i = 0; 48 === n.charCodeAt(i); ) ++i;
        for (a = n.length; 48 === n.charCodeAt(a - 1); ) --a;
        if ((n = n.slice(i, a))) {
            if (((a -= i), (r = r - i - 1), (e.e = c(r / h)), (e.d = []), (i = (r + 1) % h), r < 0 && (i += h), i < a)) {
                for (i && e.d.push(+n.slice(0, i)), a -= h; i < a; ) e.d.push(+n.slice(i, (i += h)));
                i = h - (n = n.slice(i)).length;
            } else i -= a;
            for (; i--; ) n += '0';
            if ((e.d.push(+n), s && (e.e > m || e.e < -m))) throw Error(u + r);
        } else (e.s = 0), (e.e = 0), (e.d = [0]);
        return e;
    }
    function R(e, n, r) {
        var i,
            a,
            o,
            l,
            f,
            p,
            g,
            E,
            v = e.d;
        for (l = 1, o = v[0]; o >= 10; o /= 10) l++;
        if ((i = n - l) < 0) (i += h), (a = n), (g = v[(E = 0)]);
        else {
            if ((E = Math.ceil((i + 1) / h)) >= (o = v.length)) return e;
            for (l = 1, g = o = v[E]; o >= 10; o /= 10) l++;
            (i %= h), (a = i - h + l);
        }
        if ((void 0 !== r && ((f = (g / (o = d(10, l - a - 1))) % 10 | 0), (p = n < 0 || void 0 !== v[E + 1] || g % o), (p = r < 4 ? (f || p) && (0 == r || r == (e.s < 0 ? 3 : 2)) : f > 5 || (5 == f && (4 == r || p || (6 == r && (i > 0 ? (a > 0 ? g / d(10, l - a) : 0) : v[E - 1]) % 10 & 1) || r == (e.s < 0 ? 8 : 7))))), n < 1 || !v[0])) return p ? ((o = y(e)), (v.length = 1), (n = n - o - 1), (v[0] = d(10, (h - (n % h)) % h)), (e.e = c(-n / h) || 0)) : ((v.length = 1), (v[0] = e.e = e.s = 0)), e;
        if ((0 == i ? ((v.length = E), (o = 1), E--) : ((v.length = E + 1), (o = d(10, h - i)), (v[E] = a > 0 ? ((g / d(10, l - a)) % d(10, a) | 0) * o : 0)), p))
            for (;;) {
                if (0 == E) {
                    (v[0] += o) == _ && ((v[0] = 1), ++e.e);
                    break;
                }
                if (((v[E] += o), v[E] != _)) break;
                (v[E--] = 0), (o = 1);
            }
        for (i = v.length; 0 === v[--i]; ) v.pop();
        if (s && (e.e > m || e.e < -m)) throw Error(u + y(e));
        return e;
    }
    function O(e, n) {
        var r,
            i,
            a,
            o,
            l,
            u,
            c,
            d,
            f,
            p,
            m = e.constructor,
            g = m.precision;
        if (!e.s || !n.s) return n.s ? (n.s = -n.s) : (n = new m(e)), s ? R(n, g) : n;
        if (((c = e.d), (p = n.d), (i = n.e), (d = e.e), (c = c.slice()), (l = d - i))) {
            for ((f = l < 0) ? ((r = c), (l = -l), (u = p.length)) : ((r = p), (i = d), (u = c.length)), l > (a = Math.max(Math.ceil(g / h), u) + 2) && ((l = a), (r.length = 1)), r.reverse(), a = l; a--; ) r.push(0);
            r.reverse();
        } else {
            for (a = c.length, (f = a < (u = p.length)) && (u = a), a = 0; a < u; a++)
                if (c[a] != p[a]) {
                    f = c[a] < p[a];
                    break;
                }
            l = 0;
        }
        for (f && ((r = c), (c = p), (p = r), (n.s = -n.s)), u = c.length, a = p.length - u; a > 0; --a) c[u++] = 0;
        for (a = p.length; a > l; ) {
            if (c[--a] < p[a]) {
                for (o = a; o && 0 === c[--o]; ) c[o] = _ - 1;
                --c[o], (c[a] += _);
            }
            c[a] -= p[a];
        }
        for (; 0 === c[--u]; ) c.pop();
        for (; 0 === c[0]; c.shift()) --i;
        return c[0] ? ((n.d = c), (n.e = i), s ? R(n, g) : n) : new m(0);
    }
    function D(e, n, r) {
        var i,
            a = y(e),
            s = I(e.d),
            o = s.length;
        return n ? (r && (i = r - o) > 0 ? (s = s.charAt(0) + '.' + s.slice(1) + A(i)) : o > 1 && (s = s.charAt(0) + '.' + s.slice(1)), (s = s + (a < 0 ? 'e' : 'e+') + a)) : a < 0 ? ((s = '0.' + A(-a - 1) + s), r && (i = r - o) > 0 && (s += A(i))) : a >= o ? ((s += A(a + 1 - o)), r && (i = r - a - 1) > 0 && (s = s + '.' + A(i))) : ((i = a + 1) < o && (s = s.slice(0, i) + '.' + s.slice(i)), r && (i = r - o) > 0 && (a + 1 === o && (s += '.'), (s += A(i)))), e.s < 0 ? '-' + s : s;
    }
    function L(e, n) {
        if (e.length > n) return (e.length = n), !0;
    }
    function x(e) {
        var n, r, i;
        function a(e) {
            var n = this;
            if (!(n instanceof a)) return new a(e);
            if (((n.constructor = a), e instanceof a)) {
                (n.s = e.s), (n.e = e.e), (n.d = (e = e.d) ? e.slice() : e);
                return;
            }
            if ('number' == typeof e) {
                if (0 * e != 0) throw Error(l + e);
                if (e > 0) n.s = 1;
                else if (e < 0) (e = -e), (n.s = -1);
                else {
                    (n.s = 0), (n.e = 0), (n.d = [0]);
                    return;
                }
                if (e === ~~e && e < 10000000) {
                    (n.e = 0), (n.d = [e]);
                    return;
                }
                return C(n, e.toString());
            }
            if ('string' != typeof e) throw Error(l + e);
            if ((45 === e.charCodeAt(0) ? ((e = e.slice(1)), (n.s = -1)) : (n.s = 1), f.test(e))) C(n, e);
            else throw Error(l + e);
        }
        if (((a.prototype = g), (a.ROUND_UP = 0), (a.ROUND_DOWN = 1), (a.ROUND_CEIL = 2), (a.ROUND_FLOOR = 3), (a.ROUND_HALF_UP = 4), (a.ROUND_HALF_DOWN = 5), (a.ROUND_HALF_EVEN = 6), (a.ROUND_HALF_CEIL = 7), (a.ROUND_HALF_FLOOR = 8), (a.clone = x), (a.config = a.set = w), void 0 === e && (e = {}), e)) for (n = 0, i = ['precision', 'rounding', 'toExpNeg', 'toExpPos', 'LN10']; n < i.length; ) !e.hasOwnProperty((r = i[n++])) && (e[r] = this[r]);
        return a.config(e), a;
    }
    function w(e) {
        if (!e || 'object' != typeof e) throw Error(o + 'Object expected');
        var n,
            r,
            a,
            s = ['precision', 1, i, 'rounding', 0, 8, 'toExpNeg', -Infinity, 0, 'toExpPos', 0, 1 / 0];
        for (n = 0; n < s.length; n += 3)
            if (void 0 !== (a = e[(r = s[n])])) {
                if (c(a) === a && a >= s[n + 1] && a <= s[n + 2]) this[r] = a;
                else throw Error(l + r + ': ' + a);
            }
        if (void 0 !== (a = e[(r = 'LN10')])) {
            if (a == Math.LN10) this[r] = new this(a);
            else throw Error(l + r + ': ' + a);
        }
        return this;
    }
    ((a = x(a)).default = a.Decimal = a),
        (r = new a(1)),
        'function' == typeof define && define.amd
            ? define(function () {
                  return a;
              })
            : e.exports
              ? (e.exports = a)
              : (!n && (n = 'undefined' != typeof self && self && self.self == self ? self : Function('return this')()), (n.Decimal = a));
})(this);
