var i = r(196322),
    a = r(443735),
    s = r(402428),
    o = r(830911),
    l = r(406705),
    u = r(828091);
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
