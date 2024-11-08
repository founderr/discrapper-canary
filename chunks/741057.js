var r = n(421896),
    i = n(318670),
    a = n(193079),
    s = n(97106),
    o = n(257109),
    l = n(175056),
    u = n(532455),
    c = n(676067),
    d = '[object Arguments]',
    f = '[object Array]',
    _ = '[object Object]',
    h = Object.prototype.hasOwnProperty;
t.Z = function (e, t, n, p, m, g) {
    var E = (0, l.Z)(e),
        v = (0, l.Z)(t),
        I = E ? f : (0, o.Z)(e),
        S = v ? f : (0, o.Z)(t);
    (I = I == d ? _ : I), (S = S == d ? _ : S);
    var b = I == _,
        T = S == _,
        y = I == S;
    if (y && (0, u.Z)(e)) {
        if (!(0, u.Z)(t)) return !1;
        (E = !0), (b = !1);
    }
    if (y && !b) return g || (g = new r.Z()), E || (0, c.Z)(e) ? (0, i.Z)(e, t, n, p, m, g) : (0, a.Z)(e, t, I, n, p, m, g);
    if (!(1 & n)) {
        var A = b && h.call(e, '__wrapped__'),
            N = T && h.call(t, '__wrapped__');
        if (A || N) {
            var C = A ? e.value() : e,
                R = N ? t.value() : t;
            return g || (g = new r.Z()), m(C, R, n, p, g);
        }
    }
    return !!y && (g || (g = new r.Z()), (0, s.Z)(e, t, n, p, m, g));
};
