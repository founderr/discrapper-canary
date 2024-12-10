n.d(t, {
    i: function () {
        return u;
    }
}),
    n(47120);
var i = n(192379),
    r = n(442837),
    l = n(894653),
    a = n(493646),
    o = n(881294),
    s = n(258971),
    c = n(133743),
    d = n(981631);
function u(e) {
    let t = (0, r.e7)([l.Z], () => l.Z.getCategories()),
        n = (0, a.K)(),
        u = i.useMemo(
            () => [
                {
                    id: n.id.toString(),
                    label: n.name
                },
                ...t.map((e) => ({
                    id: e.id.toString(),
                    label: e.name
                }))
            ],
            [t, n]
        ),
        h = (0, s.Xh)(),
        m = i.useCallback(
            (e) => {
                let t = u.find((t) => t.id === e);
                null != t &&
                    ((0, o.z)(d.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
                        category: t.label,
                        category_id: Number(t.id),
                        current_page: null == h ? void 0 : h.type
                    }),
                    (0, c.O4)({ categoryId: e }));
            },
            [null == h ? void 0 : h.type, u]
        ),
        p = null != e && u.some((t) => t.id === e) ? e : u[0].id;
    return {
        tabs: u,
        selectedTab: p,
        onSelectTab: m
    };
}
