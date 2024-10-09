var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(143927),
    o = n(636977),
    c = n(731965),
    d = n(481060),
    u = n(352057),
    _ = n(341907),
    E = n(703656),
    h = n(836768),
    m = n(766219),
    I = n(906899),
    p = n(49898),
    g = n(981631),
    T = n(46140),
    f = n(689938),
    S = n(696165);
function C(e) {
    let { tab: t } = e,
        n = (0, h.d)((e) => e.selectedTab === t, l.Z),
        s = a.useMemo(
            () =>
                (function (e) {
                    switch (e) {
                        case p.F$.SERVERS:
                            return (0, i.jsx)(d.ServerIcon, { color: 'currentColor' });
                        case p.F$.APPS:
                            return (0, i.jsx)(d.AppsIcon, { color: 'currentColor' });
                        case p.F$.QUESTS:
                            return (0, i.jsx)(d.QuestsIcon, { color: 'currentColor' });
                    }
                })(t),
            [t]
        ),
        u = a.useMemo(() => (0, m.sm)(t), [t]),
        f = a.useCallback(() => {
            switch (((0, c.j)(() => h.d.setState({ selectedTab: t })), t)) {
                case p.F$.QUESTS:
                    return (0, _.navigateToQuestHome)(T.dr.DISCOVERY_SIDEBAR, o.j.DISCOVERY_SIDEBAR);
                case p.F$.APPS:
                    return (0, E.uL)(g.Z5c.GLOBAL_DISCOVERY_APPS);
                case p.F$.SERVERS:
                    return (0, I.R)();
            }
        }, [t]);
    return (0, i.jsxs)(d.Clickable, {
        onClick: f,
        className: r()(S.navItem, { [S.selected]: n }),
        children: [
            (0, i.jsx)('div', {
                className: S.navItemIcon,
                children: s
            }),
            (0, i.jsx)(d.Text, {
                variant: 'text-md/medium',
                color: 'none',
                children: u
            })
        ]
    });
}
t.Z = function () {
    let e = (0, u.h)({ location: 'GlobalDiscoverySidebar' });
    return (0, i.jsxs)('div', {
        className: S.container,
        children: [
            (0, i.jsx)('div', {
                className: S.header,
                children: (0, i.jsx)(d.Heading, {
                    variant: 'text-lg/semibold',
                    children: f.Z.Messages.GLOBAL_DISCOVERY_TITLE
                })
            }),
            (0, i.jsx)('nav', {
                className: S.nav,
                children: p.mc.map((t) => (t !== p.F$.APPS || e ? (0, i.jsx)(C, { tab: t }, t) : null))
            })
        ]
    });
};
