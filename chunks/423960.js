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
    var T = (0, m.Z)(e, n),
        S = (0, m.Z)(t, n),
        y = b.get(S);
    if (y) {
        (0, r.Z)(e, n, y);
        return;
    }
    var A = I ? I(T, S, n + '', e, t, b) : void 0,
        N = void 0 === A;
    if (N) {
        var C = (0, u.Z)(S),
            R = !C && (0, d.Z)(S),
            O = !C && !R && (0, h.Z)(S);
        (A = S), C || R || O ? ((0, u.Z)(T) ? (A = T) : (0, c.Z)(T) ? (A = (0, s.Z)(T)) : R ? ((N = !1), (A = (0, i.Z)(S, !0))) : O ? ((N = !1), (A = (0, a.Z)(S, !0))) : (A = [])) : (0, p.Z)(S) || (0, l.Z)(S) ? ((A = T), (0, l.Z)(T) ? (A = (0, g.Z)(T)) : (!(0, _.Z)(T) || (0, f.Z)(T)) && (A = (0, o.Z)(S))) : (N = !1);
    }
    N && (b.set(S, A), v(A, S, E, I, b), b.delete(S)), (0, r.Z)(e, n, A);
};
