r.d(t, {
    Z: function () {
        return s;
    },
    g: function () {
        return c;
    }
}),
    r(47120);
var a = r(470079),
    n = r(442837),
    i = r(146282),
    o = r(327220),
    l = r(959580);
function c(e, t) {
    let { types: r } = e;
    return !!(null == r || r.has(t.content_type)) || !1;
}
function s(e) {
    let { feed: t, filters: r } = (0, n.cj)([i.Z], () => ({
            feed: i.Z.getFeed(e),
            filters: i.Z.getFilters()
        })),
        s = a.useMemo(() => {
            let e = null == t ? void 0 : t.entries.map((e) => e.content);
            return null != r ? (null == e ? void 0 : e.filter((e) => c(r, e))) : e;
        }, [t, r]);
    return (s = (0, o.Z)(s)), (s = (0, l.Z)(s));
}
