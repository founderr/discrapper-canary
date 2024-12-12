var a = r(196322),
    n = r(443735),
    _ = r(402428),
    o = r(830911),
    E = r(406705),
    i = r(828091);
e.exports = function (e, t, r) {
    t = a(t, e);
    for (var c = -1, s = t.length, l = !1; ++c < s; ) {
        var I = i(t[c]);
        if (!(l = null != e && r(e, I))) break;
        e = e[I];
    }
    return l || ++c != s ? l : !!(s = null == e ? 0 : e.length) && E(s) && o(I, s) && (_(e) || n(e));
};
