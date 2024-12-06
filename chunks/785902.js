e.exports = function (e, t, n, i) {
    for (var l = -1, s = null == e ? 0 : e.length; ++l < s; ) {
        var r = e[l];
        t(i, r, n(r), e);
    }
    return i;
};
