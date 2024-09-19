n.d(t, {
    Y: function () {
        return d;
    }
}),
    n(733860);
var i = n(470079),
    a = n(963202),
    s = n(169559),
    r = n(164991),
    l = n(726115),
    o = n(859921),
    c = n(128449);
function d() {
    let e = (0, s.Z)('global_discovery'),
        { enableClanCreation: t } = (0, a.C3)({
            location: 'global_discovery',
            includeConverted: !0,
            autoTrackExposure: !0
        }),
        n = (0, o.jg)(),
        d = i.useMemo(() => {
            let n = [c.vf.GAMING, c.vf.MUSIC, c.vf.ENTERTAINMENT, c.vf.TECH, c.vf.EDUCATION, c.vf.HUBS];
            return (
                e || t ? n.unshift(c.vf.GUILDS) : n.unshift(c.vf.FEATURED),
                n.map((e) => ({
                    id: e,
                    label: (0, l.vb)(e)
                }))
            );
        }, [t, e]),
        u = i.useCallback((e) => {
            (0, o.jY)({ selectedTab: e }), (0, r.LD)({ categoryId: (0, l.lg)(e) });
        }, []);
    return (
        i.useEffect(() => {
            (null == n || !d.some((e) => e.id === n)) && u(d[0].id);
        }, [n, d, u]),
        {
            tabs: d,
            selectedTab: null != n ? n : d[0].id,
            setSelectedTab: u
        }
    );
}
