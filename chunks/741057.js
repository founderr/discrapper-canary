var r = n(421896),
    i = n(318670),
    a = n(193079),
    s = n(97106),
    o = n(257109),
    l = n(175056),
    u = n(532455),
    c = n(676067),
    d = '[object Arguments]',
    _ = '[object Array]',
    E = '[object Object]',
    f = Object.prototype.hasOwnProperty;
t.Z = function (e, t, n, h, p, I) {
    var m = (0, l.Z)(e),
        T = (0, l.Z)(t),
        S = m ? _ : (0, o.Z)(e),
        g = T ? _ : (0, o.Z)(t);
    (S = S == d ? E : S), (g = g == d ? E : g);
    var A = S == E,
        N = g == E,
        O = S == g;
    if (O && (0, u.Z)(e)) {
        if (!(0, u.Z)(t)) return !1;
        (m = !0), (A = !1);
    }
    if (O && !A) return I || (I = new r.Z()), m || (0, c.Z)(e) ? (0, i.Z)(e, t, n, h, p, I) : (0, a.Z)(e, t, S, n, h, p, I);
    if (!(1 & n)) {
        var R = A && f.call(e, '__wrapped__'),
            v = N && f.call(t, '__wrapped__');
        if (R || v) {
            var C = R ? e.value() : e,
                L = v ? t.value() : t;
            return I || (I = new r.Z()), p(C, L, n, h, I);
        }
    }
    return !!O && (I || (I = new r.Z()), (0, s.Z)(e, t, n, h, p, I));
};
