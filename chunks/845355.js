var i = r(42848),
    a = 4294967294,
    s = Math.floor,
    o = Math.min;
function l(e, n, r, l) {
    var u = 0,
        c = null == e ? 0 : e.length;
    if (0 === c) return 0;
    for (var d = (n = r(n)) != n, f = null === n, _ = i(n), h = void 0 === n; u < c; ) {
        var p = s((u + c) / 2),
            m = r(e[p]),
            g = void 0 !== m,
            E = null === m,
            v = m == m,
            I = i(m);
        if (d) var T = l || v;
        else T = h ? v && (l || g) : f ? v && g && (l || !E) : _ ? v && g && !E && (l || !I) : !E && !I && (l ? m <= n : m < n);
        T ? (u = p + 1) : (c = p);
    }
    return o(c, a);
}
e.exports = l;
