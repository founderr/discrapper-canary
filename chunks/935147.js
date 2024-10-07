t.d(s, {
    Z: function () {
        return H;
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
    E = t(335131),
    T = t(597688),
    S = t(1870),
    I = t(884697),
    N = t(175756),
    A = t(104494),
    C = t(639119),
    m = t(31590),
    g = t(81245),
    h = t(629654),
    O = t(53691),
    p = t(165583),
    R = t(197115),
    x = t(267717),
    M = t(350327),
    f = t(996073),
    D = t(25990),
    L = t(626135),
    P = t(74538),
    b = t(296810),
    Z = t(433411),
    v = t(532432),
    j = t(504983),
    B = t(134795),
    U = t(513901),
    G = t(451392),
    F = t(649700),
    y = t(981631),
    V = t(474936),
    Y = t(526761),
    k = t(689938),
    w = t(232335);
function H(e) {
    var s, t;
    let { user: i } = e,
        H = P.ZP.isPremium(i),
        {
            pendingAvatar: W,
            pendingThemeColors: K,
            tryItOutThemeColors: z,
            tryItOutAvatar: Q,
            tryItOutBanner: X,
            tryItOutProfileEffectId: q,
            tryItOutAvatarDecoration: J
        } = (0, o.cj)([D.Z], () => {
            let e = D.Z.getAllPending(),
                s = D.Z.getErrors(),
                t = D.Z.getAllTryItOut();
            return {
                ...e,
                ...t,
                errors: s
            };
        }),
        $ = (0, N.Z)(q),
        ee = a.useRef(null);
    (0, f.Z)(ee, Y.Y_.TRY_IT_OUT);
    let { analyticsLocations: es, sourceAnalyticsLocations: et } = (0, u.ZP)(_.Z.USER_SETTINGS_TRY_OUT_PREMIUM),
        en = (e) => {
            if (e && ((0, c.I5)(Q), (0, M.z5)(z), (0, M.ho)(X), null != J)) {
                let e = T.Z.getProduct(J.skuId);
                null != e && (0, I.G1)(e) ? (0, E.fK)(e.skuId).then(() => (0, c.cV)(J)) : null != S.Z.getPurchase(J.skuId) && (0, c.cV)(J);
            }
        };
    a.useEffect(() => {
        L.default.track(y.rMx.PREMIUM_UPSELL_VIEWED, {
            type: V.cd.PREMIUM_PROFILE_TRY_IT_OUT,
            location: { page: y.ZY5.USER_SETTINGS },
            location_stack: et
        });
    }, [et, i]);
    let ea = (null === (t = (0, C.N)()) || void 0 === t ? void 0 : null === (s = t.subscription_trial) || void 0 === s ? void 0 : s.sku_id) === V.Si.TIER_2,
        ei = (0, A.Ng)(),
        er = (0, A.Wp)(ei, V.Si.TIER_2),
        eo = 'TryOutPremiumSection';
    (0, d.j)({
        location: eo + ' auto on',
        autoTrackExposure: !0
    }),
        (0, d.j)({
            location: eo + ' auto off',
            autoTrackExposure: !1
        });
    let el = (0, g.Mu)('TryOutPremiumSection'),
        { enabled: ec } = m.Z.useExperiment({ location: 'UserSettingsProfileCustomization' }, { autoTrackExposure: !1 });
    return (0, n.jsx)(u.Gt, {
        value: es,
        children: (0, n.jsxs)(j.Z, {
            ref: ee,
            className: w.tryItOutSection,
            type: j.Y.PREMIUM,
            isShown: !0,
            hasBackground: !0,
            children: [
                (0, n.jsx)(b.Z, {
                    layoutClassName: w.tryItOutLayout,
                    previewTitle: (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(l.NitroWheelIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: w.premiumIcon
                            }),
                            k.Z.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_PREVIEW
                        ]
                    }),
                    profilePreview: (0, n.jsxs)(n.Fragment, {
                        children: [ec && (0, n.jsx)(h.Z, {}), (0, n.jsx)(F.Z, { user: i })]
                    }),
                    children: (0, n.jsxs)('div', {
                        className: w.editor,
                        children: [
                            (0, n.jsxs)('div', {
                                children: [
                                    (0, n.jsx)(l.Heading, {
                                        variant: 'heading-xl/extrabold',
                                        children: k.Z.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_HEADER
                                    }),
                                    (0, n.jsx)(l.Text, {
                                        className: w.description,
                                        variant: 'text-sm/normal',
                                        children: k.Z.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_DESCRIPTION
                                    })
                                ]
                            }),
                            (0, n.jsx)(G.Z, {
                                className: w.customizationSection,
                                user: i,
                                pendingAvatar: null != Q ? Q : W,
                                pendingColors: null != z ? z : K,
                                onThemeColorsChange: M.rf,
                                showPremiumIcon: !1,
                                preventDisabled: !0
                            }),
                            (0, n.jsx)(B.Z, {
                                className: w.customizationSection,
                                isTryItOutFlow: !0,
                                showRemoveBannerButton: null != X,
                                onBannerChange: M.f4,
                                showPremiumIcon: !1
                            }),
                            (0, n.jsx)(v.Z, {
                                className: w.customizationSection,
                                isTryItOutFlow: !0,
                                onAvatarChange: M.c_,
                                showRemoveAvatarButton: !1,
                                changeAvatarButtonText: k.Z.Messages.USER_SETTINGS_ADD_ANIMATED_AVATAR,
                                sectionTitle: k.Z.Messages.PREMIUM_TIER_0_FEATURE_AVATAR
                            }),
                            (0, n.jsx)(
                                Z.Z,
                                {
                                    isTryItOutFlow: !0,
                                    className: w.customizationSection,
                                    user: i,
                                    sectionTitle: k.Z.Messages.USER_SETTINGS_AVATAR_DECORATION
                                },
                                'decoration'
                            ),
                            (0, n.jsx)(
                                U.Z,
                                {
                                    className: w.customizationSection,
                                    isTryItOutFlow: !0,
                                    initialSelectedEffectId: $,
                                    user: i,
                                    sectionTitle: k.Z.Messages.USER_SETTINGS_PROFILE_EFFECT
                                },
                                'effect'
                            ),
                            !ea &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)(l.Text, {
                                            variant: 'text-sm/normal',
                                            className: r()({ [w.premiumPerksListTitle]: !el }),
                                            children: k.Z.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_ALSO_INCLUDES
                                        }),
                                        !el &&
                                            (0, n.jsx)(R.Z, {
                                                onSubscribeModalClose: en,
                                                subscriptionTier: V.Si.TIER_2,
                                                className: w.premiumSubscribeButton,
                                                size: l.Button.Sizes.MEDIUM,
                                                buttonText: H ? k.Z.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_UPGRADE : er ? k.Z.Messages.PREMIUM_DISCOUNT_CTA.format({ percent: null == ei ? void 0 : ei.discount.amount }) : k.Z.Messages.PREMIUM_UPSELL_GET_NITRO
                                            })
                                    ]
                                })
                        ]
                    })
                }),
                el &&
                    (0, n.jsx)(O.p, {
                        onSubscribeModalClose: en,
                        className: w.floatingUpsell,
                        showUpsell: !0,
                        text: k.Z.Messages.PREMIUM_UPSELL_PROFILE_TRY_IT_OUT_UPSELL.format({ onClick: () => (0, x.openPremiumTryItOutProfileUpsell)(en) }),
                        button: k.Z.Messages.PREMIUM_UPSELL_GET_NITRO,
                        position: 'inline',
                        showShadow: !1
                    }),
                ea &&
                    (0, n.jsxs)('div', {
                        children: [
                            (0, n.jsx)('div', { className: w.premiumTier2Divider }),
                            (0, n.jsx)(p.ZP, {
                                type: V.cd.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                                subscriptionTier: V.Si.TIER_2
                            })
                        ]
                    })
            ]
        })
    });
}
