t.d(n, {
    Z: function () {
        return N;
    }
});
var o = t(200651),
    r = t(192379),
    l = t(120356),
    i = t.n(l),
    a = t(442837),
    s = t(780384),
    c = t(481060),
    u = t(100527),
    d = t(906732),
    p = t(600164),
    f = t(963249),
    _ = t(639119),
    m = t(165583),
    S = t(263954),
    E = t(706454),
    h = t(709586),
    g = t(626135),
    I = t(930153),
    T = t(74538),
    P = t(937615),
    M = t(981631),
    C = t(474936),
    b = t(689938),
    x = t(75115);
function v(e) {
    let { shouldUpsellFromNoneTier: n } = e,
        t = (0, a.e7)([E.default], () => E.default.locale);
    return (0, o.jsxs)('div', {
        className: x.perksList,
        children: [
            (0, o.jsx)(S.Z, {
                icon: h.Z,
                iconClassName: x.perkIconGuild,
                description: b.Z.Messages.PREMIUM_UPSELL_FEATURE_FREE_GUILD_SUBSCRIPTION.format({ numFreeGuildSubscriptions: C.cb })
            }),
            (0, o.jsx)(S.Z, {
                icon: h.Z,
                iconClassName: x.perkIconGuild,
                description: b.Z.Messages.PREMIUM_UPSELL_FEATURE_GUILD_SUBSCRIPTION_DISCOUNT.format({ percent: (0, I.T3)(t, C.Rr / 100) })
            }),
            n
                ? (0, o.jsx)(S.Z, {
                      icon: c.ReactionIcon,
                      iconClassName: x.perkIconChatPerks,
                      description: b.Z.Messages.PREMIUM_UPSELL_FEATURE_CHAT_PERKS
                  })
                : null,
            (0, o.jsx)(S.Z, {
                icon: c.ScreenArrowIcon,
                iconClassName: x.perkIconStream,
                description: b.Z.Messages.PREMIUM_UPSELL_FEATURE_STREAM
            }),
            (0, o.jsx)(S.Z, {
                icon: c.UploadIcon,
                iconClassName: x.perkIconUpload,
                description: b.Z.Messages.PREMIUM_UPSELL_FEATURE_UPLOAD
            })
        ]
    });
}
function N(e) {
    var n;
    let { premiumSubscriptionPlan: t, onClose: l, onBack: a, onSkip: S, onSubscriptionConfirmation: E, analyticsLocation: h, analyticsSourceLocation: I, priceOptions: N } = e,
        { analyticsLocations: R, sourceAnalyticsLocations: A } = (0, d.ZP)(u.Z.GUILD_BOOSTING_PREMIUM_UPSELL),
        { theme: y } = (0, c.useThemeContext)(),
        L = (0, s.ap)(y) ? c.Button.Colors.PRIMARY : c.Button.Colors.WHITE,
        k = null == t || null == t.premiumSubscriptionType,
        O = T.ZP.getPrice(C.Xh.PREMIUM_MONTH_TIER_2, !1, !1, N),
        U = (0, P.T4)(O.amount, O.currency),
        D = (0, _.N)(),
        B = null == D ? void 0 : D.trial_id,
        Z = (null == D ? void 0 : null === (n = D.subscription_trial) || void 0 === n ? void 0 : n.sku_id) === C.Si.TIER_2;
    return (
        r.useEffect(() => {
            g.default.track(M.rMx.PREMIUM_UPSELL_VIEWED, {
                type: C.cd.GUILD_PREMIUM_UPSELL_MODAL,
                location_stack: A
            });
        }, [A]),
        (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsxs)(c.ModalContent, {
                    className: x.content,
                    children: [
                        (0, o.jsx)(c.ModalCloseButton, {
                            onClick: l,
                            className: x.closeButton
                        }),
                        Z && (0, o.jsx)(m.dz, { className: x.premiumTrialBadge }),
                        (0, o.jsx)('div', { className: i()(x.upsellImage, { [x.upsellImageWithTrialOffer]: Z }) }),
                        (0, o.jsx)('div', {
                            className: x.bodyText,
                            children: null != B ? b.Z.Messages.PREMIUM_UPSELL_FEATURE_PRETEXT_TRIAL_VARIANT : b.Z.Messages.PREMIUM_UPSELL_FEATURE_PRETEXT.format({ monthlyPrice: U })
                        }),
                        (0, o.jsx)(v, { shouldUpsellFromNoneTier: k })
                    ]
                }),
                (0, o.jsxs)(c.ModalFooter, {
                    align: p.Z.Align.CENTER,
                    justify: p.Z.Justify.END,
                    children: [
                        (0, o.jsxs)('div', {
                            className: x.footerRight,
                            children: [
                                (0, o.jsx)(c.Button, {
                                    look: c.Button.Looks.LINK,
                                    color: L,
                                    onClick: S,
                                    children: b.Z.Messages.PREMIUM_UPSELL_CONTINUE_TO_BOOSTS
                                }),
                                (0, o.jsx)(c.Button, {
                                    color: c.Button.Colors.GREEN,
                                    type: 'submit',
                                    onClick: () => {
                                        l(),
                                            (0, f.Z)({
                                                initialPlanId: null,
                                                subscriptionTier: C.Si.TIER_2,
                                                analyticsLocations: R,
                                                analyticsObject: {
                                                    ...h,
                                                    section: M.jXE.PREMIUM_GUILD_PURCHASE_MODAL
                                                },
                                                analyticsSourceLocation: I,
                                                onSubscriptionConfirmation: E,
                                                trialId: B
                                            });
                                    },
                                    children: null != B ? b.Z.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : b.Z.Messages.PREMIUM_UPSELL_UPGRADE
                                })
                            ]
                        }),
                        (0, o.jsx)('div', {
                            className: x.backStep,
                            children: (0, o.jsx)(c.Button, {
                                color: L,
                                look: c.Button.Looks.LINK,
                                size: c.Button.Sizes.NONE,
                                onClick: () => a(),
                                children: b.Z.Messages.BACK
                            })
                        })
                    ]
                })
            ]
        })
    );
}
