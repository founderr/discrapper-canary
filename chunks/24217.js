e.exports = function (e) {
    for (var t = -1, n = null == e ? 0 : e.length, r = 0, a = []; ++t < n; ) {
        var s = e[t];
        s && (a[r++] = s);
    }
    return a;
};
