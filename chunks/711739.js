let t = 2147483647,
    n = 36,
    r = 1,
    i = 26,
    a = 38,
    o = 700,
    s = 72,
    l = 128,
    u = '-',
    c = /^xn--/,
    d = /[^\0-\x7E]/,
    _ = /[\x2E\u3002\uFF0E\uFF61]/g,
    E = {
        overflow: 'Overflow: input needs wider integers to process',
        'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
        'invalid-input': 'Invalid input'
    },
    f = 35,
    h = Math.floor,
    p = String.fromCharCode;
function m(e) {
    throw RangeError(E[e]);
}
function I(e, t) {
    let n = [],
        r = e.length;
    for (; r--; ) n[r] = t(e[r]);
    return n;
}
function T(e, t) {
    let n = e.split('@'),
        r = '';
    return n.length > 1 && ((r = n[0] + '@'), (e = n[1])), r + I((e = e.replace(_, '.')).split('.'), t).join('.');
}
function g(e) {
    let t = [],
        n = 0,
        r = e.length;
    for (; n < r; ) {
        let i = e.charCodeAt(n++);
        if (i >= 55296 && i <= 56319 && n < r) {
            let r = e.charCodeAt(n++);
            (64512 & r) == 56320 ? t.push(((1023 & i) << 10) + (1023 & r) + 65536) : (t.push(i), n--);
        } else t.push(i);
    }
    return t;
}
let S = function (e) {
        return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : n;
    },
    A = function (e, t) {
        return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
    },
    v = function (e, t, r) {
        let s = 0;
        for (e = r ? h(e / o) : e >> 1, e += h(e / t); e > (f * i) >> 1; s += n) e = h(e / f);
        return h(s + ((f + 1) * e) / (e + a));
    },
    N = function (e) {
        let a = [],
            o = e.length,
            c = 0,
            d = l,
            _ = s,
            E = e.lastIndexOf(u);
        E < 0 && (E = 0);
        for (let t = 0; t < E; ++t) e.charCodeAt(t) >= 128 && m('not-basic'), a.push(e.charCodeAt(t));
        for (let s = E > 0 ? E + 1 : 0; s < o; ) {
            let l = c;
            for (let a = 1, l = n; ; l += n) {
                s >= o && m('invalid-input');
                let u = S(e.charCodeAt(s++));
                (u >= n || u > h((t - c) / a)) && m('overflow'), (c += u * a);
                let d = l <= _ ? r : l >= _ + i ? i : l - _;
                if (u < d) break;
                let E = n - d;
                a > h(t / E) && m('overflow'), (a *= E);
            }
            let u = a.length + 1;
            (_ = v(c - l, u, 0 == l)), h(c / u) > t - d && m('overflow'), (d += h(c / u)), (c %= u), a.splice(c++, 0, d);
        }
        return String.fromCodePoint(...a);
    },
    O = function (e) {
        let a = [],
            o = (e = g(e)).length,
            c = l,
            d = 0,
            _ = s;
        for (let t of e) t < 128 && a.push(p(t));
        let E = a.length,
            f = E;
        for (E && a.push(u); f < o; ) {
            let o = t;
            for (let t of e) t >= c && t < o && (o = t);
            let s = f + 1;
            for (let l of (o - c > h((t - d) / s) && m('overflow'), (d += (o - c) * s), (c = o), e))
                if ((l < c && ++d > t && m('overflow'), l == c)) {
                    let e = d;
                    for (let t = n; ; t += n) {
                        let o = t <= _ ? r : t >= _ + i ? i : t - _;
                        if (e < o) break;
                        let s = e - o,
                            l = n - o;
                        a.push(p(A(o + (s % l), 0))), (e = h(s / l));
                    }
                    a.push(p(A(e, 0))), (_ = v(d, s, f == E)), (d = 0), ++f;
                }
            ++d, ++c;
        }
        return a.join('');
    },
    R = function (e) {
        return T(e, function (e) {
            return c.test(e) ? N(e.slice(4).toLowerCase()) : e;
        });
    },
    C = function (e) {
        return T(e, function (e) {
            return d.test(e) ? 'xn--' + O(e) : e;
        });
    },
    y = {
        version: '2.1.0',
        ucs2: {
            decode: g,
            encode: (e) => String.fromCodePoint(...e)
        },
        decode: N,
        encode: O,
        toASCII: C,
        toUnicode: R
    };
e.exports = y;
