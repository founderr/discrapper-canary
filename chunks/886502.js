var a = r(620014),
    n = r(501979),
    _ = r(575473),
    o = r(907287),
    E = r(65064),
    i = r(402428),
    c = r(207757),
    s = r(556868),
    l = '[object Arguments]',
    I = '[object Array]',
    u = '[object Object]',
    R = Object.prototype.hasOwnProperty;
e.exports = function (e, t, r, A, T, N) {
    var d = i(e),
        f = i(t),
        O = d ? I : E(e),
        L = f ? I : E(t);
    (O = O == l ? u : O), (L = L == l ? u : L);
    var p = O == u,
        h = L == u,
        D = O == L;
    if (D && c(e)) {
        if (!c(t)) return !1;
        (d = !0), (p = !1);
    }
    if (D && !p) return N || (N = new a()), d || s(e) ? n(e, t, r, A, T, N) : _(e, t, O, r, A, T, N);
    if (!(1 & r)) {
        var S = p && R.call(e, '__wrapped__'),
            C = h && R.call(t, '__wrapped__');
        if (S || C) {
            var P = S ? e.value() : e,
                g = C ? t.value() : t;
            return N || (N = new a()), T(P, g, r, A, N);
        }
    }
    return !!D && (N || (N = new a()), o(e, t, r, A, T, N));
};
