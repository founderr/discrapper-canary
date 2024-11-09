var r = n(581031),
    i = /[^\0-\u007E]/,
    a = /[.\u3002\uFF0E\uFF61]/g,
    s = 'Overflow: input needs wider integers to process',
    o = 35,
    l = RangeError,
    u = r(a.exec),
    c = Math.floor,
    d = String.fromCharCode,
    f = r(''.charCodeAt),
    _ = r([].join),
    h = r([].push),
    p = r(''.replace),
    m = r(''.split),
    g = r(''.toLowerCase),
    E = function (e) {
        for (var t = [], n = 0, r = e.length; n < r; ) {
            var i = f(e, n++);
            if (i >= 55296 && i <= 56319 && n < r) {
                var a = f(e, n++);
                (64512 & a) == 56320 ? h(t, ((1023 & i) << 10) + (1023 & a) + 65536) : (h(t, i), n--);
            } else h(t, i);
        }
        return t;
    },
    v = function (e) {
        return e + 22 + 75 * (e < 26);
    },
    I = function (e, t, n) {
        var r = 0;
        for (e = n ? c(e / 700) : e >> 1, e += c(e / t); e > (26 * o) >> 1; ) (e = c(e / o)), (r += 36);
        return c(r + ((o + 1) * e) / (e + 38));
    },
    S = function (e) {
        var t,
            n,
            r = [],
            i = (e = E(e)).length,
            a = 128,
            o = 0,
            u = 72;
        for (t = 0; t < e.length; t++) (n = e[t]) < 128 && h(r, d(n));
        var f = r.length,
            p = f;
        for (f && h(r, '-'); p < i; ) {
            var m = 2147483647;
            for (t = 0; t < e.length; t++) (n = e[t]) >= a && n < m && (m = n);
            var g = p + 1;
            if (m - a > c((2147483647 - o) / g)) throw l(s);
            for (o += (m - a) * g, a = m, t = 0; t < e.length; t++) {
                if ((n = e[t]) < a && ++o > 2147483647) throw l(s);
                if (n === a) {
                    for (var S = o, T = 36; ; ) {
                        var b = T <= u ? 1 : T >= u + 26 ? 26 : T - u;
                        if (S < b) break;
                        var y = S - b,
                            A = 36 - b;
                        h(r, d(v(b + (y % A)))), (S = c(y / A)), (T += 36);
                    }
                    h(r, d(v(S))), (u = I(o, g, p === f)), (o = 0), p++;
                }
            }
            o++, a++;
        }
        return _(r, '');
    };
e.exports = function (e) {
    var t,
        n,
        r = [],
        s = m(p(g(e), a, '.'), '.');
    for (t = 0; t < s.length; t++) h(r, u(i, (n = s[t])) ? 'xn--' + S(n) : n);
    return _(r, '.');
};
