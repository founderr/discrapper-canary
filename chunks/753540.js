t.d(n, {
    EH: function () {
        return c;
    },
    Mf: function () {
        return o;
    },
    t4: function () {
        return s;
    }
});
var l = t(442837),
    a = t(9156),
    i = t(724213),
    r = t(388032);
function o(e, n, t) {
    return (0, l.e7)([a.ZP], () => {
        var l, r, o;
        if (n === t) return a.ZP.isChannelOptedIn(e, n, !0);
        return (l = e), (r = n), (o = a.ZP), !!(0, i.hi)(l) || o.isChannelOptedIn(l, r, !0) || (null != t && a.ZP.isChannelOptedIn(e, t, !0));
    });
}
function s(e, n, t) {
    return (0, l.e7)([a.ZP], () => n !== t && null != t && a.ZP.isChannelOptedIn(e, t, !0));
}
function c(e, n) {
    return (0, l.e7)([a.ZP], () => {
        if (null != n && a.ZP.isChannelOptedIn(e, n, !0)) return r.intl.string(r.t.Lz94y8);
    });
}
