var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(636977),
    o = n(481060),
    c = n(352057),
    d = n(31569),
    u = n(133743),
    h = n(164991),
    m = n(859921),
    p = n(220068),
    g = n(836768),
    f = n(766219),
    _ = n(749681),
    E = n(49898),
    I = n(46140),
    C = n(388032),
    v = n(729922);
function N(e) {
    let { tab: t } = e,
        n = g.Z.useField('selectedTab'),
        l = r.useMemo(
            () =>
                (function (e) {
                    switch (e) {
                        case E.GlobalDiscoveryTab.SERVERS:
                            return (0, i.jsx)(o.ServerIcon, { color: 'currentColor' });
                        case E.GlobalDiscoveryTab.APPS:
                            return (0, i.jsx)(o.AppsIcon, { color: 'currentColor' });
                        case E.GlobalDiscoveryTab.QUESTS:
                            return (0, i.jsx)(o.QuestsIcon, { color: 'currentColor' });
                    }
                })(t),
            [t]
        ),
        c = r.useMemo(() => (0, f.s)(t), [t]),
        C = n === t,
        N = r.useCallback(() => {
            switch (t) {
                case E.GlobalDiscoveryTab.QUESTS:
                    return (
                        C && (0, p.B)(),
                        (0, _.transitionToGlobalDiscovery)({
                            tab: E.GlobalDiscoveryTab.QUESTS,
                            location: I.dr.DISCOVERY_SIDEBAR,
                            questContent: s.j.DISCOVERY_SIDEBAR
                        })
                    );
                case E.GlobalDiscoveryTab.APPS:
                    if (!C) return (0, u.XL)();
                    (0, d.x)(), (0, _.transitionToGlobalDiscovery)({ tab: t });
                    return;
                case E.GlobalDiscoveryTab.SERVERS:
                    if (!C) return (0, _.transitionToGlobalDiscovery)({ tab: t });
                    (0, h.V)(), (0, m.O)();
                    return;
                default:
                    return (0, _.transitionToGlobalDiscovery)({ tab: t });
            }
        }, [t, C]);
    return (0, i.jsxs)(o.Clickable, {
        onClick: N,
        className: a()(v.navItem, { [v.selected]: C }),
        children: [
            (0, i.jsx)('div', {
                className: v.navItemIcon,
                children: l
            }),
            (0, i.jsx)(o.Text, {
                variant: 'text-md/medium',
                color: 'none',
                children: c
            })
        ]
    });
}
t.Z = function () {
    let e = (0, c.h$)({ location: 'GlobalDiscoverySidebar' });
    return (0, i.jsxs)('div', {
        className: v.container,
        children: [
            (0, i.jsx)('div', {
                className: v.header,
                children: (0, i.jsx)(o.Heading, {
                    variant: 'text-lg/semibold',
                    children: C.intl.string(C.t['1KqYnp'])
                })
            }),
            (0, i.jsx)('nav', {
                className: v.nav,
                children: E.GLOBAL_DISCOVERY_TABS.map((t) => (t !== E.GlobalDiscoveryTab.APPS || e ? (0, i.jsx)(N, { tab: t }, t) : null))
            })
        ]
    });
};
