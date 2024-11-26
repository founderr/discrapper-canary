e.exports = function (e, t) {
    for (var r = -1, a = null == e ? 0 : e.length, n = 0, _ = []; ++r < a; ) {
        var o = e[r];
        t(o, r, e) && (_[n++] = o);
    }
    return _;
};
