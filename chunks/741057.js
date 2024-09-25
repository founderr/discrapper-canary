var r = n(421896),
    i = n(318670),
    a = n(193079),
    o = n(97106),
    s = n(257109),
    l = n(175056),
    u = n(532455),
    c = n(676067),
    d = 1,
    _ = '[object Arguments]',
    E = '[object Array]',
    f = '[object Object]',
    h = Object.prototype.hasOwnProperty;
function p(e, t, n, p, m, I) {
    var T = (0, l.Z)(e),
        g = (0, l.Z)(t),
        S = T ? E : (0, s.Z)(e),
        A = g ? E : (0, s.Z)(t);
    (S = S == _ ? f : S), (A = A == _ ? f : A);
    var v = S == f,
        N = A == f,
        O = S == A;
    if (O && (0, u.Z)(e)) {
        if (!(0, u.Z)(t)) return !1;
        (T = !0), (v = !1);
    }
    if (O && !v) return I || (I = new r.Z()), T || (0, c.Z)(e) ? (0, i.Z)(e, t, n, p, m, I) : (0, a.Z)(e, t, S, n, p, m, I);
    if (!(n & d)) {
        var R = v && h.call(e, '__wrapped__'),
            C = N && h.call(t, '__wrapped__');
        if (R || C) {
            var y = R ? e.value() : e,
                b = C ? t.value() : t;
            return I || (I = new r.Z()), m(y, b, n, p, I);
        }
    }
    return !!O && (I || (I = new r.Z()), (0, o.Z)(e, t, n, p, m, I));
}
t.Z = p;
