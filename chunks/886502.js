var n = r(620014),
    a = r(501979),
    _ = r(575473),
    o = r(907287),
    E = r(65064),
    i = r(402428),
    c = r(207757),
    s = r(556868),
    l = '[object Arguments]',
    u = '[object Array]',
    I = '[object Object]',
    R = Object.prototype.hasOwnProperty;
e.exports = function (e, t, r, N, A, T) {
    var d = i(e),
        L = i(t),
        f = d ? u : E(e),
        O = L ? u : E(t);
    (f = f == l ? I : f), (O = O == l ? I : O);
    var p = f == I,
        h = O == I,
        S = f == O;
    if (S && c(e)) {
        if (!c(t)) return !1;
        (d = !0), (p = !1);
    }
    if (S && !p) return T || (T = new n()), d || s(e) ? a(e, t, r, N, A, T) : _(e, t, f, r, N, A, T);
    if (!(1 & r)) {
        var D = p && R.call(e, '__wrapped__'),
            C = h && R.call(t, '__wrapped__');
        if (D || C) {
            var g = D ? e.value() : e,
                U = C ? t.value() : t;
            return T || (T = new n()), A(g, U, r, N, T);
        }
    }
    return !!S && (T || (T = new n()), o(e, t, r, N, A, T));
};
