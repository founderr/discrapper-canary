function r(e, n) {
    for (var r = -1, i = null == e ? 0 : e.length, a = Array(i); ++r < i; ) a[r] = n(e[r], r, e);
    return a;
}
n.Z = r;
