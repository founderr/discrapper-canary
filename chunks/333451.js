t.d(n, {
    Z: function () {
        return k;
    }
});
var o = t(200651),
    l = t(192379),
    i = t(120356),
    r = t.n(i),
    a = t(442837),
    s = t(780384),
    c = t(481060),
    u = t(100527),
    d = t(906732),
    p = t(600164),
    f = t(963249),
    m = t(639119),
    _ = t(165583),
    S = t(263954),
    g = t(706454),
    h = t(709586),
    E = t(626135),
    P = t(930153),
    I = t(74538),
    T = t(937615),
    x = t(981631),
    y = t(474936),
    C = t(388032),
    b = t(427930);
function N(e) {
    let { shouldUpsellFromNoneTier: n } = e,
        t = (0, a.e7)([g.default], () => g.default.locale);
    return (0, o.jsxs)('div', {
        className: b.perksList,
        children: [
            (0, o.jsx)(S.Z, {
                icon: h.Z,
                iconClassName: b.perkIconGuild,
                description: C.intl.formatToPlainString(C.t.sQBgs7, { numFreeGuildSubscriptions: y.cb })
            }),
            (0, o.jsx)(S.Z, {
                icon: h.Z,
                iconClassName: b.perkIconGuild,
                description: C.intl.formatToPlainString(C.t['1A6vXl'], { percent: (0, P.T3)(t, y.Rr / 100) })
            }),
            n
                ? (0, o.jsx)(S.Z, {
                      icon: c.ReactionIcon,
                      iconClassName: b.perkIconChatPerks,
                      description: C.intl.string(C.t.Z9b2x8)
                  })
                : null,
            (0, o.jsx)(S.Z, {
                icon: c.ScreenArrowIcon,
                iconClassName: b.perkIconStream,
                description: C.intl.string(C.t['8dqG5O'])
            }),
            (0, o.jsx)(S.Z, {
                icon: c.UploadIcon,
                iconClassName: b.perkIconUpload,
                description: C.intl.string(C.t.cBorIy)
            })
        ]
    });
}
function k(e) {
    var n;
    let { premiumSubscriptionPlan: t, onClose: i, onBack: a, onSkip: S, onSubscriptionConfirmation: g, analyticsLocation: h, analyticsSourceLocation: P, priceOptions: k } = e,
        { analyticsLocations: A, sourceAnalyticsLocations: M } = (0, d.ZP)(u.Z.GUILD_BOOSTING_PREMIUM_UPSELL),
        { theme: v } = (0, c.useThemeContext)(),
        L = (0, s.ap)(v) ? c.Button.Colors.PRIMARY : c.Button.Colors.WHITE,
        R = null == t || null == t.premiumSubscriptionType,
        j = I.ZP.getPrice(y.Xh.PREMIUM_MONTH_TIER_2, !1, !1, k),
        B = (0, T.T4)(j.amount, j.currency),
        Z = (0, m.N)(),
        D = null == Z ? void 0 : Z.trial_id,
        O = (null == Z ? void 0 : null === (n = Z.subscription_trial) || void 0 === n ? void 0 : n.sku_id) === y.Si.TIER_2;
    return (
        l.useEffect(() => {
            E.default.track(x.rMx.PREMIUM_UPSELL_VIEWED, {
                type: y.cd.GUILD_PREMIUM_UPSELL_MODAL,
                location_stack: M
            });
        }, [M]),
        (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsxs)(c.ModalContent, {
                    className: b.content,
                    children: [
                        (0, o.jsx)(c.ModalCloseButton, {
                            onClick: i,
                            className: b.closeButton
                        }),
                        O && (0, o.jsx)(_.dz, { className: b.premiumTrialBadge }),
                        (0, o.jsx)('div', { className: r()(b.upsellImage, { [b.upsellImageWithTrialOffer]: O }) }),
                        (0, o.jsx)('div', {
                            className: b.bodyText,
                            children: null != D ? C.intl.string(C.t.AoSzEh) : C.intl.format(C.t['7vePZW'], { monthlyPrice: B })
                        }),
                        (0, o.jsx)(N, { shouldUpsellFromNoneTier: R })
                    ]
                }),
                (0, o.jsxs)(c.ModalFooter, {
                    align: p.Z.Align.CENTER,
                    justify: p.Z.Justify.END,
                    children: [
                        (0, o.jsxs)('div', {
                            className: b.footerRight,
                            children: [
                                (0, o.jsx)(c.Button, {
                                    look: c.Button.Looks.LINK,
                                    color: L,
                                    onClick: S,
                                    children: C.intl.string(C.t['SI/adn'])
                                }),
                                (0, o.jsx)(c.Button, {
                                    color: c.Button.Colors.GREEN,
                                    type: 'submit',
                                    onClick: () => {
                                        i(),
                                            (0, f.Z)({
                                                initialPlanId: null,
                                                subscriptionTier: y.Si.TIER_2,
                                                analyticsLocations: A,
                                                analyticsObject: {
                                                    ...h,
                                                    section: x.jXE.PREMIUM_GUILD_PURCHASE_MODAL
                                                },
                                                analyticsSourceLocation: P,
                                                onSubscriptionConfirmation: g,
                                                trialId: D
                                            });
                                    },
                                    children: null != D ? C.intl.string(C.t['Gd/XHB']) : C.intl.string(C.t.p2moio)
                                })
                            ]
                        }),
                        (0, o.jsx)('div', {
                            className: b.backStep,
                            children: (0, o.jsx)(c.Button, {
                                color: L,
                                look: c.Button.Looks.LINK,
                                size: c.Button.Sizes.NONE,
                                onClick: () => a(),
                                children: C.intl.string(C.t['13/7kZ'])
                            })
                        })
                    ]
                })
            ]
        })
    );
}
