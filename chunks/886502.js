var n = r(620014),
    a = r(501979),
    _ = r(575473),
    o = r(907287),
    i = r(65064),
    E = r(402428),
    c = r(207757),
    s = r(556868),
    I = '[object Arguments]',
    u = '[object Array]',
    l = '[object Object]',
    R = Object.prototype.hasOwnProperty;
e.exports = function (e, t, r, A, T, N) {
    var d = E(e),
        O = E(t),
        p = d ? u : i(e),
        f = O ? u : i(t);
    (p = p == I ? l : p), (f = f == I ? l : f);
    var L = p == l,
        S = f == l,
        D = p == f;
    if (D && c(e)) {
        if (!c(t)) return !1;
        (d = !0), (L = !1);
    }
    if (D && !L) return N || (N = new n()), d || s(e) ? a(e, t, r, A, T, N) : _(e, t, p, r, A, T, N);
    if (!(1 & r)) {
        var h = L && R.call(e, '__wrapped__'),
            C = S && R.call(t, '__wrapped__');
        if (h || C) {
            var g = h ? e.value() : e,
                M = C ? t.value() : t;
            return N || (N = new n()), T(g, M, r, A, N);
        }
    }
    return !!D && (N || (N = new n()), o(e, t, r, A, T, N));
};
