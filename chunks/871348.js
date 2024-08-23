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
    E = n(895068),
    m = n(490610),
    I = n(689938),
    g = n(604167);
function p(e) {
    let { onScroll: t } = e,
        { guilds: n } = (0, o.C3)({
            location: 'ClanDiscoveryAdminContainer',
            includeConverted: !0
        }),
        s = a.useMemo(() => n.filter((e) => !(0, c.EJ)(e)), [n]);
    return (0, i.jsx)('section', {
        className: g.guilds,
        children: (0, i.jsxs)(r.AdvancedScrollerNone, {
            onScroll: t,
            className: g.upsellScroller,
            fade: !0,
            children: [
                (0, i.jsxs)('div', {
                    className: g.adminUpsell,
                    children: [
                        (0, i.jsx)('div', { className: g.backgroundImageBlur }),
                        (0, i.jsx)('div', {
                            className: g.backgroundImageContent,
                            children: (0, i.jsx)(h.Z, {
                                eligibleGuilds: s,
                                eligibleGuildsIncludingConverted: n
                            })
                        })
                    ]
                }),
                (0, i.jsx)(m.Z, { title: I.Z.Messages.CLAN_DISCOVERY_INSPIRATION_TITLE })
            ]
        })
    });
}
function T(e) {
    let { onScroll: t } = e,
        n = (0, _.GN)((e) => e.mode, s.Z),
        { ref: a, width: r } = (0, l.Z)();
    return (0, i.jsxs)('section', {
        ref: a,
        className: g.guilds,
        children: [
            (0, i.jsx)('div', {
                className: g.list,
                children:
                    null != r &&
                    (0, i.jsx)(E.ZP, {
                        width: r,
                        variant: (0, E.s)(n, E.Bj.GLOBAL_DISCOVERY),
                        onScroll: t
                    })
            }),
            (0, i.jsx)('div', {
                className: g.selectors,
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
    return (0, d.LE)(), n ? (0, i.jsx)(p, { onScroll: t }) : (0, i.jsx)(T, { onScroll: t });
}
