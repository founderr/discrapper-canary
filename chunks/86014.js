n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(143927),
    o = n(442837),
    c = n(481060),
    d = n(100527),
    u = n(970606),
    _ = n(963202),
    E = n(650461),
    h = n(603839),
    m = n(322665),
    I = n(17845),
    p = n(374939),
    g = n(233374),
    T = n(283293),
    f = n(216742),
    S = n(84615),
    C = n(229893),
    N = n(931515),
    A = n(702646),
    v = n(207796),
    Z = n(782322),
    L = n(895068),
    R = n(308083),
    O = n(689938),
    x = n(641388);
function b(e) {
    let { showPickGameButton: t, showAdminGuildPicker: n } = e,
        { guilds: s } = (0, _.C3)({
            location: 'ClanDiscoveryContentCtaContent',
            includeConverted: !1
        }),
        [r, l] = a.useState(() => {
            var e;
            let t = new Set(E.ZP.getGuildIds());
            for (let e of s) if (t.has(e.id)) return e.id;
            return null === (e = s[0]) || void 0 === e ? void 0 : e.id;
        }),
        o = a.useMemo(
            () =>
                s.map((e) => ({
                    value: e.id,
                    label: e.name
                })),
            [s]
        ),
        m = n && s.length > 0,
        I = a.useCallback(() => {
            (0, u._9)({
                guildId: r,
                location: d.Z.GLOBAL_DISCOVERY
            }),
                (0, S.q4)(
                    (e) => {
                        let { closeLayer: t } = e;
                        return (0, i.jsx)(h.Z, {
                            onClose: t,
                            guildId: r
                        });
                    },
                    { layerKey: R.Pv }
                );
        }, [r]),
        p = a.useMemo(
            () =>
                t
                    ? (0, i.jsx)('div', {
                          children: (0, i.jsxs)(c.Button, {
                              look: c.ButtonLooks.FILLED,
                              size: c.ButtonSizes.LARGE,
                              color: m ? c.ButtonColors.TRANSPARENT : c.ButtonColors.BRAND,
                              className: x.heroButton,
                              innerClassName: x.heroButtonInner,
                              onClick: () => {
                                  (0, u.GS)({ location: d.Z.GLOBAL_DISCOVERY }), (0, v.fH)(v.v0.GET_STARTED);
                              },
                              children: [
                                  (0, i.jsx)(c.Text, {
                                      variant: 'text-md/medium',
                                      color: 'none',
                                      children: O.Z.Messages.CLAN_DISCOVERY_UPSELL_USER_CTA
                                  }),
                                  (0, i.jsx)(c.ArrowSmallRightIcon, { color: 'currentColor' })
                              ]
                          })
                      })
                    : null,
            [t, m]
        ),
        g = a.useMemo(
            () =>
                n && s.length > 0
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              s.length > 0 &&
                                  (0, i.jsx)(c.SearchableSelect, {
                                      className: x.upsellSelect,
                                      value: r,
                                      options: o,
                                      onChange: l
                                  }),
                              (0, i.jsx)('div', {
                                  children: (0, i.jsx)(c.Button, {
                                      look: c.ButtonLooks.FILLED,
                                      size: c.ButtonSizes.MEDIUM,
                                      color: c.ButtonColors.BRAND,
                                      className: x.heroButton,
                                      onClick: I,
                                      children: (0, i.jsx)(c.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'always-white',
                                          children: O.Z.Messages.CLAN_DISCOVERY_UPSELL_ADMIN_LIST_SERVER
                                      })
                                  })
                              })
                          ]
                      })
                    : null,
            [n, s.length, o, r, I]
        );
    return (0, i.jsxs)('div', {
        className: x.contentCtaContainer,
        children: [g, p]
    });
}
t.Z = a.memo(function (e) {
    let t,
        { width: n, paddingVertical: s = 16, paddingHorizontal: d = 32, variant: u = L.Bj.DEFAULT, onScroll: E, withAdminContent: h = !1 } = e,
        S = a.useRef(null),
        R = (0, v.GN)((e) => e.completedNux, l.Z),
        M = (0, v.GN)((e) => e.entrypointGameId, l.Z),
        { backgroundImageUrl: P, gameName: D } = (0, N.kN)(M),
        y = a.useCallback(() => {
            var e;
            null === (e = S.current) || void 0 === e || e.scrollToTop();
        }, []),
        j = a.useMemo(
            () =>
                (0, i.jsx)(b, {
                    showPickGameButton: !R,
                    showAdminGuildPicker: h
                }),
            [R, h]
        ),
        U = (0, o.e7)([C.Z], () => C.Z.getSavedGuilds().length),
        G = a.useMemo(
            () => [
                {
                    id: v.v0.DISCOVERY,
                    label: O.Z.Messages.CLAN_DISCOVERY_ALL_GUILDS
                },
                {
                    id: v.v0.SAVED_GUILDS,
                    label: O.Z.Messages.CLAN_DISCOVERY_SAVED_GUILDS,
                    count: U
                }
            ],
            [U]
        ),
        w = (0, v.GN)((e) => e.mode, l.Z),
        { enableClanCreation: k } = (0, _.C3)({
            location: 'ClanDiscoveryContent',
            includeConverted: !0
        }),
        B = (0, v.GN)((e) => e.dismissedPilotAdminNux),
        H = a.useMemo(() => !k || B, [B, k]),
        { enabled: V } = (0, f.I7)();
    return (
        (t =
            null != M && null != D
                ? (0, i.jsxs)(I.Z, {
                      title: (0, i.jsx)(c.Text, {
                          className: r()(x.globalDiscoveryTitle, x.customDiscoveryTitle),
                          variant: 'display-lg',
                          color: 'header-primary',
                          children: O.Z.Messages.DISCOVERY_FIND_GAMING_GUILD_HEADER.format({ gameName: D })
                      }),
                      description: O.Z.Messages.DISCOVERY_FIND_GAMING_GUILD_SUBHEADER.format({ gameName: D }),
                      button: (0, i.jsx)(c.Button, {
                          className: x.heroButton,
                          innerClassName: x.heroButtonInner,
                          look: c.ButtonLooks.FILLED,
                          size: c.ButtonSizes.MEDIUM,
                          color: c.ButtonColors.WHITE,
                          onClick: () => (0, v.fH)(v.v0.PREFERENCES),
                          children: (0, i.jsx)(c.Text, {
                              variant: 'text-md/medium',
                              color: 'none',
                              children: O.Z.Messages.DISCOVERY_FIND_GAMING_GUILD_CTA
                          })
                      }),
                      children: [
                          (0, i.jsx)(m.Z, {}),
                          (0, i.jsx)('div', {
                              className: x.gameArt,
                              style: { backgroundImage: 'url("'.concat(P, '")') }
                          }),
                          (0, i.jsx)('div', { className: x.imageBackdrop })
                      ]
                  })
                : V
                  ? (0, i.jsx)(Z.Z, {})
                  : (0, i.jsx)(I.Z, {
                        title: (0, i.jsx)(c.Text, {
                            className: x.globalDiscoveryTitle,
                            variant: 'display-lg',
                            color: 'header-primary',
                            children: O.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_TITLE_2.format({})
                        }),
                        description: R ? O.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_DESCRIPTION_NUX_COMPLETED : O.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_DESCRIPTION,
                        button: j,
                        children: (0, i.jsx)(m.Z, {})
                    })),
        (0, i.jsxs)(T.Z, {
            ref: S,
            onScroll: E,
            children: [
                t,
                (0, i.jsxs)(p.Z, {
                    children: [
                        H &&
                            (0, i.jsxs)('div', {
                                className: x.contentTabs,
                                children: [
                                    (0, i.jsx)(g.Z, {
                                        tabs: G,
                                        onTabSelect: v.fH,
                                        selectedTab: w
                                    }),
                                    w !== v.v0.SAVED_GUILDS && (0, i.jsx)(A.C, {})
                                ]
                            }),
                        (0, i.jsx)(L.ZP, {
                            width: n,
                            onUpdatePage: y,
                            paddingHorizontal: d,
                            paddingVertical: s,
                            variant: u
                        })
                    ]
                })
            ]
        })
    );
});
