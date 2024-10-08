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
    S = n(283293),
    C = n(84615),
    N = n(207796),
    A = n(895068),
    v = n(308083),
    Z = n(689938),
    L = n(641388);
function R(e) {
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
                (0, C.q4)(
                    (e) => {
                        let { closeLayer: t } = e;
                        return (0, i.jsx)(I.Z, {
                            onClose: t,
                            guildId: r
                        });
                    },
                    { layerKey: v.Pv }
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
                              className: L.heroButton,
                              innerClassName: L.heroButtonInner,
                              onClick: () => {
                                  (0, E.GS)({ location: u.Z.GLOBAL_DISCOVERY }), (0, N.fH)(N.v0.GET_STARTED);
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
            [t, d]
        ),
        g = a.useMemo(
            () =>
                n && s.length > 0
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              s.length > 0 &&
                                  (0, i.jsx)(c.SearchableSelect, {
                                      className: L.upsellSelect,
                                      value: r,
                                      options: o,
                                      onChange: l
                                  }),
                              (0, i.jsx)('div', {
                                  children: (0, i.jsx)(c.Button, {
                                      look: c.ButtonLooks.FILLED,
                                      size: c.ButtonSizes.MEDIUM,
                                      color: c.ButtonColors.BRAND,
                                      className: L.heroButton,
                                      onClick: _,
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
            [n, s.length, o, r, _]
        );
    return (0, i.jsxs)('div', {
        className: L.contentCtaContainer,
        children: [g, p]
    });
}
t.Z = a.memo(function (e) {
    var t, n;
    let s,
        { width: u, paddingVertical: E = 16, paddingHorizontal: h = 32, variant: m = A.Bj.DEFAULT, onScroll: I, withAdminContent: C = !1 } = e,
        v = a.useRef(null),
        O = (0, N.GN)((e) => e.completedNux, l.Z),
        x = (0, N.GN)((e) => e.entrypointGameId, l.Z),
        b = (0, o.e7)([_.Z], () => (null != x ? _.Z.getApplication(x) : null)),
        M = (0, o.e7)([p.Z], () => (null != x ? p.Z.getGame(x) : null));
    a.useEffect(() => {
        null != x && null == M && d.Z.getDetectableGamesSupplemental([x]);
    }, [x, M]);
    let P = a.useCallback(() => {
            var e;
            null === (e = v.current) || void 0 === e || e.scrollToTop();
        }, []),
        D = a.useMemo(
            () =>
                (0, i.jsx)(R, {
                    showPickGameButton: !O,
                    showAdminGuildPicker: C
                }),
            [O, C]
        ),
        y = a.useMemo(() => {
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
        j = null !== (n = null !== (t = null == M ? void 0 : M.name) && void 0 !== t ? t : null == b ? void 0 : b.name) && void 0 !== n ? n : '';
    return (
        (s =
            null != x && (null != M || null != b)
                ? (0, i.jsxs)(T.Z, {
                      title: (0, i.jsx)(c.Text, {
                          className: r()(L.globalDiscoveryTitle, L.customDiscoveryTitle),
                          variant: 'display-lg',
                          color: 'header-primary',
                          children: Z.Z.Messages.DISCOVERY_FIND_GAMING_GUILD_HEADER.format({ gameName: j })
                      }),
                      description: Z.Z.Messages.DISCOVERY_FIND_GAMING_GUILD_SUBHEADER.format({ gameName: j }),
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
                          (0, i.jsx)(g.Z, {}),
                          (0, i.jsx)('div', {
                              className: L.gameArt,
                              style: { backgroundImage: 'url("'.concat(y, '")') }
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
                      description: O ? Z.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_DESCRIPTION_NUX_COMPLETED : Z.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_DESCRIPTION,
                      button: D,
                      children: (0, i.jsx)(g.Z, {})
                  })),
        (0, i.jsxs)(S.Z, {
            ref: v,
            onScroll: I,
            children: [
                s,
                (0, i.jsx)(f.Z, {
                    children: (0, i.jsx)(A.ZP, {
                        width: u,
                        onUpdatePage: P,
                        paddingHorizontal: h,
                        paddingVertical: E,
                        variant: m
                    })
                })
            ]
        })
    );
});
