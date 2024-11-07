n(47120);
var i = n(200651),
    r = n(192379),
    l = n(782690),
    a = n(481060),
    s = n(393238),
    o = n(963202),
    c = n(353093),
    d = n(931515),
    u = n(807933),
    h = n(207796),
    m = n(497189),
    p = n(86014),
    g = n(895068),
    f = n(490610),
    _ = n(322665),
    E = n(388032),
    I = n(487060);
function C(e) {
    let { onScroll: t } = e,
        { guilds: n } = (0, o.C3)({
            location: 'ClanDiscoveryAdminContainer',
            includeConverted: !0
        }),
        { guilds: l } = (0, o.Pu)({ location: 'ClanDiscoveryAdminContainer' }),
        s = r.useMemo(() => {
            let e = [...n, ...l],
                t = new Set();
            return e.filter((e) => !t.has(e.id) && (t.add(e.id), !(0, c.EJ)(e)));
        }, [n, l]),
        d = r.useMemo(() => {
            let e = [...n, ...l],
                t = new Set();
            return e.filter((e) => !t.has(e.id) && (t.add(e.id), !0));
        }, [n, l]);
    return (0, i.jsx)('section', {
        className: I.guilds,
        children: (0, i.jsxs)(a.AdvancedScrollerNone, {
            onScroll: t,
            className: I.upsellScroller,
            fade: !0,
            children: [
                (0, i.jsxs)('div', {
                    className: I.adminUpsell,
                    children: [
                        (0, i.jsx)(_.Z, {}),
                        (0, i.jsx)('div', {
                            className: I.backgroundImageContent,
                            children: (0, i.jsx)(m.Z, {
                                eligibleGuilds: s,
                                eligibleGuildsIncludingConverted: d
                            })
                        })
                    ]
                }),
                (0, i.jsx)(f.Z, { title: E.intl.string(E.t['5FgmFx']) })
            ]
        })
    });
}
function v(e) {
    let { onScroll: t, withAdminContent: n } = e,
        r = (0, h.GN)((e) => e.mode, l.Z),
        { ref: a, width: o } = (0, s.Z)();
    return (0, i.jsxs)('section', {
        ref: a,
        className: I.guilds,
        children: [
            (0, i.jsx)('div', {
                className: I.list,
                children: (0, i.jsx)(p.Z, {
                    width: o,
                    variant: (0, g.s)(r, g.Bj.GLOBAL_DISCOVERY),
                    onScroll: t,
                    withAdminContent: n
                })
            }),
            (0, i.jsx)('div', {
                className: I.selectors,
                children: (0, i.jsx)(u.Z, { mode: r })
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
        { signupEnabled: r } = (0, o.Pu)({ location: 'GuildsTab' }),
        l = (0, o.iN)('global_discovery_guilds_tab'),
        a = (0, h.GN)((e) => e.dismissedPilotAdminNux),
        s = (0, h.GN)((e) => e.dismissedSignupAdmin),
        c = (0, o.YH)('clan_discovery_admin_upsell');
    (0, d.LE)(), (0, d.c2)();
    let u = a || s,
        m = n && l && !u && !c,
        p = r && l && !u && !c;
    return m || p
        ? (0, i.jsx)(C, { onScroll: t })
        : (0, i.jsx)(v, {
              onScroll: t,
              withAdminContent: n && l
          });
};
