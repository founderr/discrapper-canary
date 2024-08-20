n.d(t, {
    U: function () {
        return f;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(567526),
    r = n(143927),
    l = n(481060),
    o = n(393238),
    c = n(963202),
    d = n(353093),
    u = n(931515),
    _ = n(807933),
    h = n(207796),
    E = n(497189),
    m = n(895068),
    I = n(490610),
    g = n(689938),
    p = n(604167);
function T(e) {
    let { onScroll: t } = e,
        { guilds: n } = (0, c.C3)({
            location: 'ClanDiscoveryAdminContainer',
            includeConverted: !0
        }),
        s = a.useMemo(() => n.filter((e) => !(0, d.EJ)(e)), [n]);
    return (0, i.jsx)('section', {
        className: p.guilds,
        children: (0, i.jsxs)(l.AdvancedScrollerNone, {
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
function S(e) {
    let { onScroll: t } = e,
        { ref: n, width: a } = (0, o.Z)(),
        c = (0, h.GN)((e) => e.mode, r.Z),
        d = (0, l.useSpring)({
            from: { opacity: 0 },
            to: { opacity: 1 },
            config: {
                mass: 1,
                tension: 600,
                friction: 60
            },
            delay: 200
        });
    return (0, i.jsxs)('section', {
        ref: n,
        className: p.guilds,
        children: [
            (0, i.jsx)(s.animated.div, {
                className: p.list,
                style: { opacity: d.opacity },
                children: (0, i.jsx)(m.ZP, {
                    width: null != a ? a : 0,
                    variant: (0, m.s)(c, m.Bj.GLOBAL_DISCOVERY),
                    onScroll: t
                })
            }),
            (0, i.jsx)('div', {
                className: p.selectors,
                children: (0, i.jsx)(_.Z, { mode: c })
            })
        ]
    });
}
function f(e) {
    let { onScroll: t } = e,
        { loading: n } = (0, u.LE)(),
        { enableClanCreation: a } = (0, c.C3)({
            location: 'GuildsTab',
            includeConverted: !0
        });
    return n
        ? (0, i.jsx)('section', {
              className: p.guilds,
              children: (0, i.jsx)('div', {
                  className: p.loading,
                  children: (0, i.jsx)(l.Spinner, {})
              })
          })
        : a
          ? (0, i.jsx)(T, { onScroll: t })
          : (0, i.jsx)(S, { onScroll: t });
}
