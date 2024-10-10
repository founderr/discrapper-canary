var n = r(196322),
    a = r(443735),
    _ = r(402428),
    o = r(830911),
    i = r(406705),
    E = r(828091);
e.exports = function (e, t, r) {
    t = n(t, e);
    for (var c = -1, s = t.length, I = !1; ++c < s; ) {
        var u = E(t[c]);
        if (!(I = null != e && r(e, u))) break;
        e = e[u];
    }
    return I || ++c != s ? I : !!(s = null == e ? 0 : e.length) && i(s) && o(u, s) && (_(e) || a(e));
};
