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
    S = n(84615),
    f = n(229893),
    C = n(931515),
    N = n(702646),
    A = n(207796),
    v = n(895068),
    Z = n(308083),
    L = n(689938),
    R = n(641388);
function O(e) {
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
                    { layerKey: Z.Pv }
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
                              className: R.heroButton,
                              innerClassName: R.heroButtonInner,
                              onClick: () => {
                                  (0, u.GS)({ location: d.Z.GLOBAL_DISCOVERY }), (0, A.fH)(A.v0.GET_STARTED);
                              },
                              children: [
                                  (0, i.jsx)(c.Text, {
                                      variant: 'text-md/medium',
                                      color: 'none',
                                      children: L.Z.Messages.CLAN_DISCOVERY_UPSELL_USER_CTA
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
                                      className: R.upsellSelect,
                                      value: r,
                                      options: o,
                                      onChange: l
                                  }),
                              (0, i.jsx)('div', {
                                  children: (0, i.jsx)(c.Button, {
                                      look: c.ButtonLooks.FILLED,
                                      size: c.ButtonSizes.MEDIUM,
                                      color: c.ButtonColors.BRAND,
                                      className: R.heroButton,
                                      onClick: I,
                                      children: (0, i.jsx)(c.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'always-white',
                                          children: L.Z.Messages.CLAN_DISCOVERY_UPSELL_ADMIN_LIST_SERVER
                                      })
                                  })
                              })
                          ]
                      })
                    : null,
            [n, s.length, o, r, I]
        );
    return (0, i.jsxs)('div', {
        className: R.contentCtaContainer,
        children: [g, p]
    });
}
t.Z = a.memo(function (e) {
    let t,
        { width: n, paddingVertical: s = 16, paddingHorizontal: d = 32, variant: u = v.Bj.DEFAULT, onScroll: E, withAdminContent: h = !1 } = e,
        S = a.useRef(null),
        Z = (0, A.GN)((e) => e.completedNux, l.Z),
        x = (0, A.GN)((e) => e.entrypointGameId, l.Z),
        { backgroundImageUrl: b, gameName: M } = (0, C.kN)(x),
        P = a.useCallback(() => {
            var e;
            null === (e = S.current) || void 0 === e || e.scrollToTop();
        }, []),
        D = a.useMemo(
            () =>
                (0, i.jsx)(O, {
                    showPickGameButton: !Z,
                    showAdminGuildPicker: h
                }),
            [Z, h]
        ),
        y = (0, o.e7)([f.Z], () => f.Z.getSavedGuilds().length),
        j = a.useMemo(
            () => [
                {
                    id: A.v0.DISCOVERY,
                    label: L.Z.Messages.CLAN_DISCOVERY_ALL_GUILDS
                },
                {
                    id: A.v0.SAVED_GUILDS,
                    label: L.Z.Messages.CLAN_DISCOVERY_SAVED_GUILDS,
                    count: y
                }
            ],
            [y]
        ),
        U = (0, A.GN)((e) => e.mode, l.Z),
        { enableClanCreation: G } = (0, _.C3)({
            location: 'ClanDiscoveryContent',
            includeConverted: !0
        }),
        w = (0, A.GN)((e) => e.dismissedPilotAdminNux),
        k = a.useMemo(() => !G || w, [w, G]);
    return (
        (t =
            null != x && null != M
                ? (0, i.jsxs)(I.Z, {
                      title: (0, i.jsx)(c.Text, {
                          className: r()(R.globalDiscoveryTitle, R.customDiscoveryTitle),
                          variant: 'display-lg',
                          color: 'header-primary',
                          children: L.Z.Messages.DISCOVERY_FIND_GAMING_GUILD_HEADER.format({ gameName: M })
                      }),
                      description: L.Z.Messages.DISCOVERY_FIND_GAMING_GUILD_SUBHEADER.format({ gameName: M }),
                      button: (0, i.jsx)(c.Button, {
                          className: R.heroButton,
                          innerClassName: R.heroButtonInner,
                          look: c.ButtonLooks.FILLED,
                          size: c.ButtonSizes.MEDIUM,
                          color: c.ButtonColors.WHITE,
                          onClick: () => (0, A.fH)(A.v0.PREFERENCES),
                          children: (0, i.jsx)(c.Text, {
                              variant: 'text-md/medium',
                              color: 'none',
                              children: L.Z.Messages.DISCOVERY_FIND_GAMING_GUILD_CTA
                          })
                      }),
                      children: [
                          (0, i.jsx)(m.Z, {}),
                          (0, i.jsx)('div', {
                              className: R.gameArt,
                              style: { backgroundImage: 'url("'.concat(b, '")') }
                          }),
                          (0, i.jsx)('div', { className: R.imageBackdrop })
                      ]
                  })
                : (0, i.jsx)(I.Z, {
                      title: (0, i.jsx)(c.Text, {
                          className: R.globalDiscoveryTitle,
                          variant: 'display-lg',
                          color: 'header-primary',
                          children: L.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_TITLE_2.format({})
                      }),
                      description: Z ? L.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_DESCRIPTION_NUX_COMPLETED : L.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_DESCRIPTION,
                      button: D,
                      children: (0, i.jsx)(m.Z, {})
                  })),
        (0, i.jsxs)(T.Z, {
            ref: S,
            onScroll: E,
            children: [
                t,
                (0, i.jsxs)(p.Z, {
                    children: [
                        k &&
                            (0, i.jsxs)('div', {
                                className: R.contentTabs,
                                children: [
                                    (0, i.jsx)(g.Z, {
                                        tabs: j,
                                        onTabSelect: A.fH,
                                        selectedTab: U
                                    }),
                                    U !== A.v0.SAVED_GUILDS && (0, i.jsx)(N.C, {})
                                ]
                            }),
                        (0, i.jsx)(v.ZP, {
                            width: n,
                            onUpdatePage: P,
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
