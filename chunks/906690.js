n.d(t, {
    JY: function () {
        return _;
    },
    yl: function () {
        return m;
    }
});
var r = n(704215),
    i = n(100527),
    a = n(717401),
    s = n(474936),
    o = n(981631),
    l = n(388032),
    u = n(955604),
    c = n(865338),
    d = n(692557),
    f = n(430502);
let _ = 1,
    p = [
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
function h(e, t) {
    return t ? (e ? d.Z : f.Z) : e ? u.Z : c.Z;
}
let m = {
    dismissibleContentVersion: _,
    rewards: p,
    rewardAssetIdMap: (0, a.YV)(p),
    eligiblePlanIds: [s.Xh.PREMIUM_YEAR_TIER_2, s.Xh.PREMIUM_MONTH_TIER_2],
    chatIconAnimationData: () => n(485542),
    firstTimeNotice: {
        dismissibleContent: r.z.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET,
        getImageUrl: h,
        title: () => l.intl.string(l.t.Ann2VF),
        description: () => l.intl.string(l.t.MVYCGB),
        cta: () => l.intl.string(l.t.RzWDqa),
        analyticsLocation: i.Z.SEASONAL_GIFTING_COACHMARK,
        analyticsPage: o.ZY5.PREMIUM_UPSELL_SEASONAL_GIFTING_CAMPAIGN
    },
    reminderNotice: {
        dismissibleContent: r.z.GIFTING_PROMOTION_REMINDER,
        getImageUrl: h,
        title: () => l.intl.string(l.t.MzahXV),
        description: () => l.intl.formatToPlainString(l.t.Ls1ZSU, {}),
        cta: () => l.intl.string(l.t.RzWDqa),
        analyticsLocation: i.Z.SEASONAL_GIFTING_REMINDER_COACHMARK,
        analyticsPage: o.ZY5.PREMIUM_UPSELL_SEASONAL_GIFTING_CAMPAIGN
    },
    reminderNagbar: {
        description: () => l.intl.formatToPlainString(l.t['vdmn//'], {}),
        cta: () => l.intl.string(l.t.RzWDqa),
        analyticsLocation: i.Z.SEASONAL_GIFTING_REMINDER_NAGBAR,
        analyticsPage: o.ZY5.PREMIUM_UPSELL_SEASONAL_GIFTING_CAMPAIGN
    },
    planSelection: {
        heading: () => l.intl.string(l.t['FNVJ4+']),
        subheading: (e) => l.intl.formatToPlainString(l.t.IKZTRE, { optionCount: e }),
        gradient: ['#F6CFC6', '#008D4B'],
        getImageUrl: h
    }
};
