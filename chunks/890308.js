(e = n.nmd(e)),
    !(function (r) {
        var i = t && !t.nodeType && t,
            a = e && !e.nodeType && e,
            o = 'object' == typeof n.g && n.g;
        (o.global === o || o.window === o || o.self === o) && (r = o);
        var s,
            l,
            u = 2147483647,
            c = 36,
            d = 1,
            _ = 26,
            E = 38,
            f = 700,
            h = 72,
            p = 128,
            m = '-',
            I = /^xn--/,
            T = /[^\x20-\x7E]/,
            g = /[\x2E\u3002\uFF0E\uFF61]/g,
            S = {
                overflow: 'Overflow: input needs wider integers to process',
                'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
                'invalid-input': 'Invalid input'
            },
            A = 35,
            v = Math.floor,
            N = String.fromCharCode;
        function O(e) {
            throw RangeError(S[e]);
        }
        function R(e, t) {
            for (var n = e.length, r = []; n--; ) r[n] = t(e[n]);
            return r;
        }
        function C(e, t) {
            var n = e.split('@'),
                r = '';
            return n.length > 1 && ((r = n[0] + '@'), (e = n[1])), r + R((e = e.replace(g, '.')).split('.'), t).join('.');
        }
        function y(e) {
            for (var t, n, r = [], i = 0, a = e.length; i < a; ) (t = e.charCodeAt(i++)) >= 55296 && t <= 56319 && i < a ? ((64512 & (n = e.charCodeAt(i++))) == 56320 ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t), i--)) : r.push(t);
            return r;
        }
        function b(e) {
            return R(e, function (e) {
                var t = '';
                return e > 65535 && ((e -= 65536), (t += N(((e >>> 10) & 1023) | 55296)), (e = 56320 | (1023 & e))), (t += N(e));
            }).join('');
        }
        function L(e) {
            return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : c;
        }
        function D(e, t) {
            return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
        }
        function M(e, t, n) {
            var r = 0;
            for (e = n ? v(e / f) : e >> 1, e += v(e / t); e > (A * _) >> 1; r += c) e = v(e / A);
            return v(r + ((A + 1) * e) / (e + E));
        }
        function P(e) {
            var t,
                n,
                r,
                i,
                a,
                o,
                s,
                l,
                E,
                f,
                I = [],
                T = e.length,
                g = 0,
                S = p,
                A = h;
            for ((n = e.lastIndexOf(m)) < 0 && (n = 0), r = 0; r < n; ++r) e.charCodeAt(r) >= 128 && O('not-basic'), I.push(e.charCodeAt(r));
            for (i = n > 0 ? n + 1 : 0; i < T; ) {
                for (a = g, o = 1, s = c; i >= T && O('invalid-input'), ((l = L(e.charCodeAt(i++))) >= c || l > v((u - g) / o)) && O('overflow'), (g += l * o), !(l < (E = s <= A ? d : s >= A + _ ? _ : s - A)); s += c) {
                    o > v(u / (f = c - E)) && O('overflow'), (o *= f);
                }
                (A = M(g - a, (t = I.length + 1), 0 == a)), v(g / t) > u - S && O('overflow'), (S += v(g / t)), (g %= t), I.splice(g++, 0, S);
            }
            return b(I);
        }
        function U(e) {
            var t,
                n,
                r,
                i,
                a,
                o,
                s,
                l,
                E,
                f,
                I,
                T,
                g,
                S,
                A,
                R = [];
            for (o = 0, T = (e = y(e)).length, t = p, n = 0, a = h; o < T; ++o) (I = e[o]) < 128 && R.push(N(I));
            for (r = i = R.length, i && R.push(m); r < T; ) {
                for (s = u, o = 0; o < T; ++o) (I = e[o]) >= t && I < s && (s = I);
                for (s - t > v((u - n) / (g = r + 1)) && O('overflow'), n += (s - t) * g, t = s, o = 0; o < T; ++o)
                    if (((I = e[o]) < t && ++n > u && O('overflow'), I == t)) {
                        for (l = n, E = c; !(l < (f = E <= a ? d : E >= a + _ ? _ : E - a)); E += c) {
                            (A = l - f), (S = c - f), R.push(N(D(f + (A % S), 0))), (l = v(A / S));
                        }
                        R.push(N(D(l, 0))), (a = M(n, g, r == i)), (n = 0), ++r;
                    }
                ++n, ++t;
            }
            return R.join('');
        }
        function w(e) {
            return C(e, function (e) {
                return I.test(e) ? P(e.slice(4).toLowerCase()) : e;
            });
        }
        function x(e) {
            return C(e, function (e) {
                return T.test(e) ? 'xn--' + U(e) : e;
            });
        }
        if (
            ((s = {
                version: '1.4.1',
                ucs2: {
                    decode: y,
                    encode: b
                },
                decode: P,
                encode: U,
                toASCII: x,
                toUnicode: w
            }),
            'function' == typeof define && 'object' == typeof define.amd && define.amd)
        )
            define('punycode', function () {
                return s;
            });
        else if (i && a) {
            if (e.exports == i) a.exports = s;
            else for (l in s) s.hasOwnProperty(l) && (i[l] = s[l]);
        } else r.punycode = s;
    })(this);
