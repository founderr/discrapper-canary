n(47120);
var i = n(200651),
    r = n(192379),
    l = n(782690),
    a = n(442837),
    s = n(481060),
    o = n(100527),
    c = n(970606),
    d = n(963202),
    u = n(650461),
    h = n(603839),
    m = n(322665),
    p = n(17845),
    g = n(374939),
    f = n(233374),
    _ = n(283293),
    E = n(216742),
    I = n(84615),
    C = n(889711),
    v = n(229893),
    S = n(931515),
    N = n(702646),
    T = n(207796),
    x = n(782322),
    A = n(895068),
    b = n(308083),
    Z = n(388032),
    y = n(641388);
function L(e) {
    let { showPickGameButton: t, showAdminGuildPicker: n } = e,
        { guilds: l } = (0, d.C3)({
            location: 'ClanDiscoveryContentCtaContent',
            includeConverted: !1
        }),
        [a, m] = r.useState(() => {
            var e;
            let t = new Set(u.ZP.getGuildIds());
            for (let e of l) if (t.has(e.id)) return e.id;
            return null === (e = l[0]) || void 0 === e ? void 0 : e.id;
        }),
        p = r.useMemo(
            () =>
                l.map((e) => ({
                    value: e.id,
                    label: e.name
                })),
            [l]
        ),
        g = n && l.length > 0,
        f = r.useCallback(() => {
            (0, c.aN)({
                guildId: a,
                location: o.Z.GLOBAL_DISCOVERY
            }),
                (0, I.q4)(
                    (e) => {
                        let { closeLayer: t } = e;
                        return (0, i.jsx)(h.Z, {
                            onClose: t,
                            guildId: a
                        });
                    },
                    { layerKey: b.Pv }
                );
        }, [a]),
        _ = r.useMemo(
            () =>
                t
                    ? (0, i.jsx)('div', {
                          children: (0, i.jsxs)(s.Button, {
                              look: s.ButtonLooks.FILLED,
                              size: s.ButtonSizes.LARGE,
                              color: g ? s.ButtonColors.TRANSPARENT : s.ButtonColors.BRAND,
                              className: y.heroButton,
                              innerClassName: y.heroButtonInner,
                              onClick: () => {
                                  (0, c.GS)({ location: o.Z.GLOBAL_DISCOVERY }), (0, T.fH)(T.v0.GET_STARTED);
                              },
                              children: [
                                  (0, i.jsx)(s.Text, {
                                      variant: 'text-md/medium',
                                      color: 'none',
                                      children: Z.intl.string(Z.t.s8EDLC)
                                  }),
                                  (0, i.jsx)(s.ArrowSmallRightIcon, { color: 'currentColor' })
                              ]
                          })
                      })
                    : null,
            [t, g]
        ),
        E = r.useMemo(
            () =>
                n && l.length > 0
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              l.length > 0 &&
                                  (0, i.jsx)(s.SearchableSelect, {
                                      className: y.upsellSelect,
                                      value: a,
                                      options: p,
                                      onChange: m
                                  }),
                              (0, i.jsx)('div', {
                                  children: (0, i.jsx)(s.Button, {
                                      look: s.ButtonLooks.FILLED,
                                      size: s.ButtonSizes.MEDIUM,
                                      color: s.ButtonColors.BRAND,
                                      className: y.heroButton,
                                      onClick: f,
                                      children: (0, i.jsx)(s.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'always-white',
                                          children: Z.intl.string(Z.t.ZA9f19)
                                      })
                                  })
                              })
                          ]
                      })
                    : null,
            [n, l.length, p, a, f]
        );
    return (0, i.jsxs)('div', {
        className: y.contentCtaContainer,
        children: [E, _]
    });
}
t.Z = r.memo(function (e) {
    let t,
        { width: n, paddingVertical: o = 16, paddingHorizontal: c = 32, variant: u = A.Bj.DEFAULT, onScroll: h, withAdminContent: I = !1 } = e,
        { enabled: b } = (0, E.I7)(),
        R = r.useRef(null),
        j = r.useRef(null),
        O = (0, T.GN)((e) => e.completedNux, l.Z),
        P = (0, T.GN)((e) => e.entrypointGameId, l.Z),
        [D, M] = r.useState(null),
        { backgroundImageUrl: w, gameName: k } = (0, S.kN)(P),
        U = r.useCallback(() => {
            var e, t, n;
            if (!b) return;
            let i = null === (e = R.current) || void 0 === e ? void 0 : e.getBoundingClientRect().top,
                r = null !== (n = null === (t = j.current) || void 0 === t ? void 0 : t.getScrollerState().scrollTop) && void 0 !== n ? n : 0;
            null != i && D !== i && M(i + r);
        }, [D, b]);
    r.useEffect(() => {
        if (!b) return;
        let e = (0, C.pP)(U);
        return (0, C.YP)(e, document.body), () => (0, C.UC)(e, document.body);
    }, [b, U]);
    let G = r.useCallback(() => {
            var e, t;
            b && null != D
                ? null === (e = j.current) ||
                  void 0 === e ||
                  e.scrollTo({
                      to: D - 64,
                      animate: !1
                  })
                : null === (t = j.current) || void 0 === t || t.scrollToTop();
        }, [D, b]),
        B = r.useMemo(
            () =>
                (0, i.jsx)(L, {
                    showPickGameButton: !O,
                    showAdminGuildPicker: I
                }),
            [O, I]
        ),
        H = (0, a.e7)([v.Z], () => v.Z.getSavedGuilds().length),
        V = r.useMemo(
            () => [
                {
                    id: T.v0.DISCOVERY,
                    label: Z.intl.string(Z.t.Gw35HR)
                },
                {
                    id: T.v0.SAVED_GUILDS,
                    label: Z.intl.string(Z.t['WK/pEh']),
                    count: H
                }
            ],
            [H]
        ),
        F = (0, T.GN)((e) => e.mode, l.Z),
        { enableClanCreation: z } = (0, d.C3)({
            location: 'ClanDiscoveryContent',
            includeConverted: !0
        }),
        Y = (0, T.GN)((e) => e.dismissedPilotAdminNux),
        W = r.useMemo(() => !z || Y, [Y, z]);
    return (
        (t =
            null != P && null != k
                ? (0, i.jsxs)(p.Z, {
                      title: Z.intl.formatToPlainString(Z.t.kYjB7e, { gameName: k }),
                      description: Z.intl.format(Z.t.PwNiSE, { gameName: k }),
                      button: (0, i.jsx)(s.Button, {
                          className: y.heroButton,
                          innerClassName: y.heroButtonInner,
                          look: s.ButtonLooks.FILLED,
                          size: s.ButtonSizes.MEDIUM,
                          color: s.ButtonColors.WHITE,
                          onClick: () => (0, T.fH)(T.v0.PREFERENCES),
                          children: (0, i.jsx)(s.Text, {
                              variant: 'text-md/medium',
                              color: 'none',
                              children: Z.intl.string(Z.t['SfO+xs'])
                          })
                      }),
                      children: [
                          (0, i.jsx)(m.Z, {}),
                          (0, i.jsx)('div', {
                              className: y.gameArt,
                              style: { backgroundImage: 'url("'.concat(w, '")') }
                          }),
                          (0, i.jsx)('div', { className: y.imageBackdrop })
                      ]
                  })
                : b
                  ? (0, i.jsx)(x.Z, {})
                  : (0, i.jsx)(p.Z, {
                        title: Z.intl.format(Z.t['l8D/Oz'], {}),
                        description: O ? Z.intl.string(Z.t.JWBE0d) : Z.intl.string(Z.t['b+qgxc']),
                        button: B,
                        children: (0, i.jsx)(m.Z, {})
                    })),
        (0, i.jsxs)(_.Z, {
            ref: j,
            onScroll: h,
            children: [
                t,
                (0, i.jsxs)(g.Z, {
                    children: [
                        W &&
                            (0, i.jsxs)('div', {
                                className: y.contentTabs,
                                ref: R,
                                children: [
                                    (0, i.jsx)(f.Z, {
                                        tabs: V,
                                        onTabSelect: T.fH,
                                        selectedTab: F
                                    }),
                                    F !== T.v0.SAVED_GUILDS && (0, i.jsx)(N.C, {})
                                ]
                            }),
                        (0, i.jsx)(A.ZP, {
                            width: n,
                            onUpdatePage: G,
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
