var r = n(421896),
    i = n(533778);
t.Z = function (e, t, n, a) {
    var s = n.length,
        o = s,
        l = !a;
    if (null == e) return !o;
    for (e = Object(e); s--; ) {
        var u = n[s];
        if (l && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1;
    }
    for (; ++s < o; ) {
        var c = (u = n[s])[0],
            d = e[c],
            f = u[1];
        if (l && u[2]) {
            if (void 0 === d && !(c in e)) return !1;
        } else {
            var _ = new r.Z();
            if (a) var h = a(d, f, c, e, t, _);
            if (!(void 0 === h ? (0, i.Z)(f, d, 3, a, _) : h)) return !1;
        }
    }
    return !0;
};
