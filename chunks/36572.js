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
        O = g.get(N);
    if (O) {
        r(e, n, O);
        return;
    }
    var R = S ? S(A, N, n + '', e, t, g) : void 0,
        v = void 0 === R;
    if (v) {
        var C = u(N),
            L = !C && d(N),
            D = !C && !L && h(N);
        (R = N), C || L || D ? (u(A) ? (R = A) : c(A) ? (R = s(A)) : L ? ((v = !1), (R = i(N, !0))) : D ? ((v = !1), (R = a(N, !0))) : (R = [])) : f(N) || l(N) ? ((R = A), l(A) ? (R = I(A)) : (!E(A) || _(A)) && (R = o(N))) : (v = !1);
    }
    v && (g.set(N, R), T(R, N, m, S, g), g.delete(N)), r(e, n, R);
};
