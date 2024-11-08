n.d(t, {
    BS: function () {
        return T;
    },
    Dp: function () {
        return b;
    },
    Gw: function () {
        return v;
    },
    Op: function () {
        return P;
    },
    gx: function () {
        return S;
    },
    iG: function () {
        return I;
    },
    k3: function () {
        return E;
    },
    mN: function () {
        return Z;
    },
    oo: function () {
        return C;
    },
    sP: function () {
        return j;
    },
    t2: function () {
        return N;
    },
    vZ: function () {
        return x;
    }
}),
    n(653041),
    n(627341);
var i = n(278074),
    r = n(442837),
    a = n(780384),
    s = n(410154),
    l = n(594174),
    o = n(78839),
    c = n(74538),
    d = n(331119),
    u = n(575595),
    g = n(915296),
    m = n(650032),
    f = n(391110),
    _ = n(474936),
    p = n(735825),
    h = n(388032);
let E = (e) => {
        switch (e) {
            case p.EB.PENDING:
                return h.intl.string(h.t.fhK8ho);
            case p.EB.REDEEMABLE:
                return h.intl.string(h.t['084A8/']);
            case p.EB.REDEEMED:
                return h.intl.string(h.t['5kxiMz']);
            default:
                return '';
        }
    },
    b = (e) => {
        switch (e) {
            case p.EB.PENDING:
                return h.intl.string(h.t['9o4F4+']);
            case p.EB.REDEEMABLE:
            case p.EB.REDEEMED:
                return h.intl.string(h.t['3R9pPD']);
            default:
                return '';
        }
    },
    x = (e, t, n) => {
        switch (e) {
            case p.EB.PENDING:
                return t === p.Ft.FREE_GUILD_BOOST_1_MONTH ? h.intl.string(h.t.hnbagI) : h.intl.string(h.t['73+DnJ']);
            case p.EB.REDEEMABLE:
                if (t === p.Ft.FREE_GUILD_BOOST_1_MONTH) return n ? h.intl.string(h.t.RrwI8f) : h.intl.string(h.t.P1Xqqa);
                return h.intl.string(h.t.K687hI);
            case p.EB.REDEEMED:
                return h.intl.string(h.t['QvW/MT']);
            default:
                return;
        }
    },
    C = (e) => {
        switch (e) {
            case p.EB.PENDING:
                return h.intl.string(h.t.nlcs6O);
            case p.EB.REDEEMABLE:
            case p.EB.REDEEMED:
                return h.intl.string(h.t.F915ra);
            default:
                return;
        }
    },
    T = (e) => {
        switch (e) {
            case p.EB.PENDING:
                return h.intl.string(h.t.tncFsb);
            case p.EB.REDEEMABLE:
                return;
            case p.EB.REDEEMED:
                return h.intl.string(h.t.OcdQND);
            default:
                return;
        }
    },
    v = (e) => {
        switch (e) {
            case p.EB.PENDING:
                return h.intl.string(h.t.LAFMBQ);
            case p.EB.REDEEMABLE:
            case p.EB.REDEEMED:
                return h.intl.string(h.t['4cCWPT']);
            default:
                return;
        }
    };
function N(e, t) {
    switch (e) {
        case p.EB.PENDING:
            return null != t ? h.intl.formatToPlainString(h.t.FULtam, { days: t }) : '';
        case p.EB.REDEEMABLE:
            return h.intl.string(h.t['+zx47e']);
        case p.EB.REDEEMED:
            return h.intl.string(h.t['5kxiMz']);
        default:
            return '';
    }
}
function I(e, t) {
    switch (e) {
        case p.EB.PENDING:
            return null != t ? h.intl.formatToPlainString(h.t.a1eKDg, { days: t }) : '';
        case p.EB.REDEEMABLE:
            return h.intl.string(h.t.B9eJyc);
        case p.EB.REDEEMED:
            return h.intl.string(h.t.hpy7PD);
        default:
            return '';
    }
}
let S = (e, t, n) => ((0, a.wj)(e) ? t : n),
    R = 'getWhatsNewRow',
    A = (e) => {
        let { cards: t, perksCards: n, isFullScreen: i, showTenureCard: r, shopMarketingVariation: a } = e,
            l = i ? 3 : 2,
            o = (e) => {
                let { card: n } = e;
                t.length < l && t.push(n);
            },
            c = () => {
                a !== s.C5.DEFAULT ? o({ card: n.specialShopPerks }) : o({ card: n.specialMemberPricing });
            },
            { enabled: g } = m._.getCurrentConfig({ location: R }, { autoTrackExposure: !1 }),
            { enabled: f } = u.r.getCurrentConfig({ location: R }, { autoTrackExposure: !1 }),
            { enabled: _ } = d.C.getCurrentConfig({ location: R }, { autoTrackExposure: !1 }),
            p = g && !f && !_,
            h = O();
        return null != n.tenureBadge && o({ card: n.tenureBadge }), null != n.tenureRewardCollectible && !0 === r && o({ card: n.tenureRewardCollectible }), null != n.freeBoost && !0 === r && o({ card: n.freeBoost }), null != n.shyProject && o({ card: n.shyProject }), i && h ? (0 === t.length && c(), o({ card: n.newAppStylesUpdateJune2024 }), o({ card: n.serverProfiles })) : i && !h && (p || null != n.shyProject ? p && o({ card: n.referralProgram }) : c(), o({ card: n.newAppStylesUpdateJune2024 }), o({ card: n.serverProfiles })), o({ card: n.earlyAccess }), c(), o({ card: n.unlimitedSuperReactions }), t;
    },
    j = (e) => {
        let { perksCards: t, variant: n, shopMarketingVariation: r, isFullScreen: a, showTenureCard: s, tileOrderVariant: l, isPremiumSubscriber: o, fractionalState: c } = e,
            d = [],
            u = _.a$.FP_ONLY;
        switch (n) {
            case f.R0.PERKS_DISCOVERABILITY:
                d = (0, i.EQ)({
                    tileOrderVariant: l,
                    isPremiumSubscriber: o,
                    fractionalState: c
                })
                    .with(
                        {
                            tileOrderVariant: g.mJ.VARIANT_1,
                            isPremiumSubscriber: !1
                        },
                        () => [t.profiles, t.moreEmojiPower, t.largeUploads]
                    )
                    .with(
                        {
                            tileOrderVariant: g.mJ.VARIANT_2,
                            isPremiumSubscriber: !1
                        },
                        () => [t.profiles, t.moreEmojiPower, t.largeUploads, t.hdVideo, t.clientThemes, t.customAppIcons]
                    )
                    .with({ fractionalState: _.a$.FP_ONLY }, () => [t.profiles, t.clientThemes, t.hdVideo])
                    .otherwise(() => [t.profiles, t.clientThemes, t.serverBoosts]);
                break;
            case f.R0.WHATS_NEW:
                d = A({
                    cards: d,
                    perksCards: t,
                    isFullScreen: a,
                    showTenureCard: s,
                    shopMarketingVariation: r
                });
                break;
            case f.R0.CARD_CAROUSEL_FIRST_ROW:
                d = (0, i.EQ)({
                    tileOrderVariant: l,
                    isPremiumSubscriber: o
                })
                    .with(
                        {
                            tileOrderVariant: g.mJ.VARIANT_1,
                            isPremiumSubscriber: !1
                        },
                        () => [t.hdVideo, t.serverBoosts, t.superReactions, t.earlyAccessSeeAllVariant, t.specialShopPerks]
                    )
                    .with(
                        {
                            tileOrderVariant: g.mJ.VARIANT_2,
                            isPremiumSubscriber: !1
                        },
                        () => [t.serverBoosts, t.superReactions, t.earlyAccessSeeAllVariant, t.specialShopPerks]
                    )
                    .otherwise(() => [t.customAppIcons, t.moreEmojiPower, t.customSoundsEverywhere, t.specialStickerAccess]);
                break;
            case f.R0.CARD_CAROUSEL_SECOND_ROW:
                d = (0, i.EQ)({
                    tileOrderVariant: l,
                    isPremiumSubscriber: o,
                    fractionPremiumState: u
                })
                    .with(
                        {
                            tileOrderVariant: g.mJ.VARIANT_1,
                            isPremiumSubscriber: !1
                        },
                        () => [t.clientThemes, t.customAppIcons, t.customSoundsEverywhere, t.specialStickerAccess]
                    )
                    .with(
                        {
                            tileOrderVariant: g.mJ.VARIANT_2,
                            isPremiumSubscriber: !1
                        },
                        () => [t.customSoundsEverywhere, t.specialStickerAccess]
                    )
                    .with({ fractionPremiumState: _.a$.FP_ONLY }, () => [t.serverBoosts, t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions])
                    .otherwise(() => [t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions]);
                break;
            case f.R0.CARD_CAROUSEL_THIRD_ROW:
                d = [t.entranceSoundsSeeAllVariation, t.badge];
        }
        return !a && (d = d.filter((e) => !e.hideOnNarrowScreen)), d;
    },
    P = (e) => {
        let t = (0, r.e7)([o.ZP], () => o.ZP.getPremiumTypeSubscription()),
            n = null != t ? c.ZP.getPremiumPlanItem(t) : null,
            i = (null != n ? c.ZP.getSkuIdForPlan(n.planId) : null) === _.Si.TIER_2;
        if (e)
            return i
                ? {
                      title: h.intl.string(h.t.Aw5DRk),
                      subtitle: h.intl.string(h.t.aHdO6u)
                  }
                : {
                      title: h.intl.string(h.t.N30YEx),
                      subtitle: h.intl.string(h.t.GTUdNT)
                  };
        return {
            title: h.intl.string(h.t['Uh3+CA']),
            subtitle: h.intl.string(h.t['5TFEXl'])
        };
    },
    Z = () => {
        let e = (0, r.e7)([l.default], () => l.default.getCurrentUser());
        return (0, c.I5)(e);
    },
    O = () => {
        let e = l.default.getCurrentUser();
        return (0, c.M5)(e, _.p9.TIER_2);
    };
