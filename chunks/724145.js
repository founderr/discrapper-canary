n.d(t, {
    Z: function () {
        return k;
    }
}),
    n(47120),
    n(627341);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(278074),
    l = n(442837),
    u = n(524437),
    c = n(481060),
    d = n(153867),
    f = n(230711),
    _ = n(351773),
    h = n(607070),
    p = n(100527),
    m = n(906732),
    g = n(639119),
    E = n(197115),
    v = n(587446),
    I = n(594174),
    S = n(626135),
    b = n(74538),
    T = n(238302),
    y = n(514361),
    A = n(572397),
    N = n(705262),
    C = n(981631),
    R = n(921944),
    O = n(474936),
    D = n(388032),
    L = n(307696);
let x = () =>
        (0, r.jsx)('div', {
            className: L.editorHeader,
            children: (0, r.jsxs)('div', {
                className: L.bannerUpsell,
                children: [
                    (0, r.jsx)(v.Z, { className: L.premiumIcon }),
                    (0, r.jsx)(c.Heading, {
                        variant: 'heading-md/bold',
                        color: 'always-white',
                        children: D.intl.string(D.t.POSLGR)
                    })
                ]
            })
        }),
    w = (e) => {
        let { markAsDismissed: t } = e,
            n = (0, A.q)();
        return (0, r.jsxs)('div', {
            className: L.editorHeader,
            children: [
                (0, r.jsx)(c.Clickable, {
                    className: L.closeCircleButton,
                    onClick: () => {
                        null != t && t(R.L.DISMISS), n(C.rMx.CLIENT_THEME_PREVIEW_CLOSED), (0, T.Mo)();
                    },
                    children: (0, r.jsx)(c.CircleXIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: L.closeCircle
                    })
                }),
                (0, r.jsx)(c.Heading, {
                    variant: 'heading-lg/extrabold',
                    children: D.intl.string(D.t['xSR+a2'])
                })
            ]
        });
    },
    M = (e) => {
        var t, n, i;
        let { onSubscribeSuccess: a, markAsDismissed: s } = e,
            { analyticsLocations: o } = (0, m.ZP)(p.Z.CLIENT_THEMES_EDITOR),
            [f, _] = (0, l.Wu)([I.default, y.Z], () => [y.Z.gradientPreset, b.ZP.isPremium(I.default.getCurrentUser())]),
            h = (0, g.N)(),
            v = (0, b.Rt)({
                intervalType: null == h ? void 0 : null === (t = h.subscription_trial) || void 0 === t ? void 0 : t.interval,
                intervalCount: null == h ? void 0 : null === (n = h.subscription_trial) || void 0 === n ? void 0 : n.interval_count
            });
        return (0, r.jsx)(E.Z, {
            size: c.Button.Sizes.MEDIUM,
            buttonText: _ ? D.intl.string(D.t.IJI7ys) : (null == h ? void 0 : null === (i = h.subscription_trial) || void 0 === i ? void 0 : i.sku_id) === O.Si.TIER_2 ? v : D.intl.string(D.t.mr4K7O),
            subscriptionTier: O.Si.TIER_2,
            onSubscribeModalClose: (e) => {
                if (!e) return;
                if ((null == a || a(), null != s && s(R.L.PRIMARY), null != f))
                    (0, N.Yk)({
                        isPersisted: !0,
                        themeName: u.Us[f.id],
                        analyticsLocations: o
                    }),
                        (0, d.ZI)({
                            backgroundGradientPresetId: f.id,
                            theme: f.theme
                        });
            }
        });
    },
    P = (e) => {
        let { markAsDismissed: t } = e,
            { isPreview: n, isCoachmark: a } = (0, l.cj)([y.Z], () => ({
                isPreview: y.Z.isPreview,
                isCoachmark: y.Z.isCoachmark
            })),
            [s, u] = i.useState(!1),
            d = (0, A.q)(),
            _ = (0, o.EQ)({
                isPreview: n,
                isCoachmark: a,
                forceShowCloseButton: s
            })
                .with({ isCoachmark: !0 }, { forceShowCloseButton: !0 }, () => D.intl.string(D.t.cpT0Cg))
                .with({ isPreview: !0 }, () => D.intl.string(D.t['dqH+qq']))
                .otherwise(() => D.intl.string(D.t.Olc2Ky));
        return (0, r.jsxs)('div', {
            className: L.editorFooter,
            children: [
                n &&
                    (0, r.jsx)(M, {
                        onSubscribeSuccess: () => {
                            u(!0);
                        },
                        markAsDismissed: t
                    }),
                (0, r.jsx)(c.Button, {
                    className: L.footerButton,
                    onClick: () => {
                        null != t && t(R.L.DISMISS), d(C.rMx.CLIENT_THEME_PREVIEW_CLOSED), (0, T.Mo)(), !a && f.Z.open();
                    },
                    color: c.Button.Colors.PRIMARY,
                    size: c.Button.Sizes.MEDIUM,
                    children: _
                })
            ]
        });
    };
function k(e) {
    let { markAsDismissed: t } = e,
        { analyticsLocations: n } = (0, m.ZP)(p.Z.CLIENT_THEMES_EDITOR),
        {
            isPreview: a,
            isCoachmark: o,
            isEditorOpen: u,
            shouldEditorAnimate: d
        } = (0, l.cj)([y.Z, h.Z], () => ({
            isPreview: y.Z.isPreview,
            isCoachmark: y.Z.isCoachmark,
            isEditorOpen: y.Z.isEditorOpen,
            shouldEditorAnimate: y.Z.isCoachmark && !h.Z.useReducedMotion
        })),
        f = (0, A.q)();
    i.useEffect(() => f(C.rMx.CLIENT_THEME_PREVIEW_VIEWED), [f]),
        i.useEffect(() => {
            if (!!a)
                S.default.track(C.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: O.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                    location_stack: n
                });
        }, [a, n]);
    let g = (0, A.J)(),
        E = (0, _.Z)(null, a ? g : C.dG4);
    return (
        i.useEffect(() => {
            if (!!a && !u) return g;
        }, [a, u, g]),
        (0, r.jsx)(m.Gt, {
            value: n,
            children: (0, r.jsx)('div', {
                ref: E,
                className: s()(L.themeEditor, d ? L.editorAnimate : null),
                children: (0, r.jsxs)(c.HeadingLevel, {
                    children: [
                        o ? (0, r.jsx)(x, {}) : (0, r.jsx)(w, { markAsDismissed: t }),
                        (0, r.jsx)(c.Scroller, {
                            className: L.editorBody,
                            children: (0, r.jsxs)(N.ZP, {
                                type: N.yH.EDITOR,
                                children: [!a && (0, r.jsx)(N.ZP.Basic, { className: L.selectionGroup }), (0, r.jsx)(N.ZP.Gradient, { className: L.selectionGroup })]
                            })
                        }),
                        (0, r.jsx)(P, { markAsDismissed: t })
                    ]
                })
            })
        })
    );
}
