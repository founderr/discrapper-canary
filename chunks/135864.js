var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(636977),
    o = n(481060),
    c = n(352057),
    d = n(836768),
    u = n(766219),
    _ = n(749681),
    E = n(49898),
    h = n(46140),
    m = n(689938),
    I = n(696165);
function p(e) {
    let { tab: t } = e,
        n = (0, d.OA)(),
        s = a.useMemo(
            () =>
                (function (e) {
                    switch (e) {
                        case E.F$.SERVERS:
                            return (0, i.jsx)(o.ServerIcon, { color: 'currentColor' });
                        case E.F$.APPS:
                            return (0, i.jsx)(o.AppsIcon, { color: 'currentColor' });
                        case E.F$.QUESTS:
                            return (0, i.jsx)(o.QuestsIcon, { color: 'currentColor' });
                    }
                })(t),
            [t]
        ),
        c = a.useMemo(() => (0, u.sm)(t), [t]),
        m = n === t,
        p = a.useCallback(() => {
            if (t === E.F$.QUESTS)
                return (0, _.transitionToGlobalDiscovery)({
                    tab: E.F$.QUESTS,
                    location: h.dr.DISCOVERY_SIDEBAR,
                    questContent: l.j.DISCOVERY_SIDEBAR
                });
            return (0, _.transitionToGlobalDiscovery)({ tab: t });
        }, [t]);
    return (0, i.jsxs)(o.Clickable, {
        onClick: p,
        className: r()(I.navItem, { [I.selected]: m }),
        children: [
            (0, i.jsx)('div', {
                className: I.navItemIcon,
                children: s
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
    let e = (0, c.h)({ location: 'GlobalDiscoverySidebar' });
    return (0, i.jsxs)('div', {
        className: I.container,
        children: [
            (0, i.jsx)('div', {
                className: I.header,
                children: (0, i.jsx)(o.Heading, {
                    variant: 'text-lg/semibold',
                    children: m.Z.Messages.GLOBAL_DISCOVERY_TITLE
                })
            }),
            (0, i.jsx)('nav', {
                className: I.nav,
                children: E.mc.map((t) => (t !== E.F$.APPS || e ? (0, i.jsx)(p, { tab: t }, t) : null))
            })
        ]
    });
};
