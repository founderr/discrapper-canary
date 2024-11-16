var r = n(796581),
    i = n(149912);
e.exports = function e(t, n, o, a, s) {
    var l = -1,
        c = t.length;
    for (o || (o = i), s || (s = []); ++l < c; ) {
        var u = t[l];
        n > 0 && o(u) ? (n > 1 ? e(u, n - 1, o, a, s) : r(s, u)) : !a && (s[s.length] = u);
    }
    return s;
};
