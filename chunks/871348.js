n.d(t, {
    U: function () {
        return S;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(143927),
    r = n(481060),
    l = n(393238),
    o = n(963202),
    c = n(353093),
    d = n(931515),
    u = n(807933),
    _ = n(207796),
    h = n(497189),
    E = n(86014),
    m = n(895068),
    I = n(490610),
    g = n(689938),
    p = n(604167);
function T(e) {
    let { onScroll: t } = e,
        { guilds: n } = (0, o.C3)({
            location: 'ClanDiscoveryAdminContainer',
            includeConverted: !0
        }),
        s = a.useMemo(() => n.filter((e) => !(0, c.EJ)(e)), [n]);
    return (0, i.jsx)('section', {
        className: p.guilds,
        children: (0, i.jsxs)(r.AdvancedScrollerNone, {
            onScroll: t,
            className: p.upsellScroller,
            fade: !0,
            children: [
                (0, i.jsxs)('div', {
                    className: p.adminUpsell,
                    children: [
                        (0, i.jsx)('div', { className: p.backgroundImageBlur }),
                        (0, i.jsx)('div', {
                            className: p.backgroundImageContent,
                            children: (0, i.jsx)(h.Z, {
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
    let { onScroll: t } = e,
        n = (0, _.GN)((e) => e.mode, s.Z),
        { ref: a, width: r } = (0, l.Z)();
    return (0, i.jsxs)('section', {
        ref: a,
        className: p.guilds,
        children: [
            (0, i.jsx)('div', {
                className: p.list,
                children:
                    null != r &&
                    (0, i.jsx)(E.Z, {
                        width: r,
                        variant: (0, m.s)(n, m.Bj.GLOBAL_DISCOVERY),
                        onScroll: t
                    })
            }),
            (0, i.jsx)('div', {
                className: p.selectors,
                children: (0, i.jsx)(u.Z, { mode: n })
            })
        ]
    });
}
function S(e) {
    let { onScroll: t } = e,
        { enableClanCreation: n } = (0, o.C3)({
            location: 'GuildsTab',
            includeConverted: !0
        });
    return (0, d.LE)(), n ? (0, i.jsx)(T, { onScroll: t }) : (0, i.jsx)(f, { onScroll: t });
}
