n.d(t, {
    Z: function () {
        return u;
    },
    g: function () {
        return o;
    }
}),
    n(47120);
var l = n(470079),
    a = n(442837),
    i = n(146282),
    r = n(327220),
    s = n(959580);
function o(e, t) {
    let { types: n } = e;
    return !!(null == n || n.has(t.content_type)) || !1;
}
function u(e) {
    let { feed: t, filters: n } = (0, a.cj)([i.Z], () => ({
            feed: i.Z.getFeed(e),
            filters: i.Z.getFilters()
        })),
        u = l.useMemo(() => {
            let e = null == t ? void 0 : t.entries.map((e) => e.content);
            return null != n ? (null == e ? void 0 : e.filter((e) => o(n, e))) : e;
        }, [t, n]);
    return (u = (0, r.Z)(u)), (u = (0, s.Z)(u));
}
