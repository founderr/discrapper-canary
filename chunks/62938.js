var i = n(200651),
    a = n(192379),
    s = n(782690),
    r = n(481060),
    l = n(393238),
    o = n(963202),
    c = n(353093),
    d = n(931515),
    u = n(807933),
    _ = n(207796),
    E = n(497189),
    h = n(86014),
    m = n(895068),
    I = n(490610),
    p = n(322665),
    g = n(689938),
    T = n(590522);
function C(e) {
    let { onScroll: t } = e,
        { guilds: n } = (0, o.C3)({
            location: 'ClanDiscoveryAdminContainer',
            includeConverted: !0
        }),
        s = a.useMemo(() => n.filter((e) => !(0, c.EJ)(e)), [n]);
    return (0, i.jsx)('section', {
        className: T.guilds,
        children: (0, i.jsxs)(r.AdvancedScrollerNone, {
            onScroll: t,
            className: T.upsellScroller,
            fade: !0,
            children: [
                (0, i.jsxs)('div', {
                    className: T.adminUpsell,
                    children: [
                        (0, i.jsx)(p.Z, {}),
                        (0, i.jsx)('div', {
                            className: T.backgroundImageContent,
                            children: (0, i.jsx)(E.Z, {
                                eligibleGuilds: s,
                                eligibleGuildsIncludingConverted: n
                            })
                        })
                    ]
                }),
                (0, i.jsx)(I.Z, { title: g.Z.Messages.CLAN_DISCOVERY_INSPIRATION_TITLE })
            ]
        })
    });
}
function f(e) {
    let { onScroll: t, withAdminContent: n } = e,
        a = (0, _.GN)((e) => e.mode, s.Z),
        { ref: r, width: o } = (0, l.Z)();
    return (0, i.jsxs)('section', {
        ref: r,
        className: T.guilds,
        children: [
            (0, i.jsx)('div', {
                className: T.list,
                children: (0, i.jsx)(h.Z, {
                    width: o,
                    variant: (0, m.s)(a, m.Bj.GLOBAL_DISCOVERY),
                    onScroll: t,
                    withAdminContent: n
                })
            }),
            (0, i.jsx)('div', {
                className: T.selectors,
                children: (0, i.jsx)(u.Z, { mode: a })
            })
        ]
    });
}
t.Z = function (e) {
    let { onScroll: t } = e,
        { enableClanCreation: n } = (0, o.C3)({
            location: 'GuildsTab',
            includeConverted: !0
        }),
        a = (0, o.iN)('global_discovery_guilds_tab'),
        s = (0, _.GN)((e) => e.dismissedPilotAdminNux),
        r = (0, o.YH)('clan_discovery_admin_upsell');
    return ((0, d.LE)(), (0, d.c2)(), !n || (a && s) || r)
        ? (0, i.jsx)(f, {
              onScroll: t,
              withAdminContent: n && a
          })
        : (0, i.jsx)(C, { onScroll: t });
};
