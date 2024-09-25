var r = n(421896),
    i = n(533778),
    a = 1,
    o = 2;
function s(e, t, n, s) {
    var l = n.length,
        u = l,
        c = !s;
    if (null == e) return !u;
    for (e = Object(e); l--; ) {
        var d = n[l];
        if (c && d[2] ? d[1] !== e[d[0]] : !(d[0] in e)) return !1;
    }
    for (; ++l < u; ) {
        var _ = (d = n[l])[0],
            E = e[_],
            f = d[1];
        if (c && d[2]) {
            if (void 0 === E && !(_ in e)) return !1;
        } else {
            var h = new r.Z();
            if (s) var p = s(E, f, _, e, t, h);
            if (!(void 0 === p ? (0, i.Z)(f, E, a | o, s, h) : p)) return !1;
        }
    }
    return !0;
}
t.Z = s;
