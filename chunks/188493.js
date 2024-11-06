n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(89182),
    s = n(706454),
    o = n(762692),
    c = n(164991),
    d = n(726115),
    u = n(731455),
    h = n(388032);
function m(e) {
    let { loadId: t } = e,
        n = (0, l.e7)([s.default], () => (0, d.Xp)([s.default])),
        m = (0, c.Dm)(),
        p = null != m ? m : n,
        g = r.useCallback(
            (e) => {
                (0, c.LD)({ languageCode: e });
                let n = (0, c.Zq)();
                o.Z.clearAlgoliaSearchResults({ ignoreQueries: [n] }),
                    (0, d.oT)({
                        loadId: t,
                        categoryId: (0, c.lx)(),
                        query: n,
                        languageCode: e
                    });
            },
            [t]
        ),
        f = r.useMemo(
            () =>
                (0, u.Cf)().map((e) => ({
                    id: e.code,
                    label: e.name
                })),
            []
        ),
        _ = r.useMemo(() => {
            var e;
            let t = (0, u.Cf)().find((e) => e.code === p);
            return null !== (e = null == t ? void 0 : t.name) && void 0 !== e ? e : h.intl.string(h.t.LQLMGB);
        }, [p]);
    return (0, i.jsx)(a.Z, {
        items: f,
        title: _,
        onSelect: g,
        selected: p,
        'aria-label': h.intl.string(h.t.Ng5cTE)
    });
}
