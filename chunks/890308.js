(e = n.nmd(e)),
    !(function (r) {
        var i = t && !t.nodeType && t,
            a = e && !e.nodeType && e,
            s = 'object' == typeof n.g && n.g;
        (s.global === s || s.window === s || s.self === s) && (r = s);
        var o,
            l,
            u = /^xn--/,
            c = /[^\x20-\x7E]/,
            d = /[\x2E\u3002\uFF0E\uFF61]/g,
            f = {
                overflow: 'Overflow: input needs wider integers to process',
                'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
                'invalid-input': 'Invalid input'
            },
            _ = 35,
            h = Math.floor,
            p = String.fromCharCode;
        function m(e) {
            throw RangeError(f[e]);
        }
        function g(e, t) {
            for (var n = e.length, r = []; n--; ) r[n] = t(e[n]);
            return r;
        }
        function E(e, t) {
            var n = e.split('@'),
                r = '';
            return n.length > 1 && ((r = n[0] + '@'), (e = n[1])), r + g((e = e.replace(d, '.')).split('.'), t).join('.');
        }
        function v(e) {
            for (var t, n, r = [], i = 0, a = e.length; i < a; ) (t = e.charCodeAt(i++)) >= 55296 && t <= 56319 && i < a ? ((64512 & (n = e.charCodeAt(i++))) == 56320 ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t), i--)) : r.push(t);
            return r;
        }
        function I(e) {
            return g(e, function (e) {
                var t = '';
                return e > 65535 && ((e -= 65536), (t += p(((e >>> 10) & 1023) | 55296)), (e = 56320 | (1023 & e))), (t += p(e));
            }).join('');
        }
        function S(e, t) {
            return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
        }
        function T(e, t, n) {
            var r = 0;
            for (e = n ? h(e / 700) : e >> 1, e += h(e / t); e > (26 * _) >> 1; r += 36) e = h(e / _);
            return h(r + ((_ + 1) * e) / (e + 38));
        }
        function b(e) {
            var t,
                n,
                r,
                i,
                a,
                s,
                o,
                l,
                u,
                c,
                d,
                f = [],
                _ = e.length,
                p = 0,
                g = 128,
                E = 72;
            for ((r = e.lastIndexOf('-')) < 0 && (r = 0), i = 0; i < r; ++i) e.charCodeAt(i) >= 128 && m('not-basic'), f.push(e.charCodeAt(i));
            for (a = r > 0 ? r + 1 : 0; a < _; ) {
                for (s = p, o = 1, l = 36; ; l += 36) {
                    if ((a >= _ && m('invalid-input'), ((u = (t = e.charCodeAt(a++)) - 48 < 10 ? t - 22 : t - 65 < 26 ? t - 65 : t - 97 < 26 ? t - 97 : 36) >= 36 || u > h((2147483647 - p) / o)) && m('overflow'), (p += u * o), u < (c = l <= E ? 1 : l >= E + 26 ? 26 : l - E))) break;
                    o > h(2147483647 / (d = 36 - c)) && m('overflow'), (o *= d);
                }
                (E = T(p - s, (n = f.length + 1), 0 == s)), h(p / n) > 2147483647 - g && m('overflow'), (g += h(p / n)), (p %= n), f.splice(p++, 0, g);
            }
            return I(f);
        }
        function y(e) {
            var t,
                n,
                r,
                i,
                a,
                s,
                o,
                l,
                u,
                c,
                d,
                f,
                _,
                g,
                E,
                I = [];
            for (s = 0, f = (e = v(e)).length, t = 128, n = 0, a = 72; s < f; ++s) (d = e[s]) < 128 && I.push(p(d));
            for (r = i = I.length, i && I.push('-'); r < f; ) {
                for (o = 2147483647, s = 0; s < f; ++s) (d = e[s]) >= t && d < o && (o = d);
                for (o - t > h((2147483647 - n) / (_ = r + 1)) && m('overflow'), n += (o - t) * _, t = o, s = 0; s < f; ++s)
                    if (((d = e[s]) < t && ++n > 2147483647 && m('overflow'), d == t)) {
                        for (l = n, u = 36; !(l < (c = u <= a ? 1 : u >= a + 26 ? 26 : u - a)); u += 36) {
                            (E = l - c), (g = 36 - c), I.push(p(S(c + (E % g), 0))), (l = h(E / g));
                        }
                        I.push(p(S(l, 0))), (a = T(n, _, r == i)), (n = 0), ++r;
                    }
                ++n, ++t;
            }
            return I.join('');
        }
        if (
            ((o = {
                version: '1.4.1',
                ucs2: {
                    decode: v,
                    encode: I
                },
                decode: b,
                encode: y,
                toASCII: function (e) {
                    return E(e, function (e) {
                        return c.test(e) ? 'xn--' + y(e) : e;
                    });
                },
                toUnicode: function (e) {
                    return E(e, function (e) {
                        return u.test(e) ? b(e.slice(4).toLowerCase()) : e;
                    });
                }
            }),
            'function' == typeof define && 'object' == typeof define.amd && define.amd)
        )
            define('punycode', function () {
                return o;
            });
        else if (i && a) {
            if (e.exports == i) a.exports = o;
            else for (l in o) o.hasOwnProperty(l) && (i[l] = o[l]);
        } else r.punycode = o;
    })(this);
