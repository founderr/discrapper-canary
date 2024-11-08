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
    h = n(667066),
    p = n(556868),
    m = n(292065),
    g = n(662506);
e.exports = function (e, t, n, E, v, I, S) {
    var b = m(e, n),
        T = m(t, n),
        y = S.get(T);
    if (y) {
        r(e, n, y);
        return;
    }
    var A = I ? I(b, T, n + '', e, t, S) : void 0,
        N = void 0 === A;
    if (N) {
        var C = u(T),
            R = !C && d(T),
            O = !C && !R && p(T);
        (A = T), C || R || O ? (u(b) ? (A = b) : c(b) ? (A = s(b)) : R ? ((N = !1), (A = i(T, !0))) : O ? ((N = !1), (A = a(T, !0))) : (A = [])) : h(T) || l(T) ? ((A = b), l(b) ? (A = g(b)) : (!_(b) || f(b)) && (A = o(T))) : (N = !1);
    }
    N && (S.set(T, A), v(A, T, E, I, S), S.delete(T)), r(e, n, A);
};
