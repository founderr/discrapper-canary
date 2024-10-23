e.exports = function (e) {
    for (var t = -1, r = null == e ? 0 : e.length, s = 0, n = []; ++t < r; ) {
        var a = e[t];
        a && (n[s++] = a);
    }
    return n;
};
