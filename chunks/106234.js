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
