e.exports = function (e, t, a, n) {
    for (var r = -1, i = null == e ? 0 : e.length; ++r < i; ) {
        var o = e[r];
        t(n, o, a(o), e);
    }
    return n;
};
