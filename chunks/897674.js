t.d(n, {
    Z: function () {
        return u;
    },
    g: function () {
        return o;
    }
}),
    t(47120);
var a = t(470079),
    l = t(442837),
    i = t(146282),
    r = t(327220),
    s = t(959580);
function o(e, n) {
    let { types: t } = e;
    return !!(null == t || t.has(n.content_type)) || !1;
}
function u(e) {
    let { feed: n, filters: t } = (0, l.cj)([i.Z], () => ({
            feed: i.Z.getFeed(e),
            filters: i.Z.getFilters()
        })),
        u = a.useMemo(() => {
            let e = null == n ? void 0 : n.entries.map((e) => e.content);
            return null != t ? (null == e ? void 0 : e.filter((e) => o(t, e))) : e;
        }, [n, t]);
    return (u = (0, r.Z)(u)), (u = (0, s.Z)(u));
}
