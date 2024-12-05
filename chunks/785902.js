e.exports = function (e, n, t, i) {
    for (var E = -1, r = null == e ? 0 : e.length; ++E < r; ) {
        var I = e[E];
        n(i, I, t(I), e);
    }
    return i;
};
