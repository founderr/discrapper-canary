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
    h = Object.prototype.hasOwnProperty;
e.exports = function (e, t, n, p, m, g) {
    var E = l(e),
        v = l(t),
        I = E ? f : o(e),
        S = v ? f : o(t);
    (I = I == d ? _ : I), (S = S == d ? _ : S);
    var b = I == _,
        T = S == _,
        y = I == S;
    if (y && u(e)) {
        if (!u(t)) return !1;
        (E = !0), (b = !1);
    }
    if (y && !b) return g || (g = new r()), E || c(e) ? i(e, t, n, p, m, g) : a(e, t, I, n, p, m, g);
    if (!(1 & n)) {
        var A = b && h.call(e, '__wrapped__'),
            N = T && h.call(t, '__wrapped__');
        if (A || N) {
            var C = A ? e.value() : e,
                R = N ? t.value() : t;
            return g || (g = new r()), m(C, R, n, p, g);
        }
    }
    return !!y && (g || (g = new r()), s(e, t, n, p, m, g));
};
