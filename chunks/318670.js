var r = n(345114),
    i = n(806159),
    a = n(738562),
    o = 1,
    s = 2;
function l(e, t, n, l, u, c) {
    var d = n & o,
        _ = e.length,
        E = t.length;
    if (_ != E && !(d && E > _)) return !1;
    var f = c.get(e),
        h = c.get(t);
    if (f && h) return f == t && h == e;
    var p = -1,
        m = !0,
        I = n & s ? new r.Z() : void 0;
    for (c.set(e, t), c.set(t, e); ++p < _; ) {
        var T = e[p],
            g = t[p];
        if (l) var S = d ? l(g, T, p, t, e, c) : l(T, g, p, e, t, c);
        if (void 0 !== S) {
            if (S) continue;
            m = !1;
            break;
        }
        if (I) {
            if (
                !(0, i.Z)(t, function (e, t) {
                    if (!(0, a.Z)(I, t) && (T === e || u(T, e, n, l, c))) return I.push(t);
                })
            ) {
                m = !1;
                break;
            }
        } else if (!(T === g || u(T, g, n, l, c))) {
            m = !1;
            break;
        }
    }
    return c.delete(e), c.delete(t), m;
}
t.Z = l;
