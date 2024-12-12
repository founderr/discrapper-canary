function r(e, n) {
    for (var r = -1, i = null == e ? 0 : e.length, a = 0, s = []; ++r < i; ) {
        var o = e[r];
        n(o, r, e) && (s[a++] = o);
    }
    return s;
}
n.Z = r;
