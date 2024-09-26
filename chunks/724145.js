n.d(t, {
    Z: function () {
        return k;
    }
});
var r = n(47120);
var i = n(627341);
var a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(278074),
    c = n(442837),
    d = n(524437),
    _ = n(481060),
    E = n(153867),
    f = n(230711),
    h = n(351773),
    p = n(607070),
    m = n(100527),
    I = n(906732),
    T = n(639119),
    g = n(197115),
    S = n(587446),
    A = n(594174),
    v = n(626135),
    N = n(74538),
    O = n(238302),
    R = n(514361),
    C = n(572397),
    y = n(705262),
    L = n(981631),
    b = n(921944),
    D = n(474936),
    M = n(689938),
    P = n(748020);
let U = () =>
        (0, a.jsx)('div', {
            className: P.editorHeader,
            children: (0, a.jsxs)('div', {
                className: P.bannerUpsell,
                children: [
                    (0, a.jsx)(S.Z, { className: P.premiumIcon }),
                    (0, a.jsx)(_.Heading, {
                        variant: 'heading-md/bold',
                        color: 'always-white',
                        children: M.Z.Messages.CLIENT_THEMES_EDITOR_UPSELL_HEADER
                    })
                ]
            })
        }),
    w = (e) => {
        let { markAsDismissed: t } = e,
            n = (0, C.q)(),
            r = () => {
                null != t && t(b.L.DISMISS), n(L.rMx.CLIENT_THEME_PREVIEW_CLOSED), (0, O.Mo)();
            };
        return (0, a.jsxs)('div', {
            className: P.editorHeader,
            children: [
                (0, a.jsx)(_.Clickable, {
                    className: P.closeCircleButton,
                    onClick: r,
                    children: (0, a.jsx)(_.CircleXIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: P.closeCircle
                    })
                }),
                (0, a.jsx)(_.Heading, {
                    variant: 'heading-lg/extrabold',
                    children: M.Z.Messages.CLIENT_THEMES_EDITOR_HEADER
                })
            ]
        });
    },
    x = (e) => {
        var t, n, r;
        let { onSubscribeSuccess: i, markAsDismissed: o } = e,
            { analyticsLocations: s } = (0, I.ZP)(m.Z.CLIENT_THEMES_EDITOR),
            [l, u] = (0, c.Wu)([A.default, R.Z], () => [R.Z.gradientPreset, N.ZP.isPremium(A.default.getCurrentUser())]),
            f = (0, T.N)(),
            h = (0, N.Rt)({
                intervalType: null == f ? void 0 : null === (t = f.subscription_trial) || void 0 === t ? void 0 : t.interval,
                intervalCount: null == f ? void 0 : null === (n = f.subscription_trial) || void 0 === n ? void 0 : n.interval_count
            }),
            p = (e) => {
                if (!e) return;
                if ((null == i || i(), null != o && o(b.L.PRIMARY), null != l))
                    (0, y.Yk)({
                        isPersisted: !0,
                        themeName: d.Us[l.id],
                        analyticsLocations: s
                    }),
                        (0, E.ZI)({
                            backgroundGradientPresetId: l.id,
                            theme: l.theme
                        });
            };
        return (0, a.jsx)(g.Z, {
            size: _.Button.Sizes.MEDIUM,
            buttonText: u ? M.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE : (null == f ? void 0 : null === (r = f.subscription_trial) || void 0 === r ? void 0 : r.sku_id) === D.Si.TIER_2 ? h : M.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL,
            subscriptionTier: D.Si.TIER_2,
            onSubscribeModalClose: p
        });
    },
    G = (e) => {
        let { markAsDismissed: t } = e,
            { isPreview: n, isCoachmark: r } = (0, c.cj)([R.Z], () => ({
                isPreview: R.Z.isPreview,
                isCoachmark: R.Z.isCoachmark
            })),
            [i, s] = o.useState(!1),
            l = (0, C.q)(),
            d = () => {
                null != t && t(b.L.DISMISS), l(L.rMx.CLIENT_THEME_PREVIEW_CLOSED), (0, O.Mo)(), !r && f.Z.open();
            },
            E = (0, u.EQ)({
                isPreview: n,
                isCoachmark: r,
                forceShowCloseButton: i
            })
                .with({ isCoachmark: !0 }, { forceShowCloseButton: !0 }, () => M.Z.Messages.CLOSE)
                .with({ isPreview: !0 }, () => M.Z.Messages.CLIENT_THEMES_EDITOR_EXIT_PREVIEW)
                .otherwise(() => M.Z.Messages.CLIENT_THEMES_EDITOR_RETURN_TO_SETTINGS);
        return (0, a.jsxs)('div', {
            className: P.editorFooter,
            children: [
                n &&
                    (0, a.jsx)(x, {
                        onSubscribeSuccess: () => {
                            s(!0);
                        },
                        markAsDismissed: t
                    }),
                (0, a.jsx)(_.Button, {
                    className: P.footerButton,
                    onClick: d,
                    color: _.Button.Colors.PRIMARY,
                    size: _.Button.Sizes.MEDIUM,
                    children: E
                })
            ]
        });
    };
function k(e) {
    let { markAsDismissed: t } = e,
        { analyticsLocations: n } = (0, I.ZP)(m.Z.CLIENT_THEMES_EDITOR),
        {
            isPreview: r,
            isCoachmark: i,
            isEditorOpen: s,
            shouldEditorAnimate: u
        } = (0, c.cj)([R.Z, p.Z], () => ({
            isPreview: R.Z.isPreview,
            isCoachmark: R.Z.isCoachmark,
            isEditorOpen: R.Z.isEditorOpen,
            shouldEditorAnimate: R.Z.isCoachmark && !p.Z.useReducedMotion
        })),
        d = (0, C.q)();
    o.useEffect(() => d(L.rMx.CLIENT_THEME_PREVIEW_VIEWED), [d]),
        o.useEffect(() => {
            if (!!r)
                v.default.track(L.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: D.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                    location_stack: n
                });
        }, [r, n]);
    let E = (0, C.J)(),
        f = (0, h.Z)(null, r ? E : L.dG4);
    return (
        o.useEffect(() => {
            if (!!r && !s) return E;
        }, [r, s, E]),
        (0, a.jsx)(I.Gt, {
            value: n,
            children: (0, a.jsx)('div', {
                ref: f,
                className: l()(P.themeEditor, u ? P.editorAnimate : null),
                children: (0, a.jsxs)(_.HeadingLevel, {
                    children: [
                        i ? (0, a.jsx)(U, {}) : (0, a.jsx)(w, { markAsDismissed: t }),
                        (0, a.jsx)(_.Scroller, {
                            className: P.editorBody,
                            children: (0, a.jsxs)(y.ZP, {
                                type: y.yH.EDITOR,
                                children: [!r && (0, a.jsx)(y.ZP.Basic, { className: P.selectionGroup }), (0, a.jsx)(y.ZP.Gradient, { className: P.selectionGroup })]
                            })
                        }),
                        (0, a.jsx)(G, { markAsDismissed: t })
                    ]
                })
            })
        })
    );
}
