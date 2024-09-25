t.d(n, {
    Z: function () {
        return N;
    }
});
var o = t(735250),
    r = t(470079),
    a = t(120356),
    i = t.n(a),
    c = t(442837),
    l = t(780384),
    s = t(481060),
    d = t(100527),
    u = t(906732),
    p = t(600164),
    _ = t(963249),
    f = t(639119),
    m = t(165583),
    g = t(263954),
    h = t(706454),
    b = t(709586),
    S = t(626135),
    I = t(930153),
    E = t(74538),
    P = t(937615),
    T = t(981631),
    x = t(474936),
    M = t(689938),
    y = t(75115);
function v(e) {
    let { shouldUpsellFromNoneTier: n } = e,
        t = (0, c.e7)([h.default], () => h.default.locale);
    return (0, o.jsxs)('div', {
        className: y.perksList,
        children: [
            (0, o.jsx)(g.Z, {
                icon: b.Z,
                iconClassName: y.perkIconGuild,
                description: M.Z.Messages.PREMIUM_UPSELL_FEATURE_FREE_GUILD_SUBSCRIPTION.format({ numFreeGuildSubscriptions: x.cb })
            }),
            (0, o.jsx)(g.Z, {
                icon: b.Z,
                iconClassName: y.perkIconGuild,
                description: M.Z.Messages.PREMIUM_UPSELL_FEATURE_GUILD_SUBSCRIPTION_DISCOUNT.format({ percent: (0, I.T3)(t, x.Rr / 100) })
            }),
            n
                ? (0, o.jsx)(g.Z, {
                      icon: s.ReactionIcon,
                      iconClassName: y.perkIconChatPerks,
                      description: M.Z.Messages.PREMIUM_UPSELL_FEATURE_CHAT_PERKS
                  })
                : null,
            (0, o.jsx)(g.Z, {
                icon: s.ScreenArrowIcon,
                iconClassName: y.perkIconStream,
                description: M.Z.Messages.PREMIUM_UPSELL_FEATURE_STREAM
            }),
            (0, o.jsx)(g.Z, {
                icon: s.UploadIcon,
                iconClassName: y.perkIconUpload,
                description: M.Z.Messages.PREMIUM_UPSELL_FEATURE_UPLOAD
            })
        ]
    });
}
function N(e) {
    var n;
    let { premiumSubscriptionPlan: t, onClose: a, onBack: c, onSkip: g, onSubscriptionConfirmation: h, analyticsLocation: b, analyticsSourceLocation: I, priceOptions: N } = e,
        { analyticsLocations: C, sourceAnalyticsLocations: R } = (0, u.ZP)(d.Z.GUILD_BOOSTING_PREMIUM_UPSELL),
        { theme: A } = (0, s.useThemeContext)(),
        L = (0, l.ap)(A) ? s.Button.Colors.PRIMARY : s.Button.Colors.WHITE,
        k = null == t || null == t.premiumSubscriptionType,
        O = E.ZP.getPrice(x.Xh.PREMIUM_MONTH_TIER_2, !1, !1, N),
        w = (0, P.T4)(O.amount, O.currency),
        U = (0, f.N)(),
        D = null == U ? void 0 : U.trial_id,
        B = (null == U ? void 0 : null === (n = U.subscription_trial) || void 0 === n ? void 0 : n.sku_id) === x.Si.TIER_2;
    return (
        r.useEffect(() => {
            S.default.track(T.rMx.PREMIUM_UPSELL_VIEWED, {
                type: x.cd.GUILD_PREMIUM_UPSELL_MODAL,
                location_stack: R
            });
        }, [R]),
        (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsxs)(s.ModalContent, {
                    className: y.content,
                    children: [
                        (0, o.jsx)(s.ModalCloseButton, {
                            onClick: a,
                            className: y.closeButton
                        }),
                        B && (0, o.jsx)(m.dz, { className: y.premiumTrialBadge }),
                        (0, o.jsx)('div', { className: i()(y.upsellImage, { [y.upsellImageWithTrialOffer]: B }) }),
                        (0, o.jsx)('div', {
                            className: y.bodyText,
                            children: null != D ? M.Z.Messages.PREMIUM_UPSELL_FEATURE_PRETEXT_TRIAL_VARIANT : M.Z.Messages.PREMIUM_UPSELL_FEATURE_PRETEXT.format({ monthlyPrice: w })
                        }),
                        (0, o.jsx)(v, { shouldUpsellFromNoneTier: k })
                    ]
                }),
                (0, o.jsxs)(s.ModalFooter, {
                    align: p.Z.Align.CENTER,
                    justify: p.Z.Justify.END,
                    children: [
                        (0, o.jsxs)('div', {
                            className: y.footerRight,
                            children: [
                                (0, o.jsx)(s.Button, {
                                    look: s.Button.Looks.LINK,
                                    color: L,
                                    onClick: g,
                                    children: M.Z.Messages.PREMIUM_UPSELL_CONTINUE_TO_BOOSTS
                                }),
                                (0, o.jsx)(s.Button, {
                                    color: s.Button.Colors.GREEN,
                                    type: 'submit',
                                    onClick: () => {
                                        a(),
                                            (0, _.Z)({
                                                initialPlanId: null,
                                                subscriptionTier: x.Si.TIER_2,
                                                analyticsLocations: C,
                                                analyticsObject: {
                                                    ...b,
                                                    section: T.jXE.PREMIUM_GUILD_PURCHASE_MODAL
                                                },
                                                analyticsSourceLocation: I,
                                                onSubscriptionConfirmation: h,
                                                trialId: D
                                            });
                                    },
                                    children: null != D ? M.Z.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : M.Z.Messages.PREMIUM_UPSELL_UPGRADE
                                })
                            ]
                        }),
                        (0, o.jsx)('div', {
                            className: y.backStep,
                            children: (0, o.jsx)(s.Button, {
                                color: L,
                                look: s.Button.Looks.LINK,
                                size: s.Button.Sizes.NONE,
                                onClick: () => c(),
                                children: M.Z.Messages.BACK
                            })
                        })
                    ]
                })
            ]
        })
    );
}
