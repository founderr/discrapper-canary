r.d(n, {
    JY: function () {
        return m;
    },
    yl: function () {
        return v;
    }
});
var i = r(704215),
    a = r(100527),
    s = r(717401),
    o = r(474936),
    l = r(981631),
    u = r(388032),
    c = r(663211),
    d = r(14432),
    f = r(955604),
    _ = r(865338),
    h = r(692557),
    p = r(430502);
let m = 1,
    g = [
        {
            skuId: '1301993378484850769',
            assetId: 'a_b1da12c72766c550c1759bf5c9dc6c7a'
        },
        {
            skuId: '1301993378484850771',
            assetId: 'a_643e26a948548adb435b1078f273c426'
        },
        {
            skuId: '1301993378484850773',
            assetId: 'a_65cce62b814c5d0c17ee2be00e5f2f77'
        }
    ];
function E(e, n) {
    return n ? (e ? h.Z : p.Z) : e ? f.Z : _.Z;
}
let v = {
    dismissibleContentVersion: 1,
    rewards: g,
    rewardAssetIdMap: (0, s.YV)(g),
    eligiblePlanIds: [o.Xh.PREMIUM_YEAR_TIER_2, o.Xh.PREMIUM_MONTH_TIER_2],
    chatIconAnimationData: () => r(485542),
    firstTimeNotice: {
        dismissibleContent: i.z.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET,
        getImageUrl: (e, n) => c.Z,
        coachmarkAnimationData: [() => Promise.resolve().then(r.bind(r, 974465))],
        title: () => u.intl.string(u.t.Ann2VF),
        description: () => u.intl.string(u.t.MVYCGB),
        cta: () => u.intl.string(u.t.RzWDqa),
        analyticsLocation: a.Z.SEASONAL_GIFTING_COACHMARK,
        analyticsPage: l.ZY5.PREMIUM_UPSELL_SEASONAL_GIFTING_CAMPAIGN
    },
    reminderNotice: {
        dismissibleContent: i.z.GIFTING_PROMOTION_REMINDER,
        getImageUrl: E,
        title: () => u.intl.string(u.t.MzahXV),
        description: () => u.intl.formatToPlainString(u.t.Ls1ZSU, {}),
        cta: () => u.intl.string(u.t.RzWDqa),
        analyticsLocation: a.Z.SEASONAL_GIFTING_REMINDER_COACHMARK,
        analyticsPage: l.ZY5.PREMIUM_UPSELL_SEASONAL_GIFTING_CAMPAIGN
    },
    reminderNagbar: {
        description: () => u.intl.formatToPlainString(u.t['vdmn//'], {}),
        cta: () => u.intl.string(u.t.RzWDqa),
        analyticsLocation: a.Z.SEASONAL_GIFTING_REMINDER_NAGBAR,
        analyticsPage: l.ZY5.PREMIUM_UPSELL_SEASONAL_GIFTING_CAMPAIGN
    },
    planSelection: {
        heading: () => u.intl.string(u.t['FNVJ4+']),
        subheading: (e) => u.intl.formatToPlainString(u.t.IKZTRE, { optionCount: e }),
        gradient: ['#F6CFC6', '#008D4B'],
        getImageUrl: E
    },
    giftPurchaseConfirmation: {
        yearGiftText: u.t.N5nBuL,
        monthGiftText: u.t.QoRefn,
        collectRewardButtonText: () => u.intl.string(u.t.kMYVws),
        rewardCollectedText: () => u.intl.string(u.t.naT1rK)
    },
    planSelectionBanner: {
        body: (e) => (e > 1 ? u.intl.formatToPlainString(u.t.XMBaKy, { optionCount: e }) : u.intl.string(u.t.pOmOBQ)),
        getImageUrl: E
    },
    billingSettingsMarketingBanner: {
        getAnimatedImageData: () => r(974465),
        getStaticImageUrl: () => c.Z,
        getBackgroundImageUrl: () => d.Z,
        title: () => u.intl.string(u.t.Q5E8qq),
        body: () => u.intl.formatToPlainString(u.t.iX7i29, {})
    }
};
