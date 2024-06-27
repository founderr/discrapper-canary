var s = n(735250);
n(470079);
var a = n(780384),
  i = n(481060),
  r = n(410030),
  l = n(74538),
  o = n(650032),
  c = n(104494),
  d = n(639119),
  _ = n(197115),
  E = n(474936),
  u = n(689938),
  T = n(556902);
let I = e => {
    let {
      showTrialCTA: t,
      subscriptionTier: n,
      shouldShowUpsells: s,
      trialDurationCopy: a,
      isPersistentCTA: i,
      shouldShowReferralTrialCopy: r,
      subscriptionTrial: o
    } = e;
    if (t && r) return u.Z.Messages.REFERRAL_PROGRAM_START_TRIAL;
    if (t && (n === E.Si.TIER_2 || i)) return (0, l.Rt)({
      intervalType: null == o ? void 0 : o.interval,
      intervalCount: null == o ? void 0 : o.interval_count
    });
    if (t) return u.Z.Messages.GET_FREE_TRIAL.format({
      freeTrialText: a
    });
    else if (s && n === E.Si.TIER_2) return u.Z.Messages.BOGO_CHANGE_LOG_REDEEM
  },
  R = (e, t, n, s) => t || n ? u.Z.Messages.PREMIUM_DISCOUNT_CTA_WITHOUT_PERCENT : e === E.Si.TIER_2 ? u.Z.Messages.PREMIUM_DISCOUNT_CTA.format({
    percent: s
  }) : void 0;
t.Z = e => {
  let {
    forceInverted: t,
    subscriptionTier: n,
    isEligibleForBogoPromotion: C = !1,
    isPersistentCTA: g = !1,
    useShorterCTA: p = !1,
    ...A
  } = e, N = (0, r.ZP)(), m = (0, a.wj)(N) || t, S = (0, d.N)(), f = null == S ? void 0 : S.subscription_trial, M = (0, l.a5)({
    intervalType: null == f ? void 0 : f.interval,
    intervalCount: null == f ? void 0 : f.interval_count
  }), h = (0, c.Ng)(), b = null != f && n === f.sku_id, {
    enabled: x
  } = o._.useExperiment({
    location: "SubscribeButton"
  }, {
    autoTrackExposure: !1
  }), O = x && (null == S ? void 0 : S.trial_id) === E.a7, P = C ? u.Z.Messages.BOGO_CLAIM_OFFER : null != h ? R(n, p, g, h.discount.amount) : I({
    showTrialCTA: b,
    subscriptionTier: n,
    shouldShowUpsells: !1,
    trialDurationCopy: M,
    isPersistentCTA: g,
    shouldShowReferralTrialCopy: O,
    subscriptionTrial: f
  });
  return (0, s.jsx)(_.Z, {
    color: m ? i.ButtonColors.BRAND_INVERTED : i.ButtonColors.BRAND,
    buttonShineClassName: "buttonShineClassName" in A ? A.buttonShineClassName : m ? T.brandShine : void 0,
    trialId: null == f ? void 0 : f.id,
    buttonText: P,
    buttonTextClassName: b ? T.freeTrialText : void 0,
    onlyShineOnHover: !0,
    subscriptionTier: n,
    ...A
  })
}