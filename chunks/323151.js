var r = n(687249),
    i = n(718332),
    a = n(995542),
    o = n(92141),
    s = n(53919),
    l = n(290677),
    u = n(551023),
    c = n(454745),
    d = 1,
    _ = '[object Arguments]',
    E = '[object Array]',
    f = '[object Object]',
    h = Object.prototype.hasOwnProperty;
function p(e, t, n, p, m, I) {
    var T = l(e),
        g = l(t),
        S = T ? E : s(e),
        A = g ? E : s(t);
    (S = S == _ ? f : S), (A = A == _ ? f : A);
    var v = S == f,
        N = A == f,
        O = S == A;
    if (O && u(e)) {
        if (!u(t)) return !1;
        (T = !0), (v = !1);
    }
    if (O && !v) return I || (I = new r()), T || c(e) ? i(e, t, n, p, m, I) : a(e, t, S, n, p, m, I);
    if (!(n & d)) {
        var R = v && h.call(e, '__wrapped__'),
            C = N && h.call(t, '__wrapped__');
        if (R || C) {
            var y = R ? e.value() : e,
                b = C ? t.value() : t;
            return I || (I = new r()), m(y, b, n, p, I);
        }
    }
    return !!O && (I || (I = new r()), o(e, t, n, p, m, I));
}
e.exports = p;
