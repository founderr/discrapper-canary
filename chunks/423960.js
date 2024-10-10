var r = n(876887),
    i = n(987310),
    a = n(131497),
    s = n(668543),
    o = n(258172),
    l = n(97445),
    u = n(175056),
    c = n(372930),
    d = n(532455),
    _ = n(593007),
    E = n(675717),
    f = n(604533),
    h = n(676067),
    p = n(54078),
    I = n(194428);
t.Z = function (e, t, n, m, T, S, g) {
    var A = (0, p.Z)(e, n),
        N = (0, p.Z)(t, n),
        R = g.get(N);
    if (R) {
        (0, r.Z)(e, n, R);
        return;
    }
    var O = S ? S(A, N, n + '', e, t, g) : void 0,
        v = void 0 === O;
    if (v) {
        var C = (0, u.Z)(N),
            L = !C && (0, d.Z)(N),
            y = !C && !L && (0, h.Z)(N);
        (O = N), C || L || y ? ((0, u.Z)(A) ? (O = A) : (0, c.Z)(A) ? (O = (0, s.Z)(A)) : L ? ((v = !1), (O = (0, i.Z)(N, !0))) : y ? ((v = !1), (O = (0, a.Z)(N, !0))) : (O = [])) : (0, f.Z)(N) || (0, l.Z)(N) ? ((O = A), (0, l.Z)(A) ? (O = (0, I.Z)(A)) : (!(0, E.Z)(A) || (0, _.Z)(A)) && (O = (0, o.Z)(N))) : (v = !1);
    }
    v && (g.set(N, O), T(O, N, m, S, g), g.delete(N)), (0, r.Z)(e, n, O);
};
