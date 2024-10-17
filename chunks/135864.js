var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(143927),
    o = n(636977),
    c = n(481060),
    d = n(352057),
    u = n(836768),
    _ = n(766219),
    E = n(749681),
    h = n(49898),
    m = n(46140),
    I = n(689938),
    p = n(696165);
function g(e) {
    let { tab: t } = e,
        n = (0, u.dj)((e) => e.selectedTab === t, l.Z),
        s = a.useMemo(
            () =>
                (function (e) {
                    switch (e) {
                        case h.F$.SERVERS:
                            return (0, i.jsx)(c.ServerIcon, { color: 'currentColor' });
                        case h.F$.APPS:
                            return (0, i.jsx)(c.AppsIcon, { color: 'currentColor' });
                        case h.F$.QUESTS:
                            return (0, i.jsx)(c.QuestsIcon, { color: 'currentColor' });
                    }
                })(t),
            [t]
        ),
        d = a.useMemo(() => (0, _.sm)(t), [t]),
        I = a.useCallback(() => {
            if (t === h.F$.QUESTS)
                return (0, E.transitionToGlobalDiscovery)({
                    tab: h.F$.QUESTS,
                    location: m.dr.DISCOVERY_SIDEBAR,
                    questContent: o.j.DISCOVERY_SIDEBAR
                });
            return (0, E.transitionToGlobalDiscovery)({ tab: t });
        }, [t]);
    return (0, i.jsxs)(c.Clickable, {
        onClick: I,
        className: r()(p.navItem, { [p.selected]: n }),
        children: [
            (0, i.jsx)('div', {
                className: p.navItemIcon,
                children: s
            }),
            (0, i.jsx)(c.Text, {
                variant: 'text-md/medium',
                color: 'none',
                children: d
            })
        ]
    });
}
t.Z = function () {
    let e = (0, d.h)({ location: 'GlobalDiscoverySidebar' });
    return (0, i.jsxs)('div', {
        className: p.container,
        children: [
            (0, i.jsx)('div', {
                className: p.header,
                children: (0, i.jsx)(c.Heading, {
                    variant: 'text-lg/semibold',
                    children: I.Z.Messages.GLOBAL_DISCOVERY_TITLE
                })
            }),
            (0, i.jsx)('nav', {
                className: p.nav,
                children: h.mc.map((t) => (t !== h.F$.APPS || e ? (0, i.jsx)(g, { tab: t }, t) : null))
            })
        ]
    });
};
