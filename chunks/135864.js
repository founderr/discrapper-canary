var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(636977),
    o = n(481060),
    c = n(352057),
    d = n(133743),
    u = n(836768),
    h = n(766219),
    m = n(749681),
    p = n(49898),
    g = n(46140),
    f = n(388032),
    _ = n(729922);
function E(e) {
    let { tab: t } = e,
        n = u.Z.useField('selectedTab'),
        l = r.useMemo(
            () =>
                (function (e) {
                    switch (e) {
                        case p.F$.SERVERS:
                            return (0, i.jsx)(o.ServerIcon, { color: 'currentColor' });
                        case p.F$.APPS:
                            return (0, i.jsx)(o.AppsIcon, { color: 'currentColor' });
                        case p.F$.QUESTS:
                            return (0, i.jsx)(o.QuestsIcon, { color: 'currentColor' });
                    }
                })(t),
            [t]
        ),
        c = r.useMemo(() => (0, h.s)(t), [t]),
        f = n === t,
        E = r.useCallback(() => {
            switch (t) {
                case p.F$.QUESTS:
                    return (0, m.u)({
                        tab: p.F$.QUESTS,
                        location: g.dr.DISCOVERY_SIDEBAR,
                        questContent: s.j.DISCOVERY_SIDEBAR
                    });
                case p.F$.APPS:
                    return (0, d.Wv)();
                default:
                    return (0, m.u)({ tab: t });
            }
        }, [t]);
    return (0, i.jsxs)(o.Clickable, {
        onClick: E,
        className: a()(_.navItem, { [_.selected]: f }),
        children: [
            (0, i.jsx)('div', {
                className: _.navItemIcon,
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
    let e = (0, c.h)({ location: 'GlobalDiscoverySidebar' });
    return (0, i.jsxs)('div', {
        className: _.container,
        children: [
            (0, i.jsx)('div', {
                className: _.header,
                children: (0, i.jsx)(o.Heading, {
                    variant: 'text-lg/semibold',
                    children: f.intl.string(f.t['1KqYnp'])
                })
            }),
            (0, i.jsx)('nav', {
                className: _.nav,
                children: p.mc.map((t) => (t !== p.F$.APPS || e ? (0, i.jsx)(E, { tab: t }, t) : null))
            })
        ]
    });
};
