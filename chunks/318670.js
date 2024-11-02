var r = n(345114),
    i = n(806159),
    a = n(738562);
t.Z = function (e, t, n, s, o, l) {
    var u = 1 & n,
        c = e.length,
        d = t.length;
    if (c != d && !(u && d > c)) return !1;
    var f = l.get(e),
        _ = l.get(t);
    if (f && _) return f == t && _ == e;
    var h = -1,
        p = !0,
        m = 2 & n ? new r.Z() : void 0;
    for (l.set(e, t), l.set(t, e); ++h < c; ) {
        var g = e[h],
            E = t[h];
        if (s) var v = u ? s(E, g, h, t, e, l) : s(g, E, h, e, t, l);
        if (void 0 !== v) {
            if (v) continue;
            p = !1;
            break;
        }
        if (m) {
            if (
                !(0, i.Z)(t, function (e, t) {
                    if (!(0, a.Z)(m, t) && (g === e || o(g, e, n, s, l))) return m.push(t);
                })
            ) {
                p = !1;
                break;
            }
        } else if (!(g === E || o(g, E, n, s, l))) {
            p = !1;
            break;
        }
    }
    return l.delete(e), l.delete(t), p;
};
