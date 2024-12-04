n.d(e, {
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
    r = n(146282),
    o = n(327220),
    a = n(959580),
    s = n(371177);
function u(t, e) {
    let { types: n } = t;
    return !!(null == n || n.has(e.content_type)) || !1;
}
function c(t) {
    let { feed: e, filters: n } = (0, l.cj)([r.Z], () => ({
            feed: r.Z.getFeed(t),
            filters: r.Z.getFilters()
        })),
        c = i.useMemo(() => {
            let t = null == e ? void 0 : e.entries.map((t) => t.content);
            return null != n ? (null == t ? void 0 : t.filter((t) => u(n, t))) : t;
        }, [e, n]);
    return (c = (0, o.Z)(c)), (c = (0, a.Z)(c)), (c = (0, s.Z)(c));
}
