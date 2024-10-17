e.exports = function (e, t, s, n) {
    for (var l = -1, i = null == e ? 0 : e.length; ++l < i; ) {
        var a = e[l];
        t(n, a, s(a), e);
    }
    return n;
};
