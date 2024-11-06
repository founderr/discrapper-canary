var r = t(796581),
    i = t(149912);
e.exports = function e(n, t, u, o, l) {
    var a = -1,
        c = n.length;
    for (u || (u = i), l || (l = []); ++a < c; ) {
        var s = n[a];
        t > 0 && u(s) ? (t > 1 ? e(s, t - 1, u, o, l) : r(l, s)) : !o && (l[l.length] = s);
    }
    return l;
};
