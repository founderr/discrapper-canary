var r = n(525425),
    i = n(228057),
    a = n(142670),
    s = n(161984),
    o = n(671660),
    l = n(443735),
    u = n(402428),
    c = n(521392),
    d = n(207757),
    f = n(807419),
    _ = n(706627),
    p = n(667066),
    h = n(556868),
    m = n(292065),
    g = n(662506);
e.exports = function (e, t, n, E, v, b, I) {
    var T = m(e, n),
        S = m(t, n),
        y = I.get(S);
    if (y) {
        r(e, n, y);
        return;
    }
    var A = b ? b(T, S, n + '', e, t, I) : void 0,
        N = void 0 === A;
    if (N) {
        var C = u(S),
            R = !C && d(S),
            O = !C && !R && h(S);
        (A = S), C || R || O ? (u(T) ? (A = T) : c(T) ? (A = s(T)) : R ? ((N = !1), (A = i(S, !0))) : O ? ((N = !1), (A = a(S, !0))) : (A = [])) : p(S) || l(S) ? ((A = T), l(T) ? (A = g(T)) : (!_(T) || f(T)) && (A = o(S))) : (N = !1);
    }
    N && (I.set(S, A), v(A, S, E, b, I), I.delete(S)), r(e, n, A);
};
