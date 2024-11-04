t.d(n, {
    Z: function () {
        return A;
    }
});
var r = t(200651),
    o = t(192379),
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
    P = t(937615),
    C = t(981631),
    v = t(474936),
    T = t(388032),
    I = t(75115);
function y(e) {
    let { shouldUpsellFromNoneTier: n } = e,
        t = (0, a.e7)([g.default], () => g.default.locale);
    return (0, r.jsxs)('div', {
        className: I.perksList,
        children: [
            (0, r.jsx)(_.Z, {
                icon: S.Z,
                iconClassName: I.perkIconGuild,
                description: T.intl.formatToPlainString(T.t.sQBgs7, { numFreeGuildSubscriptions: v.cb })
            }),
            (0, r.jsx)(_.Z, {
                icon: S.Z,
                iconClassName: I.perkIconGuild,
                description: T.intl.formatToPlainString(T.t['1A6vXl'], { percent: (0, b.T3)(t, v.Rr / 100) })
            }),
            n
                ? (0, r.jsx)(_.Z, {
                      icon: c.ReactionIcon,
                      iconClassName: I.perkIconChatPerks,
                      description: T.intl.string(T.t.Z9b2x8)
                  })
                : null,
            (0, r.jsx)(_.Z, {
                icon: c.ScreenArrowIcon,
                iconClassName: I.perkIconStream,
                description: T.intl.string(T.t['8dqG5O'])
            }),
            (0, r.jsx)(_.Z, {
                icon: c.UploadIcon,
                iconClassName: I.perkIconUpload,
                description: T.intl.string(T.t.cBorIy)
            })
        ]
    });
}
function A(e) {
    var n;
    let { premiumSubscriptionPlan: t, onClose: i, onBack: a, onSkip: _, onSubscriptionConfirmation: g, analyticsLocation: S, analyticsSourceLocation: b, priceOptions: A } = e,
        { analyticsLocations: N, sourceAnalyticsLocations: k } = (0, d.ZP)(u.Z.GUILD_BOOSTING_PREMIUM_UPSELL),
        { theme: M } = (0, c.useThemeContext)(),
        R = (0, s.ap)(M) ? c.Button.Colors.PRIMARY : c.Button.Colors.WHITE,
        L = null == t || null == t.premiumSubscriptionType,
        O = x.ZP.getPrice(v.Xh.PREMIUM_MONTH_TIER_2, !1, !1, A),
        j = (0, P.T4)(O.amount, O.currency),
        B = (0, m.N)(),
        Z = null == B ? void 0 : B.trial_id,
        D = (null == B ? void 0 : null === (n = B.subscription_trial) || void 0 === n ? void 0 : n.sku_id) === v.Si.TIER_2;
    return (
        o.useEffect(() => {
            E.default.track(C.rMx.PREMIUM_UPSELL_VIEWED, {
                type: v.cd.GUILD_PREMIUM_UPSELL_MODAL,
                location_stack: k
            });
        }, [k]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(c.ModalContent, {
                    className: I.content,
                    children: [
                        (0, r.jsx)(c.ModalCloseButton, {
                            onClick: i,
                            className: I.closeButton
                        }),
                        D && (0, r.jsx)(h.dz, { className: I.premiumTrialBadge }),
                        (0, r.jsx)('div', { className: l()(I.upsellImage, { [I.upsellImageWithTrialOffer]: D }) }),
                        (0, r.jsx)('div', {
                            className: I.bodyText,
                            children: null != Z ? T.intl.string(T.t.AoSzEh) : T.intl.format(T.t['7vePZW'], { monthlyPrice: j })
                        }),
                        (0, r.jsx)(y, { shouldUpsellFromNoneTier: L })
                    ]
                }),
                (0, r.jsxs)(c.ModalFooter, {
                    align: p.Z.Align.CENTER,
                    justify: p.Z.Justify.END,
                    children: [
                        (0, r.jsxs)('div', {
                            className: I.footerRight,
                            children: [
                                (0, r.jsx)(c.Button, {
                                    look: c.Button.Looks.LINK,
                                    color: R,
                                    onClick: _,
                                    children: T.intl.string(T.t['SI/adn'])
                                }),
                                (0, r.jsx)(c.Button, {
                                    color: c.Button.Colors.GREEN,
                                    type: 'submit',
                                    onClick: () => {
                                        i(),
                                            (0, f.Z)({
                                                initialPlanId: null,
                                                subscriptionTier: v.Si.TIER_2,
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
                        (0, r.jsx)('div', {
                            className: I.backStep,
                            children: (0, r.jsx)(c.Button, {
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
