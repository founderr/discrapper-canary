n.d(t, {
    Z: function () {
        return x;
    },
    _: function () {
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
    _ = n(481060),
    E = n(230711),
    f = n(351773),
    h = n(100527),
    p = n(94795),
    m = n(327943),
    I = n(539873),
    T = n(207164),
    g = n(238302),
    S = n(514361),
    A = n(572397),
    v = n(705262),
    N = n(436774),
    O = n(768762),
    R = n(197115),
    C = n(727939),
    y = n(981631),
    b = n(921944),
    L = n(474936),
    D = n(689938),
    M = n(556120);
function P() {
    let e = (0, A.q)();
    return (
        s.useEffect(() => ((0, g.Kq)(), e(y.rMx.CLIENT_THEME_PREVIEW_VIEWED), () => e(y.rMx.CLIENT_THEME_PREVIEW_CLOSED)), [e]),
        (0, o.jsx)(v.ZP, {
            type: v.yH.EDITOR,
            children: (0, o.jsx)(v.ZP.BasicAndGradient, { isEditor: !0 })
        })
    );
}
function U() {
    let e = (0, T.Z)();
    return (
        s.useEffect(() => {
            (0, p.nJ)(), e();
        }, [e]),
        (0, o.jsx)(I.Z, { isEditor: !0 })
    );
}
function w(e) {
    let { tab: t, isPreview: r, isCoachmark: i, onClose: a } = e,
        l = s.useCallback(() => {
            a(), !i && E.Z.open();
        }, [a, i]),
        d = (0, c.EQ)({
            isPreview: r,
            isCoachmark: i
        })
            .with({ isCoachmark: !0 }, () => D.Z.Messages.CLOSE)
            .with({ isPreview: !0 }, () => D.Z.Messages.CLIENT_THEMES_EDITOR_EXIT_PREVIEW)
            .otherwise(() => D.Z.Messages.CLIENT_THEMES_EDITOR_RETURN_TO_SETTINGS),
        f = s.useCallback(() => {
            if (1 === t) {
                (0, _.openModalLazy)(async () => {
                    let { default: e } = await n.e('69052').then(n.bind(n, 184250));
                    return (t) =>
                        (0, o.jsx)(e, {
                            analyticsSource: h.Z.APP_ICON_EDITOR,
                            analyticsLocation: { section: y.jXE.SETTINGS_APP_ICONS },
                            ...t
                        });
                });
                return;
            }
            if (0 === t) {
                (0, _.openModalLazy)(async () => {
                    let { default: e } = await n.e('68192').then(n.bind(n, 742234));
                    return (t) =>
                        (0, o.jsx)(e, {
                            analyticsSource: h.Z.CLIENT_THEMES_EDITOR,
                            analyticsLocation: { section: y.jXE.SETTINGS_CLIENT_THEMES },
                            ...t
                        });
                });
                return;
            }
        }, [t]);
    return (0, o.jsxs)('div', {
        className: M.footerContainer,
        children: [
            r &&
                (0, o.jsxs)('div', {
                    className: M.footerLabelContainer,
                    children: [
                        (0, o.jsx)(_.NitroWheelIcon, {
                            className: M.footerNitro,
                            size: 'xs',
                            color: N.JX.PREMIUM_TIER_2
                        }),
                        (0, o.jsx)(_.Text, {
                            className: M.footerText,
                            variant: 'text-sm/medium',
                            children: D.Z.Messages.PREMIUM_UPSELL_MAKE_DISCORD_YOURS.format({ onClick: f })
                        })
                    ]
                }),
            (0, o.jsxs)('div', {
                className: M.footerButtonContainer,
                children: [
                    (0, o.jsx)('div', {
                        children: (0, o.jsx)(_.Button, {
                            className: u()(M.footerButton, M.footerButtonBack),
                            color: _.ButtonColors.PRIMARY,
                            size: _.Button.Sizes.NONE,
                            onClick: l,
                            'aria-label': d,
                            children: (0, o.jsx)(O.Z, { direction: O.Z.Directions.LEFT })
                        })
                    }),
                    r &&
                        (0, o.jsx)(R.Z, {
                            className: M.footerButton,
                            subscriptionTier: L.Si.TIER_2,
                            showGradient: !0,
                            fullWidth: !0,
                            buttonText: D.Z.Messages.PREMIUM_UPSELL_GET_NITRO
                        })
                ]
            })
        ]
    });
}
function x(e) {
    let { initialTab: t, markAsDismissed: n } = e,
        [r, i] = s.useState(t),
        a = s.useMemo(
            () => [
                {
                    name: D.Z.Messages.THEME,
                    value: 0
                },
                {
                    name: D.Z.Messages.USER_SETTINGS_APPEARANCE_IN_APP_ICON_TITLE,
                    value: 1
                }
            ],
            []
        ),
        l = (0, d.e7)([S.Z], () => S.Z.isPreview),
        u = (0, d.e7)([m.Z], () => m.Z.isUpsellPreview),
        c = l || u,
        E = (0, A.J)(),
        h = s.useCallback(() => {
            l && E(), u && (0, p.O7)();
        }, [l, u, E]),
        I = (0, f.Z)(null, c ? h : y.dG4),
        T = s.useCallback(() => {
            (0, p.G8)(), (0, g.Mo)(), h(), null == n || n(b.L.DISMISS);
        }, [h, n]);
    return (0, o.jsx)(C.Z, {
        className: M.draggableContainer,
        children: (0, o.jsxs)('div', {
            ref: I,
            className: M.container,
            children: [
                (0, o.jsxs)('div', {
                    className: M.headerParentContainer,
                    children: [
                        (0, o.jsxs)('div', {
                            className: M.headerContainer,
                            children: [
                                (0, o.jsx)(_.Heading, {
                                    variant: 'heading-lg/extrabold',
                                    children: D.Z.Messages.PREMIUM_UPSELL_FEATURE_CLIENT_THEMES_APP_ICONS_PREVIEW_TITLE
                                }),
                                (0, o.jsx)(_.ModalCloseButton, {
                                    className: M.closeContainer,
                                    innerClassName: M.closeInner,
                                    withCircleBackground: !0,
                                    onClick: T
                                })
                            ]
                        }),
                        (0, o.jsx)(_.SegmentedControl, {
                            options: a,
                            value: r,
                            onChange: (e) => {
                                let { value: t } = e;
                                return i(t);
                            },
                            look: 'pill'
                        })
                    ]
                }),
                (0, o.jsxs)(_.Scroller, {
                    className: M.scrollContainer,
                    children: [0 === r && (0, o.jsx)(P, {}), 1 === r && (0, o.jsx)(U, {})]
                }),
                (0, o.jsx)(w, {
                    tab: r,
                    isPreview: c,
                    onClose: T,
                    isCoachmark: !1
                })
            ]
        })
    });
}
!(function (e) {
    (e[(e.CLIENT_THEMES = 0)] = 'CLIENT_THEMES'), (e[(e.APP_ICONS = 1)] = 'APP_ICONS');
})(r || (r = {}));
