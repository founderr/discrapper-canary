let n = 2147483647,
    r = 36,
    i = 1,
    a = 26,
    s = 38,
    o = 700,
    l = 72,
    u = 128,
    c = '-',
    d = /^xn--/,
    f = /[^\0-\x7E]/,
    _ = /[\x2E\u3002\uFF0E\uFF61]/g,
    h = {
        overflow: 'Overflow: input needs wider integers to process',
        'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
        'invalid-input': 'Invalid input'
    },
    p = 35,
    m = Math.floor,
    g = String.fromCharCode;
function E(e) {
    throw RangeError(h[e]);
}
function v(e, n) {
    let r = [],
        i = e.length;
    for (; i--; ) r[i] = n(e[i]);
    return r;
}
function I(e, n) {
    let r = e.split('@'),
        i = '';
    return r.length > 1 && ((i = r[0] + '@'), (e = r[1])), i + v((e = e.replace(_, '.')).split('.'), n).join('.');
}
function T(e) {
    let n = [],
        r = 0,
        i = e.length;
    for (; r < i; ) {
        let a = e.charCodeAt(r++);
        if (a >= 55296 && a <= 56319 && r < i) {
            let i = e.charCodeAt(r++);
            (64512 & i) == 56320 ? n.push(((1023 & a) << 10) + (1023 & i) + 65536) : (n.push(a), r--);
        } else n.push(a);
    }
    return n;
}
let b = function (e) {
        return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : r;
    },
    y = function (e, n) {
        return e + 22 + 75 * (e < 26) - ((0 != n) << 5);
    },
    S = function (e, n, i) {
        let l = 0;
        for (e = i ? m(e / o) : e >> 1, e += m(e / n); e > (p * a) >> 1; l += r) e = m(e / p);
        return m(l + ((p + 1) * e) / (e + s));
    },
    A = function (e) {
        let s = [],
            o = e.length,
            d = 0,
            f = u,
            _ = l,
            h = e.lastIndexOf(c);
        h < 0 && (h = 0);
        for (let n = 0; n < h; ++n) e.charCodeAt(n) >= 128 && E('not-basic'), s.push(e.charCodeAt(n));
        for (let l = h > 0 ? h + 1 : 0; l < o; ) {
            let u = d;
            for (let s = 1, u = r; ; u += r) {
                l >= o && E('invalid-input');
                let c = b(e.charCodeAt(l++));
                (c >= r || c > m((n - d) / s)) && E('overflow'), (d += c * s);
                let f = u <= _ ? i : u >= _ + a ? a : u - _;
                if (c < f) break;
                let h = r - f;
                s > m(n / h) && E('overflow'), (s *= h);
            }
            let c = s.length + 1;
            (_ = S(d - u, c, 0 == u)), m(d / c) > n - f && E('overflow'), (f += m(d / c)), (d %= c), s.splice(d++, 0, f);
        }
        return String.fromCodePoint(...s);
    },
    N = function (e) {
        let s = [],
            o = (e = T(e)).length,
            d = u,
            f = 0,
            _ = l;
        for (let n of e) n < 128 && s.push(g(n));
        let h = s.length,
            p = h;
        for (h && s.push(c); p < o; ) {
            let o = n;
            for (let n of e) n >= d && n < o && (o = n);
            let l = p + 1;
            for (let u of (o - d > m((n - f) / l) && E('overflow'), (f += (o - d) * l), (d = o), e))
                if ((u < d && ++f > n && E('overflow'), u == d)) {
                    let e = f;
                    for (let n = r; ; n += r) {
                        let o = n <= _ ? i : n >= _ + a ? a : n - _;
                        if (e < o) break;
                        let l = e - o,
                            u = r - o;
                        s.push(g(y(o + (l % u), 0))), (e = m(l / u));
                    }
                    s.push(g(y(e, 0))), (_ = S(f, l, p == h)), (f = 0), ++p;
                }
            ++f, ++d;
        }
        return s.join('');
    },
    C = function (e) {
        return I(e, function (e) {
            return d.test(e) ? A(e.slice(4).toLowerCase()) : e;
        });
    },
    R = function (e) {
        return I(e, function (e) {
            return f.test(e) ? 'xn--' + N(e) : e;
        });
    },
    O = {
        version: '2.1.0',
        ucs2: {
            decode: T,
            encode: (e) => String.fromCodePoint(...e)
        },
        decode: A,
        encode: N,
        toASCII: R,
        toUnicode: C
    };
e.exports = O;
