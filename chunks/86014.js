n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(143927),
    o = n(442837),
    c = n(481060),
    d = n(224706),
    u = n(100527),
    _ = n(812206),
    E = n(970606),
    h = n(963202),
    m = n(650461),
    I = n(603839),
    p = n(669764),
    g = n(322665),
    T = n(17845),
    f = n(374939),
    S = n(233374),
    C = n(283293),
    N = n(84615),
    A = n(229893),
    v = n(702646),
    Z = n(207796),
    L = n(895068),
    R = n(308083),
    O = n(689938),
    x = n(641388);
function b(e) {
    let { showPickGameButton: t, showAdminGuildPicker: n } = e,
        { guilds: s } = (0, h.C3)({
            location: 'ClanDiscoveryContentCtaContent',
            includeConverted: !1
        }),
        [r, l] = a.useState(() => {
            var e;
            let t = new Set(m.ZP.getGuildIds());
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
        d = n && s.length > 0,
        _ = a.useCallback(() => {
            (0, E._9)({
                guildId: r,
                location: u.Z.GLOBAL_DISCOVERY
            }),
                (0, N.q4)(
                    (e) => {
                        let { closeLayer: t } = e;
                        return (0, i.jsx)(I.Z, {
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
                              color: d ? c.ButtonColors.TRANSPARENT : c.ButtonColors.BRAND,
                              className: x.heroButton,
                              innerClassName: x.heroButtonInner,
                              onClick: () => {
                                  (0, E.GS)({ location: u.Z.GLOBAL_DISCOVERY }), (0, Z.fH)(Z.v0.GET_STARTED);
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
            [t, d]
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
                                      onClick: _,
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
            [n, s.length, o, r, _]
        );
    return (0, i.jsxs)('div', {
        className: x.contentCtaContainer,
        children: [g, p]
    });
}
t.Z = a.memo(function (e) {
    var t, n;
    let s,
        { width: u, paddingVertical: E = 16, paddingHorizontal: m = 32, variant: I = L.Bj.DEFAULT, onScroll: N, withAdminContent: R = !1 } = e,
        M = a.useRef(null),
        P = (0, Z.GN)((e) => e.completedNux, l.Z),
        D = (0, Z.GN)((e) => e.entrypointGameId, l.Z),
        y = (0, o.e7)([_.Z], () => (null != D ? _.Z.getApplication(D) : null)),
        j = (0, o.e7)([p.Z], () => (null != D ? p.Z.getGame(D) : null));
    a.useEffect(() => {
        null != D && null == j && d.Z.getDetectableGamesSupplemental([D]);
    }, [D, j]);
    let U = a.useCallback(() => {
            var e;
            null === (e = M.current) || void 0 === e || e.scrollToTop();
        }, []),
        G = a.useMemo(
            () =>
                (0, i.jsx)(b, {
                    showPickGameButton: !P,
                    showAdminGuildPicker: R
                }),
            [P, R]
        ),
        w = a.useMemo(() => {
            if (null == j) return '';
            let { artwork: e, screenshots: t } = j;
            if (e.length > 0) {
                let t = Math.floor(Math.random() * (e.length - 1));
                return e[t];
            }
            if (t.length > 0) {
                let e = Math.floor(Math.random() * (t.length - 1));
                return t[e];
            }
            return '';
        }, [j]),
        k = null !== (n = null !== (t = null == j ? void 0 : j.name) && void 0 !== t ? t : null == y ? void 0 : y.name) && void 0 !== n ? n : '',
        B = (0, o.e7)([A.Z], () => A.Z.getSavedGuilds().length),
        V = a.useMemo(
            () => [
                {
                    id: Z.v0.DISCOVERY,
                    label: O.Z.Messages.CLAN_DISCOVERY_ALL_GUILDS
                },
                {
                    id: Z.v0.SAVED_GUILDS,
                    label: O.Z.Messages.CLAN_DISCOVERY_SAVED_GUILDS,
                    count: B
                }
            ],
            [B]
        ),
        H = (0, Z.GN)((e) => e.mode, l.Z),
        { enableClanCreation: F } = (0, h.C3)({
            location: 'ClanDiscoveryContent',
            includeConverted: !0
        }),
        Y = (0, Z.GN)((e) => e.dismissedPilotAdminNux),
        z = a.useMemo(() => !F || Y, [Y, F]);
    return (
        (s =
            null != D && (null != j || null != y)
                ? (0, i.jsxs)(T.Z, {
                      title: (0, i.jsx)(c.Text, {
                          className: r()(x.globalDiscoveryTitle, x.customDiscoveryTitle),
                          variant: 'display-lg',
                          color: 'header-primary',
                          children: O.Z.Messages.DISCOVERY_FIND_GAMING_GUILD_HEADER.format({ gameName: k })
                      }),
                      description: O.Z.Messages.DISCOVERY_FIND_GAMING_GUILD_SUBHEADER.format({ gameName: k }),
                      button: (0, i.jsx)(c.Button, {
                          className: x.heroButton,
                          innerClassName: x.heroButtonInner,
                          look: c.ButtonLooks.FILLED,
                          size: c.ButtonSizes.MEDIUM,
                          color: c.ButtonColors.WHITE,
                          onClick: () => (0, Z.fH)(Z.v0.PREFERENCES),
                          children: (0, i.jsx)(c.Text, {
                              variant: 'text-md/medium',
                              color: 'none',
                              children: O.Z.Messages.DISCOVERY_FIND_GAMING_GUILD_CTA
                          })
                      }),
                      children: [
                          (0, i.jsx)(g.Z, {}),
                          (0, i.jsx)('div', {
                              className: x.gameArt,
                              style: { backgroundImage: 'url("'.concat(w, '")') }
                          }),
                          (0, i.jsx)('div', { className: x.imageBackdrop })
                      ]
                  })
                : (0, i.jsx)(T.Z, {
                      title: (0, i.jsx)(c.Text, {
                          className: x.globalDiscoveryTitle,
                          variant: 'display-lg',
                          color: 'header-primary',
                          children: O.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_TITLE_2.format({})
                      }),
                      description: P ? O.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_DESCRIPTION_NUX_COMPLETED : O.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_DESCRIPTION,
                      button: G,
                      children: (0, i.jsx)(g.Z, {})
                  })),
        (0, i.jsxs)(C.Z, {
            ref: M,
            onScroll: N,
            children: [
                s,
                (0, i.jsxs)(f.Z, {
                    children: [
                        z &&
                            (0, i.jsxs)('div', {
                                className: x.contentTabs,
                                children: [
                                    (0, i.jsx)(S.Z, {
                                        tabs: V,
                                        onTabSelect: Z.fH,
                                        selectedTab: H
                                    }),
                                    H !== Z.v0.SAVED_GUILDS && (0, i.jsx)(v.C, {})
                                ]
                            }),
                        (0, i.jsx)(L.ZP, {
                            width: u,
                            onUpdatePage: U,
                            paddingHorizontal: m,
                            paddingVertical: E,
                            variant: I
                        })
                    ]
                })
            ]
        })
    );
});
