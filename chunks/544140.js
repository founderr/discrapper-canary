var r = n(796581),
    i = n(149912);
e.exports = function e(t, n, u, l, o) {
    var a = -1,
        s = t.length;
    for (u || (u = i), o || (o = []); ++a < s; ) {
        var c = t[a];
        n > 0 && u(c) ? (n > 1 ? e(c, n - 1, u, l, o) : r(o, c)) : !l && (o[o.length] = c);
    }
    return o;
};
