var s = n(735250);
n(470079);
var a = n(780384),
    r = n(481060),
    i = n(410030),
    l = n(74538),
    o = n(650032),
    c = n(104494),
    d = n(639119),
    _ = n(197115),
    u = n(474936),
    E = n(689938),
    T = n(629381);
let I = (e) => {
        let { showTrialCTA: t, subscriptionTier: n, shouldShowUpsells: s, trialDurationCopy: a, isPersistentCTA: r, shouldShowReferralTrialCopy: i, subscriptionTrial: o } = e;
        if (t && i) return E.Z.Messages.REFERRAL_PROGRAM_START_TRIAL;
        if (t && (n === u.Si.TIER_2 || r))
            return (0, l.Rt)({
                intervalType: null == o ? void 0 : o.interval,
                intervalCount: null == o ? void 0 : o.interval_count
            });
        if (t) return E.Z.Messages.GET_FREE_TRIAL.format({ freeTrialText: a });
        else if (s && n === u.Si.TIER_2) return E.Z.Messages.BOGO_CHANGE_LOG_REDEEM;
    },
    R = (e, t, n, s) => (t || n ? E.Z.Messages.PREMIUM_DISCOUNT_CTA_WITHOUT_PERCENT : e === u.Si.TIER_2 ? E.Z.Messages.PREMIUM_DISCOUNT_CTA.format({ percent: s }) : void 0);
t.Z = (e) => {
    let { forceInverted: t, subscriptionTier: n, isEligibleForBogoPromotion: m = !1, isPersistentCTA: N = !1, useShorterCTA: g = !1, ...C } = e,
        p = (0, i.ZP)(),
        f = (0, a.wj)(p) || t,
        A = (0, d.N)(),
        h = null == A ? void 0 : A.subscription_trial,
        S = (0, l.a5)({
            intervalType: null == h ? void 0 : h.interval,
            intervalCount: null == h ? void 0 : h.interval_count
        }),
        M = (0, c.Ng)(),
        x = null != h && n === h.sku_id,
        { enabled: b } = o._.useExperiment({ location: 'SubscribeButton' }, { autoTrackExposure: !1 }),
        O = b && (null == A ? void 0 : A.trial_id) === u.a7,
        v = m
            ? E.Z.Messages.BOGO_CLAIM_OFFER
            : null != M
              ? R(n, g, N, M.discount.amount)
              : I({
                    showTrialCTA: x,
                    subscriptionTier: n,
                    shouldShowUpsells: !1,
                    trialDurationCopy: S,
                    isPersistentCTA: N,
                    shouldShowReferralTrialCopy: O,
                    subscriptionTrial: h
                });
    return (0, s.jsx)(_.Z, {
        color: f ? r.ButtonColors.BRAND_INVERTED : r.ButtonColors.BRAND,
        buttonShineClassName: 'buttonShineClassName' in C ? C.buttonShineClassName : f ? T.brandShine : void 0,
        buttonText: v,
        buttonTextClassName: x ? T.freeTrialText : void 0,
        onlyShineOnHover: !0,
        subscriptionTier: n,
        ...C
    });
};
