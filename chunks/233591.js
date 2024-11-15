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
    p = r([].push),
    h = r(''.replace),
    m = r(''.split),
    g = r(''.toLowerCase),
    E = function (e) {
        for (var t = [], n = 0, r = e.length; n < r; ) {
            var i = f(e, n++);
            if (i >= 55296 && i <= 56319 && n < r) {
                var a = f(e, n++);
                (64512 & a) == 56320 ? p(t, ((1023 & i) << 10) + (1023 & a) + 65536) : (p(t, i), n--);
            } else p(t, i);
        }
        return t;
    },
    v = function (e) {
        return e + 22 + 75 * (e < 26);
    },
    b = function (e, t, n) {
        var r = 0;
        for (e = n ? c(e / 700) : e >> 1, e += c(e / t); e > (26 * o) >> 1; ) (e = c(e / o)), (r += 36);
        return c(r + ((o + 1) * e) / (e + 38));
    },
    I = function (e) {
        var t,
            n,
            r = [],
            i = (e = E(e)).length,
            a = 128,
            o = 0,
            u = 72;
        for (t = 0; t < e.length; t++) (n = e[t]) < 128 && p(r, d(n));
        var f = r.length,
            h = f;
        for (f && p(r, '-'); h < i; ) {
            var m = 2147483647;
            for (t = 0; t < e.length; t++) (n = e[t]) >= a && n < m && (m = n);
            var g = h + 1;
            if (m - a > c((2147483647 - o) / g)) throw l(s);
            for (o += (m - a) * g, a = m, t = 0; t < e.length; t++) {
                if ((n = e[t]) < a && ++o > 2147483647) throw l(s);
                if (n === a) {
                    for (var I = o, S = 36; ; ) {
                        var T = S <= u ? 1 : S >= u + 26 ? 26 : S - u;
                        if (I < T) break;
                        var y = I - T,
                            A = 36 - T;
                        p(r, d(v(T + (y % A)))), (I = c(y / A)), (S += 36);
                    }
                    p(r, d(v(I))), (u = b(o, g, h === f)), (o = 0), h++;
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
        s = m(h(g(e), a, '.'), '.');
    for (t = 0; t < s.length; t++) p(r, u(i, (n = s[t])) ? 'xn--' + I(n) : n);
    return _(r, '.');
};
