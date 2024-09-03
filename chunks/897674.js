n.d(t, {
    Z: function () {
        return c;
    },
    g: function () {
        return s;
    }
}),
    n(47120);
var r = n(470079),
    a = n(442837),
    l = n(146282),
    i = n(327220),
    o = n(959580);
function s(e, t) {
    let { types: n } = e;
    return !!(null == n || n.has(t.content_type)) || !1;
}
function c(e) {
    let { feed: t, filters: n } = (0, a.cj)([l.Z], () => ({
            feed: l.Z.getFeed(e),
            filters: l.Z.getFilters()
        })),
        c = r.useMemo(() => {
            let e = null == t ? void 0 : t.entries.map((e) => e.content);
            return null != n ? (null == e ? void 0 : e.filter((e) => s(n, e))) : e;
        }, [t, n]);
    return (c = (0, i.Z)(c)), (c = (0, o.Z)(c));
}
