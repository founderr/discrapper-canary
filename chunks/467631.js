e.exports = function (e, t) {
    for (var r = -1, a = null == e ? 0 : e.length, n = Array(a); ++r < a; ) n[r] = t(e[r], r, e);
    return n;
};
