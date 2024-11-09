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
    h = n(604533),
    p = n(676067),
    m = n(54078),
    g = n(194428);
t.Z = function (e, t, n, E, v, I, S) {
    var T = (0, m.Z)(e, n),
        b = (0, m.Z)(t, n),
        y = S.get(b);
    if (y) {
        (0, r.Z)(e, n, y);
        return;
    }
    var A = I ? I(T, b, n + '', e, t, S) : void 0,
        N = void 0 === A;
    if (N) {
        var C = (0, u.Z)(b),
            R = !C && (0, d.Z)(b),
            O = !C && !R && (0, p.Z)(b);
        (A = b), C || R || O ? ((0, u.Z)(T) ? (A = T) : (0, c.Z)(T) ? (A = (0, s.Z)(T)) : R ? ((N = !1), (A = (0, i.Z)(b, !0))) : O ? ((N = !1), (A = (0, a.Z)(b, !0))) : (A = [])) : (0, h.Z)(b) || (0, l.Z)(b) ? ((A = T), (0, l.Z)(T) ? (A = (0, g.Z)(T)) : (!(0, _.Z)(T) || (0, f.Z)(T)) && (A = (0, o.Z)(b))) : (N = !1);
    }
    N && (S.set(b, A), v(A, b, E, I, S), S.delete(b)), (0, r.Z)(e, n, A);
};
