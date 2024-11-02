var r = n(425561),
    i = n(834598),
    a = n(460510),
    s = n(208529),
    o = n(833295),
    l = n(433005);
e.exports = function (e, t, n) {
    var u = -1,
        c = i,
        d = e.length,
        f = !0,
        _ = [],
        h = _;
    if (n) (f = !1), (c = a);
    else if (d >= 200) {
        var p = t ? null : o(e);
        if (p) return l(p);
        (f = !1), (c = s), (h = new r());
    } else h = t ? [] : _;
    t: for (; ++u < d; ) {
        var m = e[u],
            g = t ? t(m) : m;
        if (((m = n || 0 !== m ? m : 0), f && g == g)) {
            for (var E = h.length; E--; ) if (h[E] === g) continue t;
            t && h.push(g), _.push(m);
        } else !c(h, g, n) && (h !== _ && h.push(g), _.push(m));
    }
    return _;
};
