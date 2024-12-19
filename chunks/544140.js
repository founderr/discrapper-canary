var r = n(796581),
    i = n(149912);
t.exports = function t(e, n, l, a, u) {
    var o = -1,
        s = e.length;
    for (l || (l = i), u || (u = []); ++o < s; ) {
        var c = e[o];
        n > 0 && l(c) ? (n > 1 ? t(c, n - 1, l, a, u) : r(u, c)) : !a && (u[u.length] = c);
    }
    return u;
};
