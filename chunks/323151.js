var r = n(687249),
    i = n(718332),
    a = n(995542),
    s = n(92141),
    o = n(53919),
    l = n(290677),
    u = n(551023),
    c = n(454745),
    d = '[object Arguments]',
    _ = '[object Array]',
    E = '[object Object]',
    f = Object.prototype.hasOwnProperty;
e.exports = function (e, t, n, h, p, I) {
    var m = l(e),
        T = l(t),
        S = m ? _ : o(e),
        g = T ? _ : o(t);
    (S = S == d ? E : S), (g = g == d ? E : g);
    var A = S == E,
        N = g == E,
        O = S == g;
    if (O && u(e)) {
        if (!u(t)) return !1;
        (m = !0), (A = !1);
    }
    if (O && !A) return I || (I = new r()), m || c(e) ? i(e, t, n, h, p, I) : a(e, t, S, n, h, p, I);
    if (!(1 & n)) {
        var R = A && f.call(e, '__wrapped__'),
            v = N && f.call(t, '__wrapped__');
        if (R || v) {
            var C = R ? e.value() : e,
                L = v ? t.value() : t;
            return I || (I = new r()), p(C, L, n, h, I);
        }
    }
    return !!O && (I || (I = new r()), s(e, t, n, h, p, I));
};
