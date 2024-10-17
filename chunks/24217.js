e.exports = function (e) {
    for (var t = -1, s = null == e ? 0 : e.length, a = 0, r = []; ++t < s; ) {
        var n = e[t];
        n && (r[a++] = n);
    }
    return r;
};
