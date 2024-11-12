var r = n(796581),
    i = n(149912);
e.exports = function e(t, n, o, a, s) {
    var l = -1,
        c = t.length;
    for (o || (o = i), s || (s = []); ++l < c; ) {
        var d = t[l];
        n > 0 && o(d) ? (n > 1 ? e(d, n - 1, o, a, s) : r(s, d)) : !a && (s[s.length] = d);
    }
    return s;
};
