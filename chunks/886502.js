var i = r(620014),
    a = r(501979),
    s = r(575473),
    o = r(907287),
    l = r(65064),
    u = r(402428),
    c = r(207757),
    d = r(556868),
    f = 1,
    _ = '[object Arguments]',
    h = '[object Array]',
    p = '[object Object]',
    m = Object.prototype.hasOwnProperty;
function g(e, n, r, g, E, v) {
    var I = u(e),
        T = u(n),
        b = I ? h : l(e),
        y = T ? h : l(n);
    (b = b == _ ? p : b), (y = y == _ ? p : y);
    var S = b == p,
        A = y == p,
        N = b == y;
    if (N && c(e)) {
        if (!c(n)) return !1;
        (I = !0), (S = !1);
    }
    if (N && !S) return v || (v = new i()), I || d(e) ? a(e, n, r, g, E, v) : s(e, n, b, r, g, E, v);
    if (!(r & f)) {
        var C = S && m.call(e, '__wrapped__'),
            R = A && m.call(n, '__wrapped__');
        if (C || R) {
            var O = C ? e.value() : e,
                D = R ? n.value() : n;
            return v || (v = new i()), E(O, D, r, g, v);
        }
    }
    return !!N && (v || (v = new i()), o(e, n, r, g, E, v));
}
e.exports = g;
