var r = n(42848),
    i = 4294967294,
    a = Math.floor,
    s = Math.min;
e.exports = function (e, t, n, o) {
    var l = 0,
        u = null == e ? 0 : e.length;
    if (0 === u) return 0;
    for (var c = (t = n(t)) != t, d = null === t, f = r(t), _ = void 0 === t; l < u; ) {
        var h = a((l + u) / 2),
            p = n(e[h]),
            m = void 0 !== p,
            g = null === p,
            E = p == p,
            v = r(p);
        if (c) var I = o || E;
        else I = _ ? E && (o || m) : d ? E && m && (o || !g) : f ? E && m && !g && (o || !v) : !g && !v && (o ? p <= t : p < t);
        I ? (l = h + 1) : (u = h);
    }
    return s(u, i);
};
