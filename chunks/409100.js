var n = s(735250);
s(470079);
var a = s(780384),
  i = s(481060),
  r = s(410030),
  l = s(74538),
  o = s(650032),
  c = s(104494),
  E = s(639119),
  _ = s(197115),
  u = s(474936),
  d = s(689938),
  T = s(556902);
let I = e => {
    let {
      showTrialCTA: t,
      subscriptionTier: s,
      shouldShowUpsells: n,
      trialDurationCopy: a,
      isPersistentCTA: i,
      shouldShowReferralTrialCopy: r,
      subscriptionTrial: o
    } = e;
    if (t && r) return d.Z.Messages.REFERRAL_PROGRAM_START_TRIAL;
    if (t && (s === u.Si.TIER_2 || i)) return (0, l.Rt)({
      intervalType: null == o ? void 0 : o.interval,
      intervalCount: null == o ? void 0 : o.interval_count
    });
    if (t) return d.Z.Messages.GET_FREE_TRIAL.format({
      freeTrialText: a
    });
    else if (n && s === u.Si.TIER_2) return d.Z.Messages.BOGO_CHANGE_LOG_REDEEM
  },
  R = (e, t, s, n) => t || s ? d.Z.Messages.PREMIUM_DISCOUNT_CTA_WITHOUT_PERCENT : e === u.Si.TIER_2 ? d.Z.Messages.PREMIUM_DISCOUNT_CTA.format({
    percent: n
  }) : void 0;
t.Z = e => {
  let {
    forceInverted: t,
    subscriptionTier: s,
    isEligibleForBogoPromotion: A = !1,
    isPersistentCTA: N = !1,
    useShorterCTA: C = !1,
    ...g
  } = e, m = (0, r.ZP)(), M = (0, a.wj)(m) || t, S = (0, E.N)(), p = null == S ? void 0 : S.subscription_trial, h = (0, l.a5)({
    intervalType: null == p ? void 0 : p.interval,
    intervalCount: null == p ? void 0 : p.interval_count
  }), f = (0, c.Ng)(), O = null != p && s === p.sku_id, {
    enabled: x
  } = o._.useExperiment({
    location: "SubscribeButton"
  }, {
    autoTrackExposure: !1
  }), L = x && (null == S ? void 0 : S.trial_id) === u.a7, P = A ? d.Z.Messages.BOGO_CLAIM_OFFER : null != f ? R(s, C, N, f.discount.amount) : I({
    showTrialCTA: O,
    subscriptionTier: s,
    shouldShowUpsells: !1,
    trialDurationCopy: h,
    isPersistentCTA: N,
    shouldShowReferralTrialCopy: L,
    subscriptionTrial: p
  });
  return (0, n.jsx)(_.Z, {
    color: M ? i.ButtonColors.BRAND_INVERTED : i.ButtonColors.BRAND,
    buttonShineClassName: "buttonShineClassName" in g ? g.buttonShineClassName : M ? T.brandShine : void 0,
    trialId: null == p ? void 0 : p.id,
    buttonText: P,
    buttonTextClassName: O ? T.freeTrialText : void 0,
    onlyShineOnHover: !0,
    subscriptionTier: s,
    ...g
  })
}