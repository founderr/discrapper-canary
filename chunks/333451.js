t.d(n, {
    Z: function () {
        return k;
    }
});
var o = t(200651),
    r = t(192379),
    i = t(120356),
    l = t.n(i),
    a = t(442837),
    s = t(780384),
    c = t(481060),
    u = t(100527),
    d = t(906732),
    p = t(600164),
    f = t(963249),
    m = t(639119),
    h = t(165583),
    _ = t(263954),
    g = t(706454),
    S = t(709586),
    E = t(626135),
    b = t(930153),
    x = t(74538),
    v = t(937615),
    C = t(981631),
    P = t(474936),
    T = t(388032),
    I = t(75115);
function y(e) {
    let { shouldUpsellFromNoneTier: n } = e,
        t = (0, a.e7)([g.default], () => g.default.locale);
    return (0, o.jsxs)('div', {
        className: I.perksList,
        children: [
            (0, o.jsx)(_.Z, {
                icon: S.Z,
                iconClassName: I.perkIconGuild,
                description: T.intl.formatToPlainString(T.t.sQBgs7, { numFreeGuildSubscriptions: P.cb })
            }),
            (0, o.jsx)(_.Z, {
                icon: S.Z,
                iconClassName: I.perkIconGuild,
                description: T.intl.formatToPlainString(T.t['1A6vXl'], { percent: (0, b.T3)(t, P.Rr / 100) })
            }),
            n
                ? (0, o.jsx)(_.Z, {
                      icon: c.ReactionIcon,
                      iconClassName: I.perkIconChatPerks,
                      description: T.intl.string(T.t.Z9b2x8)
                  })
                : null,
            (0, o.jsx)(_.Z, {
                icon: c.ScreenArrowIcon,
                iconClassName: I.perkIconStream,
                description: T.intl.string(T.t['8dqG5O'])
            }),
            (0, o.jsx)(_.Z, {
                icon: c.UploadIcon,
                iconClassName: I.perkIconUpload,
                description: T.intl.string(T.t.cBorIy)
            })
        ]
    });
}
function k(e) {
    var n;
    let { premiumSubscriptionPlan: t, onClose: i, onBack: a, onSkip: _, onSubscriptionConfirmation: g, analyticsLocation: S, analyticsSourceLocation: b, priceOptions: k } = e,
        { analyticsLocations: N, sourceAnalyticsLocations: M } = (0, d.ZP)(u.Z.GUILD_BOOSTING_PREMIUM_UPSELL),
        { theme: A } = (0, c.useThemeContext)(),
        R = (0, s.ap)(A) ? c.Button.Colors.PRIMARY : c.Button.Colors.WHITE,
        L = null == t || null == t.premiumSubscriptionType,
        O = x.ZP.getPrice(P.Xh.PREMIUM_MONTH_TIER_2, !1, !1, k),
        j = (0, v.T4)(O.amount, O.currency),
        B = (0, m.N)(),
        Z = null == B ? void 0 : B.trial_id,
        D = (null == B ? void 0 : null === (n = B.subscription_trial) || void 0 === n ? void 0 : n.sku_id) === P.Si.TIER_2;
    return (
        r.useEffect(() => {
            E.default.track(C.rMx.PREMIUM_UPSELL_VIEWED, {
                type: P.cd.GUILD_PREMIUM_UPSELL_MODAL,
                location_stack: M
            });
        }, [M]),
        (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsxs)(c.ModalContent, {
                    className: I.content,
                    children: [
                        (0, o.jsx)(c.ModalCloseButton, {
                            onClick: i,
                            className: I.closeButton
                        }),
                        D && (0, o.jsx)(h.dz, { className: I.premiumTrialBadge }),
                        (0, o.jsx)('div', { className: l()(I.upsellImage, { [I.upsellImageWithTrialOffer]: D }) }),
                        (0, o.jsx)('div', {
                            className: I.bodyText,
                            children: null != Z ? T.intl.string(T.t.AoSzEh) : T.intl.format(T.t['7vePZW'], { monthlyPrice: j })
                        }),
                        (0, o.jsx)(y, { shouldUpsellFromNoneTier: L })
                    ]
                }),
                (0, o.jsxs)(c.ModalFooter, {
                    align: p.Z.Align.CENTER,
                    justify: p.Z.Justify.END,
                    children: [
                        (0, o.jsxs)('div', {
                            className: I.footerRight,
                            children: [
                                (0, o.jsx)(c.Button, {
                                    look: c.Button.Looks.LINK,
                                    color: R,
                                    onClick: _,
                                    children: T.intl.string(T.t['SI/adn'])
                                }),
                                (0, o.jsx)(c.Button, {
                                    color: c.Button.Colors.GREEN,
                                    type: 'submit',
                                    onClick: () => {
                                        i(),
                                            (0, f.Z)({
                                                initialPlanId: null,
                                                subscriptionTier: P.Si.TIER_2,
                                                analyticsLocations: N,
                                                analyticsObject: {
                                                    ...S,
                                                    section: C.jXE.PREMIUM_GUILD_PURCHASE_MODAL
                                                },
                                                analyticsSourceLocation: b,
                                                onSubscriptionConfirmation: g,
                                                trialId: Z
                                            });
                                    },
                                    children: null != Z ? T.intl.string(T.t['Gd/XHB']) : T.intl.string(T.t.p2moio)
                                })
                            ]
                        }),
                        (0, o.jsx)('div', {
                            className: I.backStep,
                            children: (0, o.jsx)(c.Button, {
                                color: R,
                                look: c.Button.Looks.LINK,
                                size: c.Button.Sizes.NONE,
                                onClick: () => a(),
                                children: T.intl.string(T.t['13/7kZ'])
                            })
                        })
                    ]
                })
            ]
        })
    );
}
