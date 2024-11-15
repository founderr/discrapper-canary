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
    var S = m(e, n),
        T = m(t, n),
        y = I.get(T);
    if (y) {
        r(e, n, y);
        return;
    }
    var A = b ? b(S, T, n + '', e, t, I) : void 0,
        N = void 0 === A;
    if (N) {
        var C = u(T),
            R = !C && d(T),
            O = !C && !R && h(T);
        (A = T), C || R || O ? (u(S) ? (A = S) : c(S) ? (A = s(S)) : R ? ((N = !1), (A = i(T, !0))) : O ? ((N = !1), (A = a(T, !0))) : (A = [])) : p(T) || l(T) ? ((A = S), l(S) ? (A = g(S)) : (!_(S) || f(S)) && (A = o(T))) : (N = !1);
    }
    N && (I.set(T, A), v(A, T, E, b, I), I.delete(T)), r(e, n, A);
};
