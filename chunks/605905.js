function n(e, n, r, i) {
    var a = -1,
        s = null == e ? 0 : e.length;
    for (i && s && (r = e[++a]); ++a < s; ) r = n(r, e[a], a, e);
    return r;
}
e.exports = n;
