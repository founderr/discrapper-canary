var r = n(425561),
    i = n(834598),
    a = n(460510),
    o = n(208529),
    s = n(833295),
    l = n(433005),
    u = 200;
function c(e, t, n) {
    var c = -1,
        d = i,
        _ = e.length,
        E = !0,
        f = [],
        h = f;
    if (n) (E = !1), (d = a);
    else if (_ >= u) {
        var p = t ? null : s(e);
        if (p) return l(p);
        (E = !1), (d = o), (h = new r());
    } else h = t ? [] : f;
    t: for (; ++c < _; ) {
        var m = e[c],
            I = t ? t(m) : m;
        if (((m = n || 0 !== m ? m : 0), E && I == I)) {
            for (var T = h.length; T--; ) if (h[T] === I) continue t;
            t && h.push(I), f.push(m);
        } else !d(h, I, n) && (h !== f && h.push(I), f.push(m));
    }
    return f;
}
e.exports = c;
