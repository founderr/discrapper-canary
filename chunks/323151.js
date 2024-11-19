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
        b = E ? f : o(e),
        I = v ? f : o(t);
    (b = b == d ? _ : b), (I = I == d ? _ : I);
    var T = b == _,
        S = I == _,
        y = b == I;
    if (y && u(e)) {
        if (!u(t)) return !1;
        (E = !0), (T = !1);
    }
    if (y && !T) return g || (g = new r()), E || c(e) ? i(e, t, n, h, m, g) : a(e, t, b, n, h, m, g);
    if (!(1 & n)) {
        var A = T && p.call(e, '__wrapped__'),
            N = S && p.call(t, '__wrapped__');
        if (A || N) {
            var C = A ? e.value() : e,
                R = N ? t.value() : t;
            return g || (g = new r()), m(C, R, n, h, g);
        }
    }
    return !!y && (g || (g = new r()), s(e, t, n, h, m, g));
};
