t.d(s, {
    Z: function () {
        return F;
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
    u = t(100527),
    _ = t(906732),
    E = t(588126),
    T = t(175756),
    S = t(104494),
    I = t(639119),
    N = t(81245),
    m = t(53691),
    C = t(165583),
    g = t(197115),
    A = t(350327),
    h = t(996073),
    O = t(25990),
    p = t(626135),
    R = t(74538),
    x = t(296810),
    f = t(921813),
    M = t(433411),
    D = t(532432),
    P = t(504983),
    L = t(134795),
    b = t(513901),
    Z = t(451392),
    v = t(981631),
    j = t(474936),
    B = t(526761),
    U = t(689938),
    G = t(772058);
function F(e) {
    var s, i, F;
    let { user: y } = e,
        { reducedMotion: V } = a.useContext(l.AccessibilityPreferencesContext),
        Y = R.ZP.isPremium(y),
        {
            pendingAvatar: w,
            pendingBanner: k,
            pendingThemeColors: H,
            pendingPronouns: W,
            pendingBio: K,
            tryItOutThemeColors: z,
            tryItOutAvatar: Q,
            tryItOutBanner: X,
            tryItOutAvatarDecoration: q,
            tryItOutProfileEffectId: J
        } = (0, o.cj)([O.Z], () => {
            let e = O.Z.getAllPending(),
                s = O.Z.getErrors(),
                t = O.Z.getAllTryItOut();
            return {
                ...e,
                ...t,
                errors: s
            };
        }),
        $ = (0, E.Z)(q),
        ee = (0, T.Z)(J),
        es = a.useRef(null);
    (0, h.Z)(es, B.Y_.TRY_IT_OUT);
    let { analyticsLocations: et, sourceAnalyticsLocations: en } = (0, _.ZP)(u.Z.USER_SETTINGS_TRY_OUT_PREMIUM);
    a.useEffect(() => {
        p.default.track(v.rMx.PREMIUM_UPSELL_VIEWED, {
            type: j.cd.PREMIUM_PROFILE_TRY_IT_OUT,
            location: { page: v.ZY5.USER_SETTINGS },
            location_stack: en
        });
    }, [en, y]);
    let ea = (null === (i = (0, I.N)()) || void 0 === i ? void 0 : null === (s = i.subscription_trial) || void 0 === s ? void 0 : s.sku_id) === j.Si.TIER_2,
        ei = (0, S.Ng)(),
        er = (0, S.Wp)(ei, j.Si.TIER_2),
        eo = 'TryOutPremiumSection';
    (0, d.j)({
        location: eo + ' auto on',
        autoTrackExposure: !0
    }),
        (0, d.j)({
            location: eo + ' auto off',
            autoTrackExposure: !1
        });
    let el = (0, N.Mu)('TryOutPremiumSection');
    return (0, n.jsx)(_.Gt, {
        value: et,
        children: (0, n.jsxs)(P.Z, {
            ref: es,
            className: G.tryItOutSection,
            type: P.Y.PREMIUM,
            isShown: !0,
            hasBackground: !0,
            children: [
                (0, n.jsx)(x.Z, {
                    layoutClassName: G.tryItOutLayout,
                    previewTitle: (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(l.NitroWheelIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: G.premiumIcon
                            }),
                            U.Z.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_PREVIEW
                        ]
                    }),
                    profilePreview: (0, n.jsx)(f.Z, {
                        user: y,
                        pendingPronouns: W,
                        pendingBio: K,
                        pendingBanner: null !== (F = null != X ? X : k) && void 0 !== F ? F : t(466045),
                        pendingAvatar: null != Q ? Q : w,
                        pendingThemeColors: null != z ? z : H,
                        pendingAvatarDecoration: $,
                        pendingProfileEffectId: ee,
                        avatarClassName: null != Q || null != w || V.enabled ? void 0 : G.spinningAvatar,
                        canUsePremiumCustomization: !0,
                        isTryItOutFlow: !0,
                        hideExampleButton: !0
                    }),
                    children: (0, n.jsxs)('div', {
                        className: G.editor,
                        children: [
                            (0, n.jsxs)('div', {
                                children: [
                                    (0, n.jsx)(l.Heading, {
                                        variant: 'heading-xl/extrabold',
                                        children: U.Z.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_HEADER
                                    }),
                                    (0, n.jsx)(l.Text, {
                                        className: G.description,
                                        variant: 'text-sm/normal',
                                        children: U.Z.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_DESCRIPTION
                                    })
                                ]
                            }),
                            (0, n.jsx)(Z.Z, {
                                className: G.customizationSection,
                                user: y,
                                pendingAvatar: null != Q ? Q : w,
                                pendingColors: null != z ? z : H,
                                onThemeColorsChange: A.rf,
                                showPremiumIcon: !1,
                                preventDisabled: !0
                            }),
                            (0, n.jsx)(L.Z, {
                                className: G.customizationSection,
                                isTryItOutFlow: !0,
                                showRemoveBannerButton: null != X,
                                onBannerChange: A.f4,
                                showPremiumIcon: !1
                            }),
                            (0, n.jsx)(D.Z, {
                                className: G.customizationSection,
                                isTryItOutFlow: !0,
                                onAvatarChange: A.c_,
                                showRemoveAvatarButton: !1,
                                changeAvatarButtonText: U.Z.Messages.USER_SETTINGS_ADD_ANIMATED_AVATAR,
                                sectionTitle: U.Z.Messages.PREMIUM_TIER_0_FEATURE_AVATAR
                            }),
                            (0, n.jsx)(
                                M.Z,
                                {
                                    isTryItOutFlow: !0,
                                    className: G.customizationSection,
                                    user: y,
                                    sectionTitle: U.Z.Messages.USER_SETTINGS_AVATAR_DECORATION
                                },
                                'decoration'
                            ),
                            (0, n.jsx)(
                                b.Z,
                                {
                                    className: G.customizationSection,
                                    isTryItOutFlow: !0,
                                    initialSelectedEffectId: ee,
                                    user: y,
                                    sectionTitle: U.Z.Messages.USER_SETTINGS_PROFILE_EFFECT
                                },
                                'effect'
                            ),
                            !ea &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)(l.Text, {
                                            variant: 'text-sm/normal',
                                            className: r()({ [G.premiumPerksListTitle]: !el }),
                                            children: U.Z.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_ALSO_INCLUDES
                                        }),
                                        !el &&
                                            (0, n.jsx)(g.Z, {
                                                onSubscribeModalClose: (e) => {
                                                    e && ((0, c.I5)(Q), (0, A.g_)(X), (0, A.z5)(z));
                                                },
                                                subscriptionTier: j.Si.TIER_2,
                                                className: G.premiumSubscribeButton,
                                                size: l.Button.Sizes.MEDIUM,
                                                buttonText: Y ? U.Z.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_UPGRADE : er ? U.Z.Messages.PREMIUM_DISCOUNT_CTA.format({ percent: null == ei ? void 0 : ei.discount.amount }) : U.Z.Messages.PREMIUM_UPSELL_GET_NITRO
                                            })
                                    ]
                                })
                        ]
                    })
                }),
                ea &&
                    (0, n.jsxs)('div', {
                        children: [
                            (0, n.jsx)('div', { className: G.premiumTier2Divider }),
                            (0, n.jsx)(C.ZP, {
                                type: j.cd.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                                subscriptionTier: j.Si.TIER_2
                            })
                        ]
                    }),
                el &&
                    (0, n.jsx)(m.p, {
                        className: G.floatingUpsell,
                        showUpsell: !0,
                        text: 'Go all out customizing your profile, only with Nitro',
                        button: U.Z.Messages.PREMIUM_UPSELL_GET_NITRO,
                        position: 'inline',
                        showShadow: !1
                    })
            ]
        })
    });
}
