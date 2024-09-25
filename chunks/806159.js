function n(e, t) {
    for (var n = -1, r = null == e ? 0 : e.length; ++n < r; ) if (t(e[n], n, e)) return !0;
    return !1;
}
t.Z = n;
