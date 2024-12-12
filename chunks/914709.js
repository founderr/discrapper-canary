var i = r(961123),
    a = r(841566),
    s = r(290677),
    o = r(682653),
    l = r(720815),
    u = r(278757);
function c(e, n, r) {
    n = i(n, e);
    for (var c = -1, d = n.length, f = !1; ++c < d; ) {
        var _ = u(n[c]);
        if (!(f = null != e && r(e, _))) break;
        e = e[_];
    }
    return f || ++c != d ? f : !!(d = null == e ? 0 : e.length) && l(d) && o(_, d) && (s(e) || a(e));
}
e.exports = c;
