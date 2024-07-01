e.d(t, {
    Z: function () {
        return a;
    },
    g: function () {
        return l;
    }
}), e(47120);
var r = e(470079), i = e(442837), u = e(146282), o = e(327220), E = e(959580);
function l(n, t) {
    let {types: e} = n;
    return !!(null == e || e.has(t.content_type)) || !1;
}
function a(n) {
    let {
            feed: t,
            filters: e
        } = (0, i.cj)([u.Z], () => ({
            feed: u.Z.getFeed(n),
            filters: u.Z.getFilters()
        })), a = r.useMemo(() => {
            let n = null == t ? void 0 : t.entries.map(n => n.content);
            return null != e ? null == n ? void 0 : n.filter(n => l(e, n)) : n;
        }, [
            t,
            e
        ]);
    return a = (0, o.Z)(a), a = (0, E.Z)(a);
}
