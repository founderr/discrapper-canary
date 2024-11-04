n.d(t, {
    z: function () {
        return s;
    }
}),
    n(47120);
var i = n(192379),
    r = n(703656),
    a = n(113434),
    l = n(388032);
function s() {
    let [e, t] = i.useState(a.e5.ALL),
        n = i.useMemo(
            () => [
                {
                    id: a.e5.ALL,
                    label: l.intl.string(l.t['0SzXmp'])
                },
                {
                    id: a.e5.CLAIMED,
                    label: l.intl.string(l.t.zyNYND)
                }
            ],
            []
        );
    return {
        tabs: n,
        selectedTab: e,
        onSelectTab: i.useCallback((e) => {
            (0, r.dL)('#'), t(e);
        }, [])
    };
}
