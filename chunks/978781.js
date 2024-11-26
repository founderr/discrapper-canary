n.d(t, {
    Z: function () {
        return M;
    },
    _: function () {
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
    d = n(481060),
    f = n(230711),
    _ = n(351773),
    p = n(100527),
    h = n(94795),
    m = n(327943),
    g = n(539873),
    E = n(207164),
    v = n(238302),
    I = n(514361),
    T = n(572397),
    b = n(705262),
    S = n(436774),
    y = n(768762),
    A = n(197115),
    N = n(727939),
    C = n(981631),
    R = n(921944),
    O = n(474936),
    D = n(388032),
    L = n(860768);
function x() {
    let e = (0, T.q)();
    return (
        s.useEffect(() => ((0, v.Kq)(), e(C.rMx.CLIENT_THEME_PREVIEW_VIEWED), () => e(C.rMx.CLIENT_THEME_PREVIEW_CLOSED)), [e]),
        (0, a.jsx)(b.ZP, {
            type: b.yH.EDITOR,
            children: (0, a.jsx)(b.ZP.BasicAndGradient, { isEditor: !0 })
        })
    );
}
function w() {
    let e = (0, E.Z)();
    return (
        s.useEffect(() => {
            (0, h.nJ)(), e();
        }, [e]),
        (0, a.jsx)(g.Z, { isEditor: !0 })
    );
}
function P(e) {
    let { tab: t, isPreview: r, isCoachmark: i, onClose: o } = e,
        c = s.useCallback(() => {
            o(), !i && f.Z.open();
        }, [o, i]),
        _ = (0, u.EQ)({
            isPreview: r,
            isCoachmark: i
        })
            .with({ isCoachmark: !0 }, () => D.intl.string(D.t.cpT0Cg))
            .with({ isPreview: !0 }, () => D.intl.string(D.t['dqH+qq']))
            .otherwise(() => D.intl.string(D.t.Olc2Ky)),
        h = s.useCallback(() => {
            if (1 === t) {
                (0, d.openModalLazy)(async () => {
                    let { default: e } = await n.e('69052').then(n.bind(n, 184250));
                    return (t) =>
                        (0, a.jsx)(e, {
                            analyticsSource: p.Z.APP_ICON_EDITOR,
                            analyticsLocation: { section: C.jXE.SETTINGS_APP_ICONS },
                            ...t
                        });
                });
                return;
            }
            if (0 === t) {
                (0, d.openModalLazy)(async () => {
                    let { default: e } = await n.e('68192').then(n.bind(n, 742234));
                    return (t) =>
                        (0, a.jsx)(e, {
                            analyticsSource: p.Z.CLIENT_THEMES_EDITOR,
                            analyticsLocation: { section: C.jXE.SETTINGS_CLIENT_THEMES },
                            ...t
                        });
                });
                return;
            }
        }, [t]);
    return (0, a.jsxs)('div', {
        className: L.footerContainer,
        children: [
            r &&
                (0, a.jsxs)('div', {
                    className: L.footerLabelContainer,
                    children: [
                        (0, a.jsx)(d.NitroWheelIcon, {
                            className: L.footerNitro,
                            size: 'xs',
                            color: S.JX.PREMIUM_TIER_2
                        }),
                        (0, a.jsx)(d.Text, {
                            className: L.footerText,
                            variant: 'text-sm/medium',
                            children: D.intl.format(D.t.x2dQxM, { onClick: h })
                        })
                    ]
                }),
            (0, a.jsxs)('div', {
                className: L.footerButtonContainer,
                children: [
                    (0, a.jsx)('div', {
                        children: (0, a.jsx)(d.Button, {
                            className: l()(L.footerButton, L.footerButtonBack),
                            color: d.ButtonColors.PRIMARY,
                            size: d.Button.Sizes.NONE,
                            onClick: c,
                            'aria-label': _,
                            children: (0, a.jsx)(y.Z, { direction: y.Z.Directions.LEFT })
                        })
                    }),
                    r &&
                        (0, a.jsx)(A.Z, {
                            className: L.footerButton,
                            subscriptionTier: O.Si.TIER_2,
                            showGradient: !0,
                            fullWidth: !0,
                            buttonText: D.intl.string(D.t.pj0XBA)
                        })
                ]
            })
        ]
    });
}
function M(e) {
    let { initialTab: t, markAsDismissed: n } = e,
        [r, i] = s.useState(t),
        o = s.useMemo(
            () => [
                {
                    name: D.intl.string(D.t.Ksh3io),
                    value: 0
                },
                {
                    name: D.intl.string(D.t.RPh2oq),
                    value: 1
                }
            ],
            []
        ),
        l = (0, c.e7)([I.Z], () => I.Z.isPreview),
        u = (0, c.e7)([m.Z], () => m.Z.isUpsellPreview),
        f = l || u,
        p = (0, T.J)(),
        g = s.useCallback(() => {
            l && p(), u && (0, h.O7)();
        }, [l, u, p]),
        E = (0, _.Z)(null, f ? g : C.dG4),
        b = s.useCallback(() => {
            (0, h.G8)(), (0, v.Mo)(), g(), null == n || n(R.L.DISMISS);
        }, [g, n]);
    return (0, a.jsx)(N.Z, {
        className: L.draggableContainer,
        children: (0, a.jsxs)('div', {
            ref: E,
            className: L.container,
            children: [
                (0, a.jsxs)('div', {
                    className: L.headerParentContainer,
                    children: [
                        (0, a.jsxs)('div', {
                            className: L.headerContainer,
                            children: [
                                (0, a.jsx)(d.Heading, {
                                    variant: 'heading-lg/extrabold',
                                    children: D.intl.string(D.t.viGN6e)
                                }),
                                (0, a.jsx)(d.ModalCloseButton, {
                                    className: L.closeContainer,
                                    innerClassName: L.closeInner,
                                    withCircleBackground: !0,
                                    onClick: b
                                })
                            ]
                        }),
                        (0, a.jsx)(d.SegmentedControl, {
                            options: o,
                            value: r,
                            onChange: (e) => {
                                let { value: t } = e;
                                return i(t);
                            },
                            look: 'pill'
                        })
                    ]
                }),
                (0, a.jsxs)(d.Scroller, {
                    className: L.scrollContainer,
                    children: [0 === r && (0, a.jsx)(x, {}), 1 === r && (0, a.jsx)(w, {})]
                }),
                (0, a.jsx)(P, {
                    tab: r,
                    isPreview: f,
                    onClose: b,
                    isCoachmark: !1
                })
            ]
        })
    });
}
((i = r || (r = {}))[(i.CLIENT_THEMES = 0)] = 'CLIENT_THEMES'), (i[(i.APP_ICONS = 1)] = 'APP_ICONS');
