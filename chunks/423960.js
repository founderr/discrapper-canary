var r = n(876887),
    i = n(987310),
    a = n(131497),
    o = n(668543),
    s = n(258172),
    l = n(97445),
    u = n(175056),
    c = n(372930),
    d = n(532455),
    _ = n(593007),
    E = n(675717),
    f = n(604533),
    h = n(676067),
    p = n(54078),
    m = n(194428);
function I(e, t, n, I, T, g, S) {
    var A = (0, p.Z)(e, n),
        v = (0, p.Z)(t, n),
        N = S.get(v);
    if (N) {
        (0, r.Z)(e, n, N);
        return;
    }
    var O = g ? g(A, v, n + '', e, t, S) : void 0,
        R = void 0 === O;
    if (R) {
        var C = (0, u.Z)(v),
            y = !C && (0, d.Z)(v),
            L = !C && !y && (0, h.Z)(v);
        (O = v), C || y || L ? ((0, u.Z)(A) ? (O = A) : (0, c.Z)(A) ? (O = (0, o.Z)(A)) : y ? ((R = !1), (O = (0, i.Z)(v, !0))) : L ? ((R = !1), (O = (0, a.Z)(v, !0))) : (O = [])) : (0, f.Z)(v) || (0, l.Z)(v) ? ((O = A), (0, l.Z)(A) ? (O = (0, m.Z)(A)) : (!(0, E.Z)(A) || (0, _.Z)(A)) && (O = (0, s.Z)(v))) : (R = !1);
    }
    R && (S.set(v, O), T(O, v, I, g, S), S.delete(v)), (0, r.Z)(e, n, O);
}
t.Z = I;
