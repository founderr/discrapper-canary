var i = r(581031),
    a = 2147483647,
    s = 36,
    o = 1,
    l = 26,
    u = 38,
    c = 700,
    d = 72,
    f = 128,
    _ = '-',
    h = /[^\0-\u007E]/,
    p = /[.\u3002\uFF0E\uFF61]/g,
    m = 'Overflow: input needs wider integers to process',
    g = 35,
    E = RangeError,
    v = i(p.exec),
    I = Math.floor,
    T = String.fromCharCode,
    b = i(''.charCodeAt),
    y = i([].join),
    S = i([].push),
    A = i(''.replace),
    N = i(''.split),
    C = i(''.toLowerCase),
    R = function (e) {
        for (var n = [], r = 0, i = e.length; r < i; ) {
            var a = b(e, r++);
            if (a >= 55296 && a <= 56319 && r < i) {
                var s = b(e, r++);
                (64512 & s) == 56320 ? S(n, ((1023 & a) << 10) + (1023 & s) + 65536) : (S(n, a), r--);
            } else S(n, a);
        }
        return n;
    },
    O = function (e) {
        return e + 22 + 75 * (e < 26);
    },
    D = function (e, n, r) {
        var i = 0;
        for (e = r ? I(e / c) : e >> 1, e += I(e / n); e > (g * l) >> 1; ) (e = I(e / g)), (i += s);
        return I(i + ((g + 1) * e) / (e + u));
    },
    L = function (e) {
        var n,
            r,
            i = [],
            u = (e = R(e)).length,
            c = f,
            h = 0,
            p = d;
        for (n = 0; n < e.length; n++) (r = e[n]) < 128 && S(i, T(r));
        var g = i.length,
            v = g;
        for (g && S(i, _); v < u; ) {
            var b = a;
            for (n = 0; n < e.length; n++) (r = e[n]) >= c && r < b && (b = r);
            var A = v + 1;
            if (b - c > I((a - h) / A)) throw E(m);
            for (h += (b - c) * A, c = b, n = 0; n < e.length; n++) {
                if ((r = e[n]) < c && ++h > a) throw E(m);
                if (r === c) {
                    for (var N = h, C = s; ; ) {
                        var L = C <= p ? o : C >= p + l ? l : C - p;
                        if (N < L) break;
                        var x = N - L,
                            w = s - L;
                        S(i, T(O(L + (x % w)))), (N = I(x / w)), (C += s);
                    }
                    S(i, T(O(N))), (p = D(h, A, v === g)), (h = 0), v++;
                }
            }
            h++, c++;
        }
        return y(i, '');
    };
e.exports = function (e) {
    var n,
        r,
        i = [],
        a = N(A(C(e), p, '.'), '.');
    for (n = 0; n < a.length; n++) S(i, v(h, (r = a[n])) ? 'xn--' + L(r) : r);
    return y(i, '.');
};
