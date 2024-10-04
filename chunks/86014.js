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
    N = n(207796),
    A = n(895068),
    v = n(308083),
    Z = n(689938),
    L = n(641388);
function R(e) {
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
                    { layerKey: v.Pv }
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
                              className: L.heroButton,
                              innerClassName: L.heroButtonInner,
                              onClick: () => {
                                  (0, h.GS)({ location: s ? u.Z.GLOBAL_DISCOVERY : u.Z.CLAN_DISCOVERY }), (0, N.fH)(N.v0.GET_STARTED);
                              },
                              children: [
                                  (0, i.jsx)(c.Text, {
                                      variant: 'text-md/medium',
                                      color: 'none',
                                      children: Z.Z.Messages.CLAN_DISCOVERY_UPSELL_USER_CTA
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
                                      className: L.upsellSelect,
                                      value: o,
                                      options: _,
                                      onChange: d
                                  }),
                              (0, i.jsx)('div', {
                                  children: (0, i.jsx)(c.Button, {
                                      look: c.ButtonLooks.FILLED,
                                      size: c.ButtonSizes.MEDIUM,
                                      color: c.ButtonColors.BRAND,
                                      className: L.heroButton,
                                      onClick: p,
                                      children: (0, i.jsx)(c.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'always-white',
                                          children: Z.Z.Messages.CLAN_DISCOVERY_UPSELL_ADMIN_LIST_SERVER
                                      })
                                  })
                              })
                          ]
                      })
                    : null,
            [n, l.length, _, o, p]
        );
    return (0, i.jsxs)('div', {
        className: r()(L.contentCtaContainer, { [L.contentCtaContainerSpacing]: !s }),
        children: [f, T]
    });
}
t.Z = a.memo(function (e) {
    var t, n;
    let s,
        { width: u, paddingVertical: h = 16, paddingHorizontal: E = 32, variant: m = A.Bj.DEFAULT, onScroll: I, withAdminContent: C = !1, inGlobalDiscovery: v } = e,
        O = a.useRef(null),
        x = (0, N.GN)((e) => e.completedNux, l.Z),
        b = (0, N.GN)((e) => e.entrypointGameId, l.Z),
        P = (0, o.e7)([_.Z], () => (null != b ? _.Z.getApplication(b) : null)),
        M = (0, o.e7)([g.Z], () => (null != b ? g.Z.getGame(b) : null));
    a.useEffect(() => {
        null != b && null == M && d.Z.getDetectableGamesSupplemental([b]);
    }, [b, M]);
    let D = a.useCallback(() => {
            var e;
            null === (e = O.current) || void 0 === e || e.scrollToTop();
        }, []),
        y = a.useMemo(
            () =>
                (0, i.jsx)(R, {
                    inGlobalDiscovery: v,
                    showPickGameButton: !x,
                    showAdminGuildPicker: C
                }),
            [x, C, v]
        ),
        j = a.useMemo(() => {
            if (null == M) return '';
            let { artwork: e, screenshots: t } = M;
            if (e.length > 0) {
                let t = Math.floor(Math.random() * (e.length - 1));
                return e[t];
            }
            if (t.length > 0) {
                let e = Math.floor(Math.random() * (t.length - 1));
                return t[e];
            }
            return '';
        }, [M]),
        U = null !== (n = null !== (t = null == M ? void 0 : M.name) && void 0 !== t ? t : null == P ? void 0 : P.name) && void 0 !== n ? n : '';
    return (
        (s =
            null != b && (null != M || null != P)
                ? (0, i.jsxs)(T.Z, {
                      title: (0, i.jsx)(c.Text, {
                          className: r()(L.globalDiscoveryTitle, L.customDiscoveryTitle),
                          variant: 'display-lg',
                          color: 'header-primary',
                          children: Z.Z.Messages.DISCOVERY_FIND_GAMING_GUILD_HEADER.format({ gameName: U })
                      }),
                      description: Z.Z.Messages.DISCOVERY_FIND_GAMING_GUILD_SUBHEADER.format({ gameName: U }),
                      button: (0, i.jsx)(c.Button, {
                          className: L.heroButton,
                          innerClassName: L.heroButtonInner,
                          look: c.ButtonLooks.FILLED,
                          size: c.ButtonSizes.MEDIUM,
                          color: c.ButtonColors.WHITE,
                          onClick: () => (0, N.fH)(N.v0.PREFERENCES),
                          children: (0, i.jsx)(c.Text, {
                              variant: 'text-md/medium',
                              color: 'none',
                              children: Z.Z.Messages.DISCOVERY_FIND_GAMING_GUILD_CTA
                          })
                      }),
                      children: [
                          (0, i.jsx)(p.Z, {}),
                          (0, i.jsx)('div', {
                              className: L.gameArt,
                              style: { backgroundImage: 'url("'.concat(j, '")') }
                          }),
                          (0, i.jsx)('div', { className: L.imageBackdrop })
                      ]
                  })
                : (0, i.jsx)(T.Z, {
                      title: (0, i.jsx)(c.Text, {
                          className: L.globalDiscoveryTitle,
                          variant: 'display-lg',
                          color: 'header-primary',
                          children: Z.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_TITLE_2.format({})
                      }),
                      description: x ? Z.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_DESCRIPTION_NUX_COMPLETED : Z.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_DESCRIPTION,
                      button: y,
                      children: (0, i.jsx)(p.Z, {})
                  })),
        (0, i.jsxs)(S.Z, {
            ref: O,
            onScroll: I,
            children: [
                s,
                (0, i.jsx)(f.Z, {
                    children: (0, i.jsx)(A.ZP, {
                        width: u,
                        onUpdatePage: D,
                        paddingHorizontal: E,
                        paddingVertical: h,
                        variant: m
                    })
                })
            ]
        })
    );
});
