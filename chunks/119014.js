n.d(t, {
    i: function () {
        return c;
    }
}),
    n(47120);
var i = n(192379),
    r = n(442837),
    l = n(894653),
    a = n(133743),
    s = n(979007),
    o = n(388032);
function c(e) {
    let t = (0, r.e7)([l.Z], () => l.Z.getCategories()),
        n = i.useMemo(
            () => [
                {
                    id: s.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID,
                    label: o.intl.string(o.t.ijDDw8)
                },
                ...t.map((e) => ({
                    id: e.id.toString(),
                    label: e.name
                }))
            ],
            [t]
        ),
        c = i.useCallback((e) => {
            (0, a.O4)({ categoryId: e });
        }, []),
        d = null != e && n.some((t) => t.id === e) ? e : n[0].id;
    return {
        tabs: n,
        selectedTab: d,
        onSelectTab: c
    };
}
