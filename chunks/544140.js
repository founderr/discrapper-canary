var n = r(796581),
    i = r(149912);
e.exports = function e(t, r, o, a, s) {
    var l = -1,
        c = t.length;
    for (o || (o = i), s || (s = []); ++l < c; ) {
        var d = t[l];
        r > 0 && o(d) ? (r > 1 ? e(d, r - 1, o, a, s) : n(s, d)) : !a && (s[s.length] = d);
    }
    return s;
};
