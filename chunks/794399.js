var i = r(429614),
    a = r(483506);
function s(e, n, r, o, l) {
    var u = -1,
        c = e.length;
    for (r || (r = a), l || (l = []); ++u < c; ) {
        var d = e[u];
        n > 0 && r(d) ? (n > 1 ? s(d, n - 1, r, o, l) : i(l, d)) : !o && (l[l.length] = d);
    }
    return l;
}
e.exports = s;
