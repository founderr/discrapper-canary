var r = n(687249),
    i = n(718332),
    a = n(995542),
    s = n(92141),
    o = n(53919),
    l = n(290677),
    u = n(551023),
    c = n(454745),
    d = '[object Arguments]',
    f = '[object Array]',
    _ = '[object Object]',
    p = Object.prototype.hasOwnProperty;
e.exports = function (e, t, n, h, m, g) {
    var E = l(e),
        v = l(t),
        I = E ? f : o(e),
        T = v ? f : o(t);
    (I = I == d ? _ : I), (T = T == d ? _ : T);
    var b = I == _,
        S = T == _,
        y = I == T;
    if (y && u(e)) {
        if (!u(t)) return !1;
        (E = !0), (b = !1);
    }
    if (y && !b) return g || (g = new r()), E || c(e) ? i(e, t, n, h, m, g) : a(e, t, I, n, h, m, g);
    if (!(1 & n)) {
        var A = b && p.call(e, '__wrapped__'),
            N = S && p.call(t, '__wrapped__');
        if (A || N) {
            var C = A ? e.value() : e,
                R = N ? t.value() : t;
            return g || (g = new r()), m(C, R, n, h, g);
        }
    }
    return !!y && (g || (g = new r()), s(e, t, n, h, m, g));
};
