t.exports = function (t, e, r, n) {
    for (var i = -1, o = null == t ? 0 : t.length; ++i < o; ) {
        var a = t[i];
        e(n, a, r(a), t);
    }
    return n;
};
