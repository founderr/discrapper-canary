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
    _ = n(17845),
    E = n(374939),
    h = n(283293),
    m = n(482543),
    I = n(84615),
    g = n(207796),
    p = n(895068),
    T = n(308083),
    S = n(689938),
    f = n(641388);
function C(e) {
    let { showPickGameButton: t, showAdminGuildPicker: n, inGlobalDiscovery: s } = e,
        { guilds: _ } = (0, c.C3)({
            location: 'ClanDiscoveryContentCtaContent',
            includeConverted: !1
        }),
        [E, h] = a.useState(() => {
            var e;
            let t = new Set(d.ZP.getGuildIds());
            for (let e of _) if (t.has(e.id)) return e.id;
            return null === (e = _[0]) || void 0 === e ? void 0 : e.id;
        }),
        m = a.useMemo(
            () =>
                _.map((e) => ({
                    value: e.id,
                    label: e.name
                })),
            [_]
        ),
        p = n && _.length > 0,
        C = a.useCallback(() => {
            (0, o._9)({
                guildId: E,
                location: s ? l.Z.GLOBAL_DISCOVERY : l.Z.CLAN_DISCOVERY
            }),
                (0, I.q4)(
                    (e) => {
                        let { closeLayer: t } = e;
                        return (0, i.jsx)(u.Z, {
                            onClose: t,
                            guildId: E
                        });
                    },
                    { layerKey: T.Pv }
                );
        }, [E, s]),
        N = a.useMemo(
            () =>
                t
                    ? (0, i.jsx)('div', {
                          children: (0, i.jsxs)(r.Button, {
                              look: r.ButtonLooks.FILLED,
                              size: r.ButtonSizes.LARGE,
                              color: p ? r.ButtonColors.TRANSPARENT : r.ButtonColors.BRAND,
                              className: f.heroButton,
                              innerClassName: f.heroButtonInner,
                              onClick: () => {
                                  (0, o.GS)({ location: s ? l.Z.GLOBAL_DISCOVERY : l.Z.CLAN_DISCOVERY }), (0, g.fH)(g.v0.GET_STARTED);
                              },
                              children: [
                                  (0, i.jsx)(r.Text, {
                                      variant: 'text-md/medium',
                                      color: 'none',
                                      children: S.Z.Messages.CLAN_DISCOVERY_UPSELL_USER_CTA
                                  }),
                                  (0, i.jsx)(r.ArrowSmallRightIcon, { color: 'currentColor' })
                              ]
                          })
                      })
                    : null,
            [t, p, s]
        ),
        A = a.useMemo(
            () =>
                n && _.length > 0
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              _.length > 0 &&
                                  (0, i.jsx)(r.SearchableSelect, {
                                      className: f.upsellSelect,
                                      value: E,
                                      options: m,
                                      onChange: h
                                  }),
                              (0, i.jsx)('div', {
                                  children: (0, i.jsx)(r.Button, {
                                      look: r.ButtonLooks.FILLED,
                                      size: r.ButtonSizes.MEDIUM,
                                      color: r.ButtonColors.BRAND,
                                      className: f.heroButton,
                                      onClick: C,
                                      children: (0, i.jsx)(r.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'always-white',
                                          children: S.Z.Messages.CLAN_DISCOVERY_UPSELL_ADMIN_LIST_SERVER
                                      })
                                  })
                              })
                          ]
                      })
                    : null,
            [n, _.length, m, E, C]
        );
    return (0, i.jsxs)('div', {
        className: f.contentCtaContainer,
        children: [A, N]
    });
}
t.Z = a.memo(function (e) {
    let { width: t, paddingVertical: n = 16, paddingHorizontal: l = 32, variant: o = p.Bj.DEFAULT, onScroll: c, withAdminContent: d = !1, inGlobalDiscovery: u } = e,
        I = a.useRef(null),
        T = (0, g.GN)((e) => e.completedNux, s.Z),
        N = a.useCallback(() => {
            var e;
            null === (e = I.current) || void 0 === e || e.scrollToTop();
        }, []),
        A = a.useMemo(
            () =>
                (0, i.jsx)(C, {
                    inGlobalDiscovery: u,
                    showPickGameButton: !T,
                    showAdminGuildPicker: d
                }),
            [T, d, u]
        ),
        v = (0, m.p)();
    return (0, i.jsxs)(h.Z, {
        ref: I,
        onScroll: c,
        children: [
            (0, i.jsx)(_.Z, {
                title: (0, i.jsx)(r.Text, {
                    className: f.globalDiscoveryTitle,
                    variant: 'display-lg',
                    color: 'header-primary',
                    children: S.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_TITLE_2.format({})
                }),
                description: T ? S.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_DESCRIPTION_NUX_COMPLETED : S.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_DESCRIPTION,
                button: A,
                className: v
            }),
            (0, i.jsx)(E.Z, {
                children: (0, i.jsx)(p.ZP, {
                    width: t,
                    onUpdatePage: N,
                    paddingHorizontal: l,
                    paddingVertical: n,
                    variant: o
                })
            })
        ]
    });
});
