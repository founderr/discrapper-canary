n.d(t, {
    JY: function () {
        return f;
    },
    yl: function () {
        return h;
    }
});
var r = n(704215),
    i = n(100527),
    a = n(717401),
    s = n(981631),
    o = n(388032),
    l = n(955604),
    u = n(865338),
    c = n(692557),
    d = n(430502);
let f = 1,
    _ = [
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
function p(e, t) {
    return t ? (e ? c.Z : d.Z) : e ? l.Z : u.Z;
}
let h = {
    dismissibleContentVersion: f,
    rewards: _,
    rewardAssetIdMap: (0, a.YV)(_),
    chatIconAnimationData: () => n(485542),
    firstTimeNotice: {
        dismissibleContent: r.z.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET,
        getImageUrl: p,
        title: () => o.intl.string(o.t.Ann2VF),
        description: () => o.intl.string(o.t.MVYCGB),
        cta: () => o.intl.string(o.t.RzWDqa),
        analyticsLocation: i.Z.SEASONAL_GIFTING_COACHMARK,
        analyticsPage: s.ZY5.PREMIUM_UPSELL_SEASONAL_GIFTING_CAMPAIGN
    },
    reminderNotice: {
        dismissibleContent: r.z.GIFTING_PROMOTION_REMINDER,
        getImageUrl: p,
        title: () => o.intl.string(o.t.MzahXV),
        description: () => o.intl.formatToPlainString(o.t.Ls1ZSU, {}),
        cta: () => o.intl.string(o.t.RzWDqa),
        analyticsLocation: i.Z.SEASONAL_GIFTING_REMINDER_COACHMARK,
        analyticsPage: s.ZY5.PREMIUM_UPSELL_SEASONAL_GIFTING_CAMPAIGN
    },
    planSelection: {
        heading: () => o.intl.string(o.t.wMNoxM),
        subheading: (e) => o.intl.formatToPlainString(o.t.OCR6yM, { optionCount: e }),
        gradient: ['#F6CFC6', '#008D4B'],
        getImageUrl: p
    }
};
