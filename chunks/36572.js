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
e.exports = function (e, t, n, m, T, g, S) {
    var A = p(e, n),
        N = p(t, n),
        O = S.get(N);
    if (O) {
        r(e, n, O);
        return;
    }
    var v = g ? g(A, N, n + '', e, t, S) : void 0,
        R = void 0 === v;
    if (R) {
        var C = u(N),
            y = !C && d(N),
            D = !C && !y && h(N);
        (v = N), C || y || D ? (u(A) ? (v = A) : c(A) ? (v = s(A)) : y ? ((R = !1), (v = i(N, !0))) : D ? ((R = !1), (v = a(N, !0))) : (v = [])) : f(N) || l(N) ? ((v = A), l(A) ? (v = I(A)) : (!E(A) || _(A)) && (v = o(N))) : (R = !1);
    }
    R && (S.set(N, v), T(v, N, m, g, S), S.delete(N)), r(e, n, v);
};
