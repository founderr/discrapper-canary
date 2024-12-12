function n(e) {
    for (var n = -1, r = null == e ? 0 : e.length, i = {}; ++n < r; ) {
        var a = e[n];
        i[a[0]] = a[1];
    }
    return i;
}
e.exports = n;
