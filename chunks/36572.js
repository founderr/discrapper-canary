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
    var R = g ? g(A, N, n + '', e, t, S) : void 0,
        v = void 0 === R;
    if (v) {
        var C = u(N),
            y = !C && d(N),
            L = !C && !y && h(N);
        (R = N), C || y || L ? (u(A) ? (R = A) : c(A) ? (R = s(A)) : y ? ((v = !1), (R = i(N, !0))) : L ? ((v = !1), (R = a(N, !0))) : (R = [])) : f(N) || l(N) ? ((R = A), l(A) ? (R = I(A)) : (!E(A) || _(A)) && (R = o(N))) : (v = !1);
    }
    v && (S.set(N, R), T(R, N, m, g, S), S.delete(N)), r(e, n, R);
};
