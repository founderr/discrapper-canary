n(47120);
var i = n(200651),
    a = n(192379),
    s = n(782690),
    r = n(442837),
    l = n(481060),
    o = n(100527),
    c = n(970606),
    d = n(963202),
    u = n(650461),
    _ = n(603839),
    E = n(322665),
    h = n(17845),
    m = n(374939),
    I = n(233374),
    p = n(283293),
    g = n(216742),
    T = n(84615),
    f = n(889711),
    S = n(229893),
    C = n(931515),
    N = n(702646),
    A = n(207796),
    v = n(782322),
    Z = n(895068),
    L = n(308083),
    R = n(689938),
    O = n(641388);
function x(e) {
    let { showPickGameButton: t, showAdminGuildPicker: n } = e,
        { guilds: s } = (0, d.C3)({
            location: 'ClanDiscoveryContentCtaContent',
            includeConverted: !1
        }),
        [r, E] = a.useState(() => {
            var e;
            let t = new Set(u.ZP.getGuildIds());
            for (let e of s) if (t.has(e.id)) return e.id;
            return null === (e = s[0]) || void 0 === e ? void 0 : e.id;
        }),
        h = a.useMemo(
            () =>
                s.map((e) => ({
                    value: e.id,
                    label: e.name
                })),
            [s]
        ),
        m = n && s.length > 0,
        I = a.useCallback(() => {
            (0, c._9)({
                guildId: r,
                location: o.Z.GLOBAL_DISCOVERY
            }),
                (0, T.q4)(
                    (e) => {
                        let { closeLayer: t } = e;
                        return (0, i.jsx)(_.Z, {
                            onClose: t,
                            guildId: r
                        });
                    },
                    { layerKey: L.Pv }
                );
        }, [r]),
        p = a.useMemo(
            () =>
                t
                    ? (0, i.jsx)('div', {
                          children: (0, i.jsxs)(l.Button, {
                              look: l.ButtonLooks.FILLED,
                              size: l.ButtonSizes.LARGE,
                              color: m ? l.ButtonColors.TRANSPARENT : l.ButtonColors.BRAND,
                              className: O.heroButton,
                              innerClassName: O.heroButtonInner,
                              onClick: () => {
                                  (0, c.GS)({ location: o.Z.GLOBAL_DISCOVERY }), (0, A.fH)(A.v0.GET_STARTED);
                              },
                              children: [
                                  (0, i.jsx)(l.Text, {
                                      variant: 'text-md/medium',
                                      color: 'none',
                                      children: R.Z.Messages.CLAN_DISCOVERY_UPSELL_USER_CTA
                                  }),
                                  (0, i.jsx)(l.ArrowSmallRightIcon, { color: 'currentColor' })
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
                                  (0, i.jsx)(l.SearchableSelect, {
                                      className: O.upsellSelect,
                                      value: r,
                                      options: h,
                                      onChange: E
                                  }),
                              (0, i.jsx)('div', {
                                  children: (0, i.jsx)(l.Button, {
                                      look: l.ButtonLooks.FILLED,
                                      size: l.ButtonSizes.MEDIUM,
                                      color: l.ButtonColors.BRAND,
                                      className: O.heroButton,
                                      onClick: I,
                                      children: (0, i.jsx)(l.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'always-white',
                                          children: R.Z.Messages.CLAN_DISCOVERY_UPSELL_ADMIN_LIST_SERVER
                                      })
                                  })
                              })
                          ]
                      })
                    : null,
            [n, s.length, h, r, I]
        );
    return (0, i.jsxs)('div', {
        className: O.contentCtaContainer,
        children: [g, p]
    });
}
t.Z = a.memo(function (e) {
    let t,
        { width: n, paddingVertical: o = 16, paddingHorizontal: c = 32, variant: u = Z.Bj.DEFAULT, onScroll: _, withAdminContent: T = !1 } = e,
        { enabled: L } = (0, g.I7)(),
        b = a.useRef(null),
        M = a.useRef(null),
        P = (0, A.GN)((e) => e.completedNux, s.Z),
        D = (0, A.GN)((e) => e.entrypointGameId, s.Z),
        [y, j] = a.useState(null),
        { backgroundImageUrl: U, gameName: G } = (0, C.kN)(D),
        w = a.useCallback(() => {
            var e, t, n;
            if (!L) return;
            let i = null === (e = b.current) || void 0 === e ? void 0 : e.getBoundingClientRect().top,
                a = null !== (n = null === (t = M.current) || void 0 === t ? void 0 : t.getScrollerState().scrollTop) && void 0 !== n ? n : 0;
            null != i && y !== i && j(i + a);
        }, [y, L]);
    a.useEffect(() => {
        if (!L) return;
        let e = (0, f.pP)(w);
        return (0, f.YP)(e, document.body), () => (0, f.UC)(e, document.body);
    }, [L, w]);
    let k = a.useCallback(() => {
            var e, t;
            L && null != y
                ? null === (e = M.current) ||
                  void 0 === e ||
                  e.scrollTo({
                      to: y - 64,
                      animate: !1
                  })
                : null === (t = M.current) || void 0 === t || t.scrollToTop();
        }, [y, L]),
        B = a.useMemo(
            () =>
                (0, i.jsx)(x, {
                    showPickGameButton: !P,
                    showAdminGuildPicker: T
                }),
            [P, T]
        ),
        H = (0, r.e7)([S.Z], () => S.Z.getSavedGuilds().length),
        V = a.useMemo(
            () => [
                {
                    id: A.v0.DISCOVERY,
                    label: R.Z.Messages.CLAN_DISCOVERY_ALL_GUILDS
                },
                {
                    id: A.v0.SAVED_GUILDS,
                    label: R.Z.Messages.CLAN_DISCOVERY_SAVED_GUILDS,
                    count: H
                }
            ],
            [H]
        ),
        F = (0, A.GN)((e) => e.mode, s.Z),
        { enableClanCreation: Y } = (0, d.C3)({
            location: 'ClanDiscoveryContent',
            includeConverted: !0
        }),
        z = (0, A.GN)((e) => e.dismissedPilotAdminNux),
        W = a.useMemo(() => !Y || z, [z, Y]);
    return (
        (t =
            null != D && null != G
                ? (0, i.jsxs)(h.Z, {
                      title: R.Z.Messages.DISCOVERY_FIND_GAMING_GUILD_HEADER.format({ gameName: G }),
                      description: R.Z.Messages.DISCOVERY_FIND_GAMING_GUILD_SUBHEADER.format({ gameName: G }),
                      button: (0, i.jsx)(l.Button, {
                          className: O.heroButton,
                          innerClassName: O.heroButtonInner,
                          look: l.ButtonLooks.FILLED,
                          size: l.ButtonSizes.MEDIUM,
                          color: l.ButtonColors.WHITE,
                          onClick: () => (0, A.fH)(A.v0.PREFERENCES),
                          children: (0, i.jsx)(l.Text, {
                              variant: 'text-md/medium',
                              color: 'none',
                              children: R.Z.Messages.DISCOVERY_FIND_GAMING_GUILD_CTA
                          })
                      }),
                      children: [
                          (0, i.jsx)(E.Z, {}),
                          (0, i.jsx)('div', {
                              className: O.gameArt,
                              style: { backgroundImage: 'url("'.concat(U, '")') }
                          }),
                          (0, i.jsx)('div', { className: O.imageBackdrop })
                      ]
                  })
                : L
                  ? (0, i.jsx)(v.Z, {})
                  : (0, i.jsx)(h.Z, {
                        title: R.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_TITLE_2.format({}),
                        description: P ? R.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_DESCRIPTION_NUX_COMPLETED : R.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_DESCRIPTION,
                        button: B,
                        children: (0, i.jsx)(E.Z, {})
                    })),
        (0, i.jsxs)(p.Z, {
            ref: M,
            onScroll: _,
            children: [
                t,
                (0, i.jsxs)(m.Z, {
                    children: [
                        W &&
                            (0, i.jsxs)('div', {
                                className: O.contentTabs,
                                ref: b,
                                children: [
                                    (0, i.jsx)(I.Z, {
                                        tabs: V,
                                        onTabSelect: A.fH,
                                        selectedTab: F
                                    }),
                                    F !== A.v0.SAVED_GUILDS && (0, i.jsx)(N.C, {})
                                ]
                            }),
                        (0, i.jsx)(Z.ZP, {
                            width: n,
                            onUpdatePage: k,
                            paddingHorizontal: c,
                            paddingVertical: o,
                            variant: u
                        })
                    ]
                })
            ]
        })
    );
});
