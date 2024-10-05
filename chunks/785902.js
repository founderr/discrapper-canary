e.exports = function (e, r, t, n) {
    for (var a = -1, i = null == e ? 0 : e.length; ++a < i; ) {
        var o = e[a];
        r(n, o, t(o), e);
    }
    return n;
};
