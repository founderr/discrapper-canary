var r = n(876887),
    i = n(987310),
    a = n(131497),
    s = n(668543),
    o = n(258172),
    l = n(97445),
    u = n(175056),
    c = n(372930),
    d = n(532455),
    f = n(593007),
    _ = n(675717),
    p = n(604533),
    h = n(676067),
    m = n(54078),
    g = n(194428);
t.Z = function (e, t, n, E, v, I, b) {
    var S = (0, m.Z)(e, n),
        T = (0, m.Z)(t, n),
        y = b.get(T);
    if (y) {
        (0, r.Z)(e, n, y);
        return;
    }
    var A = I ? I(S, T, n + '', e, t, b) : void 0,
        N = void 0 === A;
    if (N) {
        var C = (0, u.Z)(T),
            R = !C && (0, d.Z)(T),
            O = !C && !R && (0, h.Z)(T);
        (A = T), C || R || O ? ((0, u.Z)(S) ? (A = S) : (0, c.Z)(S) ? (A = (0, s.Z)(S)) : R ? ((N = !1), (A = (0, i.Z)(T, !0))) : O ? ((N = !1), (A = (0, a.Z)(T, !0))) : (A = [])) : (0, p.Z)(T) || (0, l.Z)(T) ? ((A = S), (0, l.Z)(S) ? (A = (0, g.Z)(S)) : (!(0, _.Z)(S) || (0, f.Z)(S)) && (A = (0, o.Z)(T))) : (N = !1);
    }
    N && (b.set(T, A), v(A, T, E, I, b), b.delete(T)), (0, r.Z)(e, n, A);
};
