function n(e, n, r) {
    for (var i = -1, a = null == e ? 0 : e.length; ++i < a; ) if (r(n, e[i])) return !0;
    return !1;
}
e.exports = n;
