n.d(t, {
    Yk: function () {
        return Z;
    },
    yH: function () {
        return r;
    }
}),
    n(627341),
    n(47120);
var r,
    i,
    a = n(200651),
    s = n(192379),
    o = n(120356),
    l = n.n(o),
    u = n(278074),
    c = n(442837),
    d = n(524437),
    f = n(481060),
    _ = n(153867),
    p = n(607070),
    h = n(100527),
    m = n(906732),
    g = n(313201),
    E = n(540059),
    v = n(98278),
    I = n(639119),
    T = n(311476),
    b = n(165583),
    S = n(587446),
    y = n(210887),
    A = n(740492),
    N = n(626135),
    C = n(238302),
    R = n(514361),
    O = n(583901),
    D = n(469115),
    L = n(981631),
    x = n(474936),
    w = n(874893),
    P = n(526761),
    M = n(231338),
    k = n(388032),
    U = n(392971);
((i = r || (r = {})).EDITOR = 'EDITOR'), (i.SETTINGS = 'SETTINGS');
let B = Object.freeze({
        EDITOR: P.fy.SLOW_USER_ACTION,
        SETTINGS: P.fy.INFREQUENT_USER_ACTION
    }),
    G = s.createContext({}),
    Z = (e) => {
        let { isPersisted: t, themeName: n, analyticsLocations: r } = e;
        N.default.track(L.rMx.CLIENT_THEME_UPDATED, {
            feature_name: x.QP.CLIENT_THEME,
            theme_name: n,
            is_persisted: t,
            location_stack: r
        });
    },
    F = (e) => {
        let { type: t, isPreview: n, isCoachmark: r } = e,
            { enabled: i } = T.Z.useExperiment(
                { location: 'GradientSelectorsTitle' },
                {
                    autoTrackExposure: !1,
                    disable: !n
                }
            ),
            s = (0, u.EQ)({
                type: t,
                isPreview: n,
                isCoachmark: r,
                appearanceUpsellExperimentEnabled: i
            })
                .with(
                    {
                        type: 'EDITOR',
                        isCoachmark: !0,
                        isPreview: !0
                    },
                    () => k.intl.string(k.t.D29k19)
                )
                .with(
                    {
                        type: 'EDITOR',
                        isCoachmark: !0
                    },
                    () => k.intl.string(k.t['8+vbqa'])
                )
                .with({ appearanceUpsellExperimentEnabled: !0 }, () => k.intl.string(k.t.Ksh3io))
                .otherwise(() => k.intl.string(k.t.OCOOiI));
        return (0, a.jsxs)('div', {
            className: U.title,
            children: [
                (0, a.jsx)(f.Heading, {
                    'aria-label': s,
                    variant: 'text-md/medium',
                    children: s
                }),
                (!i || 'EDITOR' === t) && (0, a.jsx)(S.Z, { className: U.premiumIcon })
            ]
        });
    },
    V = (e) => {
        var t, n;
        let { type: r, isPreview: i, isCoachmark: s } = e,
            o = (null === (n = (0, I.N)()) || void 0 === n ? void 0 : null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === x.Si.TIER_2,
            { enabled: l } = T.Z.useExperiment(
                { location: 'GradientSelectorsTitle' },
                {
                    autoTrackExposure: !1,
                    disable: !i
                }
            );
        if (o && i) return null;
        let c = (0, u.EQ)({
            type: r,
            isPreview: i,
            isCoachmark: s
        })
            .with(
                {
                    type: 'EDITOR',
                    isPreview: !0
                },
                () => k.intl.format(k.t.G8yQXl, { onPremiumClick: () => v.z })
            )
            .with(
                {
                    type: 'EDITOR',
                    isCoachmark: !0
                },
                () => k.intl.string(k.t.jmZiNj)
            )
            .with(
                {
                    type: 'EDITOR',
                    isPreview: !1
                },
                () => k.intl.string(k.t.dqDFwc)
            )
            .with({ isPreview: !0 }, () => k.intl.format(k.t.DWIjJy, { onPremiumClick: () => v.z }))
            .otherwise(() => k.intl.string(k.t['np0X/v']));
        return l
            ? (0, a.jsxs)('div', {
                  className: U.description,
                  children: [
                      (0, a.jsx)(f.NitroWheelIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: U.nitroWheel
                      }),
                      (0, a.jsx)(f.Heading, {
                          variant: 'text-sm/normal',
                          children: k.intl.format(k.t.x2dQxM, {
                              onClick: () => {
                                  (0, v.$)();
                              }
                          })
                      })
                  ]
              })
            : (0, a.jsx)(f.Heading, {
                  variant: 'text-sm/normal',
                  children: c
              });
    },
    j = (e) => {
        var t, n;
        let { renderCTAButtons: r } = e,
            { type: i } = s.useContext(G),
            [o, l] = (0, c.Wu)([R.Z], () => [R.Z.isPreview, R.Z.isCoachmark]),
            u = (null === (n = (0, I.N)()) || void 0 === n ? void 0 : null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === x.Si.TIER_2;
        return (0, a.jsx)(a.Fragment, {
            children:
                'EDITOR' === i && o && u
                    ? (0, a.jsx)(b.ZP, {
                          type: x.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                          subscriptionTier: x.Si.TIER_2,
                          children: k.intl.format(k.t.G8yQXl, { onPremiumClick: () => v.z })
                      })
                    : (0, a.jsxs)('div', {
                          className: U.header,
                          children: [
                              (0, a.jsxs)('div', {
                                  className: U.headings,
                                  children: [
                                      (0, a.jsx)(F, {
                                          type: i,
                                          isPreview: o,
                                          isCoachmark: l
                                      }),
                                      (0, a.jsx)(V, {
                                          type: i,
                                          isPreview: o,
                                          isCoachmark: l
                                      })
                                  ]
                              }),
                              null == r ? void 0 : r()
                          ]
                      })
        });
    },
    H = (e) => {
        let { disabled: t } = e,
            { type: r, delay: i } = s.useContext(G),
            { analyticsLocations: o } = (0, m.ZP)(h.Z.CLIENT_THEMES_THEME_SELECTOR),
            [l, u] = (0, c.Wu)([R.Z], () => {
                var e;
                return [R.Z.isPreview, null === (e = R.Z.gradientPreset) || void 0 === e ? void 0 : e.id];
            }),
            [g, E] = s.useState(!1),
            [v, I] = s.useState(-1),
            b = (0, c.e7)([p.Z], () => p.Z.useReducedMotion);
        s.useEffect(() => {
            ((v === D.XV.length - 2 && 'EDITOR' === r) || u === d.Us.EASTER_EGG) && E(!0);
        }, [v, r, u]);
        let { enabled: S } = T.Z.useExperiment({ location: 'useGradientSelectors' }, { autoTrackExposure: !1 }),
            y = (e, t) => {
                if (
                    ((0, C.zO)(e.id),
                    Z({
                        isPersisted: !l,
                        analyticsLocations: o,
                        themeName: d.Us[e.id]
                    }),
                    l && 'SETTINGS' === r && S)
                ) {
                    (0, f.openModalLazy)(
                        async () => {
                            let { default: e } = await n.e('68192').then(n.bind(n, 742234));
                            return (t) =>
                                (0, a.jsx)(e, {
                                    analyticsSource: h.Z.CLIENT_THEMES_THEME_SELECTOR,
                                    analyticsLocation: {
                                        section: L.jXE.SETTINGS_APPEARANCE_THEME_PICKER,
                                        object: L.qAy.BUTTON_ICON
                                    },
                                    ...t,
                                    onClose: () => ((0, C.kj)(), t.onClose())
                                });
                        },
                        { onCloseCallback: C.kj }
                    );
                    return;
                }
                if (
                    ((0, _.ZI)(
                        {
                            backgroundGradientPresetId: e.id,
                            theme: e.theme,
                            useSystemTheme: l ? w.K.OFF : void 0
                        },
                        i
                    ),
                    null != t)
                ) {
                    if ((g && E(!1), t <= v || 0 === t)) {
                        I(0);
                        return;
                    }
                    I((e) => e + 1);
                }
            };
        return (0, a.jsxs)(a.Fragment, {
            children: [
                D.XV.filter((e) => {
                    let { id: t } = e;
                    return t !== d.Us.EASTER_EGG;
                }).map((e, n) =>
                    (0, a.jsx)(
                        O.DR,
                        {
                            preset: e,
                            isSelected: u === e.id,
                            onSelect: () => y(e, n),
                            disabled: t,
                            tabIndex: 0 !== n || t ? void 0 : 0,
                            showBadge: !1,
                            showLockedBadge: 'SETTINGS' === r && S && l
                        },
                        e.id
                    )
                ),
                (() => {
                    if (!g) return null;
                    let e = D.qt[d.Us.EASTER_EGG];
                    if (null == e) return null;
                    async function t() {
                        let { default: e } = await n.e('5217').then(n.t.bind(n, 801048, 19));
                        return e;
                    }
                    return (0, a.jsxs)('div', {
                        className: U.easterEggSelection,
                        children: [
                            (0, a.jsx)(O.DR, {
                                preset: e,
                                isSelected: u === d.Us.EASTER_EGG,
                                onSelect: () => y(e)
                            }),
                            (0, a.jsx)(f.LottieAnimation, {
                                importData: t,
                                shouldAnimate: !b,
                                className: U.sparkles
                            })
                        ]
                    });
                })()
            ]
        });
    },
    Y = (e) => {
        let { systemSelectorFirst: t, hideSystemSelector: n = !1 } = e,
            { delay: r } = s.useContext(G),
            { analyticsLocations: i } = (0, m.ZP)(h.Z.CLIENT_THEMES_THEME_SELECTOR),
            [o, l, u] = (0, c.Wu)([y.Z, A.ZP, R.Z], () => [y.Z.theme, null == R.Z.gradientPreset, A.ZP.useSystemTheme === w.K.ON]),
            d = (e) => {
                (0, C.xs)(),
                    Z({
                        isPersisted: !0,
                        analyticsLocations: i,
                        themeName: 'default '.concat(e)
                    }),
                    (0, _.ZI)({ theme: e }, r);
            },
            f = (0, E.Q)('appearance_settings');
        return (0, a.jsxs)(a.Fragment, {
            children: [
                !n &&
                    t &&
                    (0, a.jsx)(O.bD, {
                        theme: 'system',
                        isSelected: l && u,
                        onSelect: () => d('system')
                    }),
                (0, a.jsx)(O.bD, {
                    theme: M.BR.LIGHT,
                    isSelected: l && !u && o === M.BR.LIGHT,
                    onSelect: () => d(M.BR.LIGHT)
                }),
                (0, a.jsx)(O.bD, {
                    theme: M.BR.DARK,
                    isSelected: l && !u && o === M.BR.DARK,
                    onSelect: () => d(M.BR.DARK)
                }),
                f &&
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(O.bD, {
                                theme: M.BR.DARKER,
                                isSelected: l && !u && o === M.BR.DARKER,
                                onSelect: () => d(M.BR.DARKER)
                            }),
                            (0, a.jsx)(O.bD, {
                                theme: M.BR.MIDNIGHT,
                                isSelected: l && !u && o === M.BR.MIDNIGHT,
                                onSelect: () => d(M.BR.MIDNIGHT)
                            })
                        ]
                    }),
                !n &&
                    !t &&
                    (0, a.jsx)(O.bD, {
                        theme: 'system',
                        isSelected: l && u,
                        onSelect: () => d('system')
                    })
            ]
        });
    },
    W = (e) => {
        let { type: t, children: n } = e,
            r = (0, g.Dt)(),
            i = (0, f.useRadioGroup)({
                orientation: 'horizontal',
                labelledBy: r
            }),
            o = s.useMemo(
                () => ({
                    type: t,
                    delay: B[t]
                }),
                [t]
            );
        return (0, a.jsx)(G.Provider, {
            value: o,
            children: (0, a.jsx)('div', {
                ...i,
                className: U.__invalid_container,
                children: n
            })
        });
    };
(W.Basic = (e) => {
    let { className: t, hideSystemSelector: n } = e;
    return (0, a.jsx)('section', {
        className: l()(U.presets, t),
        children: (0, a.jsx)(Y, { hideSystemSelector: n })
    });
}),
    (W.Gradient = (e) => {
        let { className: t, renderCTAButtons: n, disabled: r = !1 } = e;
        return (0, a.jsxs)('section', {
            className: t,
            children: [
                (0, a.jsx)(j, { renderCTAButtons: n }),
                (0, a.jsx)('div', {
                    className: U.presets,
                    children: (0, a.jsx)(H, { disabled: r })
                })
            ]
        });
    }),
    (W.BasicAndGradient = (e) => {
        let { isEditor: t, className: n, renderCTAButtons: r } = e,
            i = (0, c.e7)([R.Z], () => R.Z.isCoachmark);
        return (0, a.jsxs)('section', {
            className: n,
            children: [
                !t && (0, a.jsx)(j, { renderCTAButtons: r }),
                t &&
                    i &&
                    (0, a.jsx)(f.Heading, {
                        className: U.upsellText,
                        variant: 'heading-sm/semibold',
                        children: k.intl.string(k.t.POSLGR)
                    }),
                (0, a.jsxs)('div', {
                    className: l()(U.presets, { [U.presetsJustify]: t }),
                    children: [(0, a.jsx)(Y, { systemSelectorFirst: !0 }), (0, a.jsx)(H, { disabled: !1 })]
                })
            ]
        });
    }),
    (t.ZP = W);
