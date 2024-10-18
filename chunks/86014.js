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
    S = n(216742),
    f = n(84615),
    C = n(889711),
    N = n(229893),
    A = n(931515),
    v = n(702646),
    Z = n(207796),
    L = n(782322),
    R = n(895068),
    O = n(308083),
    x = n(689938),
    b = n(641388);
function M(e) {
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
                (0, f.q4)(
                    (e) => {
                        let { closeLayer: t } = e;
                        return (0, i.jsx)(h.Z, {
                            onClose: t,
                            guildId: r
                        });
                    },
                    { layerKey: O.Pv }
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
                              className: b.heroButton,
                              innerClassName: b.heroButtonInner,
                              onClick: () => {
                                  (0, u.GS)({ location: d.Z.GLOBAL_DISCOVERY }), (0, Z.fH)(Z.v0.GET_STARTED);
                              },
                              children: [
                                  (0, i.jsx)(c.Text, {
                                      variant: 'text-md/medium',
                                      color: 'none',
                                      children: x.Z.Messages.CLAN_DISCOVERY_UPSELL_USER_CTA
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
                                      className: b.upsellSelect,
                                      value: r,
                                      options: o,
                                      onChange: l
                                  }),
                              (0, i.jsx)('div', {
                                  children: (0, i.jsx)(c.Button, {
                                      look: c.ButtonLooks.FILLED,
                                      size: c.ButtonSizes.MEDIUM,
                                      color: c.ButtonColors.BRAND,
                                      className: b.heroButton,
                                      onClick: I,
                                      children: (0, i.jsx)(c.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'always-white',
                                          children: x.Z.Messages.CLAN_DISCOVERY_UPSELL_ADMIN_LIST_SERVER
                                      })
                                  })
                              })
                          ]
                      })
                    : null,
            [n, s.length, o, r, I]
        );
    return (0, i.jsxs)('div', {
        className: b.contentCtaContainer,
        children: [g, p]
    });
}
t.Z = a.memo(function (e) {
    let t,
        { width: n, paddingVertical: s = 16, paddingHorizontal: d = 32, variant: u = R.Bj.DEFAULT, onScroll: E, withAdminContent: h = !1 } = e,
        { enabled: f } = (0, S.I7)(),
        O = a.useRef(null),
        P = a.useRef(null),
        D = (0, Z.GN)((e) => e.completedNux, l.Z),
        y = (0, Z.GN)((e) => e.entrypointGameId, l.Z),
        [j, U] = a.useState(null),
        { backgroundImageUrl: G, gameName: w } = (0, A.kN)(y),
        k = a.useCallback(() => {
            var e, t, n;
            if (!f) return;
            let i = null === (e = O.current) || void 0 === e ? void 0 : e.getBoundingClientRect().top,
                a = null !== (n = null === (t = P.current) || void 0 === t ? void 0 : t.getScrollerState().scrollTop) && void 0 !== n ? n : 0;
            null != i && j !== i && U(i + a);
        }, [j, f]);
    a.useEffect(() => {
        if (!f) return;
        let e = (0, C.pP)(k);
        return (0, C.YP)(e, document.body), () => (0, C.UC)(e, document.body);
    }, [f, k]);
    let B = a.useCallback(() => {
            var e, t;
            f && null != j
                ? null === (e = P.current) ||
                  void 0 === e ||
                  e.scrollTo({
                      to: j - 64,
                      animate: !1
                  })
                : null === (t = P.current) || void 0 === t || t.scrollToTop();
        }, [j, f]),
        H = a.useMemo(
            () =>
                (0, i.jsx)(M, {
                    showPickGameButton: !D,
                    showAdminGuildPicker: h
                }),
            [D, h]
        ),
        V = (0, o.e7)([N.Z], () => N.Z.getSavedGuilds().length),
        F = a.useMemo(
            () => [
                {
                    id: Z.v0.DISCOVERY,
                    label: x.Z.Messages.CLAN_DISCOVERY_ALL_GUILDS
                },
                {
                    id: Z.v0.SAVED_GUILDS,
                    label: x.Z.Messages.CLAN_DISCOVERY_SAVED_GUILDS,
                    count: V
                }
            ],
            [V]
        ),
        Y = (0, Z.GN)((e) => e.mode, l.Z),
        { enableClanCreation: z } = (0, _.C3)({
            location: 'ClanDiscoveryContent',
            includeConverted: !0
        }),
        W = (0, Z.GN)((e) => e.dismissedPilotAdminNux),
        K = a.useMemo(() => !z || W, [W, z]);
    return (
        (t =
            null != y && null != w
                ? (0, i.jsxs)(I.Z, {
                      title: (0, i.jsx)(c.Text, {
                          className: r()(b.globalDiscoveryTitle, b.customDiscoveryTitle),
                          variant: 'display-lg',
                          color: 'header-primary',
                          children: x.Z.Messages.DISCOVERY_FIND_GAMING_GUILD_HEADER.format({ gameName: w })
                      }),
                      description: x.Z.Messages.DISCOVERY_FIND_GAMING_GUILD_SUBHEADER.format({ gameName: w }),
                      button: (0, i.jsx)(c.Button, {
                          className: b.heroButton,
                          innerClassName: b.heroButtonInner,
                          look: c.ButtonLooks.FILLED,
                          size: c.ButtonSizes.MEDIUM,
                          color: c.ButtonColors.WHITE,
                          onClick: () => (0, Z.fH)(Z.v0.PREFERENCES),
                          children: (0, i.jsx)(c.Text, {
                              variant: 'text-md/medium',
                              color: 'none',
                              children: x.Z.Messages.DISCOVERY_FIND_GAMING_GUILD_CTA
                          })
                      }),
                      children: [
                          (0, i.jsx)(m.Z, {}),
                          (0, i.jsx)('div', {
                              className: b.gameArt,
                              style: { backgroundImage: 'url("'.concat(G, '")') }
                          }),
                          (0, i.jsx)('div', { className: b.imageBackdrop })
                      ]
                  })
                : f
                  ? (0, i.jsx)(L.Z, {})
                  : (0, i.jsx)(I.Z, {
                        title: (0, i.jsx)(c.Text, {
                            className: b.globalDiscoveryTitle,
                            variant: 'display-lg',
                            color: 'header-primary',
                            children: x.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_TITLE_2.format({})
                        }),
                        description: D ? x.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_DESCRIPTION_NUX_COMPLETED : x.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_DESCRIPTION,
                        button: H,
                        children: (0, i.jsx)(m.Z, {})
                    })),
        (0, i.jsxs)(T.Z, {
            ref: P,
            onScroll: E,
            children: [
                t,
                (0, i.jsxs)(p.Z, {
                    children: [
                        K &&
                            (0, i.jsxs)('div', {
                                className: b.contentTabs,
                                ref: O,
                                children: [
                                    (0, i.jsx)(g.Z, {
                                        tabs: F,
                                        onTabSelect: Z.fH,
                                        selectedTab: Y
                                    }),
                                    Y !== Z.v0.SAVED_GUILDS && (0, i.jsx)(v.C, {})
                                ]
                            }),
                        (0, i.jsx)(R.ZP, {
                            width: n,
                            onUpdatePage: B,
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
