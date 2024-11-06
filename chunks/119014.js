n.d(t, {
    i: function () {
        return o;
    }
}),
    n(47120);
var i = n(192379),
    r = n(442837),
    l = n(894653),
    a = n(979007),
    s = n(388032);
function o() {
    let e = (0, r.e7)([l.Z], () => l.Z.getCategories()),
        [t, n] = i.useState(a.kK),
        o = i.useMemo(
            () => [
                {
                    id: a.kK,
                    label: s.intl.string(s.t.ijDDw8)
                },
                ...e.map((e) => ({
                    id: e.id.toString(),
                    label: e.name
                }))
            ],
            [e]
        ),
        c = i.useCallback((e) => {
            n(e);
        }, []);
    return {
        tabs: o,
        selectedTab: null != t ? t : o[0].id,
        onSelectTab: c
    };
}
