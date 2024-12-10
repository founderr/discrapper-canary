n.d(t, {
    z: function () {
        return s;
    }
});
var i = n(192379),
    r = n(703656),
    l = n(113434),
    a = n(220068),
    o = n(388032);
function s() {
    let e = a.Z.useField('tab'),
        t = i.useCallback((e) => {
            (0, r.dL)('#'), a.Z.setState({ tab: e });
        }, []);
    return {
        tabs: i.useMemo(
            () => [
                {
                    id: l.e5.ALL,
                    label: o.intl.string(o.t['0SzXmp'])
                },
                {
                    id: l.e5.CLAIMED,
                    label: o.intl.string(o.t.zyNYND)
                }
            ],
            []
        ),
        selectedTab: e,
        onSelectTab: t
    };
}
