var r = n(525425),
    i = n(228057),
    a = n(142670),
    s = n(161984),
    o = n(671660),
    l = n(443735),
    u = n(402428),
    c = n(521392),
    d = n(207757),
    _ = n(807419),
    E = n(706627),
    f = n(667066),
    h = n(556868),
    p = n(292065),
    I = n(662506);
e.exports = function (e, t, n, m, T, S, g) {
    var A = p(e, n),
        N = p(t, n),
        R = g.get(N);
    if (R) {
        r(e, n, R);
        return;
    }
    var O = S ? S(A, N, n + '', e, t, g) : void 0,
        v = void 0 === O;
    if (v) {
        var C = u(N),
            L = !C && d(N),
            y = !C && !L && h(N);
        (O = N), C || L || y ? (u(A) ? (O = A) : c(A) ? (O = s(A)) : L ? ((v = !1), (O = i(N, !0))) : y ? ((v = !1), (O = a(N, !0))) : (O = [])) : f(N) || l(N) ? ((O = A), l(A) ? (O = I(A)) : (!E(A) || _(A)) && (O = o(N))) : (v = !1);
    }
    v && (g.set(N, O), T(O, N, m, S, g), g.delete(N)), r(e, n, O);
};
