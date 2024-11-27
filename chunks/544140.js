var r = t(796581),
    i = t(149912);
e.exports = function e(n, t, l, u, o) {
    var a = -1,
        s = n.length;
    for (l || (l = i), o || (o = []); ++a < s; ) {
        var c = n[a];
        t > 0 && l(c) ? (t > 1 ? e(c, t - 1, l, u, o) : r(o, c)) : !u && (o[o.length] = c);
    }
    return o;
};
