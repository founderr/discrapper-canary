var r = n(796581),
    i = n(149912);
e.exports = function e(t, n, o, a, l) {
    var s = -1,
        c = t.length;
    for (o || (o = i), l || (l = []); ++s < c; ) {
        var u = t[s];
        n > 0 && o(u) ? (n > 1 ? e(u, n - 1, o, a, l) : r(l, u)) : !a && (l[l.length] = u);
    }
    return l;
};
