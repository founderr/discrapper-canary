function n(e, n) {
    for (var r = -1, i = null == e ? 0 : e.length; ++r < i; ) if (n(e[r], r, e)) return !0;
    return !1;
}
e.exports = n;
