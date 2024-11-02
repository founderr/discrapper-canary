n.d(t, {
    Z: function () {
        return c;
    },
    g: function () {
        return u;
    }
}),
    n(47120);
var i = n(192379),
    l = n(442837),
    a = n(146282),
    r = n(327220),
    o = n(959580),
    s = n(371177);
function u(e, t) {
    let { types: n } = e;
    return !!(null == n || n.has(t.content_type)) || !1;
}
function c(e) {
    let { feed: t, filters: n } = (0, l.cj)([a.Z], () => ({
            feed: a.Z.getFeed(e),
            filters: a.Z.getFilters()
        })),
        c = i.useMemo(() => {
            let e = null == t ? void 0 : t.entries.map((e) => e.content);
            return null != n ? (null == e ? void 0 : e.filter((e) => u(n, e))) : e;
        }, [t, n]);
    return (c = (0, r.Z)(c)), (c = (0, o.Z)(c)), (c = (0, s.Z)(c));
}
