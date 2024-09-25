n.d(t, {
    Yk: function () {
        return Z;
    },
    yH: function () {
        return r;
    }
});
var r,
    i = n(627341);
var a = n(47120);
var o = n(735250),
    s = n(470079),
    l = n(120356),
    u = n.n(l),
    c = n(278074),
    d = n(442837),
    _ = n(524437),
    E = n(481060),
    f = n(153867),
    h = n(607070),
    p = n(100527),
    m = n(906732),
    I = n(313201),
    T = n(540059),
    g = n(98278),
    S = n(639119),
    A = n(311476),
    v = n(165583),
    N = n(587446),
    O = n(210887),
    R = n(740492),
    C = n(626135),
    y = n(238302),
    b = n(514361),
    L = n(583901),
    D = n(469115),
    M = n(981631),
    P = n(474936),
    U = n(874893),
    w = n(526761),
    x = n(231338),
    G = n(689938),
    k = n(767023);
!(function (e) {
    (e.EDITOR = 'EDITOR'), (e.SETTINGS = 'SETTINGS');
})(r || (r = {}));
let B = Object.freeze({
        EDITOR: w.fy.SLOW_USER_ACTION,
        SETTINGS: w.fy.INFREQUENT_USER_ACTION
    }),
    F = s.createContext({}),
    Z = (e) => {
        let { isPersisted: t, themeName: n, analyticsLocations: r } = e;
        C.default.track(M.rMx.CLIENT_THEME_UPDATED, {
            feature_name: P.QP.CLIENT_THEME,
            theme_name: n,
            is_persisted: t,
            location_stack: r
        });
    },
    V = (e) => {
        let { type: t, isPreview: n, isCoachmark: r } = e,
            { enabled: i } = A.Z.useExperiment(
                { location: 'GradientSelectorsTitle' },
                {
                    autoTrackExposure: !1,
                    disable: !n
                }
            ),
            a = (0, c.EQ)({
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
                    () => G.Z.Messages.CLIENT_THEMES_EDITOR_PREVIEW_A_THEME_HEADER
                )
                .with(
                    {
                        type: 'EDITOR',
                        isCoachmark: !0
                    },
                    () => G.Z.Messages.CLIENT_THEMES_EDITOR_PICK_A_THEME_HEADER
                )
                .with({ appearanceUpsellExperimentEnabled: !0 }, () => G.Z.Messages.THEME)
                .otherwise(() => G.Z.Messages.USER_SETTINGS_APPEARANCE_GRADIENT_THEME_TITLE);
        return (0, o.jsxs)('div', {
            className: k.title,
            children: [
                (0, o.jsx)(E.Heading, {
                    'aria-label': a,
                    variant: 'text-md/medium',
                    children: a
                }),
                (!i || 'EDITOR' === t) && (0, o.jsx)(N.Z, { className: k.premiumIcon })
            ]
        });
    },
    H = (e) => {
        var t, n;
        let { type: r, isPreview: i, isCoachmark: a } = e,
            s = (null === (n = (0, S.N)()) || void 0 === n ? void 0 : null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === P.Si.TIER_2,
            { enabled: l } = A.Z.useExperiment(
                { location: 'GradientSelectorsTitle' },
                {
                    autoTrackExposure: !1,
                    disable: !i
                }
            );
        if (s && i) return null;
        let u = (0, c.EQ)({
            type: r,
            isPreview: i,
            isCoachmark: a
        })
            .with(
                {
                    type: 'EDITOR',
                    isPreview: !0
                },
                () => G.Z.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_PREVIEW_WITH_LINK.format({ onPremiumClick: g.z })
            )
            .with(
                {
                    type: 'EDITOR',
                    isCoachmark: !0
                },
                () => G.Z.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_COACHMARK
            )
            .with(
                {
                    type: 'EDITOR',
                    isPreview: !1
                },
                () => G.Z.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION
            )
            .with({ isPreview: !0 }, () => G.Z.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_WITH_LINK.format({ onPremiumClick: g.z }))
            .otherwise(() => G.Z.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_SETTINGS);
        return l
            ? (0, o.jsxs)('div', {
                  className: k.description,
                  children: [
                      (0, o.jsx)(E.NitroWheelIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: k.nitroWheel
                      }),
                      (0, o.jsx)(E.Heading, {
                          variant: 'text-sm/normal',
                          children: G.Z.Messages.PREMIUM_UPSELL_MAKE_DISCORD_YOURS.format({
                              onClick: () => {
                                  (0, g.$)();
                              }
                          })
                      })
                  ]
              })
            : (0, o.jsx)(E.Heading, {
                  variant: 'text-sm/normal',
                  children: u
              });
    },
    Y = (e) => {
        var t, n;
        let { renderCTAButtons: r } = e,
            { type: i } = s.useContext(F),
            [a, l] = (0, d.Wu)([b.Z], () => [b.Z.isPreview, b.Z.isCoachmark]),
            u = (null === (n = (0, S.N)()) || void 0 === n ? void 0 : null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === P.Si.TIER_2;
        return (0, o.jsx)(o.Fragment, {
            children:
                'EDITOR' === i && a && u
                    ? (0, o.jsx)(v.ZP, {
                          type: P.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                          subscriptionTier: P.Si.TIER_2,
                          children: G.Z.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_PREVIEW_WITH_LINK.format({ onPremiumClick: g.z })
                      })
                    : (0, o.jsxs)('div', {
                          className: k.header,
                          children: [
                              (0, o.jsxs)('div', {
                                  className: k.headings,
                                  children: [
                                      (0, o.jsx)(V, {
                                          type: i,
                                          isPreview: a,
                                          isCoachmark: l
                                      }),
                                      (0, o.jsx)(H, {
                                          type: i,
                                          isPreview: a,
                                          isCoachmark: l
                                      })
                                  ]
                              }),
                              null == r ? void 0 : r()
                          ]
                      })
        });
    },
    j = (e) => {
        let { disabled: t } = e,
            { type: r, delay: i } = s.useContext(F),
            { analyticsLocations: a } = (0, m.ZP)(p.Z.CLIENT_THEMES_THEME_SELECTOR),
            [l, u] = (0, d.Wu)([b.Z], () => {
                var e;
                return [b.Z.isPreview, null === (e = b.Z.gradientPreset) || void 0 === e ? void 0 : e.id];
            }),
            [c, I] = s.useState(!1),
            [T, g] = s.useState(-1),
            S = (0, d.e7)([h.Z], () => h.Z.useReducedMotion);
        s.useEffect(() => {
            ((T === D.XV.length - 2 && 'EDITOR' === r) || u === _.Us.EASTER_EGG) && I(!0);
        }, [T, r, u]);
        let { enabled: v } = A.Z.useExperiment({ location: 'useGradientSelectors' }, { autoTrackExposure: !1 }),
            N = (e, t) => {
                if (
                    ((0, y.zO)(e.id),
                    Z({
                        isPersisted: !l,
                        analyticsLocations: a,
                        themeName: _.Us[e.id]
                    }),
                    l && 'SETTINGS' === r && v)
                ) {
                    (0, E.openModalLazy)(
                        async () => {
                            let { default: e } = await n.e('68192').then(n.bind(n, 742234));
                            return (t) =>
                                (0, o.jsx)(e, {
                                    analyticsSource: p.Z.CLIENT_THEMES_THEME_SELECTOR,
                                    analyticsLocation: {
                                        section: M.jXE.SETTINGS_APPEARANCE_THEME_PICKER,
                                        object: M.qAy.BUTTON_ICON
                                    },
                                    ...t,
                                    onClose: () => ((0, y.kj)(), t.onClose())
                                });
                        },
                        { onCloseCallback: y.kj }
                    );
                    return;
                }
                if (
                    ((0, f.ZI)(
                        {
                            backgroundGradientPresetId: e.id,
                            theme: e.theme,
                            useSystemTheme: l ? U.K.OFF : void 0
                        },
                        i
                    ),
                    null != t)
                ) {
                    if ((c && I(!1), t <= T || 0 === t)) {
                        g(0);
                        return;
                    }
                    g((e) => e + 1);
                }
            },
            O = () => {
                if (!c) return null;
                let e = D.qt[_.Us.EASTER_EGG];
                if (null == e) return null;
                async function t() {
                    let { default: e } = await n.e('5217').then(n.t.bind(n, 801048, 19));
                    return e;
                }
                return (0, o.jsxs)('div', {
                    className: k.easterEggSelection,
                    children: [
                        (0, o.jsx)(L.DR, {
                            preset: e,
                            isSelected: u === _.Us.EASTER_EGG,
                            onSelect: () => N(e)
                        }),
                        (0, o.jsx)(E.LottieAnimation, {
                            importData: t,
                            shouldAnimate: !S,
                            className: k.sparkles
                        })
                    ]
                });
            };
        return (0, o.jsxs)(o.Fragment, {
            children: [
                D.XV.filter((e) => {
                    let { id: t } = e;
                    return t !== _.Us.EASTER_EGG;
                }).map((e, n) =>
                    (0, o.jsx)(
                        L.DR,
                        {
                            preset: e,
                            isSelected: u === e.id,
                            onSelect: () => N(e, n),
                            disabled: t,
                            tabIndex: 0 !== n || t ? void 0 : 0,
                            showBadge: !1,
                            showLockedBadge: 'SETTINGS' === r && v && l
                        },
                        e.id
                    )
                ),
                O()
            ]
        });
    },
    W = (e) => {
        let { className: t, renderCTAButtons: n, disabled: r = !1 } = e;
        return (0, o.jsxs)('section', {
            className: t,
            children: [
                (0, o.jsx)(Y, { renderCTAButtons: n }),
                (0, o.jsx)('div', {
                    className: k.presets,
                    children: (0, o.jsx)(j, { disabled: r })
                })
            ]
        });
    },
    K = (e) => {
        let { systemSelectorFirst: t, hideSystemSelector: n = !1 } = e,
            { delay: r } = s.useContext(F),
            { analyticsLocations: i } = (0, m.ZP)(p.Z.CLIENT_THEMES_THEME_SELECTOR),
            [a, l, u] = (0, d.Wu)([O.Z, R.ZP, b.Z], () => [O.Z.theme, null == b.Z.gradientPreset, R.ZP.useSystemTheme === U.K.ON]),
            c = (e) => {
                (0, y.xs)(),
                    Z({
                        isPersisted: !0,
                        analyticsLocations: i,
                        themeName: 'default '.concat(e)
                    }),
                    (0, f.ZI)({ theme: e }, r);
            },
            _ = (0, T.Q)('appearance_settings');
        return (0, o.jsxs)(o.Fragment, {
            children: [
                !n &&
                    t &&
                    (0, o.jsx)(L.bD, {
                        theme: 'system',
                        isSelected: l && u,
                        onSelect: () => c('system')
                    }),
                (0, o.jsx)(L.bD, {
                    theme: x.BR.LIGHT,
                    isSelected: l && !u && a === x.BR.LIGHT,
                    onSelect: () => c(x.BR.LIGHT)
                }),
                (0, o.jsx)(L.bD, {
                    theme: x.BR.DARK,
                    isSelected: l && !u && a === x.BR.DARK,
                    onSelect: () => c(x.BR.DARK)
                }),
                _ &&
                    (0, o.jsxs)(o.Fragment, {
                        children: [
                            (0, o.jsx)(L.bD, {
                                theme: x.BR.DARKER,
                                isSelected: l && !u && a === x.BR.DARKER,
                                onSelect: () => c(x.BR.DARKER)
                            }),
                            (0, o.jsx)(L.bD, {
                                theme: x.BR.MIDNIGHT,
                                isSelected: l && !u && a === x.BR.MIDNIGHT,
                                onSelect: () => c(x.BR.MIDNIGHT)
                            })
                        ]
                    }),
                !n &&
                    !t &&
                    (0, o.jsx)(L.bD, {
                        theme: 'system',
                        isSelected: l && u,
                        onSelect: () => c('system')
                    })
            ]
        });
    },
    z = (e) => {
        let { className: t, hideSystemSelector: n } = e;
        return (0, o.jsx)('section', {
            className: u()(k.presets, t),
            children: (0, o.jsx)(K, { hideSystemSelector: n })
        });
    },
    q = (e) => {
        let { isEditor: t, className: n, renderCTAButtons: r } = e,
            i = (0, d.e7)([b.Z], () => b.Z.isCoachmark);
        return (0, o.jsxs)('section', {
            className: n,
            children: [
                !t && (0, o.jsx)(Y, { renderCTAButtons: r }),
                t &&
                    i &&
                    (0, o.jsx)(E.Heading, {
                        className: k.upsellText,
                        variant: 'heading-sm/semibold',
                        children: G.Z.Messages.CLIENT_THEMES_EDITOR_UPSELL_HEADER
                    }),
                (0, o.jsxs)('div', {
                    className: u()(k.presets, { [k.presetsJustify]: t }),
                    children: [(0, o.jsx)(K, { systemSelectorFirst: !0 }), (0, o.jsx)(j, { disabled: !1 })]
                })
            ]
        });
    },
    Q = (e) => {
        let { type: t, children: n } = e,
            r = (0, I.Dt)(),
            i = (0, E.useRadioGroup)({
                orientation: 'horizontal',
                labelledBy: r
            }),
            a = s.useMemo(
                () => ({
                    type: t,
                    delay: B[t]
                }),
                [t]
            );
        return (0, o.jsx)(F.Provider, {
            value: a,
            children: (0, o.jsx)('div', {
                ...i,
                className: k.__invalid_container,
                children: n
            })
        });
    };
(Q.Basic = z), (Q.Gradient = W), (Q.BasicAndGradient = q), (t.ZP = Q);
