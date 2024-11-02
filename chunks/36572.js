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
    var T = m(e, n),
        b = m(t, n),
        y = S.get(b);
    if (y) {
        r(e, n, y);
        return;
    }
    var A = I ? I(T, b, n + '', e, t, S) : void 0,
        N = void 0 === A;
    if (N) {
        var C = u(b),
            R = !C && d(b),
            O = !C && !R && p(b);
        (A = b), C || R || O ? (u(T) ? (A = T) : c(T) ? (A = s(T)) : R ? ((N = !1), (A = i(b, !0))) : O ? ((N = !1), (A = a(b, !0))) : (A = [])) : h(b) || l(b) ? ((A = T), l(T) ? (A = g(T)) : (!_(T) || f(T)) && (A = o(b))) : (N = !1);
    }
    N && (S.set(b, A), v(A, b, E, I, S), S.delete(b)), r(e, n, A);
};
