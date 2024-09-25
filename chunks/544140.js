var r = n(796581),
    i = n(149912);
function a(e, t, n, o, s) {
    var l = -1,
        u = e.length;
    for (n || (n = i), s || (s = []); ++l < u; ) {
        var c = e[l];
        t > 0 && n(c) ? (t > 1 ? a(c, t - 1, n, o, s) : r(s, c)) : !o && (s[s.length] = c);
    }
    return s;
}
e.exports = a;
