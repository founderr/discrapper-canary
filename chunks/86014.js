n(47120);
var i = n(735250),
    a = n(470079),
    s = n(143927),
    r = n(481060),
    l = n(100527),
    o = n(970606),
    c = n(963202),
    d = n(650461),
    u = n(603839),
    _ = n(374939),
    h = n(481685),
    E = n(84615),
    m = n(207796),
    I = n(895068),
    g = n(308083),
    p = n(689938),
    T = n(266489);
function S(e) {
    let { showPickGameButton: t, showAdminGuildPicker: n, inGlobalDiscovery: s } = e,
        { guilds: _ } = (0, c.C3)({
            location: 'ClanDiscoveryContentCtaContent',
            includeConverted: !1
        }),
        [h, I] = a.useState(() => {
            var e;
            let t = new Set(d.ZP.getGuildIds());
            for (let e of _) if (t.has(e.id)) return e.id;
            return null === (e = _[0]) || void 0 === e ? void 0 : e.id;
        }),
        S = a.useMemo(
            () =>
                _.map((e) => ({
                    value: e.id,
                    label: e.name
                })),
            [_]
        ),
        f = n && _.length > 0,
        C = a.useCallback(() => {
            (0, o._9)({
                guildId: h,
                location: s ? l.Z.GLOBAL_DISCOVERY : l.Z.CLAN_DISCOVERY
            }),
                (0, E.q4)(
                    (e) => {
                        let { closeLayer: t } = e;
                        return (0, i.jsx)(u.Z, {
                            onClose: t,
                            guildId: h
                        });
                    },
                    { layerKey: g.Pv }
                );
        }, [h, s]),
        N = a.useMemo(
            () =>
                t
                    ? (0, i.jsx)('div', {
                          children: (0, i.jsxs)(r.Button, {
                              look: r.ButtonLooks.FILLED,
                              size: r.ButtonSizes.LARGE,
                              color: f ? r.ButtonColors.TRANSPARENT : r.ButtonColors.BRAND,
                              className: T.heroButton,
                              innerClassName: T.heroButtonInner,
                              onClick: () => {
                                  (0, o.GS)({ location: s ? l.Z.GLOBAL_DISCOVERY : l.Z.CLAN_DISCOVERY }), (0, m.fH)(m.v0.GET_STARTED);
                              },
                              children: [
                                  (0, i.jsx)(r.Text, {
                                      variant: 'text-md/medium',
                                      color: 'none',
                                      children: p.Z.Messages.CLAN_DISCOVERY_UPSELL_USER_CTA
                                  }),
                                  (0, i.jsx)(r.ArrowSmallRightIcon, { color: 'currentColor' })
                              ]
                          })
                      })
                    : null,
            [t, f, s]
        ),
        A = a.useMemo(
            () =>
                n && _.length > 0
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              _.length > 0 &&
                                  (0, i.jsx)(r.SearchableSelect, {
                                      className: T.upsellSelect,
                                      value: h,
                                      options: S,
                                      onChange: I
                                  }),
                              (0, i.jsx)('div', {
                                  children: (0, i.jsx)(r.Button, {
                                      look: r.ButtonLooks.FILLED,
                                      size: r.ButtonSizes.MEDIUM,
                                      color: r.ButtonColors.BRAND,
                                      className: T.heroButton,
                                      onClick: C,
                                      children: (0, i.jsx)(r.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'always-white',
                                          children: p.Z.Messages.CLAN_DISCOVERY_UPSELL_ADMIN_LIST_SERVER
                                      })
                                  })
                              })
                          ]
                      })
                    : null,
            [n, _.length, S, h, C]
        );
    return (0, i.jsxs)('div', {
        className: T.contentCtaContainer,
        children: [A, N]
    });
}
t.Z = a.memo(function (e) {
    let { width: t, paddingVertical: n = 16, paddingHorizontal: l = 32, variant: o = I.Bj.DEFAULT, onScroll: c, withAdminContent: d = !1, inGlobalDiscovery: u } = e,
        E = a.useRef(null),
        g = (0, m.GN)((e) => e.completedNux, s.Z),
        f = a.useCallback(() => {
            var e;
            null === (e = E.current) || void 0 === e || e.scrollToTop();
        }, []),
        C = a.useMemo(
            () =>
                (0, i.jsx)(S, {
                    inGlobalDiscovery: u,
                    showPickGameButton: !g,
                    showAdminGuildPicker: d
                }),
            [g, d, u]
        );
    return (0, i.jsx)(_.Z, {
        ref: E,
        title: (0, i.jsx)(r.Text, {
            className: T.globalDiscoveryTitle,
            variant: 'display-lg',
            color: 'header-primary',
            children: p.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_TITLE_2.format({})
        }),
        description: g ? p.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_DESCRIPTION_NUX_COMPLETED : p.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_DESCRIPTION,
        button: C,
        bannerBackground: (0, i.jsx)(h.Z, {}),
        onScroll: c,
        children: (0, i.jsx)(I.ZP, {
            width: t,
            onUpdatePage: f,
            paddingHorizontal: l,
            paddingVertical: n,
            variant: o
        })
    });
});
