var r = n(796581),
    i = n(149912);
t.exports = function t(e, n, l, a, o) {
    var u = -1,
        s = e.length;
    for (l || (l = i), o || (o = []); ++u < s; ) {
        var c = e[u];
        n > 0 && l(c) ? (n > 1 ? t(c, n - 1, l, a, o) : r(o, c)) : !a && (o[o.length] = c);
    }
    return o;
};
