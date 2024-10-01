t.d(s, {
    Z: function () {
        return V;
    }
});
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(442837),
    l = t(481060),
    c = t(809206),
    d = t(634894),
    _ = t(100527),
    u = t(906732),
    E = t(175756),
    T = t(104494),
    S = t(639119),
    I = t(31590),
    N = t(81245),
    A = t(629654),
    C = t(53691),
    m = t(165583),
    g = t(197115),
    h = t(267717),
    O = t(350327),
    p = t(996073),
    R = t(25990),
    x = t(626135),
    f = t(74538),
    M = t(296810),
    D = t(433411),
    L = t(532432),
    P = t(504983),
    b = t(134795),
    Z = t(513901),
    v = t(451392),
    j = t(649700),
    B = t(981631),
    U = t(474936),
    G = t(526761),
    F = t(689938),
    y = t(232335);
function V(e) {
    var s, t;
    let { user: i } = e,
        V = f.ZP.isPremium(i),
        {
            pendingAvatar: Y,
            pendingThemeColors: k,
            tryItOutThemeColors: w,
            tryItOutAvatar: H,
            tryItOutBanner: W,
            tryItOutProfileEffectId: K
        } = (0, o.cj)([R.Z], () => {
            let e = R.Z.getAllPending(),
                s = R.Z.getErrors(),
                t = R.Z.getAllTryItOut();
            return {
                ...e,
                ...t,
                errors: s
            };
        }),
        z = (0, E.Z)(K),
        Q = a.useRef(null);
    (0, p.Z)(Q, G.Y_.TRY_IT_OUT);
    let { analyticsLocations: X, sourceAnalyticsLocations: q } = (0, u.ZP)(_.Z.USER_SETTINGS_TRY_OUT_PREMIUM);
    a.useEffect(() => {
        x.default.track(B.rMx.PREMIUM_UPSELL_VIEWED, {
            type: U.cd.PREMIUM_PROFILE_TRY_IT_OUT,
            location: { page: B.ZY5.USER_SETTINGS },
            location_stack: q
        });
    }, [q, i]);
    let J = (null === (t = (0, S.N)()) || void 0 === t ? void 0 : null === (s = t.subscription_trial) || void 0 === s ? void 0 : s.sku_id) === U.Si.TIER_2,
        $ = (0, T.Ng)(),
        ee = (0, T.Wp)($, U.Si.TIER_2),
        es = 'TryOutPremiumSection';
    (0, d.j)({
        location: es + ' auto on',
        autoTrackExposure: !0
    }),
        (0, d.j)({
            location: es + ' auto off',
            autoTrackExposure: !1
        });
    let et = (0, N.Mu)('TryOutPremiumSection'),
        { enabled: en } = I.Z.useExperiment({ location: 'UserSettingsProfileCustomization' }, { autoTrackExposure: !1 });
    return (0, n.jsx)(u.Gt, {
        value: X,
        children: (0, n.jsxs)(P.Z, {
            ref: Q,
            className: y.tryItOutSection,
            type: P.Y.PREMIUM,
            isShown: !0,
            hasBackground: !0,
            children: [
                (0, n.jsx)(M.Z, {
                    layoutClassName: y.tryItOutLayout,
                    previewTitle: (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(l.NitroWheelIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: y.premiumIcon
                            }),
                            F.Z.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_PREVIEW
                        ]
                    }),
                    profilePreview: (0, n.jsxs)(n.Fragment, {
                        children: [en && (0, n.jsx)(A.Z, {}), (0, n.jsx)(j.Z, { user: i })]
                    }),
                    children: (0, n.jsxs)('div', {
                        className: y.editor,
                        children: [
                            (0, n.jsxs)('div', {
                                children: [
                                    (0, n.jsx)(l.Heading, {
                                        variant: 'heading-xl/extrabold',
                                        children: F.Z.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_HEADER
                                    }),
                                    (0, n.jsx)(l.Text, {
                                        className: y.description,
                                        variant: 'text-sm/normal',
                                        children: F.Z.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_DESCRIPTION
                                    })
                                ]
                            }),
                            (0, n.jsx)(v.Z, {
                                className: y.customizationSection,
                                user: i,
                                pendingAvatar: null != H ? H : Y,
                                pendingColors: null != w ? w : k,
                                onThemeColorsChange: O.rf,
                                showPremiumIcon: !1,
                                preventDisabled: !0
                            }),
                            (0, n.jsx)(b.Z, {
                                className: y.customizationSection,
                                isTryItOutFlow: !0,
                                showRemoveBannerButton: null != W,
                                onBannerChange: O.f4,
                                showPremiumIcon: !1
                            }),
                            (0, n.jsx)(L.Z, {
                                className: y.customizationSection,
                                isTryItOutFlow: !0,
                                onAvatarChange: O.c_,
                                showRemoveAvatarButton: !1,
                                changeAvatarButtonText: F.Z.Messages.USER_SETTINGS_ADD_ANIMATED_AVATAR,
                                sectionTitle: F.Z.Messages.PREMIUM_TIER_0_FEATURE_AVATAR
                            }),
                            (0, n.jsx)(
                                D.Z,
                                {
                                    isTryItOutFlow: !0,
                                    className: y.customizationSection,
                                    user: i,
                                    sectionTitle: F.Z.Messages.USER_SETTINGS_AVATAR_DECORATION
                                },
                                'decoration'
                            ),
                            (0, n.jsx)(
                                Z.Z,
                                {
                                    className: y.customizationSection,
                                    isTryItOutFlow: !0,
                                    initialSelectedEffectId: z,
                                    user: i,
                                    sectionTitle: F.Z.Messages.USER_SETTINGS_PROFILE_EFFECT
                                },
                                'effect'
                            ),
                            !J &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)(l.Text, {
                                            variant: 'text-sm/normal',
                                            className: r()({ [y.premiumPerksListTitle]: !et }),
                                            children: F.Z.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_ALSO_INCLUDES
                                        }),
                                        !et &&
                                            (0, n.jsx)(g.Z, {
                                                onSubscribeModalClose: (e) => {
                                                    e && ((0, c.I5)(H), (0, O.g_)(W), (0, O.z5)(w));
                                                },
                                                subscriptionTier: U.Si.TIER_2,
                                                className: y.premiumSubscribeButton,
                                                size: l.Button.Sizes.MEDIUM,
                                                buttonText: V ? F.Z.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_UPGRADE : ee ? F.Z.Messages.PREMIUM_DISCOUNT_CTA.format({ percent: null == $ ? void 0 : $.discount.amount }) : F.Z.Messages.PREMIUM_UPSELL_GET_NITRO
                                            })
                                    ]
                                })
                        ]
                    })
                }),
                J &&
                    (0, n.jsxs)('div', {
                        children: [
                            (0, n.jsx)('div', { className: y.premiumTier2Divider }),
                            (0, n.jsx)(m.ZP, {
                                type: U.cd.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                                subscriptionTier: U.Si.TIER_2
                            })
                        ]
                    }),
                et &&
                    (0, n.jsx)(C.p, {
                        className: y.floatingUpsell,
                        showUpsell: !0,
                        text: F.Z.Messages.PREMIUM_UPSELL_PROFILE_TRY_IT_OUT_UPSELL.format({ onClick: h.openPremiumTryItOutProfileUpsell }),
                        button: F.Z.Messages.PREMIUM_UPSELL_GET_NITRO,
                        position: 'inline',
                        showShadow: !1
                    })
            ]
        })
    });
}
