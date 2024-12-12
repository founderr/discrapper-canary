var i = r(620014),
    a = r(733892),
    s = 1,
    o = 2;
function l(e, n, r, l) {
    var u = r.length,
        c = u,
        d = !l;
    if (null == e) return !c;
    for (e = Object(e); u--; ) {
        var f = r[u];
        if (d && f[2] ? f[1] !== e[f[0]] : !(f[0] in e)) return !1;
    }
    for (; ++u < c; ) {
        var _ = (f = r[u])[0],
            h = e[_],
            p = f[1];
        if (d && f[2]) {
            if (void 0 === h && !(_ in e)) return !1;
        } else {
            var m = new i();
            if (l) var g = l(h, p, _, e, n, m);
            if (!(void 0 === g ? a(p, h, s | o, l, m) : g)) return !1;
        }
    }
    return !0;
}
e.exports = l;
