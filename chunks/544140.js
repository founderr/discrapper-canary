var r = n(796581),
    i = n(149912);
e.exports = function e(t, n, o, c, a) {
    var l = -1,
        u = t.length;
    for (o || (o = i), a || (a = []); ++l < u; ) {
        var s = t[l];
        n > 0 && o(s) ? (n > 1 ? e(s, n - 1, o, c, a) : r(a, s)) : !c && (a[a.length] = s);
    }
    return a;
};
