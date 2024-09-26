var r = n(96403),
    i = 2147483647,
    a = 36,
    o = 1,
    s = 26,
    l = 38,
    u = 700,
    c = 72,
    d = 128,
    _ = '-',
    E = /[^\0-\u007E]/,
    f = /[.\u3002\uFF0E\uFF61]/g,
    h = 'Overflow: input needs wider integers to process',
    p = 35,
    m = RangeError,
    I = r(f.exec),
    T = Math.floor,
    g = String.fromCharCode,
    S = r(''.charCodeAt),
    A = r([].join),
    v = r([].push),
    N = r(''.replace),
    O = r(''.split),
    R = r(''.toLowerCase),
    C = function (e) {
        for (var t = [], n = 0, r = e.length; n < r; ) {
            var i = S(e, n++);
            if (i >= 55296 && i <= 56319 && n < r) {
                var a = S(e, n++);
                (64512 & a) == 56320 ? v(t, ((1023 & i) << 10) + (1023 & a) + 65536) : (v(t, i), n--);
            } else v(t, i);
        }
        return t;
    },
    y = function (e) {
        return e + 22 + 75 * (e < 26);
    },
    L = function (e, t, n) {
        var r = 0;
        for (e = n ? T(e / u) : e >> 1, e += T(e / t); e > (p * s) >> 1; ) (e = T(e / p)), (r += a);
        return T(r + ((p + 1) * e) / (e + l));
    },
    b = function (e) {
        var t,
            n,
            r = [],
            l = (e = C(e)).length,
            u = d,
            E = 0,
            f = c;
        for (t = 0; t < e.length; t++) (n = e[t]) < 128 && v(r, g(n));
        var p = r.length,
            I = p;
        for (p && v(r, _); I < l; ) {
            var S = i;
            for (t = 0; t < e.length; t++) (n = e[t]) >= u && n < S && (S = n);
            var N = I + 1;
            if (S - u > T((i - E) / N)) throw new m(h);
            for (E += (S - u) * N, u = S, t = 0; t < e.length; t++) {
                if ((n = e[t]) < u && ++E > i) throw new m(h);
                if (n === u) {
                    for (var O = E, R = a; ; ) {
                        var b = R <= f ? o : R >= f + s ? s : R - f;
                        if (O < b) break;
                        var D = O - b,
                            M = a - b;
                        v(r, g(y(b + (D % M)))), (O = T(D / M)), (R += a);
                    }
                    v(r, g(y(O))), (f = L(E, N, I === p)), (E = 0), I++;
                }
            }
            E++, u++;
        }
        return A(r, '');
    };
e.exports = function (e) {
    var t,
        n,
        r = [],
        i = O(N(R(e), f, '.'), '.');
    for (t = 0; t < i.length; t++) v(r, I(E, (n = i[t])) ? 'xn--' + b(n) : n);
    return A(r, '.');
};
