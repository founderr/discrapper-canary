var n = r(196322),
    a = r(443735),
    _ = r(402428),
    o = r(830911),
    E = r(406705),
    i = r(828091);
e.exports = function (e, t, r) {
    t = n(t, e);
    for (var c = -1, s = t.length, l = !1; ++c < s; ) {
        var u = i(t[c]);
        if (!(l = null != e && r(e, u))) break;
        e = e[u];
    }
    return l || ++c != s ? l : !!(s = null == e ? 0 : e.length) && E(s) && o(u, s) && (_(e) || a(e));
};
