n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(143927),
    o = n(481060),
    c = n(100527),
    d = n(970606),
    u = n(963202),
    _ = n(650461),
    h = n(603839),
    E = n(648113),
    m = n(17845),
    I = n(374939),
    g = n(283293),
    p = n(84615),
    T = n(207796),
    S = n(895068),
    f = n(308083),
    C = n(689938),
    N = n(641388);
function A(e) {
    let { showPickGameButton: t, showAdminGuildPicker: n, inGlobalDiscovery: s } = e,
        { guilds: l } = (0, u.C3)({
            location: 'ClanDiscoveryContentCtaContent',
            includeConverted: !1
        }),
        [E, m] = a.useState(() => {
            var e;
            let t = new Set(_.ZP.getGuildIds());
            for (let e of l) if (t.has(e.id)) return e.id;
            return null === (e = l[0]) || void 0 === e ? void 0 : e.id;
        }),
        I = a.useMemo(
            () =>
                l.map((e) => ({
                    value: e.id,
                    label: e.name
                })),
            [l]
        ),
        g = n && l.length > 0,
        S = a.useCallback(() => {
            (0, d._9)({
                guildId: E,
                location: s ? c.Z.GLOBAL_DISCOVERY : c.Z.CLAN_DISCOVERY
            }),
                (0, p.q4)(
                    (e) => {
                        let { closeLayer: t } = e;
                        return (0, i.jsx)(h.Z, {
                            onClose: t,
                            guildId: E
                        });
                    },
                    { layerKey: f.Pv }
                );
        }, [E, s]),
        A = a.useMemo(
            () =>
                t
                    ? (0, i.jsx)('div', {
                          children: (0, i.jsxs)(o.Button, {
                              look: o.ButtonLooks.FILLED,
                              size: o.ButtonSizes.LARGE,
                              color: g ? o.ButtonColors.TRANSPARENT : o.ButtonColors.BRAND,
                              className: N.heroButton,
                              innerClassName: N.heroButtonInner,
                              onClick: () => {
                                  (0, d.GS)({ location: s ? c.Z.GLOBAL_DISCOVERY : c.Z.CLAN_DISCOVERY }), (0, T.fH)(T.v0.GET_STARTED);
                              },
                              children: [
                                  (0, i.jsx)(o.Text, {
                                      variant: 'text-md/medium',
                                      color: 'none',
                                      children: C.Z.Messages.CLAN_DISCOVERY_UPSELL_USER_CTA
                                  }),
                                  (0, i.jsx)(o.ArrowSmallRightIcon, { color: 'currentColor' })
                              ]
                          })
                      })
                    : null,
            [t, g, s]
        ),
        v = a.useMemo(
            () =>
                n && l.length > 0
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              l.length > 0 &&
                                  (0, i.jsx)(o.SearchableSelect, {
                                      className: N.upsellSelect,
                                      value: E,
                                      options: I,
                                      onChange: m
                                  }),
                              (0, i.jsx)('div', {
                                  children: (0, i.jsx)(o.Button, {
                                      look: o.ButtonLooks.FILLED,
                                      size: o.ButtonSizes.MEDIUM,
                                      color: o.ButtonColors.BRAND,
                                      className: N.heroButton,
                                      onClick: S,
                                      children: (0, i.jsx)(o.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'always-white',
                                          children: C.Z.Messages.CLAN_DISCOVERY_UPSELL_ADMIN_LIST_SERVER
                                      })
                                  })
                              })
                          ]
                      })
                    : null,
            [n, l.length, I, E, S]
        );
    return (0, i.jsxs)('div', {
        className: r()(N.contentCtaContainer, { [N.contentCtaContainerSpacing]: !s }),
        children: [v, A]
    });
}
t.Z = a.memo(function (e) {
    let { width: t, paddingVertical: n = 16, paddingHorizontal: s = 32, variant: r = S.Bj.DEFAULT, onScroll: c, withAdminContent: d = !1, inGlobalDiscovery: u } = e,
        _ = a.useRef(null),
        h = (0, T.GN)((e) => e.completedNux, l.Z),
        p = a.useCallback(() => {
            var e;
            null === (e = _.current) || void 0 === e || e.scrollToTop();
        }, []),
        f = a.useMemo(
            () =>
                (0, i.jsx)(A, {
                    inGlobalDiscovery: u,
                    showPickGameButton: !h,
                    showAdminGuildPicker: d
                }),
            [h, d, u]
        ),
        v = (0, E.C)();
    return (0, i.jsxs)(g.Z, {
        ref: _,
        onScroll: c,
        children: [
            (0, i.jsx)(m.Z, {
                title: (0, i.jsx)(o.Text, {
                    className: N.globalDiscoveryTitle,
                    variant: 'display-lg',
                    color: 'header-primary',
                    children: C.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_TITLE_2.format({})
                }),
                description: h ? C.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_DESCRIPTION_NUX_COMPLETED : C.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_DESCRIPTION,
                button: f,
                className: v
            }),
            (0, i.jsx)(I.Z, {
                children: (0, i.jsx)(S.ZP, {
                    width: t,
                    onUpdatePage: p,
                    paddingHorizontal: s,
                    paddingVertical: n,
                    variant: r
                })
            })
        ]
    });
});
