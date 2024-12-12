(e = r.nmd(e)),
    !(function (i) {
        var a = n && !n.nodeType && n,
            s = e && !e.nodeType && e,
            o = 'object' == typeof r.g && r.g;
        (o.global === o || o.window === o || o.self === o) && (i = o);
        var l,
            u,
            c = 2147483647,
            d = 36,
            f = 1,
            _ = 26,
            h = 38,
            p = 700,
            m = 72,
            g = 128,
            E = '-',
            v = /^xn--/,
            I = /[^\x20-\x7E]/,
            T = /[\x2E\u3002\uFF0E\uFF61]/g,
            b = {
                overflow: 'Overflow: input needs wider integers to process',
                'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
                'invalid-input': 'Invalid input'
            },
            y = 35,
            S = Math.floor,
            A = String.fromCharCode;
        function N(e) {
            throw RangeError(b[e]);
        }
        function C(e, n) {
            for (var r = e.length, i = []; r--; ) i[r] = n(e[r]);
            return i;
        }
        function R(e, n) {
            var r = e.split('@'),
                i = '';
            return r.length > 1 && ((i = r[0] + '@'), (e = r[1])), i + C((e = e.replace(T, '.')).split('.'), n).join('.');
        }
        function O(e) {
            for (var n, r, i = [], a = 0, s = e.length; a < s; ) (n = e.charCodeAt(a++)) >= 55296 && n <= 56319 && a < s ? ((64512 & (r = e.charCodeAt(a++))) == 56320 ? i.push(((1023 & n) << 10) + (1023 & r) + 65536) : (i.push(n), a--)) : i.push(n);
            return i;
        }
        function D(e) {
            return C(e, function (e) {
                var n = '';
                return e > 65535 && ((e -= 65536), (n += A(((e >>> 10) & 1023) | 55296)), (e = 56320 | (1023 & e))), (n += A(e));
            }).join('');
        }
        function L(e) {
            return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : d;
        }
        function x(e, n) {
            return e + 22 + 75 * (e < 26) - ((0 != n) << 5);
        }
        function w(e, n, r) {
            var i = 0;
            for (e = r ? S(e / p) : e >> 1, e += S(e / n); e > (y * _) >> 1; i += d) e = S(e / y);
            return S(i + ((y + 1) * e) / (e + h));
        }
        function P(e) {
            var n,
                r,
                i,
                a,
                s,
                o,
                l,
                u,
                h,
                p,
                v = [],
                I = e.length,
                T = 0,
                b = g,
                y = m;
            for ((r = e.lastIndexOf(E)) < 0 && (r = 0), i = 0; i < r; ++i) e.charCodeAt(i) >= 128 && N('not-basic'), v.push(e.charCodeAt(i));
            for (a = r > 0 ? r + 1 : 0; a < I; ) {
                for (s = T, o = 1, l = d; a >= I && N('invalid-input'), ((u = L(e.charCodeAt(a++))) >= d || u > S((c - T) / o)) && N('overflow'), (T += u * o), !(u < (h = l <= y ? f : l >= y + _ ? _ : l - y)); l += d) {
                    o > S(c / (p = d - h)) && N('overflow'), (o *= p);
                }
                (y = w(T - s, (n = v.length + 1), 0 == s)), S(T / n) > c - b && N('overflow'), (b += S(T / n)), (T %= n), v.splice(T++, 0, b);
            }
            return D(v);
        }
        function M(e) {
            var n,
                r,
                i,
                a,
                s,
                o,
                l,
                u,
                h,
                p,
                v,
                I,
                T,
                b,
                y,
                C = [];
            for (o = 0, I = (e = O(e)).length, n = g, r = 0, s = m; o < I; ++o) (v = e[o]) < 128 && C.push(A(v));
            for (i = a = C.length, a && C.push(E); i < I; ) {
                for (l = c, o = 0; o < I; ++o) (v = e[o]) >= n && v < l && (l = v);
                for (l - n > S((c - r) / (T = i + 1)) && N('overflow'), r += (l - n) * T, n = l, o = 0; o < I; ++o)
                    if (((v = e[o]) < n && ++r > c && N('overflow'), v == n)) {
                        for (u = r, h = d; !(u < (p = h <= s ? f : h >= s + _ ? _ : h - s)); h += d) {
                            (y = u - p), (b = d - p), C.push(A(x(p + (y % b), 0))), (u = S(y / b));
                        }
                        C.push(A(x(u, 0))), (s = w(r, T, i == a)), (r = 0), ++i;
                    }
                ++r, ++n;
            }
            return C.join('');
        }
        function k(e) {
            return R(e, function (e) {
                return v.test(e) ? P(e.slice(4).toLowerCase()) : e;
            });
        }
        function U(e) {
            return R(e, function (e) {
                return I.test(e) ? 'xn--' + M(e) : e;
            });
        }
        if (
            ((l = {
                version: '1.4.1',
                ucs2: {
                    decode: O,
                    encode: D
                },
                decode: P,
                encode: M,
                toASCII: U,
                toUnicode: k
            }),
            'function' == typeof define && 'object' == typeof define.amd && define.amd)
        )
            define('punycode', function () {
                return l;
            });
        else if (a && s) {
            if (e.exports == a) s.exports = l;
            else for (u in l) l.hasOwnProperty(u) && (a[u] = l[u]);
        } else i.punycode = l;
    })(this);
