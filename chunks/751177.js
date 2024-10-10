e.exports = function (e, t) {
    for (var r = -1, n = null == e ? 0 : e.length, a = 0, _ = []; ++r < n; ) {
        var o = e[r];
        t(o, r, e) && (_[a++] = o);
    }
    return _;
};
