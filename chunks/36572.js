var r = n(525425),
    i = n(228057),
    a = n(142670),
    o = n(161984),
    s = n(671660),
    l = n(443735),
    u = n(402428),
    c = n(521392),
    d = n(207757),
    _ = n(807419),
    E = n(706627),
    f = n(667066),
    h = n(556868),
    p = n(292065),
    m = n(662506);
function I(e, t, n, I, T, g, S) {
    var A = p(e, n),
        v = p(t, n),
        N = S.get(v);
    if (N) {
        r(e, n, N);
        return;
    }
    var O = g ? g(A, v, n + '', e, t, S) : void 0,
        R = void 0 === O;
    if (R) {
        var C = u(v),
            y = !C && d(v),
            b = !C && !y && h(v);
        (O = v), C || y || b ? (u(A) ? (O = A) : c(A) ? (O = o(A)) : y ? ((R = !1), (O = i(v, !0))) : b ? ((R = !1), (O = a(v, !0))) : (O = [])) : f(v) || l(v) ? ((O = A), l(A) ? (O = m(A)) : (!E(A) || _(A)) && (O = s(v))) : (R = !1);
    }
    R && (S.set(v, O), T(O, v, I, g, S), S.delete(v)), r(e, n, O);
}
e.exports = I;
