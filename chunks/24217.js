e.exports = function (e) {
    for (var t = -1, n = null == e ? 0 : e.length, r = 0, a = []; ++t < n; ) {
        var i = e[t];
        i && (a[r++] = i);
    }
    return a;
};
