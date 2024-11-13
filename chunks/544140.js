var r = n(796581),
    i = n(149912);
e.exports = function e(t, n, o, a, l) {
    var s = -1,
        c = t.length;
    for (o || (o = i), l || (l = []); ++s < c; ) {
        var d = t[s];
        n > 0 && o(d) ? (n > 1 ? e(d, n - 1, o, a, l) : r(l, d)) : !a && (l[l.length] = d);
    }
    return l;
};
