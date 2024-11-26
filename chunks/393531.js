e.exports = function (e, t) {
    for (var r = -1, a = null == e ? 0 : e.length; ++r < a; ) if (t(e[r], r, e)) return !0;
    return !1;
};
