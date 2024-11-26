t.d(n, {
    Z: function () {
        return A;
    }
});
var o = t(200651),
    l = t(192379),
    i = t(120356),
    r = t.n(i),
    a = t(442837),
    s = t(780384),
    u = t(481060),
    c = t(100527),
    d = t(906732),
    p = t(600164),
    f = t(963249),
    m = t(639119),
    _ = t(165583),
    S = t(263954),
    E = t(706454),
    h = t(709586),
    g = t(626135),
    P = t(930153),
    T = t(74538),
    I = t(937615),
    x = t(981631),
    C = t(474936),
    b = t(388032),
    N = t(427930);
function y(e) {
    let { shouldUpsellFromNoneTier: n } = e,
        t = (0, a.e7)([E.default], () => E.default.locale);
    return (0, o.jsxs)('div', {
        className: N.perksList,
        children: [
            (0, o.jsx)(S.Z, {
                icon: h.Z,
                iconClassName: N.perkIconGuild,
                description: b.intl.formatToPlainString(b.t.sQBgs7, { numFreeGuildSubscriptions: C.cb })
            }),
            (0, o.jsx)(S.Z, {
                icon: h.Z,
                iconClassName: N.perkIconGuild,
                description: b.intl.formatToPlainString(b.t['1A6vXl'], { percent: (0, P.T3)(t, C.Rr / 100) })
            }),
            n
                ? (0, o.jsx)(S.Z, {
                      icon: u.ReactionIcon,
                      iconClassName: N.perkIconChatPerks,
                      description: b.intl.string(b.t.Z9b2x8)
                  })
                : null,
            (0, o.jsx)(S.Z, {
                icon: u.ScreenArrowIcon,
                iconClassName: N.perkIconStream,
                description: b.intl.string(b.t['8dqG5O'])
            }),
            (0, o.jsx)(S.Z, {
                icon: u.UploadIcon,
                iconClassName: N.perkIconUpload,
                description: b.intl.string(b.t.cBorIy)
            })
        ]
    });
}
function A(e) {
    var n;
    let { premiumSubscriptionPlan: t, onClose: i, onBack: a, onSkip: S, onSubscriptionConfirmation: E, analyticsLocation: h, analyticsSourceLocation: P, priceOptions: A } = e,
        { analyticsLocations: k, sourceAnalyticsLocations: M } = (0, d.ZP)(c.Z.GUILD_BOOSTING_PREMIUM_UPSELL),
        { theme: v } = (0, u.useThemeContext)(),
        R = (0, s.ap)(v) ? u.Button.Colors.PRIMARY : u.Button.Colors.WHITE,
        L = null == t || null == t.premiumSubscriptionType,
        j = T.ZP.getPrice(C.Xh.PREMIUM_MONTH_TIER_2, !1, !1, A),
        B = (0, I.T4)(j.amount, j.currency),
        Z = (0, m.N)(),
        O = null == Z ? void 0 : Z.trial_id,
        D = (null == Z ? void 0 : null === (n = Z.subscription_trial) || void 0 === n ? void 0 : n.sku_id) === C.Si.TIER_2;
    return (
        l.useEffect(() => {
            g.default.track(x.rMx.PREMIUM_UPSELL_VIEWED, {
                type: C.cd.GUILD_PREMIUM_UPSELL_MODAL,
                location_stack: M
            });
        }, [M]),
        (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsxs)(u.ModalContent, {
                    className: N.content,
                    children: [
                        (0, o.jsx)(u.ModalCloseButton, {
                            onClick: i,
                            className: N.closeButton
                        }),
                        D && (0, o.jsx)(_.dz, { className: N.premiumTrialBadge }),
                        (0, o.jsx)('div', { className: r()(N.upsellImage, { [N.upsellImageWithTrialOffer]: D }) }),
                        (0, o.jsx)('div', {
                            className: N.bodyText,
                            children: null != O ? b.intl.string(b.t.AoSzEh) : b.intl.format(b.t['7vePZW'], { monthlyPrice: B })
                        }),
                        (0, o.jsx)(y, { shouldUpsellFromNoneTier: L })
                    ]
                }),
                (0, o.jsxs)(u.ModalFooter, {
                    align: p.Z.Align.CENTER,
                    justify: p.Z.Justify.END,
                    children: [
                        (0, o.jsxs)('div', {
                            className: N.footerRight,
                            children: [
                                (0, o.jsx)(u.Button, {
                                    look: u.Button.Looks.LINK,
                                    color: R,
                                    onClick: S,
                                    children: b.intl.string(b.t['SI/adn'])
                                }),
                                (0, o.jsx)(u.Button, {
                                    color: u.Button.Colors.GREEN,
                                    type: 'submit',
                                    onClick: () => {
                                        i(),
                                            (0, f.Z)({
                                                initialPlanId: null,
                                                subscriptionTier: C.Si.TIER_2,
                                                analyticsLocations: k,
                                                analyticsObject: {
                                                    ...h,
                                                    section: x.jXE.PREMIUM_GUILD_PURCHASE_MODAL
                                                },
                                                analyticsSourceLocation: P,
                                                onSubscriptionConfirmation: E,
                                                trialId: O
                                            });
                                    },
                                    children: null != O ? b.intl.string(b.t['Gd/XHB']) : b.intl.string(b.t.p2moio)
                                })
                            ]
                        }),
                        (0, o.jsx)('div', {
                            className: N.backStep,
                            children: (0, o.jsx)(u.Button, {
                                color: R,
                                look: u.Button.Looks.LINK,
                                size: u.Button.Sizes.NONE,
                                onClick: () => a(),
                                children: b.intl.string(b.t['13/7kZ'])
                            })
                        })
                    ]
                })
            ]
        })
    );
}
