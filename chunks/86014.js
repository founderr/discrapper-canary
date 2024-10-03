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
    h = n(970606),
    E = n(963202),
    m = n(650461),
    I = n(603839),
    g = n(669764),
    p = n(322665),
    T = n(17845),
    f = n(374939),
    S = n(283293),
    C = n(84615),
    N = n(210887),
    A = n(207796),
    v = n(895068),
    Z = n(308083),
    L = n(689938),
    R = n(641388);
function O(e) {
    let { showPickGameButton: t, showAdminGuildPicker: n, inGlobalDiscovery: s } = e,
        { guilds: l } = (0, E.C3)({
            location: 'ClanDiscoveryContentCtaContent',
            includeConverted: !1
        }),
        [o, d] = a.useState(() => {
            var e;
            let t = new Set(m.ZP.getGuildIds());
            for (let e of l) if (t.has(e.id)) return e.id;
            return null === (e = l[0]) || void 0 === e ? void 0 : e.id;
        }),
        _ = a.useMemo(
            () =>
                l.map((e) => ({
                    value: e.id,
                    label: e.name
                })),
            [l]
        ),
        g = n && l.length > 0,
        p = a.useCallback(() => {
            (0, h._9)({
                guildId: o,
                location: s ? u.Z.GLOBAL_DISCOVERY : u.Z.CLAN_DISCOVERY
            }),
                (0, C.q4)(
                    (e) => {
                        let { closeLayer: t } = e;
                        return (0, i.jsx)(I.Z, {
                            onClose: t,
                            guildId: o
                        });
                    },
                    { layerKey: Z.Pv }
                );
        }, [o, s]),
        T = a.useMemo(
            () =>
                t
                    ? (0, i.jsx)('div', {
                          children: (0, i.jsxs)(c.Button, {
                              look: c.ButtonLooks.FILLED,
                              size: c.ButtonSizes.LARGE,
                              color: g ? c.ButtonColors.TRANSPARENT : c.ButtonColors.BRAND,
                              className: R.heroButton,
                              innerClassName: R.heroButtonInner,
                              onClick: () => {
                                  (0, h.GS)({ location: s ? u.Z.GLOBAL_DISCOVERY : u.Z.CLAN_DISCOVERY }), (0, A.fH)(A.v0.GET_STARTED);
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
            [t, g, s]
        ),
        f = a.useMemo(
            () =>
                n && l.length > 0
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              l.length > 0 &&
                                  (0, i.jsx)(c.SearchableSelect, {
                                      className: R.upsellSelect,
                                      value: o,
                                      options: _,
                                      onChange: d
                                  }),
                              (0, i.jsx)('div', {
                                  children: (0, i.jsx)(c.Button, {
                                      look: c.ButtonLooks.FILLED,
                                      size: c.ButtonSizes.MEDIUM,
                                      color: c.ButtonColors.BRAND,
                                      className: R.heroButton,
                                      onClick: p,
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
            [n, l.length, _, o, p]
        );
    return (0, i.jsxs)('div', {
        className: r()(R.contentCtaContainer, { [R.contentCtaContainerSpacing]: !s }),
        children: [f, T]
    });
}
t.Z = a.memo(function (e) {
    var t, n;
    let s,
        { width: u, paddingVertical: h = 16, paddingHorizontal: E = 32, variant: m = v.Bj.DEFAULT, onScroll: I, withAdminContent: C = !1, inGlobalDiscovery: Z } = e,
        x = a.useRef(null),
        b = (0, A.GN)((e) => e.completedNux, l.Z),
        P = (0, A.GN)((e) => e.entrypointGameId, l.Z),
        M = (0, o.e7)([N.Z], () => N.Z.theme),
        D = (0, o.e7)([_.Z], () => (null != P ? _.Z.getApplication(P) : null)),
        y = (0, o.e7)([g.Z], () => (null != P ? g.Z.getGame(P) : null));
    a.useEffect(() => {
        null != P && null == y && d.Z.getDetectableGamesSupplemental([P]);
    }, [P, y]);
    let j = a.useCallback(() => {
            var e;
            null === (e = x.current) || void 0 === e || e.scrollToTop();
        }, []),
        U = a.useMemo(
            () =>
                (0, i.jsx)(O, {
                    inGlobalDiscovery: Z,
                    showPickGameButton: !b,
                    showAdminGuildPicker: C
                }),
            [b, C, Z]
        ),
        G = a.useMemo(() => {
            if (null == y) return '';
            let { artwork: e, screenshots: t } = y;
            if (e.length > 0) {
                let t = Math.floor(Math.random() * (e.length - 1));
                return e[t];
            }
            if (t.length > 0) {
                let e = Math.floor(Math.random() * (t.length - 1));
                return t[e];
            }
            return '';
        }, [y]),
        w = null !== (n = null !== (t = null == y ? void 0 : y.name) && void 0 !== t ? t : null == D ? void 0 : D.name) && void 0 !== n ? n : '';
    return (
        (s =
            null != P && (null != y || null != D)
                ? (0, i.jsxs)(T.Z, {
                      title: (0, i.jsx)(c.Text, {
                          className: r()(R.globalDiscoveryTitle, R.customDiscoveryTitle),
                          variant: 'display-lg',
                          color: 'header-primary',
                          children: L.Z.Messages.DISCOVERY_FIND_GAMING_GUILD_HEADER.format({ gameName: w })
                      }),
                      description: L.Z.Messages.DISCOVERY_FIND_GAMING_GUILD_SUBHEADER.format({ gameName: w }),
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
                          (0, i.jsx)(p.Z, {}),
                          (0, i.jsx)('div', {
                              className: R.gameArt,
                              style: {
                                  background: 'linear-gradient('
                                      .concat('dark' === M ? 'rgba(0, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0.9)', ' 0%, ')
                                      .concat('dark' === M ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.7)', ' 70%), url("')
                                      .concat(G, '")')
                              }
                          })
                      ]
                  })
                : (0, i.jsx)(T.Z, {
                      title: (0, i.jsx)(c.Text, {
                          className: R.globalDiscoveryTitle,
                          variant: 'display-lg',
                          color: 'header-primary',
                          children: L.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_TITLE_2.format({})
                      }),
                      description: b ? L.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_DESCRIPTION_NUX_COMPLETED : L.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_DESCRIPTION,
                      button: U,
                      children: (0, i.jsx)(p.Z, {})
                  })),
        (0, i.jsxs)(S.Z, {
            ref: x,
            onScroll: I,
            children: [
                s,
                (0, i.jsx)(f.Z, {
                    children: (0, i.jsx)(v.ZP, {
                        width: u,
                        onUpdatePage: j,
                        paddingHorizontal: E,
                        paddingVertical: h,
                        variant: m
                    })
                })
            ]
        })
    );
});
