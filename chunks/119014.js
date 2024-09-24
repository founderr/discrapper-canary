n.d(t, {
    i: function () {
        return r;
    }
}),
    n(47120);
var i = n(470079),
    a = n(979007),
    s = n(689938);
function r() {
    let [e, t] = i.useState(a.F.FEATURED),
        n = i.useMemo(
            () => [
                {
                    id: a.F.FEATURED,
                    label: s.Z.Messages.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY
                }
            ],
            []
        ),
        r = i.useCallback((e) => {
            t(e);
        }, []);
    return {
        tabs: n,
        selectedTab: null != e ? e : n[0].id,
        onSelectTab: r
    };
}
