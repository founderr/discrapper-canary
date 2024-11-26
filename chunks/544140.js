var r = n(796581),
    i = n(149912);
e.exports = function e(t, n, o, a, l) {
    var s = -1,
        u = t.length;
    for (o || (o = i), l || (l = []); ++s < u; ) {
        var c = t[s];
        n > 0 && o(c) ? (n > 1 ? e(c, n - 1, o, a, l) : r(l, c)) : !a && (l[l.length] = c);
    }
    return l;
};
