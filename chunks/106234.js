var r = n(102074),
    i = n(251064),
    a = n(464880),
    s = n(803607),
    o = n(879893),
    l = n(82075);
e.exports = function (e, t, n) {
    var u = -1,
        c = i,
        d = e.length,
        f = !0,
        _ = [],
        p = _;
    if (n) (f = !1), (c = a);
    else if (d >= 200) {
        var h = t ? null : o(e);
        if (h) return l(h);
        (f = !1), (c = s), (p = new r());
    } else p = t ? [] : _;
    t: for (; ++u < d; ) {
        var m = e[u],
            g = t ? t(m) : m;
        if (((m = n || 0 !== m ? m : 0), f && g == g)) {
            for (var E = p.length; E--; ) if (p[E] === g) continue t;
            t && p.push(g), _.push(m);
        } else !c(p, g, n) && (p !== _ && p.push(g), _.push(m));
    }
    return _;
};
