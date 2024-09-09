e.exports = function (e) {
    for (var t = -1, r = null == e ? 0 : e.length, a = 0, n = []; ++t < r; ) {
        var s = e[t];
        s && (n[a++] = s);
    }
    return n;
};
