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
    T = n(629381);
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
    let { forceInverted: t, subscriptionTier: n, isEligibleForBogoPromotion: g = !1, isPersistentCTA: N = !1, useShorterCTA: C = !1, ...m } = e,
        f = (0, i.ZP)(),
        A = (0, a.wj)(f) || t,
        p = (0, d.N)(),
        M = null == p ? void 0 : p.subscription_trial,
        S = (0, l.a5)({
            intervalType: null == M ? void 0 : M.interval,
            intervalCount: null == M ? void 0 : M.interval_count
        }),
        h = (0, c.Ng)(),
        b = null != M && n === M.sku_id,
        { enabled: x } = o._.useExperiment({ location: 'SubscribeButton' }, { autoTrackExposure: !1 }),
        O = x && (null == p ? void 0 : p.trial_id) === E.a7,
        P = g
            ? u.Z.Messages.BOGO_CLAIM_OFFER
            : null != h
              ? R(n, C, N, h.discount.amount)
              : I({
                    showTrialCTA: b,
                    subscriptionTier: n,
                    shouldShowUpsells: !1,
                    trialDurationCopy: S,
                    isPersistentCTA: N,
                    shouldShowReferralTrialCopy: O,
                    subscriptionTrial: M
                });
    return (0, s.jsx)(_.Z, {
        color: A ? r.ButtonColors.BRAND_INVERTED : r.ButtonColors.BRAND,
        buttonShineClassName: 'buttonShineClassName' in m ? m.buttonShineClassName : A ? T.brandShine : void 0,
        buttonText: P,
        buttonTextClassName: b ? T.freeTrialText : void 0,
        onlyShineOnHover: !0,
        subscriptionTier: n,
        ...m
    });
};
