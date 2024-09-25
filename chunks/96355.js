!(function (e, n) {
    n(t);
})(0, function (e) {
    function t(e) {
        return 10 === e || 13 === e || 8232 === e || 8233 === e || 32 === e || 9 === e || 11 === e || 12 === e || 160 === e || (e >= 5760 && e4.indexOf(e) >= 0);
    }
    function n(e) {
        switch (32 | e) {
            case 109:
            case 122:
            case 108:
            case 104:
            case 118:
            case 99:
            case 115:
            case 113:
            case 116:
            case 97:
            case 114:
                return !0;
        }
        return !1;
    }
    function r(e) {
        return e >= 48 && e <= 57;
    }
    function i(e) {
        return (e >= 48 && e <= 57) || 43 === e || 45 === e || 46 === e;
    }
    function a(e) {
        (this.index = 0), (this.path = e), (this.max = e.length), (this.result = []), (this.param = 0), (this.err = ''), (this.segmentStart = 0), (this.data = []);
    }
    function o(e) {
        for (; e.index < e.max && t(e.path.charCodeAt(e.index)); ) e.index++;
    }
    function s(e) {
        var t,
            n = e.index,
            i = n,
            a = e.max,
            o = !1,
            s = !1,
            l = !1,
            u = !1;
        if (i >= a) return void (e.err = 'SvgPath: missed param (at pos ' + i + ')');
        if (((43 !== (t = e.path.charCodeAt(i)) && 45 !== t) || (t = ++i < a ? e.path.charCodeAt(i) : 0), !r(t) && 46 !== t)) return void (e.err = 'SvgPath: param should start with 0..9 or `.` (at pos ' + i + ')');
        if (46 !== t) {
            if (((o = 48 === t), (t = ++i < a ? e.path.charCodeAt(i) : 0), o && i < a && t && r(t))) return void (e.err = 'SvgPath: numbers started with `0` such as `09` are ilegal (at pos ' + n + ')');
            for (; i < a && r(e.path.charCodeAt(i)); ) i++, (s = !0);
            t = i < a ? e.path.charCodeAt(i) : 0;
        }
        if (46 === t) {
            for (u = !0, i++; r(e.path.charCodeAt(i)); ) i++, (l = !0);
            t = i < a ? e.path.charCodeAt(i) : 0;
        }
        if (101 === t || 69 === t) {
            if ((u && !s && !l) || ((43 !== (t = ++i < a ? e.path.charCodeAt(i) : 0) && 45 !== t) || i++, !(i < a && r(e.path.charCodeAt(i))))) return void (e.err = 'SvgPath: invalid float exponent (at pos ' + i + ')');
            for (; i < a && r(e.path.charCodeAt(i)); ) i++;
        }
        (e.index = i), (e.param = parseFloat(e.path.slice(n, i)) + 0);
    }
    function l(e) {
        n = (t = e.path[e.segmentStart]).toLowerCase();
        var t,
            n,
            r = e.data;
        if (('m' === n && r.length > 2 && (e.result.push([t, r[0], r[1]]), (r = r.slice(2)), (n = 'l'), (t = 'm' === t ? 'l' : 'L')), 'r' === n)) e.result.push([t].concat(r));
        else for (; r.length >= e3[n] && (e.result.push([t].concat(r.splice(0, e3[n]))), e3[n]); );
    }
    function u(e) {
        var t,
            r,
            a,
            u = e.max;
        if (((e.segmentStart = e.index), !n(e.path.charCodeAt(e.index)))) return void (e.err = 'SvgPath: bad command ' + e.path[e.index] + ' (at pos ' + e.index + ')');
        if (((r = e3[e.path[e.index].toLowerCase()]), e.index++, o(e), (e.data = []), !r)) return void l(e);
        for (t = !1; ; ) {
            for (a = r; a > 0; a--) {
                if ((s(e), e.err.length)) return;
                e.data.push(e.param), o(e), (t = !1), e.index < u && 44 === e.path.charCodeAt(e.index) && (e.index++, o(e), (t = !0));
            }
            if (!t && (e.index >= e.max || !i(e.path.charCodeAt(e.index)))) break;
        }
        l(e);
    }
    function c(e, t) {
        return [e[0] * t[0] + e[2] * t[1], e[1] * t[0] + e[3] * t[1], e[0] * t[2] + e[2] * t[3], e[1] * t[2] + e[3] * t[3], e[0] * t[4] + e[2] * t[5] + e[4], e[1] * t[4] + e[3] * t[5] + e[5]];
    }
    function d() {
        if (!(this instanceof d)) return new d();
        (this.queue = []), (this.cache = null);
    }
    function _(e, t, n, r) {
        var i = e * r - t * n < 0 ? -1 : 1,
            a = Math.sqrt(e * e + t * t),
            o = Math.sqrt(e * e + t * t),
            s = (e * n + t * r) / (a * o);
        return s > 1 && (s = 1), s < -1 && (s = -1), i * Math.acos(s);
    }
    function E(e, t, n, r, i, a, o, s, l, u) {
        var c = (u * (e - n)) / 2 + (l * (t - r)) / 2,
            d = (-l * (e - n)) / 2 + (u * (t - r)) / 2,
            E = o * o,
            f = s * s,
            h = c * c,
            p = d * d,
            m = E * f - E * p - f * h;
        m < 0 && (m = 0), (m /= E * p + f * h);
        var I = (((m = Math.sqrt(m) * (i === a ? -1 : 1)) * o) / s) * d,
            T = (-(m * s) / o) * c,
            g = u * I - l * T + (e + n) / 2,
            S = l * I + u * T + (t + r) / 2,
            A = (c - I) / o,
            v = (d - T) / s,
            N = (-c - I) / o,
            O = (-d - T) / s,
            R = _(1, 0, A, v),
            C = _(A, v, N, O);
        return 0 === a && C > 0 && (C -= tt), 1 === a && C < 0 && (C += tt), [g, S, R, C];
    }
    function f(e, t) {
        var n = (4 / 3) * Math.tan(t / 4),
            r = Math.cos(e),
            i = Math.sin(e),
            a = Math.cos(e + t),
            o = Math.sin(e + t);
        return [r, i, r - i * n, i + r * n, a + o * n, o - a * n, a, o];
    }
    function h(e, t, n) {
        if (!(this instanceof h)) return new h(e, t, n);
        (this.rx = e), (this.ry = t), (this.ax = n);
    }
    function p(e) {
        if (!(this instanceof p)) return new p(e);
        var t = e5(e);
        (this.segments = t.segments), (this.err = t.err), (this.__stack = []);
    }
    function m(e) {
        var t = e.match(tu);
        return t ? t.map(Number) : [];
    }
    function I(e, t, n, r, i, a, o, s) {
        (this.a = {
            x: e,
            y: t
        }),
            (this.b = {
                x: n,
                y: r
            }),
            (this.c = {
                x: i,
                y: a
            }),
            (this.d = {
                x: o,
                y: s
            }),
            null != o && null != s ? ((this.getArcLength = y), (this.getPoint = v), (this.getDerivative = g)) : ((this.getArcLength = N), (this.getPoint = A), (this.getDerivative = T)),
            this.init();
    }
    function T(e, t, n) {
        return {
            x: 2 * (1 - n) * (e[1] - e[0]) + 2 * n * (e[2] - e[1]),
            y: 2 * (1 - n) * (t[1] - t[0]) + 2 * n * (t[2] - t[1])
        };
    }
    function g(e, t, n) {
        return A([3 * (e[1] - e[0]), 3 * (e[2] - e[1]), 3 * (e[3] - e[2])], [3 * (t[1] - t[0]), 3 * (t[2] - t[1]), 3 * (t[3] - t[2])], n);
    }
    function S(e, t, n, r, i) {
        for (var a = 1, o = e / t, s = (e - n(r, i, o)) / t; a > 0.001; ) {
            var l = n(r, i, o + s),
                u = n(r, i, o - s),
                c = Math.abs(e - l) / t,
                d = Math.abs(e - u) / t;
            c < a ? ((a = c), (o += s)) : d < a ? ((a = d), (o -= s)) : (s /= 2);
        }
        return o;
    }
    function A(e, t, n) {
        return {
            x: (1 - n) * (1 - n) * e[0] + 2 * (1 - n) * n * e[1] + n * n * e[2],
            y: (1 - n) * (1 - n) * t[0] + 2 * (1 - n) * n * t[1] + n * n * t[2]
        };
    }
    function v(e, t, n) {
        return {
            x: (1 - n) * (1 - n) * (1 - n) * e[0] + 3 * (1 - n) * (1 - n) * n * e[1] + 3 * (1 - n) * n * n * e[2] + n * n * n * e[3],
            y: (1 - n) * (1 - n) * (1 - n) * t[0] + 3 * (1 - n) * (1 - n) * n * t[1] + 3 * (1 - n) * n * n * t[2] + n * n * n * t[3]
        };
    }
    function N(e, t, n) {
        void 0 === n && (n = 1);
        var r = e[0] - 2 * e[1] + e[2],
            i = t[0] - 2 * t[1] + t[2],
            a = 2 * e[1] - 2 * e[0],
            o = 2 * t[1] - 2 * t[0],
            s = 4 * (r * r + i * i),
            l = 4 * (r * a + i * o),
            u = a * a + o * o;
        if (0 === s) return n * Math.sqrt(Math.pow(e[2] - e[0], 2) + Math.pow(t[2] - t[0], 2));
        var c = l / (2 * s),
            d = n + c,
            _ = u / s - c * c;
        return (Math.sqrt(s) / 2) * (d * Math.sqrt(d * d + _) - c * Math.sqrt(c * c + _) + _ * Math.log(Math.abs((d + Math.sqrt(d * d + _)) / (c + Math.sqrt(c * c + _)))));
    }
    function O(e, t) {
        return tE[e][t];
    }
    function R(e, t, n) {
        var r,
            i,
            a,
            o = n.length - 1;
        if (0 === o) return 0;
        if (0 === e) {
            for (i = 0, a = 0; a <= o; a++) i += O(o, a) * Math.pow(1 - t, o - a) * Math.pow(t, a) * n[a];
            return i;
        }
        for (r = Array(o), a = 0; a < o; a++) r[a] = o * (n[a + 1] - n[a]);
        return R(e - 1, t, r);
    }
    function C(e, t, n) {
        var r = R(1, n, e),
            i = R(1, n, t);
        return Math.sqrt(r * r + i * i);
    }
    function y(e, t, n) {
        var r, i, a, o;
        for (void 0 === n && (n = 1), r = n / 2, i = 0, a = 0; a < 20; a++) (o = r * td[20][a] + r), (i += t_[20][a] * C(e, t, o));
        return r * i;
    }
    function b(e, t, n, r) {
        var i = e * r - t * n < 0 ? -1 : 1,
            a = e * n + t * r;
        return a > 1 && (a = 1), a < -1 && (a = -1), i * Math.acos(a);
    }
    function L(e, t, n, r, i, a, o, s, l, u) {
        var c = (u * (e - n)) / 2 + (l * (t - r)) / 2,
            d = (-l * (e - n)) / 2 + (u * (t - r)) / 2,
            _ = o * o,
            E = s * s,
            f = c * c,
            h = d * d,
            p = _ * E - _ * h - E * f;
        p < 0 && (p = 0), (p /= _ * h + E * f);
        var m = (((p = Math.sqrt(p) * (i === a ? -1 : 1)) * o) / s) * d,
            I = (-(p * s) / o) * c,
            T = u * m - l * I + (e + n) / 2,
            g = l * m + u * I + (t + r) / 2,
            S = (c - m) / o,
            A = (d - I) / s,
            v = (-c - m) / o,
            N = (-d - I) / s,
            O = b(1, 0, S, A),
            R = b(S, A, v, N);
        return 0 === a && R > 0 && (R -= tf), 1 === a && R < 0 && (R += tf), [T, g, O, R];
    }
    function D(e, t) {
        var n = (4 / 3) * Math.tan(t / 4),
            r = Math.cos(e),
            i = Math.sin(e),
            a = Math.cos(e + t),
            o = Math.sin(e + t);
        return [r, i, r - i * n, i + r * n, a + o * n, o - a * n, a, o];
    }
    function M(e, t, n, r, i, a, o, s, l) {
        var u = 0,
            c = [],
            d = [];
        th(e, t, n, r, i, a, o, s, l).forEach(function (e) {
            var t = new tc(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]),
                n = t.getTotalLength();
            (u += n), c.push(n), d.push(t);
        }),
            (this.length = u),
            (this.partialLengths = c),
            (this.curves = d);
    }
    function P(e, t, n, r) {
        (this.x0 = e), (this.x1 = t), (this.y0 = n), (this.y1 = r);
    }
    function U(e, t) {
        return Math.sqrt((e[0] - t[0]) * (e[0] - t[0]) + (e[1] - t[1]) * (e[1] - t[1]));
    }
    function w(e, t, n) {
        return [e[0] + (t[0] - e[0]) * n, e[1] + (t[1] - e[1]) * n];
    }
    function x(e, t) {
        return 1e-9 > U(e, t);
    }
    function G(e, t, n) {
        var r = e.map(function (e, n) {
            return k(e, t[n]);
        });
        return function (e) {
            var t = r.map(function (t) {
                return t(e);
            });
            return n ? Y(t) : t;
        };
    }
    function k(e, t) {
        return function (n) {
            return e.map(function (e, r) {
                return e + n * (t[r] - e);
            });
        };
    }
    function B(e) {
        return 'number' == typeof e && isFinite(e);
    }
    function F(e) {
        return Z(e) ? e1(e) : [(e[0][0] + e[e.length - 1][0]) / 2, (e[0][1] + e[e.length - 1][1]) / 2];
    }
    function Z(e) {
        for (var t = 0; t < e.length - 2; t++) {
            var n = e[t],
                r = e[t + 1],
                i = e[t + 2];
            if (n[0] * (r[1] - i[1]) + r[0] * (i[1] - n[1]) + i[0] * (n[1] - r[1])) return !0;
        }
        return !1;
    }
    function V(e) {
        return new ta(e).abs();
    }
    function H(e) {
        return e
            .toString()
            .split('M')
            .map(function (e, t) {
                return (e = e.trim()), t && e ? 'M' + e : e;
            })
            .filter(function (e) {
                return e;
            });
    }
    function Y(e) {
        return 'M' + e.join('L') + 'Z';
    }
    function j(e) {
        return H(V(e));
    }
    function W(e, t) {
        var n = V(e);
        return K(n) || z(n, t);
    }
    function K(e) {
        var t = e.segments || [],
            n = [];
        if (!t.length || 'M' !== t[0][0]) return !1;
        for (var r = 0; r < t.length; r++) {
            var i = t[r],
                a = i[0],
                o = i[1],
                s = i[2];
            if (('M' === a && r) || 'Z' === a) break;
            if ('M' === a || 'L' === a) n.push([o, s]);
            else if ('H' === a) n.push([o, n[n.length - 1][1]]);
            else {
                if ('V' !== a) return !1;
                n.push([n[n.length - 1][0], o]);
            }
        }
        return !!n.length && { ring: n };
    }
    function z(e, t) {
        var n,
            r,
            i = H(e)[0],
            a = [],
            o = 3;
        if (!i) throw TypeError(tT);
        (n = (r = q(i)).getTotalLength()), t && B(t) && t > 0 && (o = Math.max(o, Math.ceil(n / t)));
        for (var s = 0; s < o; s++) {
            var l = r.getPointAtLength((n * s) / o);
            a.push([l.x, l.y]);
        }
        return {
            ring: a,
            skipBisect: !0
        };
    }
    function q(e) {
        if ('undefined' != typeof window && window && window.document)
            try {
                var t = window.document.createElementNS('http://www.w3.org/2000/svg', 'path');
                return t.setAttributeNS(null, 'd', e), t;
            } catch (e) {}
        return tI(e);
    }
    function Q(e, t) {
        for (var n = e.length + t, r = e2(e) / t, i = 0, a = 0, o = r / 2; e.length < n; ) {
            var s = e[i],
                l = e[(i + 1) % e.length],
                u = U(s, l);
            o <= a + u ? (e.splice(i + 1, 0, u ? w(s, l, (o - a) / u) : s.slice(0)), (o += r)) : ((a += u), i++);
        }
    }
    function X(e, t) {
        void 0 === t && (t = 1 / 0);
        for (var n = 0; n < e.length; n++) for (var r = e[n], i = n === e.length - 1 ? e[0] : e[n + 1]; U(r, i) > t; ) (i = w(r, i, 0.5)), e.splice(n + 1, 0, i);
    }
    function $(e, t) {
        var n, r;
        if ('string' == typeof e) {
            var i = W(e, t);
            (e = i.ring), (r = i.skipBisect);
        } else if (!Array.isArray(e)) throw TypeError(tT);
        if (!J((n = e.slice(0)))) throw TypeError(tT);
        return n.length > 1 && x(n[0], n[n.length - 1]) && n.pop(), e0(n) > 0 && n.reverse(), !r && t && B(t) && t > 0 && X(n, t), n;
    }
    function J(e) {
        return e.every(function (e) {
            return Array.isArray(e) && e.length >= 2 && B(e[0]) && B(e[1]);
        });
    }
    function ee(e, t, n) {
        var r;
        return (r = e.length - t.length), Q(e, r < 0 ? -1 * r : 0), Q(t, r > 0 ? r : 0), tS(e, t), G(e, t, n);
    }
    function et(e, t, n) {
        n = n || 2;
        var r,
            i,
            a,
            o,
            s,
            l,
            u,
            c = t && t.length,
            d = c ? t[0] * n : e.length,
            _ = en(e, 0, d, n, !0),
            E = [];
        if (!_) return E;
        if ((c && (_ = eu(e, t, _, n)), e.length > 80 * n)) {
            (r = a = e[0]), (i = o = e[1]);
            for (var f = n; f < d; f += n) (s = e[f]), (l = e[f + 1]), s < r && (r = s), l < i && (i = l), s > a && (a = s), l > o && (o = l);
            u = Math.max(a - r, o - i);
        }
        return ei(_, E, n, r, i, u), E;
    }
    function en(e, t, n, r, i) {
        var a, o;
        if (i === eb(e, t, n, r) > 0) for (a = t; a < n; a += r) o = eR(a, e[a], e[a + 1], o);
        else for (a = n - r; a >= t; a -= r) o = eR(a, e[a], e[a + 1], o);
        return o && eg(o, o.next) && (eC(o), (o = o.next)), o;
    }
    function er(e, t) {
        if (!e) return e;
        t || (t = e);
        var n,
            r = e;
        do
            if (((n = !1), r.steiner || (!eg(r, r.next) && 0 !== eT(r.prev, r, r.next)))) r = r.next;
            else {
                if ((eC(r), (r = t = r.prev) === r.next)) return null;
                n = !0;
            }
        while (n || r !== t);
        return t;
    }
    function ei(e, t, n, r, i, a, o) {
        if (e) {
            !o && a && eE(e, r, i, a);
            for (var s, l, u = e; e.prev !== e.next; )
                if (((s = e.prev), (l = e.next), a ? eo(e, r, i, a) : ea(e))) t.push(s.i / n), t.push(e.i / n), t.push(l.i / n), eC(e), (e = l.next), (u = l.next);
                else if ((e = l) === u) {
                    o ? (1 === o ? ei((e = es(e, t, n)), t, n, r, i, a, 2) : 2 === o && el(e, t, n, r, i, a)) : ei(er(e), t, n, r, i, a, 1);
                    break;
                }
        }
    }
    function ea(e) {
        var t = e.prev,
            n = e,
            r = e.next;
        if (eT(t, n, r) >= 0) return !1;
        for (var i = e.next.next; i !== e.prev; ) {
            if (em(t.x, t.y, n.x, n.y, r.x, r.y, i.x, i.y) && eT(i.prev, i, i.next) >= 0) return !1;
            i = i.next;
        }
        return !0;
    }
    function eo(e, t, n, r) {
        var i = e.prev,
            a = e,
            o = e.next;
        if (eT(i, a, o) >= 0) return !1;
        for (var s = i.x < a.x ? (i.x < o.x ? i.x : o.x) : a.x < o.x ? a.x : o.x, l = i.y < a.y ? (i.y < o.y ? i.y : o.y) : a.y < o.y ? a.y : o.y, u = i.x > a.x ? (i.x > o.x ? i.x : o.x) : a.x > o.x ? a.x : o.x, c = i.y > a.y ? (i.y > o.y ? i.y : o.y) : a.y > o.y ? a.y : o.y, d = eh(s, l, t, n, r), _ = eh(u, c, t, n, r), E = e.nextZ; E && E.z <= _; ) {
            if (E !== e.prev && E !== e.next && em(i.x, i.y, a.x, a.y, o.x, o.y, E.x, E.y) && eT(E.prev, E, E.next) >= 0) return !1;
            E = E.nextZ;
        }
        for (E = e.prevZ; E && E.z >= d; ) {
            if (E !== e.prev && E !== e.next && em(i.x, i.y, a.x, a.y, o.x, o.y, E.x, E.y) && eT(E.prev, E, E.next) >= 0) return !1;
            E = E.prevZ;
        }
        return !0;
    }
    function es(e, t, n) {
        var r = e;
        do {
            var i = r.prev,
                a = r.next.next;
            !eg(i, a) && eS(i, r, r.next, a) && ev(i, a) && ev(a, i) && (t.push(i.i / n), t.push(r.i / n), t.push(a.i / n), eC(r), eC(r.next), (r = e = a)), (r = r.next);
        } while (r !== e);
        return r;
    }
    function el(e, t, n, r, i, a) {
        var o = e;
        do {
            for (var s = o.next.next; s !== o.prev; ) {
                if (o.i !== s.i && eI(o, s)) {
                    var l = eO(o, s);
                    return (o = er(o, o.next)), (l = er(l, l.next)), ei(o, t, n, r, i, a), void ei(l, t, n, r, i, a);
                }
                s = s.next;
            }
            o = o.next;
        } while (o !== e);
    }
    function eu(e, t, n, r) {
        var i,
            a,
            o,
            s,
            l,
            u = [];
        for (i = 0, a = t.length; i < a; i++) (o = t[i] * r), (s = i < a - 1 ? t[i + 1] * r : e.length), (l = en(e, o, s, r, !1)) === l.next && (l.steiner = !0), u.push(ep(l));
        for (u.sort(ec), i = 0; i < u.length; i++) ed(u[i], n), (n = er(n, n.next));
        return n;
    }
    function ec(e, t) {
        return e.x - t.x;
    }
    function ed(e, t) {
        if ((t = e_(e, t))) {
            var n = eO(t, e);
            er(n, n.next);
        }
    }
    function e_(e, t) {
        var n,
            r = t,
            i = e.x,
            a = e.y,
            o = -Infinity;
        do {
            if (a <= r.y && a >= r.next.y) {
                var s = r.x + ((a - r.y) * (r.next.x - r.x)) / (r.next.y - r.y);
                if (s <= i && s > o) {
                    if (((o = s), s === i)) {
                        if (a === r.y) return r;
                        if (a === r.next.y) return r.next;
                    }
                    n = r.x < r.next.x ? r : r.next;
                }
            }
            r = r.next;
        } while (r !== t);
        if (!n) return null;
        if (i === o) return n.prev;
        var l,
            u = n,
            c = n.x,
            d = n.y,
            _ = 1 / 0;
        for (r = n.next; r !== u; ) i >= r.x && r.x >= c && em(a < d ? i : o, a, c, d, a < d ? o : i, a, r.x, r.y) && ((l = Math.abs(a - r.y) / (i - r.x)) < _ || (l === _ && r.x > n.x)) && ev(r, e) && ((n = r), (_ = l)), (r = r.next);
        return n;
    }
    function eE(e, t, n, r) {
        var i = e;
        do null === i.z && (i.z = eh(i.x, i.y, t, n, r)), (i.prevZ = i.prev), (i.nextZ = i.next), (i = i.next);
        while (i !== e);
        (i.prevZ.nextZ = null), (i.prevZ = null), ef(i);
    }
    function ef(e) {
        var t,
            n,
            r,
            i,
            a,
            o,
            s,
            l,
            u = 1;
        do {
            for (n = e, e = null, a = null, o = 0; n; ) {
                for (o++, r = n, s = 0, t = 0; t < u && (s++, (r = r.nextZ)); t++);
                for (l = u; s > 0 || (l > 0 && r); ) 0 === s ? ((i = r), (r = r.nextZ), l--) : 0 !== l && r ? (n.z <= r.z ? ((i = n), (n = n.nextZ), s--) : ((i = r), (r = r.nextZ), l--)) : ((i = n), (n = n.nextZ), s--), a ? (a.nextZ = i) : (e = i), (i.prevZ = a), (a = i);
                n = r;
            }
            (a.nextZ = null), (u *= 2);
        } while (o > 1);
        return e;
    }
    function eh(e, t, n, r, i) {
        return (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = (32767 * (e - n)) / i) | (e << 8))) | (e << 4))) | (e << 2))) | (e << 1))), e | ((t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = (32767 * (t - r)) / i) | (t << 8))) | (t << 4))) | (t << 2))) | (t << 1))) << 1);
    }
    function ep(e) {
        var t = e,
            n = e;
        do t.x < n.x && (n = t), (t = t.next);
        while (t !== e);
        return n;
    }
    function em(e, t, n, r, i, a, o, s) {
        return (i - o) * (t - s) - (e - o) * (a - s) >= 0 && (e - o) * (r - s) - (n - o) * (t - s) >= 0 && (n - o) * (a - s) - (i - o) * (r - s) >= 0;
    }
    function eI(e, t) {
        return e.next.i !== t.i && e.prev.i !== t.i && !eA(e, t) && ev(e, t) && ev(t, e) && eN(e, t);
    }
    function eT(e, t, n) {
        return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y);
    }
    function eg(e, t) {
        return e.x === t.x && e.y === t.y;
    }
    function eS(e, t, n, r) {
        return !!((eg(e, t) && eg(n, r)) || (eg(e, r) && eg(n, t))) || (eT(e, t, n) > 0 != eT(e, t, r) > 0 && eT(n, r, e) > 0 != eT(n, r, t) > 0);
    }
    function eA(e, t) {
        var n = e;
        do {
            if (n.i !== e.i && n.next.i !== e.i && n.i !== t.i && n.next.i !== t.i && eS(n, n.next, e, t)) return !0;
            n = n.next;
        } while (n !== e);
        return !1;
    }
    function ev(e, t) {
        return 0 > eT(e.prev, e, e.next) ? eT(e, t, e.next) >= 0 && eT(e, e.prev, t) >= 0 : 0 > eT(e, t, e.prev) || 0 > eT(e, e.next, t);
    }
    function eN(e, t) {
        var n = e,
            r = !1,
            i = (e.x + t.x) / 2,
            a = (e.y + t.y) / 2;
        do n.y > a != n.next.y > a && i < ((n.next.x - n.x) * (a - n.y)) / (n.next.y - n.y) + n.x && (r = !r), (n = n.next);
        while (n !== e);
        return r;
    }
    function eO(e, t) {
        var n = new ey(e.i, e.x, e.y),
            r = new ey(t.i, t.x, t.y),
            i = e.next,
            a = t.prev;
        return (e.next = t), (t.prev = e), (n.next = i), (i.prev = n), (r.next = n), (n.prev = r), (a.next = r), (r.prev = a), r;
    }
    function eR(e, t, n, r) {
        var i = new ey(e, t, n);
        return r ? ((i.next = r.next), (i.prev = r), (r.next.prev = i), (r.next = i)) : ((i.prev = i), (i.next = i)), i;
    }
    function eC(e) {
        (e.next.prev = e.prev), (e.prev.next = e.next), e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ);
    }
    function ey(e, t, n) {
        (this.i = e), (this.x = t), (this.y = n), (this.prev = null), (this.next = null), (this.z = null), (this.prevZ = null), (this.nextZ = null), (this.steiner = !1);
    }
    function eb(e, t, n, r) {
        for (var i = 0, a = t, o = n - r; a < n; a += r) (i += (e[o] - e[a]) * (e[a + 1] + e[o + 1])), (o = a);
        return i;
    }
    function eL(e, t) {
        var n = t.id,
            r = t.bbox,
            i = null == t.properties ? {} : t.properties,
            a = eD(e, t);
        return null == n && null == r
            ? {
                  type: 'Feature',
                  properties: i,
                  geometry: a
              }
            : null == r
              ? {
                    type: 'Feature',
                    id: n,
                    properties: i,
                    geometry: a
                }
              : {
                    type: 'Feature',
                    id: n,
                    bbox: r,
                    properties: i,
                    geometry: a
                };
    }
    function eD(e, t) {
        function n(e, t) {
            t.length && t.pop();
            for (var n = u[e < 0 ? ~e : e], r = 0, i = n.length; r < i; ++r) t.push(l(n[r], r));
            e < 0 && tR(t, i);
        }
        function r(e) {
            return l(e);
        }
        function i(e) {
            for (var t = [], r = 0, i = e.length; r < i; ++r) n(e[r], t);
            return t.length < 2 && t.push(t[0]), t;
        }
        function a(e) {
            for (var t = i(e); t.length < 4; ) t.push(t[0]);
            return t;
        }
        function o(e) {
            return e.map(a);
        }
        function s(e) {
            var t,
                n = e.type;
            switch (n) {
                case 'GeometryCollection':
                    return {
                        type: n,
                        geometries: e.geometries.map(s)
                    };
                case 'Point':
                    t = r(e.coordinates);
                    break;
                case 'MultiPoint':
                    t = e.coordinates.map(r);
                    break;
                case 'LineString':
                    t = i(e.arcs);
                    break;
                case 'MultiLineString':
                    t = e.arcs.map(i);
                    break;
                case 'Polygon':
                    t = o(e.arcs);
                    break;
                case 'MultiPolygon':
                    t = e.arcs.map(o);
                    break;
                default:
                    return null;
            }
            return {
                type: n,
                coordinates: t
            };
        }
        var l = tO(e.transform),
            u = e.arcs;
        return s(t);
    }
    function eM(e) {
        for (var t, n = -1, r = e.length, i = e[r - 1], a = 0; ++n < r; ) (t = i), (i = e[n]), (a += t[0] * i[1] - t[1] * i[0]);
        return Math.abs(a);
    }
    function eP(e, t) {
        function n(e) {
            switch (e.type) {
                case 'GeometryCollection':
                    e.geometries.forEach(n);
                    break;
                case 'Polygon':
                    r(e.arcs);
                    break;
                case 'MultiPolygon':
                    e.arcs.forEach(r);
            }
        }
        function r(e) {
            e.forEach(function (t) {
                t.forEach(function (t) {
                    (a[(t = t < 0 ? ~t : t)] || (a[t] = [])).push(e);
                });
            }),
                o.push(e);
        }
        function i(t) {
            return eM(
                eD(e, {
                    type: 'Polygon',
                    arcs: [t]
                }).coordinates[0]
            );
        }
        var a = {},
            o = [],
            s = [];
        return (
            t.forEach(n),
            o.forEach(function (e) {
                if (!e._) {
                    var t = [],
                        n = [e];
                    for (e._ = 1, s.push(t); (e = n.pop()); )
                        t.push(e),
                            e.forEach(function (e) {
                                e.forEach(function (e) {
                                    a[e < 0 ? ~e : e].forEach(function (e) {
                                        e._ || ((e._ = 1), n.push(e));
                                    });
                                });
                            });
                }
            }),
            o.forEach(function (e) {
                delete e._;
            }),
            {
                type: 'MultiPolygon',
                arcs: s.map(function (t) {
                    var n,
                        r = [];
                    if (
                        (t.forEach(function (e) {
                            e.forEach(function (e) {
                                e.forEach(function (e) {
                                    a[e < 0 ? ~e : e].length < 2 && r.push(e);
                                });
                            });
                        }),
                        (n = (r = ty(e, r)).length) > 1)
                    )
                        for (var o, s, l = 1, u = i(r[0]); l < n; ++l) (o = i(r[l])) > u && ((s = r[0]), (r[0] = r[l]), (r[l] = s), (u = o));
                    return r;
                })
            }
        );
    }
    function eU(e) {
        return function (t, n) {
            return tD(e(t), n);
        };
    }
    function ew(e, t) {
        var n = {},
            r = {
                type: 'Topology',
                objects: {
                    triangles: {
                        type: 'GeometryCollection',
                        geometries: []
                    }
                },
                arcs: []
            };
        return (
            e.forEach(function (e) {
                var i = [];
                e.forEach(function (e, a) {
                    var o = e[0] < e[1] ? e.join(',') : e[1] + ',' + e[0],
                        s = e.map(function (e) {
                            return t[e];
                        });
                    o in n ? i.push(~n[o]) : (i.push((n[o] = r.arcs.length)), r.arcs.push(s));
                }),
                    r.objects.triangles.geometries.push({
                        type: 'Polygon',
                        area: Math.abs(
                            e0(
                                e.map(function (e) {
                                    return t[e[0]];
                                })
                            )
                        ),
                        arcs: [i]
                    });
            }),
            r.objects.triangles.geometries.sort(function (e, t) {
                return e.area - t.area;
            }),
            r
        );
    }
    function ex(e, t) {
        for (
            var n = e.objects.triangles.geometries,
                r = tM(function (e) {
                    return e.area;
                }).left;
            n.length > t;

        )
            !(function () {
                var t = n[0],
                    i = tL(n)[0][0],
                    a = n[i],
                    o = eP(e, [t, a]);
                (o.area = t.area + a.area), (o.type = 'Polygon'), (o.arcs = o.arcs[0]), n.splice(i, 1), n.shift(), n.splice(r(n, o.area), 0, o);
            })();
        if (t > n.length) throw RangeError("Can't collapse topology into " + t + ' pieces.');
        return tC(e, e.objects.triangles).features.map(function (e) {
            return e.geometry.coordinates[0].pop(), e.geometry.coordinates[0];
        });
    }
    function eG(e) {
        for (
            var t = tv(
                    e.reduce(function (e, t) {
                        return e.concat([t[0]], [t[1]]);
                    }, [])
                ),
                n = [],
                r = 0,
                i = t.length;
            r < i;
            r += 3
        )
            n.push([
                [t[r], t[r + 1]],
                [t[r + 1], t[r + 2]],
                [t[r + 2], t[r]]
            ]);
        return n;
    }
    function ek(e, t, n) {
        function r(e, t, o) {
            void 0 === t && (t = []), void 0 === o && (o = 0);
            for (var s = 0; s < e.length; s++) {
                var l = e.splice(s, 1),
                    u = n[l[0]][t.length];
                o + u < i && (e.length ? r(e.slice(), t.concat(l), o + u) : ((i = o + u), (a = t.concat(l)))), e.length && e.splice(s, 0, l[0]);
            }
        }
        var i = 1 / 0,
            a = e.map(function (e, t) {
                return t;
            });
        return r(a), a;
    }
    function eB(e, t) {
        var n = U(F(e), F(t));
        return n * n;
    }
    function eF(e, t, n) {
        void 0 === n && (n = {});
        var r = n.maxSegmentLength;
        void 0 === r && (r = 10);
        var i = n.string;
        void 0 === i && (i = !0);
        var a = n.single;
        void 0 === a && (a = !1);
        var o = $(e, r);
        o.length < t.length + 2 && Q(o, t.length + 2 - o.length);
        var s,
            l = tP(o, t.length),
            u = t.map(function (e) {
                return $(e, r);
            }),
            c = 'string' == typeof e && e;
        return (
            (a &&
                !t.every(function (e) {
                    return 'string' == typeof e;
                })) ||
                (s = t.slice(0)),
            eH(l, u, {
                match: !0,
                string: i,
                single: a,
                t0: c,
                t1: s
            })
        );
    }
    function eZ(e, t, n) {
        void 0 === n && (n = {});
        var r = n.maxSegmentLength;
        void 0 === r && (r = 10);
        var i = n.string;
        void 0 === i && (i = !0);
        var a = n.single;
        void 0 === a && (a = !1);
        var o = eF(t, e, {
            maxSegmentLength: r,
            string: i,
            single: a
        });
        return a
            ? function (e) {
                  return o(1 - e);
              }
            : o.map(function (e) {
                  return function (t) {
                      return e(1 - t);
                  };
              });
    }
    function eV(e, t, n) {
        void 0 === n && (n = {});
        var r = n.maxSegmentLength;
        void 0 === r && (r = 10);
        var i = n.string;
        void 0 === i && (i = !0);
        var a = n.single;
        if ((void 0 === a && (a = !1), !Array.isArray(e) || !Array.isArray(t) || e.length !== t.length || !e.length)) throw TypeError(tg);
        var o,
            s,
            l = function (e) {
                return $(e, r);
            },
            u = e.map(l),
            c = t.map(l);
        return (
            a
                ? (e.every(function (e) {
                      return 'string' == typeof e;
                  }) && (o = e.slice(0)),
                  t.every(function (e) {
                      return 'string' == typeof e;
                  }) && (s = t.slice(0)))
                : ((o = e.slice(0)), (s = t.slice(0))),
            eH(u, c, {
                string: i,
                single: a,
                t0: o,
                t1: s,
                match: !1
            })
        );
    }
    function eH(e, t, n) {
        void 0 === n && (n = {});
        var r = n.string,
            i = n.single,
            a = n.t0,
            o = n.t1,
            s = n.match,
            l = s
                ? tU(e, t)
                : e.map(function (e, t) {
                      return t;
                  }),
            u = l.map(function (n, i) {
                return ee(e[n], t[i], r);
            });
        if (
            (s &&
                Array.isArray(a) &&
                (a = l.map(function (e) {
                    return a[e];
                })),
            i && r && (Array.isArray(a) && (a = a.join(' ')), Array.isArray(o) && (o = o.join(' '))),
            i)
        ) {
            var c = r
                ? function (e) {
                      return u
                          .map(function (t) {
                              return t(e);
                          })
                          .join(' ');
                  }
                : function (e) {
                      return u.map(function (t) {
                          return t(e);
                      });
                  };
            return r && (a || o)
                ? function (e) {
                      return (e < 0.0001 && a) || (1 - e < 0.0001 && o) || c(e);
                  }
                : c;
        }
        return r
            ? ((a = Array.isArray(a)
                  ? a.map(function (e) {
                        return 'string' == typeof e && e;
                    })
                  : []),
              (o = Array.isArray(o)
                  ? o.map(function (e) {
                        return 'string' == typeof e && e;
                    })
                  : []),
              u.map(function (e, t) {
                  return a[t] || o[t]
                      ? function (n) {
                            return (n < 0.0001 && a[t]) || (1 - n < 0.0001 && o[t]) || e(n);
                        }
                      : e;
              }))
            : u;
    }
    function eY(e, t, n, r, i) {
        return ez(eq(e, t, n), r, e$(e, t, n), 2 * Math.PI * n, i);
    }
    function ej(e, t, n, r, i) {
        var a = eY(t, n, r, e, i);
        return function (e) {
            return a(1 - e);
        };
    }
    function eW(e, t, n, r, i, a) {
        return ez(eQ(e, t, n, r), i, eJ(e, t, n, r), 2 * n + 2 * r, a);
    }
    function eK(e, t, n, r, i, a) {
        var o = eW(t, n, r, i, e, a);
        return function (e) {
            return o(1 - e);
        };
    }
    function ez(e, t, n, r, i) {
        void 0 === i && (i = {});
        var a = i.maxSegmentLength;
        void 0 === a && (a = 10);
        var o = i.string;
        void 0 === o && (o = !0);
        var s,
            l = $(t, a);
        return (
            B(r) && l.length < r / a && Q(l, Math.ceil(r / a - l.length)),
            (s = G(e(l), l, o)),
            o
                ? function (e) {
                      return e < 0.0001 ? n : s(e);
                  }
                : s
        );
    }
    function eq(e, t, n) {
        return function (r) {
            var i = F(r),
                a = e2(r.concat([r[0]])),
                o = Math.atan2(r[0][1] - i[1], r[0][0] - i[0]),
                s = 0;
            return r.map(function (i, l) {
                var u;
                return l && (s += U(i, r[l - 1])), [Math.cos((u = o + 2 * Math.PI * (a ? s / a : l / r.length))) * n + e, Math.sin(u) * n + t];
            });
        };
    }
    function eQ(e, t, n, r) {
        return function (i) {
            var a = F(i),
                o = e2(i.concat([i[0]])),
                s = Math.atan2(i[0][1] - a[1], i[0][0] - a[0]),
                l = 0;
            s < 0 && (s = 2 * Math.PI + s);
            var u = s / (2 * Math.PI);
            return i.map(function (a, s) {
                s && (l += U(a, i[s - 1]));
                var c = eX((u + (o ? l / o : s / i.length)) % 1);
                return [e + c[0] * n, t + c[1] * r];
            });
        };
    }
    function eX(e) {
        return e <= 1 / 8 ? [1, 0.5 + 4 * e] : e <= 3 / 8 ? [1.5 - 4 * e, 1] : e <= 5 / 8 ? [0, 2.5 - 4 * e] : e <= 7 / 8 ? [4 * e - 2.5, 0] : [1, 4 * e - 3.5];
    }
    function e$(e, t, n) {
        var r = e - n + ',' + t,
            i = e + n + ',' + t,
            a = 'A' + n + ',' + n + ',0,1,1,';
        return 'M' + r + a + i + a + r + 'Z';
    }
    function eJ(e, t, n, r) {
        var i = e + n,
            a = t + r;
        return 'M' + e + ',' + t + 'L' + i + ',' + t + 'L' + i + ',' + a + 'L' + e + ',' + a + 'Z';
    }
    var e0 = function (e) {
            for (var t, n = -1, r = e.length, i = e[r - 1], a = 0; ++n < r; ) (t = i), (i = e[n]), (a += t[1] * i[0] - t[0] * i[1]);
            return a / 2;
        },
        e1 = function (e) {
            for (var t, n, r = -1, i = e.length, a = 0, o = 0, s = e[i - 1], l = 0; ++r < i; ) (t = s), (s = e[r]), (l += n = t[0] * s[1] - s[0] * t[1]), (a += (t[0] + s[0]) * n), (o += (t[1] + s[1]) * n);
            return [a / (l *= 3), o / l];
        },
        e2 = function (e) {
            for (var t, n, r = -1, i = e.length, a = e[i - 1], o = a[0], s = a[1], l = 0; ++r < i; ) (t = o), (n = s), (o = (a = e[r])[0]), (s = a[1]), (t -= o), (n -= s), (l += Math.sqrt(t * t + n * n));
            return l;
        },
        e3 = {
            a: 7,
            c: 6,
            h: 1,
            l: 2,
            m: 2,
            r: 4,
            q: 4,
            s: 4,
            t: 2,
            v: 1,
            z: 0
        },
        e4 = [5760, 6158, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279],
        e5 = function (e) {
            var t = new a(e),
                n = t.max;
            for (o(t); t.index < n && !t.err.length; ) u(t);
            return (
                t.err.length ? (t.result = []) : t.result.length && (0 > 'mM'.indexOf(t.result[0][0]) ? ((t.err = 'SvgPath: string should start with `M` or `m`'), (t.result = [])) : (t.result[0][0] = 'M')),
                {
                    err: t.err,
                    segments: t.result
                }
            );
        };
    (d.prototype.matrix = function (e) {
        return (1 === e[0] && 0 === e[1] && 0 === e[2] && 1 === e[3] && 0 === e[4] && 0 === e[5]) || ((this.cache = null), this.queue.push(e)), this;
    }),
        (d.prototype.translate = function (e, t) {
            return (0 === e && 0 === t) || ((this.cache = null), this.queue.push([1, 0, 0, 1, e, t])), this;
        }),
        (d.prototype.scale = function (e, t) {
            return (1 === e && 1 === t) || ((this.cache = null), this.queue.push([e, 0, 0, t, 0, 0])), this;
        }),
        (d.prototype.rotate = function (e, t, n) {
            var r, i, a;
            return 0 !== e && (this.translate(t, n), (i = Math.cos((r = (e * Math.PI) / 180))), (a = Math.sin(r)), this.queue.push([i, a, -a, i, 0, 0]), (this.cache = null), this.translate(-t, -n)), this;
        }),
        (d.prototype.skewX = function (e) {
            return 0 !== e && ((this.cache = null), this.queue.push([1, 0, Math.tan((e * Math.PI) / 180), 1, 0, 0])), this;
        }),
        (d.prototype.skewY = function (e) {
            return 0 !== e && ((this.cache = null), this.queue.push([1, Math.tan((e * Math.PI) / 180), 0, 1, 0, 0])), this;
        }),
        (d.prototype.toArray = function () {
            var e = this;
            if (this.cache) return this.cache;
            if (!this.queue.length) return (this.cache = [1, 0, 0, 1, 0, 0]), this.cache;
            if (((this.cache = this.queue[0]), 1 === this.queue.length)) return this.cache;
            for (var t = 1; t < this.queue.length; t++) e.cache = c(e.cache, e.queue[t]);
            return this.cache;
        }),
        (d.prototype.calc = function (e, t, n) {
            var r;
            return this.queue.length ? (this.cache || (this.cache = this.toArray()), [e * (r = this.cache)[0] + t * r[2] + (n ? 0 : r[4]), e * r[1] + t * r[3] + (n ? 0 : r[5])]) : [e, t];
        });
    var e6 = d,
        e7 = {
            matrix: !0,
            scale: !0,
            rotate: !0,
            translate: !0,
            skewX: !0,
            skewY: !0
        },
        e8 = /\s*(matrix|translate|scale|rotate|skewX|skewY)\s*\(\s*(.+?)\s*\)[\s,]*/,
        e9 = /[\s,]+/,
        te = function (e) {
            var t,
                n,
                r = new e6();
            return (
                e.split(e8).forEach(function (e) {
                    if (e.length) {
                        if (void 0 !== e7[e]) return void (t = e);
                        switch (
                            ((n = e.split(e9).map(function (e) {
                                return +e || 0;
                            })),
                            t)
                        ) {
                            case 'matrix':
                                return void (6 === n.length && r.matrix(n));
                            case 'scale':
                                return void (1 === n.length ? r.scale(n[0], n[0]) : 2 === n.length && r.scale(n[0], n[1]));
                            case 'rotate':
                                return void (1 === n.length ? r.rotate(n[0], 0, 0) : 3 === n.length && r.rotate(n[0], n[1], n[2]));
                            case 'translate':
                                return void (1 === n.length ? r.translate(n[0], 0) : 2 === n.length && r.translate(n[0], n[1]));
                            case 'skewX':
                                return void (1 === n.length && r.skewX(n[0]));
                            case 'skewY':
                                return void (1 === n.length && r.skewY(n[0]));
                        }
                    }
                }),
                r
            );
        },
        tt = 2 * Math.PI,
        tn = function (e, t, n, r, i, a, o, s, l) {
            var u = Math.sin((l * tt) / 360),
                c = Math.cos((l * tt) / 360),
                d = (c * (e - n)) / 2 + (u * (t - r)) / 2,
                _ = (-u * (e - n)) / 2 + (c * (t - r)) / 2;
            if ((0 === d && 0 === _) || 0 === o || 0 === s) return [];
            o = Math.abs(o);
            var h = (d * d) / (o * o) + (_ * _) / ((s = Math.abs(s)) * s);
            h > 1 && ((o *= Math.sqrt(h)), (s *= Math.sqrt(h)));
            var p = E(e, t, n, r, i, a, o, s, u, c),
                m = [],
                I = p[2],
                T = p[3],
                g = Math.max(Math.ceil(Math.abs(T) / (tt / 4)), 1);
            T /= g;
            for (var S = 0; S < g; S++) m.push(f(I, T)), (I += T);
            return m.map(function (e) {
                for (var t = 0; t < e.length; t += 2) {
                    var n = e[t + 0],
                        r = e[t + 1];
                    n *= o;
                    var i = c * n - u * (r *= s),
                        a = u * n + c * r;
                    (e[t + 0] = i + p[0]), (e[t + 1] = a + p[1]);
                }
                return e;
            });
        },
        tr = Math.PI / 180;
    (h.prototype.transform = function (e) {
        var t = Math.cos(this.ax * tr),
            n = Math.sin(this.ax * tr),
            r = [this.rx * (e[0] * t + e[2] * n), this.rx * (e[1] * t + e[3] * n), this.ry * (-e[0] * n + e[2] * t), this.ry * (-e[1] * n + e[3] * t)],
            i = r[0] * r[0] + r[2] * r[2],
            a = r[1] * r[1] + r[3] * r[3],
            o = ((r[0] - r[3]) * (r[0] - r[3]) + (r[2] + r[1]) * (r[2] + r[1])) * ((r[0] + r[3]) * (r[0] + r[3]) + (r[2] - r[1]) * (r[2] - r[1])),
            s = (i + a) / 2;
        if (o < 1e-10 * s) return (this.rx = this.ry = Math.sqrt(s)), (this.ax = 0), this;
        var l = r[0] * r[1] + r[2] * r[3],
            u = s + (o = Math.sqrt(o)) / 2,
            c = s - o / 2;
        return (this.ax = 1e-10 > Math.abs(l) && 1e-10 > Math.abs(u - a) ? 90 : (180 * Math.atan(Math.abs(l) > Math.abs(u - a) ? (u - i) / l : l / (u - a))) / Math.PI), this.ax >= 0 ? ((this.rx = Math.sqrt(u)), (this.ry = Math.sqrt(c))) : ((this.ax += 90), (this.rx = Math.sqrt(c)), (this.ry = Math.sqrt(u))), this;
    }),
        (h.prototype.isDegenerate = function () {
            return this.rx < 1e-10 * this.ry || this.ry < 1e-10 * this.rx;
        });
    var ti = h;
    (p.prototype.__matrix = function (e) {
        var t,
            n = this;
        e.queue.length &&
            this.iterate(function (r, i, a, o) {
                var s, l, u, c;
                switch (r[0]) {
                    case 'v':
                        l = 0 === (s = e.calc(0, r[1], !0))[0] ? ['v', s[1]] : ['l', s[0], s[1]];
                        break;
                    case 'V':
                        l = (s = e.calc(a, r[1], !1))[0] === e.calc(a, o, !1)[0] ? ['V', s[1]] : ['L', s[0], s[1]];
                        break;
                    case 'h':
                        l = 0 === (s = e.calc(r[1], 0, !0))[1] ? ['h', s[0]] : ['l', s[0], s[1]];
                        break;
                    case 'H':
                        l = (s = e.calc(r[1], o, !1))[1] === e.calc(a, o, !1)[1] ? ['H', s[0]] : ['L', s[0], s[1]];
                        break;
                    case 'a':
                    case 'A':
                        var d = e.toArray(),
                            _ = ti(r[1], r[2], r[3]).transform(d);
                        if ((d[0] * d[3] - d[1] * d[2] < 0 && (r[5] = r[5] ? '0' : '1'), (s = e.calc(r[6], r[7], 'a' === r[0])), ('A' === r[0] && r[6] === a && r[7] === o) || ('a' === r[0] && 0 === r[6] && 0 === r[7]))) {
                            l = ['a' === r[0] ? 'l' : 'L', s[0], s[1]];
                            break;
                        }
                        l = _.isDegenerate() ? ['a' === r[0] ? 'l' : 'L', s[0], s[1]] : [r[0], _.rx, _.ry, _.ax, r[4], r[5], s[0], s[1]];
                        break;
                    case 'm':
                        (c = i > 0), (l = ['m', (s = e.calc(r[1], r[2], c))[0], s[1]]);
                        break;
                    default:
                        for (l = [(u = r[0])], c = u.toLowerCase() === u, t = 1; t < r.length; t += 2) (s = e.calc(r[t], r[t + 1], c)), l.push(s[0], s[1]);
                }
                n.segments[i] = l;
            }, !0);
    }),
        (p.prototype.__evaluateStack = function () {
            var e,
                t,
                n = this;
            if (this.__stack.length) {
                if (1 === this.__stack.length) return this.__matrix(this.__stack[0]), void (this.__stack = []);
                for (e = e6(), t = this.__stack.length; --t >= 0; ) e.matrix(n.__stack[t].toArray());
                this.__matrix(e), (this.__stack = []);
            }
        }),
        (p.prototype.toString = function () {
            var e,
                t,
                n = this,
                r = [];
            this.__evaluateStack();
            for (var i = 0; i < this.segments.length; i++) (t = n.segments[i][0]), (e = i > 0 && 'm' !== t && 'M' !== t && t === n.segments[i - 1][0]), (r = r.concat(e ? n.segments[i].slice(1) : n.segments[i]));
            return r
                .join(' ')
                .replace(/ ?([achlmqrstvz]) ?/gi, '$1')
                .replace(/ \-/g, '-')
                .replace(/zm/g, 'z m');
        }),
        (p.prototype.translate = function (e, t) {
            return this.__stack.push(e6().translate(e, t || 0)), this;
        }),
        (p.prototype.scale = function (e, t) {
            return this.__stack.push(e6().scale(e, t || 0 === t ? t : e)), this;
        }),
        (p.prototype.rotate = function (e, t, n) {
            return this.__stack.push(e6().rotate(e, t || 0, n || 0)), this;
        }),
        (p.prototype.skewX = function (e) {
            return this.__stack.push(e6().skewX(e)), this;
        }),
        (p.prototype.skewY = function (e) {
            return this.__stack.push(e6().skewY(e)), this;
        }),
        (p.prototype.matrix = function (e) {
            return this.__stack.push(e6().matrix(e)), this;
        }),
        (p.prototype.transform = function (e) {
            return e.trim() && this.__stack.push(te(e)), this;
        }),
        (p.prototype.round = function (e) {
            var t,
                n = 0,
                r = 0,
                i = 0,
                a = 0;
            return (
                (e = e || 0),
                this.__evaluateStack(),
                this.segments.forEach(function (o) {
                    var s = o[0].toLowerCase() === o[0];
                    switch (o[0]) {
                        case 'H':
                        case 'h':
                            return s && (o[1] += i), (i = o[1] - o[1].toFixed(e)), void (o[1] = +o[1].toFixed(e));
                        case 'V':
                        case 'v':
                            return s && (o[1] += a), (a = o[1] - o[1].toFixed(e)), void (o[1] = +o[1].toFixed(e));
                        case 'Z':
                        case 'z':
                            return (i = n), void (a = r);
                        case 'M':
                        case 'm':
                            return s && ((o[1] += i), (o[2] += a)), (i = o[1] - o[1].toFixed(e)), (a = o[2] - o[2].toFixed(e)), (n = i), (r = a), (o[1] = +o[1].toFixed(e)), void (o[2] = +o[2].toFixed(e));
                        case 'A':
                        case 'a':
                            return s && ((o[6] += i), (o[7] += a)), (i = o[6] - o[6].toFixed(e)), (a = o[7] - o[7].toFixed(e)), (o[1] = +o[1].toFixed(e)), (o[2] = +o[2].toFixed(e)), (o[3] = +o[3].toFixed(e + 2)), (o[6] = +o[6].toFixed(e)), void (o[7] = +o[7].toFixed(e));
                        default:
                            return (
                                (t = o.length),
                                s && ((o[t - 2] += i), (o[t - 1] += a)),
                                (i = o[t - 2] - o[t - 2].toFixed(e)),
                                (a = o[t - 1] - o[t - 1].toFixed(e)),
                                void o.forEach(function (t, n) {
                                    n && (o[n] = +o[n].toFixed(e));
                                })
                            );
                    }
                }),
                this
            );
        }),
        (p.prototype.iterate = function (e, t) {
            var n,
                r,
                i,
                a = this.segments,
                o = {},
                s = !1,
                l = 0,
                u = 0,
                c = 0,
                d = 0;
            if (
                (t || this.__evaluateStack(),
                a.forEach(function (t, n) {
                    var r = e(t, n, l, u);
                    Array.isArray(r) && ((o[n] = r), (s = !0));
                    var i = t[0] === t[0].toLowerCase();
                    switch (t[0]) {
                        case 'm':
                        case 'M':
                            return (l = t[1] + (i ? l : 0)), (u = t[2] + (i ? u : 0)), (c = l), void (d = u);
                        case 'h':
                        case 'H':
                            return void (l = t[1] + (i ? l : 0));
                        case 'v':
                        case 'V':
                            return void (u = t[1] + (i ? u : 0));
                        case 'z':
                        case 'Z':
                            return (l = c), void (u = d);
                        default:
                            (l = t[t.length - 2] + (i ? l : 0)), (u = t[t.length - 1] + (i ? u : 0));
                    }
                }),
                !s)
            )
                return this;
            for (i = [], n = 0; n < a.length; n++)
                if (void 0 !== o[n]) for (r = 0; r < o[n].length; r++) i.push(o[n][r]);
                else i.push(a[n]);
            return (this.segments = i), this;
        }),
        (p.prototype.abs = function () {
            return (
                this.iterate(function (e, t, n, r) {
                    var i,
                        a = e[0],
                        o = a.toUpperCase();
                    if (a !== o)
                        switch (((e[0] = o), a)) {
                            case 'v':
                                return void (e[1] += r);
                            case 'a':
                                return (e[6] += n), void (e[7] += r);
                            default:
                                for (i = 1; i < e.length; i++) e[i] += i % 2 ? n : r;
                        }
                }, !0),
                this
            );
        }),
        (p.prototype.rel = function () {
            return (
                this.iterate(function (e, t, n, r) {
                    var i,
                        a = e[0],
                        o = a.toLowerCase();
                    if (a !== o && (0 !== t || 'M' !== a))
                        switch (((e[0] = o), a)) {
                            case 'V':
                                return void (e[1] -= r);
                            case 'A':
                                return (e[6] -= n), void (e[7] -= r);
                            default:
                                for (i = 1; i < e.length; i++) e[i] -= i % 2 ? n : r;
                        }
                }, !0),
                this
            );
        }),
        (p.prototype.unarc = function () {
            return (
                this.iterate(function (e, t, n, r) {
                    var i,
                        a,
                        o,
                        s = [],
                        l = e[0];
                    return 'A' !== l && 'a' !== l
                        ? null
                        : ('a' === l ? ((a = n + e[6]), (o = r + e[7])) : ((a = e[6]), (o = e[7])),
                          0 === (i = tn(n, r, a, o, e[4], e[5], e[1], e[2], e[3])).length
                              ? [['a' === e[0] ? 'l' : 'L', e[6], e[7]]]
                              : (i.forEach(function (e) {
                                    s.push(['C', e[2], e[3], e[4], e[5], e[6], e[7]]);
                                }),
                                s));
                }),
                this
            );
        }),
        (p.prototype.unshort = function () {
            var e,
                t,
                n,
                r,
                i,
                a = this.segments;
            return (
                this.iterate(function (o, s, l, u) {
                    var c,
                        d = o[0],
                        _ = d.toUpperCase();
                    s && ('T' === _ ? ((c = 't' === d), 'Q' === (n = a[s - 1])[0] ? ((e = n[1] - l), (t = n[2] - u)) : 'q' === n[0] ? ((e = n[1] - n[3]), (t = n[2] - n[4])) : ((e = 0), (t = 0)), (r = -e), (i = -t), c || ((r += l), (i += u)), (a[s] = [c ? 'q' : 'Q', r, i, o[1], o[2]])) : 'S' === _ && ((c = 's' === d), 'C' === (n = a[s - 1])[0] ? ((e = n[3] - l), (t = n[4] - u)) : 'c' === n[0] ? ((e = n[3] - n[5]), (t = n[4] - n[6])) : ((e = 0), (t = 0)), (r = -e), (i = -t), c || ((r += l), (i += u)), (a[s] = [c ? 'c' : 'C', r, i, o[1], o[2], o[3], o[4]])));
                }),
                this
            );
        });
    var ta = p,
        to = {
            a: 7,
            c: 6,
            h: 1,
            l: 2,
            m: 2,
            q: 4,
            s: 4,
            t: 2,
            v: 1,
            z: 0
        },
        ts = /([astvzqmhlc])([^astvzqmhlc]*)/gi,
        tl = function (e) {
            var t = [];
            return (
                e.replace(ts, function (e, n, r) {
                    var i = n.toLowerCase();
                    for (r = m(r), 'm' === i && r.length > 2 && (t.push([n].concat(r.splice(0, 2))), (i = 'l'), (n = 'm' === n ? 'l' : 'L')); r.length >= 0; ) {
                        if (r.length === to[i]) return r.unshift(n), t.push(r);
                        if (r.length < to[i]) throw Error('malformed path data');
                        t.push([n].concat(r.splice(0, to[i])));
                    }
                }),
                t
            );
        },
        tu = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi,
        tc = function (e, t, n, r, i, a, o, s) {
            return new I(e, t, n, r, i, a, o, s);
        };
    I.prototype = {
        constructor: I,
        init: function () {
            this.length = this.getArcLength([this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y]);
        },
        getTotalLength: function () {
            return this.length;
        },
        getPointAtLength: function (e) {
            var t = S(e, this.length, this.getArcLength, [this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y]);
            return this.getPoint([this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y], t);
        },
        getTangentAtLength: function (e) {
            var t = S(e, this.length, this.getArcLength, [this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y]),
                n = this.getDerivative([this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y], t),
                r = Math.sqrt(n.x * n.x + n.y * n.y);
            return r > 0
                ? {
                      x: n.x / r,
                      y: n.y / r
                  }
                : {
                      x: 0,
                      y: 0
                  };
        },
        getPropertiesAtLength: function (e) {
            var t,
                n = S(e, this.length, this.getArcLength, [this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y]),
                r = this.getDerivative([this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y], n),
                i = Math.sqrt(r.x * r.x + r.y * r.y);
            t =
                i > 0
                    ? {
                          x: r.x / i,
                          y: r.y / i
                      }
                    : {
                          x: 0,
                          y: 0
                      };
            var a = this.getPoint([this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y], n);
            return {
                x: a.x,
                y: a.y,
                tangentX: t.x,
                tangentY: t.y
            };
        }
    };
    var td = [
            [],
            [],
            [-0.5773502691896257, 0.5773502691896257],
            [0, -0.7745966692414834, 0.7745966692414834],
            [-0.33998104358485626, 0.33998104358485626, -0.8611363115940526, 0.8611363115940526],
            [0, -0.5384693101056831, 0.5384693101056831, -0.906179845938664, 0.906179845938664],
            [0.6612093864662645, -0.6612093864662645, -0.2386191860831969, 0.2386191860831969, -0.932469514203152, 0.932469514203152],
            [0, 0.4058451513773972, -0.4058451513773972, -0.7415311855993945, 0.7415311855993945, -0.9491079123427585, 0.9491079123427585],
            [-0.1834346424956498, 0.1834346424956498, -0.525532409916329, 0.525532409916329, -0.7966664774136267, 0.7966664774136267, -0.9602898564975363, 0.9602898564975363],
            [0, -0.8360311073266358, 0.8360311073266358, -0.9681602395076261, 0.9681602395076261, -0.3242534234038089, 0.3242534234038089, -0.6133714327005904, 0.6133714327005904],
            [-0.14887433898163122, 0.14887433898163122, -0.4333953941292472, 0.4333953941292472, -0.6794095682990244, 0.6794095682990244, -0.8650633666889845, 0.8650633666889845, -0.9739065285171717, 0.9739065285171717],
            [0, -0.26954315595234496, 0.26954315595234496, -0.5190961292068118, 0.5190961292068118, -0.7301520055740494, 0.7301520055740494, -0.8870625997680953, 0.8870625997680953, -0.978228658146057, 0.978228658146057],
            [-0.1252334085114689, 0.1252334085114689, -0.3678314989981802, 0.3678314989981802, -0.5873179542866175, 0.5873179542866175, -0.7699026741943047, 0.7699026741943047, -0.9041172563704749, 0.9041172563704749, -0.9815606342467192, 0.9815606342467192],
            [0, -0.2304583159551348, 0.2304583159551348, -0.44849275103644687, 0.44849275103644687, -0.6423493394403402, 0.6423493394403402, -0.8015780907333099, 0.8015780907333099, -0.9175983992229779, 0.9175983992229779, -0.9841830547185881, 0.9841830547185881],
            [-0.10805494870734367, 0.10805494870734367, -0.31911236892788974, 0.31911236892788974, -0.5152486363581541, 0.5152486363581541, -0.6872929048116855, 0.6872929048116855, -0.827201315069765, 0.827201315069765, -0.9284348836635735, 0.9284348836635735, -0.9862838086968123, 0.9862838086968123],
            [0, -0.20119409399743451, 0.20119409399743451, -0.3941513470775634, 0.3941513470775634, -0.5709721726085388, 0.5709721726085388, -0.7244177313601701, 0.7244177313601701, -0.8482065834104272, 0.8482065834104272, -0.937273392400706, 0.937273392400706, -0.9879925180204854, 0.9879925180204854],
            [-0.09501250983763744, 0.09501250983763744, -0.2816035507792589, 0.2816035507792589, -0.45801677765722737, 0.45801677765722737, -0.6178762444026438, 0.6178762444026438, -0.755404408355003, 0.755404408355003, -0.8656312023878318, 0.8656312023878318, -0.9445750230732326, 0.9445750230732326, -0.9894009349916499, 0.9894009349916499],
            [0, -0.17848418149584785, 0.17848418149584785, -0.3512317634538763, 0.3512317634538763, -0.5126905370864769, 0.5126905370864769, -0.6576711592166907, 0.6576711592166907, -0.7815140038968014, 0.7815140038968014, -0.8802391537269859, 0.8802391537269859, -0.9506755217687678, 0.9506755217687678, -0.9905754753144174, 0.9905754753144174],
            [-0.0847750130417353, 0.0847750130417353, -0.2518862256915055, 0.2518862256915055, -0.41175116146284263, 0.41175116146284263, -0.5597708310739475, 0.5597708310739475, -0.6916870430603532, 0.6916870430603532, -0.8037049589725231, 0.8037049589725231, -0.8926024664975557, 0.8926024664975557, -0.9558239495713977, 0.9558239495713977, -0.9915651684209309, 0.9915651684209309],
            [0, -0.16035864564022537, 0.16035864564022537, -0.31656409996362983, 0.31656409996362983, -0.46457074137596094, 0.46457074137596094, -0.600545304661681, 0.600545304661681, -0.7209661773352294, 0.7209661773352294, -0.8227146565371428, 0.8227146565371428, -0.9031559036148179, 0.9031559036148179, -0.96020815213483, 0.96020815213483, -0.9924068438435844, 0.9924068438435844],
            [-0.07652652113349734, 0.07652652113349734, -0.22778585114164507, 0.22778585114164507, -0.37370608871541955, 0.37370608871541955, -0.5108670019508271, 0.5108670019508271, -0.636053680726515, 0.636053680726515, -0.7463319064601508, 0.7463319064601508, -0.8391169718222188, 0.8391169718222188, -0.912234428251326, 0.912234428251326, -0.9639719272779138, 0.9639719272779138, -0.9931285991850949, 0.9931285991850949],
            [0, -0.1455618541608951, 0.1455618541608951, -0.2880213168024011, 0.2880213168024011, -0.4243421202074388, 0.4243421202074388, -0.5516188358872198, 0.5516188358872198, -0.6671388041974123, 0.6671388041974123, -0.7684399634756779, 0.7684399634756779, -0.8533633645833173, 0.8533633645833173, -0.9200993341504008, 0.9200993341504008, -0.9672268385663063, 0.9672268385663063, -0.9937521706203895, 0.9937521706203895],
            [-0.06973927331972223, 0.06973927331972223, -0.20786042668822127, 0.20786042668822127, -0.34193582089208424, 0.34193582089208424, -0.469355837986757, 0.469355837986757, -0.5876404035069116, 0.5876404035069116, -0.6944872631866827, 0.6944872631866827, -0.7878168059792081, 0.7878168059792081, -0.8658125777203002, 0.8658125777203002, -0.926956772187174, 0.926956772187174, -0.9700604978354287, 0.9700604978354287, -0.9942945854823992, 0.9942945854823992],
            [0, -0.1332568242984661, 0.1332568242984661, -0.26413568097034495, 0.26413568097034495, -0.3903010380302908, 0.3903010380302908, -0.5095014778460075, 0.5095014778460075, -0.6196098757636461, 0.6196098757636461, -0.7186613631319502, 0.7186613631319502, -0.8048884016188399, 0.8048884016188399, -0.8767523582704416, 0.8767523582704416, -0.9329710868260161, 0.9329710868260161, -0.9725424712181152, 0.9725424712181152, -0.9947693349975522, 0.9947693349975522],
            [-0.06405689286260563, 0.06405689286260563, -0.1911188674736163, 0.1911188674736163, -0.3150426796961634, 0.3150426796961634, -0.4337935076260451, 0.4337935076260451, -0.5454214713888396, 0.5454214713888396, -0.6480936519369755, 0.6480936519369755, -0.7401241915785544, 0.7401241915785544, -0.820001985973903, 0.820001985973903, -0.8864155270044011, 0.8864155270044011, -0.9382745520027328, 0.9382745520027328, -0.9747285559713095, 0.9747285559713095, -0.9951872199970213, 0.9951872199970213]
        ],
        t_ = [
            [],
            [],
            [1, 1],
            [0.8888888888888888, 0.5555555555555556, 0.5555555555555556],
            [0.6521451548625461, 0.6521451548625461, 0.34785484513745385, 0.34785484513745385],
            [0.5688888888888889, 0.47862867049936647, 0.47862867049936647, 0.23692688505618908, 0.23692688505618908],
            [0.3607615730481386, 0.3607615730481386, 0.46791393457269104, 0.46791393457269104, 0.17132449237917036, 0.17132449237917036],
            [0.4179591836734694, 0.3818300505051189, 0.3818300505051189, 0.27970539148927664, 0.27970539148927664, 0.1294849661688697, 0.1294849661688697],
            [0.362683783378362, 0.362683783378362, 0.31370664587788727, 0.31370664587788727, 0.22238103445337448, 0.22238103445337448, 0.10122853629037626, 0.10122853629037626],
            [0.3302393550012598, 0.1806481606948574, 0.1806481606948574, 0.08127438836157441, 0.08127438836157441, 0.31234707704000286, 0.31234707704000286, 0.26061069640293544, 0.26061069640293544],
            [0.29552422471475287, 0.29552422471475287, 0.26926671930999635, 0.26926671930999635, 0.21908636251598204, 0.21908636251598204, 0.1494513491505806, 0.1494513491505806, 0.06667134430868814, 0.06667134430868814],
            [0.2729250867779006, 0.26280454451024665, 0.26280454451024665, 0.23319376459199048, 0.23319376459199048, 0.18629021092773426, 0.18629021092773426, 0.1255803694649046, 0.1255803694649046, 0.05566856711617366, 0.05566856711617366],
            [0.24914704581340277, 0.24914704581340277, 0.2334925365383548, 0.2334925365383548, 0.20316742672306592, 0.20316742672306592, 0.16007832854334622, 0.16007832854334622, 0.10693932599531843, 0.10693932599531843, 0.04717533638651183, 0.04717533638651183],
            [0.2325515532308739, 0.22628318026289723, 0.22628318026289723, 0.2078160475368885, 0.2078160475368885, 0.17814598076194574, 0.17814598076194574, 0.13887351021978725, 0.13887351021978725, 0.09212149983772845, 0.09212149983772845, 0.04048400476531588, 0.04048400476531588],
            [0.2152638534631578, 0.2152638534631578, 0.2051984637212956, 0.2051984637212956, 0.18553839747793782, 0.18553839747793782, 0.15720316715819355, 0.15720316715819355, 0.12151857068790319, 0.12151857068790319, 0.08015808715976021, 0.08015808715976021, 0.03511946033175186, 0.03511946033175186],
            [0.2025782419255613, 0.19843148532711158, 0.19843148532711158, 0.1861610000155622, 0.1861610000155622, 0.16626920581699392, 0.16626920581699392, 0.13957067792615432, 0.13957067792615432, 0.10715922046717194, 0.10715922046717194, 0.07036604748810812, 0.07036604748810812, 0.03075324199611727, 0.03075324199611727],
            [0.1894506104550685, 0.1894506104550685, 0.18260341504492358, 0.18260341504492358, 0.16915651939500254, 0.16915651939500254, 0.14959598881657674, 0.14959598881657674, 0.12462897125553388, 0.12462897125553388, 0.09515851168249279, 0.09515851168249279, 0.062253523938647894, 0.062253523938647894, 0.027152459411754096, 0.027152459411754096],
            [0.17944647035620653, 0.17656270536699264, 0.17656270536699264, 0.16800410215645004, 0.16800410215645004, 0.15404576107681028, 0.15404576107681028, 0.13513636846852548, 0.13513636846852548, 0.11188384719340397, 0.11188384719340397, 0.08503614831717918, 0.08503614831717918, 0.0554595293739872, 0.0554595293739872, 0.02414830286854793, 0.02414830286854793],
            [0.1691423829631436, 0.1691423829631436, 0.16427648374583273, 0.16427648374583273, 0.15468467512626524, 0.15468467512626524, 0.14064291467065065, 0.14064291467065065, 0.12255520671147846, 0.12255520671147846, 0.10094204410628717, 0.10094204410628717, 0.07642573025488905, 0.07642573025488905, 0.0497145488949698, 0.0497145488949698, 0.02161601352648331, 0.02161601352648331],
            [0.1610544498487837, 0.15896884339395434, 0.15896884339395434, 0.15276604206585967, 0.15276604206585967, 0.1426067021736066, 0.1426067021736066, 0.12875396253933621, 0.12875396253933621, 0.11156664554733399, 0.11156664554733399, 0.09149002162245, 0.09149002162245, 0.06904454273764123, 0.06904454273764123, 0.0448142267656996, 0.0448142267656996, 0.019461788229726478, 0.019461788229726478],
            [0.15275338713072584, 0.15275338713072584, 0.14917298647260374, 0.14917298647260374, 0.14209610931838204, 0.14209610931838204, 0.13168863844917664, 0.13168863844917664, 0.11819453196151841, 0.11819453196151841, 0.10193011981724044, 0.10193011981724044, 0.08327674157670475, 0.08327674157670475, 0.06267204833410907, 0.06267204833410907, 0.04060142980038694, 0.04060142980038694, 0.017614007139152118, 0.017614007139152118],
            [0.14608113364969041, 0.14452440398997005, 0.14452440398997005, 0.13988739479107315, 0.13988739479107315, 0.13226893863333747, 0.13226893863333747, 0.12183141605372853, 0.12183141605372853, 0.10879729916714838, 0.10879729916714838, 0.09344442345603386, 0.09344442345603386, 0.0761001136283793, 0.0761001136283793, 0.057134425426857205, 0.057134425426857205, 0.036953789770852494, 0.036953789770852494, 0.016017228257774335, 0.016017228257774335],
            [0.13925187285563198, 0.13925187285563198, 0.13654149834601517, 0.13654149834601517, 0.13117350478706238, 0.13117350478706238, 0.12325237681051242, 0.12325237681051242, 0.11293229608053922, 0.11293229608053922, 0.10041414444288096, 0.10041414444288096, 0.08594160621706773, 0.08594160621706773, 0.06979646842452049, 0.06979646842452049, 0.052293335152683286, 0.052293335152683286, 0.03377490158481415, 0.03377490158481415, 0.0146279952982722, 0.0146279952982722],
            [0.13365457218610619, 0.1324620394046966, 0.1324620394046966, 0.12890572218808216, 0.12890572218808216, 0.12304908430672953, 0.12304908430672953, 0.11499664022241136, 0.11499664022241136, 0.10489209146454141, 0.10489209146454141, 0.09291576606003515, 0.09291576606003515, 0.07928141177671895, 0.07928141177671895, 0.06423242140852585, 0.06423242140852585, 0.04803767173108467, 0.04803767173108467, 0.030988005856979445, 0.030988005856979445, 0.013411859487141771, 0.013411859487141771],
            [0.12793819534675216, 0.12793819534675216, 0.1258374563468283, 0.1258374563468283, 0.12167047292780339, 0.12167047292780339, 0.1155056680537256, 0.1155056680537256, 0.10744427011596563, 0.10744427011596563, 0.09761865210411388, 0.09761865210411388, 0.08619016153195327, 0.08619016153195327, 0.0733464814110803, 0.0733464814110803, 0.05929858491543678, 0.05929858491543678, 0.04427743881741981, 0.04427743881741981, 0.028531388628933663, 0.028531388628933663, 0.0123412297999872, 0.0123412297999872]
        ],
        tE = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]],
        tf = 2 * Math.PI,
        th = function (e, t, n, r, i, a, o, s, l) {
            var u = Math.sin((i * tf) / 360),
                c = Math.cos((i * tf) / 360),
                d = (c * (e - s)) / 2 + (u * (t - l)) / 2,
                _ = (-u * (e - s)) / 2 + (c * (t - l)) / 2;
            if ((0 === d && 0 === _) || 0 === n || 0 === r) return [];
            n = Math.abs(n);
            var E = (d * d) / (n * n) + (_ * _) / ((r = Math.abs(r)) * r);
            E > 1 && ((n *= Math.sqrt(E)), (r *= Math.sqrt(E)));
            var f = L(e, t, s, l, a, o, n, r, u, c),
                h = [],
                p = f[2],
                m = f[3],
                I = Math.max(Math.ceil(Math.abs(m) / (tf / 4)), 1);
            m /= I;
            for (var T = 0; T < I; T++) h.push(D(p, m)), (p += m);
            return h.map(function (e) {
                for (var t = 0; t < e.length; t += 2) {
                    var i = e[t + 0],
                        a = e[t + 1];
                    i *= n;
                    var o = c * i - u * (a *= r),
                        s = u * i + c * a;
                    (e[t + 0] = o + f[0]), (e[t + 1] = s + f[1]);
                }
                return e;
            });
        },
        tp = function (e, t, n, r, i, a, o, s, l) {
            return new M(e, t, n, r, i, a, o, s, l);
        };
    M.prototype = {
        constructor: M,
        init: function () {},
        getTotalLength: function () {
            return this.length;
        },
        getPointAtLength: function (e) {
            var t = this;
            e < 0 ? (e = 0) : e > this.length && (e = this.length);
            for (var n = this.partialLengths.length - 1; this.partialLengths[n] >= e && this.partialLengths[n] > 0; ) n--;
            n < this.partialLengths.length - 1 && n++;
            for (var r = 0, i = 0; i < n; i++) r += t.partialLengths[i];
            return this.curves[n].getPointAtLength(e - r);
        },
        getTangentAtLength: function (e) {
            var t = this;
            e < 0 ? (e = 0) : e > this.length && (e = this.length);
            for (var n = this.partialLengths.length - 1; this.partialLengths[n] >= e && this.partialLengths[n] > 0; ) n--;
            n < this.partialLengths.length - 1 && n++;
            for (var r = 0, i = 0; i < n; i++) r += t.partialLengths[i];
            return this.curves[n].getTangentAtLength(e - r);
        },
        getPropertiesAtLength: function (e) {
            var t = this.getTangentAtLength(e),
                n = this.getPointAtLength(e);
            return {
                x: n.x,
                y: n.y,
                tangentX: t.x,
                tangentY: t.y
            };
        }
    };
    var tm = function (e, t, n, r) {
        return new P(e, t, n, r);
    };
    (P.prototype.getTotalLength = function () {
        return Math.sqrt(Math.pow(this.x0 - this.x1, 2) + Math.pow(this.y0 - this.y1, 2));
    }),
        (P.prototype.getPointAtLength = function (e) {
            var t = e / Math.sqrt(Math.pow(this.x0 - this.x1, 2) + Math.pow(this.y0 - this.y1, 2)),
                n = (this.x1 - this.x0) * t,
                r = (this.y1 - this.y0) * t;
            return {
                x: this.x0 + n,
                y: this.y0 + r
            };
        }),
        (P.prototype.getTangentAtLength = function () {
            var e = Math.sqrt((this.x1 - this.x0) * (this.x1 - this.x0) + (this.y1 - this.y0) * (this.y1 - this.y0));
            return {
                x: (this.x1 - this.x0) / e,
                y: (this.y1 - this.y0) / e
            };
        }),
        (P.prototype.getPropertiesAtLength = function (e) {
            var t = this.getPointAtLength(e),
                n = this.getTangentAtLength();
            return {
                x: t.x,
                y: t.y,
                tangentX: n.x,
                tangentY: n.y
            };
        });
    var tI = function (e) {
            function t(e) {
                if (!e) return null;
                for (var a, o = tl(e), s = [0, 0], l = [0, 0], u = 0; u < o.length; u++) 'M' === o[u][0] ? ((s = [o[u][1], o[u][2]]), i.push(null)) : 'm' === o[u][0] ? ((s = [o[u][1] + s[0], o[u][2] + s[1]]), i.push(null)) : 'L' === o[u][0] ? ((n += Math.sqrt(Math.pow(s[0] - o[u][1], 2) + Math.pow(s[1] - o[u][2], 2))), i.push(new tm(s[0], o[u][1], s[1], o[u][2])), (s = [o[u][1], o[u][2]])) : 'l' === o[u][0] ? ((n += Math.sqrt(Math.pow(o[u][1], 2) + Math.pow(o[u][2], 2))), i.push(new tm(s[0], o[u][1] + s[0], s[1], o[u][2] + s[1])), (s = [o[u][1] + s[0], o[u][2] + s[1]])) : 'H' === o[u][0] ? ((n += Math.abs(s[0] - o[u][1])), i.push(new tm(s[0], o[u][1], s[1], s[1])), (s[0] = o[u][1])) : 'h' === o[u][0] ? ((n += Math.abs(o[u][1])), i.push(new tm(s[0], s[0] + o[u][1], s[1], s[1])), (s[0] = o[u][1] + s[0])) : 'V' === o[u][0] ? ((n += Math.abs(s[1] - o[u][1])), i.push(new tm(s[0], s[0], s[1], o[u][1])), (s[1] = o[u][1])) : 'v' === o[u][0] ? ((n += Math.abs(o[u][1])), i.push(new tm(s[0], s[0], s[1], s[1] + o[u][1])), (s[1] = o[u][1] + s[1])) : 'z' === o[u][0] || 'Z' === o[u][0] ? ((n += Math.sqrt(Math.pow(o[0][1] - s[0], 2) + Math.pow(o[0][2] - s[1], 2))), i.push(new tm(s[0], o[0][1], s[1], o[0][2])), (s = [o[0][1], o[0][2]])) : 'C' === o[u][0] ? ((a = new tc(s[0], s[1], o[u][1], o[u][2], o[u][3], o[u][4], o[u][5], o[u][6])), (n += a.getTotalLength()), (s = [o[u][5], o[u][6]]), i.push(a)) : 'c' === o[u][0] ? ((a = new tc(s[0], s[1], s[0] + o[u][1], s[1] + o[u][2], s[0] + o[u][3], s[1] + o[u][4], s[0] + o[u][5], s[1] + o[u][6])), (n += a.getTotalLength()), (s = [o[u][5] + s[0], o[u][6] + s[1]]), i.push(a)) : 'S' === o[u][0] ? ((a = u > 0 && ['C', 'c', 'S', 's'].indexOf(o[u - 1][0]) > -1 ? new tc(s[0], s[1], 2 * s[0] - o[u - 1][o[u - 1].length - 4], 2 * s[1] - o[u - 1][o[u - 1].length - 3], o[u][1], o[u][2], o[u][3], o[u][4]) : new tc(s[0], s[1], s[0], s[1], o[u][1], o[u][2], o[u][3], o[u][4])), (n += a.getTotalLength()), (s = [o[u][3], o[u][4]]), i.push(a)) : 's' === o[u][0] ? ((a = u > 0 && ['C', 'c', 'S', 's'].indexOf(o[u - 1][0]) > -1 ? new tc(s[0], s[1], s[0] + a.d.x - a.c.x, s[1] + a.d.y - a.c.y, s[0] + o[u][1], s[1] + o[u][2], s[0] + o[u][3], s[1] + o[u][4]) : new tc(s[0], s[1], s[0], s[1], s[0] + o[u][1], s[1] + o[u][2], s[0] + o[u][3], s[1] + o[u][4])), (n += a.getTotalLength()), (s = [o[u][3] + s[0], o[u][4] + s[1]]), i.push(a)) : 'Q' === o[u][0] ? ((a = new tc(s[0], s[1], o[u][1], o[u][2], o[u][3], o[u][4])), (n += a.getTotalLength()), i.push(a), (s = [o[u][3], o[u][4]]), (l = [o[u][1], o[u][2]])) : 'q' === o[u][0] ? ((a = new tc(s[0], s[1], s[0] + o[u][1], s[1] + o[u][2], s[0] + o[u][3], s[1] + o[u][4])), (n += a.getTotalLength()), (l = [s[0] + o[u][1], s[1] + o[u][2]]), (s = [o[u][3] + s[0], o[u][4] + s[1]]), i.push(a)) : 'T' === o[u][0] ? ((a = u > 0 && ['Q', 'q', 'T', 't'].indexOf(o[u - 1][0]) > -1 ? new tc(s[0], s[1], 2 * s[0] - l[0], 2 * s[1] - l[1], o[u][1], o[u][2]) : new tm(s[0], o[u][1], s[1], o[u][2])), i.push(a), (n += a.getTotalLength()), (l = [2 * s[0] - l[0], 2 * s[1] - l[1]]), (s = [o[u][1], o[u][2]])) : 't' === o[u][0] ? ((a = u > 0 && ['Q', 'q', 'T', 't'].indexOf(o[u - 1][0]) > -1 ? new tc(s[0], s[1], 2 * s[0] - l[0], 2 * s[1] - l[1], s[0] + o[u][1], s[1] + o[u][2]) : new tm(s[0], s[0] + o[u][1], s[1], s[1] + o[u][2])), (n += a.getTotalLength()), (l = [2 * s[0] - l[0], 2 * s[1] - l[1]]), (s = [o[u][1] + s[0], o[u][2] + s[0]]), i.push(a)) : 'A' === o[u][0] ? ((a = new tp(s[0], s[1], o[u][1], o[u][2], o[u][3], o[u][4], o[u][5], o[u][6], o[u][7])), (n += a.getTotalLength()), (s = [o[u][6], o[u][7]]), i.push(a)) : 'a' === o[u][0] && ((a = new tp(s[0], s[1], o[u][1], o[u][2], o[u][3], o[u][4], o[u][5], s[0] + o[u][6], s[1] + o[u][7])), (n += a.getTotalLength()), (s = [s[0] + o[u][6], s[1] + o[u][7]]), i.push(a)), r.push(n);
                return t;
            }
            var n = 0,
                r = [],
                i = [];
            (t.getTotalLength = function () {
                return n;
            }),
                (t.getPointAtLength = function (e) {
                    var t = a(e);
                    return i[t.i].getPointAtLength(t.fraction);
                }),
                (t.getTangentAtLength = function (e) {
                    var t = a(e);
                    return i[t.i].getTangentAtLength(t.fraction);
                }),
                (t.getPropertiesAtLength = function (e) {
                    var t = a(e);
                    return i[t.i].getPropertiesAtLength(t.fraction);
                });
            var a = function (e) {
                e < 0 ? (e = 0) : e > n && (e = n);
                for (var t = r.length - 1; r[t] >= e && r[t] > 0; ) t--;
                return {
                    fraction: e - r[++t - 1],
                    i: t
                };
            };
            return t(e);
        },
        tT = 'All shapes must be supplied as arrays of [x, y] points or an SVG path string (https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d).\nExample valid ways of supplying a shape would be:\n[[0, 0], [10, 0], [10, 10]]\n"M0,0 L10,0 L10,10Z"\n',
        tg = 'flubber.all() expects two arrays of equal length as arguments. Each element in both arrays should be an array of [x, y] points or an SVG path string (https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d).',
        tS = function (e, t) {
            for (var n, r, i, a = e.length, o = 1 / 0, s = 0; s < a; s++)
                !(function (i) {
                    (r = 0),
                        t.forEach(function (t, n) {
                            var o = U(e[(i + n) % a], t);
                            r += o * o;
                        }),
                        r < o && ((o = r), (n = i));
                })(s);
            n && ((i = e.splice(0, n)), e.splice.apply(e, [e.length, 0].concat(i)));
        },
        tA = function (e, t, n) {
            void 0 === n && (n = {});
            var r = n.maxSegmentLength;
            void 0 === r && (r = 10);
            var i = n.string;
            void 0 === i && (i = !0);
            var a = ee($(e, r), $(t, r), i);
            return i && ('string' == typeof e || 'string' == typeof t)
                ? function (n) {
                      return n < 0.0001 && 'string' == typeof e ? e : 1 - n < 0.0001 && 'string' == typeof t ? t : a(n);
                  }
                : a;
        },
        tv = et;
    (et.deviation = function (e, t, n, r) {
        var i = t && t.length,
            a = i ? t[0] * n : e.length,
            o = Math.abs(eb(e, 0, a, n));
        if (i)
            for (var s = 0, l = t.length; s < l; s++) {
                var u = t[s] * n,
                    c = s < l - 1 ? t[s + 1] * n : e.length;
                o -= Math.abs(eb(e, u, c, n));
            }
        var d = 0;
        for (s = 0; s < r.length; s += 3) {
            var _ = r[s] * n,
                E = r[s + 1] * n,
                f = r[s + 2] * n;
            d += Math.abs((e[_] - e[f]) * (e[E + 1] - e[_ + 1]) - (e[_] - e[E]) * (e[f + 1] - e[_ + 1]));
        }
        return 0 === o && 0 === d ? 0 : Math.abs((d - o) / o);
    }),
        (et.flatten = function (e) {
            for (
                var t = e[0][0].length,
                    n = {
                        vertices: [],
                        holes: [],
                        dimensions: t
                    },
                    r = 0,
                    i = 0;
                i < e.length;
                i++
            ) {
                for (var a = 0; a < e[i].length; a++) for (var o = 0; o < t; o++) n.vertices.push(e[i][a][o]);
                i > 0 && ((r += e[i - 1].length), n.holes.push(r));
            }
            return n;
        });
    var tN = function (e) {
            return e;
        },
        tO = function (e) {
            if (null == e) return tN;
            var t,
                n,
                r = e.scale[0],
                i = e.scale[1],
                a = e.translate[0],
                o = e.translate[1];
            return function (e, s) {
                s || (t = n = 0);
                var l = 2,
                    u = e.length,
                    c = Array(u);
                for (c[0] = (t += e[0]) * r + a, c[1] = (n += e[1]) * i + o; l < u; ) (c[l] = e[l]), ++l;
                return c;
            };
        },
        tR = function (e, t) {
            for (var n, r = e.length, i = r - t; i < --r; ) (n = e[i]), (e[i++] = e[r]), (e[r] = n);
        },
        tC = function (e, t) {
            return 'GeometryCollection' === t.type
                ? {
                      type: 'FeatureCollection',
                      features: t.geometries.map(function (t) {
                          return eL(e, t);
                      })
                  }
                : eL(e, t);
        },
        ty = function (e, t) {
            function n(t) {
                var n,
                    r = e.arcs[t < 0 ? ~t : t],
                    i = r[0];
                return (
                    e.transform
                        ? ((n = [0, 0]),
                          r.forEach(function (e) {
                              (n[0] += e[0]), (n[1] += e[1]);
                          }))
                        : (n = r[r.length - 1]),
                    t < 0 ? [n, i] : [i, n]
                );
            }
            function r(e, t) {
                for (var n in e) {
                    var r = e[n];
                    delete t[r.start],
                        delete r.start,
                        delete r.end,
                        r.forEach(function (e) {
                            i[e < 0 ? ~e : e] = 1;
                        }),
                        s.push(r);
                }
            }
            var i = {},
                a = {},
                o = {},
                s = [],
                l = -1;
            return (
                t.forEach(function (n, r) {
                    var i,
                        a = e.arcs[n < 0 ? ~n : n];
                    !(a.length < 3) || a[1][0] || a[1][1] || ((i = t[++l]), (t[l] = n), (t[r] = i));
                }),
                t.forEach(function (e) {
                    var t,
                        r,
                        i = n(e),
                        s = i[0],
                        l = i[1];
                    if ((t = o[s])) {
                        if ((delete o[t.end], t.push(e), (t.end = l), (r = a[l]))) {
                            delete a[r.start];
                            var u = r === t ? t : t.concat(r);
                            a[(u.start = t.start)] = o[(u.end = r.end)] = u;
                        } else a[t.start] = o[t.end] = t;
                    } else if ((t = a[l])) {
                        if ((delete a[t.start], t.unshift(e), (t.start = s), (r = o[s]))) {
                            delete o[r.end];
                            var c = r === t ? t : r.concat(t);
                            a[(c.start = r.start)] = o[(c.end = t.end)] = c;
                        } else a[t.start] = o[t.end] = t;
                    } else a[((t = [e]).start = s)] = o[(t.end = l)] = t;
                }),
                r(o, a),
                r(a, o),
                t.forEach(function (e) {
                    i[e < 0 ? ~e : e] || s.push([e]);
                }),
                s
            );
        },
        tb = function (e, t) {
            for (var n = 0, r = e.length; n < r; ) {
                var i = (n + r) >>> 1;
                e[i] < t ? (n = i + 1) : (r = i);
            }
            return n;
        },
        tL = function (e) {
            function t(e, t) {
                e.forEach(function (e) {
                    e < 0 && (e = ~e);
                    var n = i[e];
                    n ? n.push(t) : (i[e] = [t]);
                });
            }
            function n(e, n) {
                e.forEach(function (e) {
                    t(e, n);
                });
            }
            function r(e, t) {
                'GeometryCollection' === e.type
                    ? e.geometries.forEach(function (e) {
                          r(e, t);
                      })
                    : e.type in o && o[e.type](e.arcs, t);
            }
            var i = {},
                a = e.map(function () {
                    return [];
                }),
                o = {
                    LineString: t,
                    MultiLineString: n,
                    Polygon: n,
                    MultiPolygon: function (e, t) {
                        e.forEach(function (e) {
                            n(e, t);
                        });
                    }
                };
            for (var s in (e.forEach(r), i))
                for (var l = i[s], u = l.length, c = 0; c < u; ++c)
                    for (var d = c + 1; d < u; ++d) {
                        var _,
                            E = l[c],
                            f = l[d];
                        (_ = a[E])[(s = tb(_, f))] !== f && _.splice(s, 0, f), (_ = a[f])[(s = tb(_, E))] !== E && _.splice(s, 0, E);
                    }
            return a;
        },
        tD = function (e, t) {
            return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
        },
        tM = function (e) {
            return (
                1 === e.length && (e = eU(e)),
                {
                    left: function (t, n, r, i) {
                        for (null == r && (r = 0), null == i && (i = t.length); r < i; ) {
                            var a = (r + i) >>> 1;
                            0 > e(t[a], n) ? (r = a + 1) : (i = a);
                        }
                        return r;
                    },
                    right: function (t, n, r, i) {
                        for (null == r && (r = 0), null == i && (i = t.length); r < i; ) {
                            var a = (r + i) >>> 1;
                            e(t[a], n) > 0 ? (i = a) : (r = a + 1);
                        }
                        return r;
                    }
                }
            );
        },
        tP =
            (tM(tD).right,
            function (e, t) {
                return ex(ew(eG(e), e), t);
            }),
        tU = function (e, t) {
            if (e.length > 8)
                return e.map(function (e, t) {
                    return t;
                });
            var n = e.map(function (e) {
                return t.map(function (t) {
                    return eB(e, t);
                });
            });
            return ek(e, t, n);
        };
    (e.interpolate = tA), (e.separate = eF), (e.combine = eZ), (e.interpolateAll = eV), (e.splitPathString = j), (e.toPathString = Y), (e.fromCircle = eY), (e.toCircle = ej), (e.fromRect = eW), (e.toRect = eK), Object.defineProperty(e, '__esModule', { value: !0 });
});
