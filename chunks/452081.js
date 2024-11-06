n.d(t, {
    z: function () {
        return s;
    }
}),
    n(47120);
var i = n(192379),
    r = n(703656),
    l = n(113434),
    a = n(388032);
function s() {
    let [e, t] = i.useState(l.e5.ALL),
        n = i.useMemo(
            () => [
                {
                    id: l.e5.ALL,
                    label: a.intl.string(a.t['0SzXmp'])
                },
                {
                    id: l.e5.CLAIMED,
                    label: a.intl.string(a.t.zyNYND)
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
