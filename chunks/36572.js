var i = r(525425),
    a = r(228057),
    s = r(142670),
    o = r(161984),
    l = r(671660),
    u = r(443735),
    c = r(402428),
    d = r(521392),
    f = r(207757),
    _ = r(807419),
    h = r(706627),
    p = r(667066),
    m = r(556868),
    g = r(292065),
    E = r(662506);
function v(e, n, r, v, I, T, b) {
    var y = g(e, r),
        S = g(n, r),
        A = b.get(S);
    if (A) {
        i(e, r, A);
        return;
    }
    var N = T ? T(y, S, r + '', e, n, b) : void 0,
        C = void 0 === N;
    if (C) {
        var R = c(S),
            O = !R && f(S),
            D = !R && !O && m(S);
        (N = S), R || O || D ? (c(y) ? (N = y) : d(y) ? (N = o(y)) : O ? ((C = !1), (N = a(S, !0))) : D ? ((C = !1), (N = s(S, !0))) : (N = [])) : p(S) || u(S) ? ((N = y), u(y) ? (N = E(y)) : (!h(y) || _(y)) && (N = l(S))) : (C = !1);
    }
    C && (b.set(S, N), I(N, S, v, T, b), b.delete(S)), i(e, r, N);
}
e.exports = v;
