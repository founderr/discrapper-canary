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
    E = n(474936),
    u = n(689938),
    T = n(380876);
let I = (e) => {
        let { showTrialCTA: t, subscriptionTier: n, shouldShowUpsells: s, trialDurationCopy: a, isPersistentCTA: r, shouldShowReferralTrialCopy: i, subscriptionTrial: o } = e;
        if (t && i) return u.Z.Messages.REFERRAL_PROGRAM_START_TRIAL;
        if (t && (n === E.Si.TIER_2 || r))
            return (0, l.Rt)({
                intervalType: null == o ? void 0 : o.interval,
                intervalCount: null == o ? void 0 : o.interval_count
            });
        if (t) return u.Z.Messages.GET_FREE_TRIAL.format({ freeTrialText: a });
        else if (s && n === E.Si.TIER_2) return u.Z.Messages.BOGO_CHANGE_LOG_REDEEM;
    },
    R = (e, t, n, s) => (t || n ? u.Z.Messages.PREMIUM_DISCOUNT_CTA_WITHOUT_PERCENT : e === E.Si.TIER_2 ? u.Z.Messages.PREMIUM_DISCOUNT_CTA.format({ percent: s }) : void 0);
t.Z = (e) => {
    let { forceInverted: t, subscriptionTier: n, isEligibleForBogoPromotion: C = !1, isPersistentCTA: g = !1, useShorterCTA: N = !1, ...p } = e,
        A = (0, i.ZP)(),
        m = (0, a.wj)(A) || t,
        f = (0, d.N)(),
        S = null == f ? void 0 : f.subscription_trial,
        h = (0, l.a5)({
            intervalType: null == S ? void 0 : S.interval,
            intervalCount: null == S ? void 0 : S.interval_count
        }),
        M = (0, c.Ng)(),
        x = null != S && n === S.sku_id,
        { enabled: O } = o._.useExperiment({ location: 'SubscribeButton' }, { autoTrackExposure: !1 }),
        b = O && (null == f ? void 0 : f.trial_id) === E.a7,
        P = C
            ? u.Z.Messages.BOGO_CLAIM_OFFER
            : null != M
              ? R(n, N, g, M.discount.amount)
              : I({
                    showTrialCTA: x,
                    subscriptionTier: n,
                    shouldShowUpsells: !1,
                    trialDurationCopy: h,
                    isPersistentCTA: g,
                    shouldShowReferralTrialCopy: b,
                    subscriptionTrial: S
                });
    return (0, s.jsx)(_.Z, {
        color: m ? r.ButtonColors.BRAND_INVERTED : r.ButtonColors.BRAND,
        buttonShineClassName: 'buttonShineClassName' in p ? p.buttonShineClassName : m ? T.brandShine : void 0,
        buttonText: P,
        buttonTextClassName: x ? T.freeTrialText : void 0,
        onlyShineOnHover: !0,
        subscriptionTier: n,
        ...p
    });
};
