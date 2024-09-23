var s = n(735250);
n(470079);
var a = n(780384),
    r = n(481060),
    i = n(410030),
    o = n(74538),
    l = n(650032),
    c = n(104494),
    d = n(639119),
    _ = n(197115),
    u = n(474936),
    E = n(689938),
    T = n(629381);
let I = (e) => {
        let { showTrialCTA: t, subscriptionTier: n, shouldShowUpsells: s, trialDurationCopy: a, isPersistentCTA: r, shouldShowReferralTrialCopy: i, subscriptionTrial: l } = e;
        if (t && i) return E.Z.Messages.REFERRAL_PROGRAM_START_TRIAL;
        if (t && (n === u.Si.TIER_2 || r))
            return (0, o.Rt)({
                intervalType: null == l ? void 0 : l.interval,
                intervalCount: null == l ? void 0 : l.interval_count
            });
        if (t) return E.Z.Messages.GET_FREE_TRIAL.format({ freeTrialText: a });
        else if (s && n === u.Si.TIER_2) return E.Z.Messages.BOGO_CHANGE_LOG_REDEEM;
    },
    R = (e, t, n, s) => (t || n ? E.Z.Messages.PREMIUM_DISCOUNT_CTA_WITHOUT_PERCENT : e === u.Si.TIER_2 ? E.Z.Messages.PREMIUM_DISCOUNT_CTA.format({ percent: s }) : void 0);
t.Z = (e) => {
    let { forceInverted: t, subscriptionTier: n, isEligibleForBogoPromotion: m = !1, isPersistentCTA: g = !1, useShorterCTA: N = !1, ...C } = e,
        p = (0, i.ZP)(),
        f = (0, a.wj)(p) || t,
        A = (0, d.N)(),
        S = null == A ? void 0 : A.subscription_trial,
        h = (0, o.a5)({
            intervalType: null == S ? void 0 : S.interval,
            intervalCount: null == S ? void 0 : S.interval_count
        }),
        M = (0, c.Ng)(),
        x = null != S && n === S.sku_id,
        { enabled: b } = l._.useExperiment({ location: 'SubscribeButton' }, { autoTrackExposure: !1 }),
        O = b && (null == A ? void 0 : A.trial_id) === u.a7,
        v = m
            ? E.Z.Messages.BOGO_CLAIM_OFFER
            : null != M
              ? R(n, N, g, M.discount.amount)
              : I({
                    showTrialCTA: x,
                    subscriptionTier: n,
                    shouldShowUpsells: !1,
                    trialDurationCopy: h,
                    isPersistentCTA: g,
                    shouldShowReferralTrialCopy: O,
                    subscriptionTrial: S
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
