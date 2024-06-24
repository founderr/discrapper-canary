var n = t(735250);
t(470079);
var a = t(780384),
  r = t(481060),
  i = t(410030),
  l = t(74538),
  o = t(650032),
  _ = t(104494),
  c = t(639119),
  E = t(197115),
  u = t(474936),
  R = t(689938),
  d = t(556902);
let I = e => {
    let {
      showTrialCTA: s,
      subscriptionTier: t,
      shouldShowUpsells: n,
      trialDurationCopy: a,
      isPersistentCTA: r,
      shouldShowReferralTrialCopy: i,
      subscriptionTrial: o
    } = e;
    if (s && i) return R.Z.Messages.REFERRAL_PROGRAM_START_TRIAL;
    if (s && (t === u.Si.TIER_2 || r)) return (0, l.Rt)({
      intervalType: null == o ? void 0 : o.interval,
      intervalCount: null == o ? void 0 : o.interval_count
    });
    if (s) return R.Z.Messages.GET_FREE_TRIAL.format({
      freeTrialText: a
    });
    else if (n && t === u.Si.TIER_2) return R.Z.Messages.BOGO_CHANGE_LOG_REDEEM
  },
  T = (e, s, t, n) => s || t ? R.Z.Messages.PREMIUM_DISCOUNT_CTA_WITHOUT_PERCENT : e === u.Si.TIER_2 ? R.Z.Messages.PREMIUM_DISCOUNT_CTA.format({
    percent: n
  }) : void 0;
s.Z = e => {
  let {
    forceInverted: s,
    subscriptionTier: t,
    isEligibleForBogoPromotion: A = !1,
    isPersistentCTA: M = !1,
    useShorterCTA: S = !1,
    ...N
  } = e, p = (0, i.ZP)(), m = (0, a.wj)(p) || s, C = (0, c.N)(), g = null == C ? void 0 : C.subscription_trial, P = (0, l.a5)({
    intervalType: null == g ? void 0 : g.interval,
    intervalCount: null == g ? void 0 : g.interval_count
  }), O = (0, _.Ng)(), f = null != g && t === g.sku_id, {
    enabled: x
  } = o._.useExperiment({
    location: "SubscribeButton"
  }, {
    autoTrackExposure: !1
  }), L = x && (null == C ? void 0 : C.trial_id) === u.a7, h = A ? R.Z.Messages.BOGO_CLAIM_OFFER : null != O ? T(t, S, M, O.discount.amount) : I({
    showTrialCTA: f,
    subscriptionTier: t,
    shouldShowUpsells: !1,
    trialDurationCopy: P,
    isPersistentCTA: M,
    shouldShowReferralTrialCopy: L,
    subscriptionTrial: g
  });
  return (0, n.jsx)(E.Z, {
    color: m ? r.ButtonColors.BRAND_INVERTED : r.ButtonColors.BRAND,
    buttonShineClassName: "buttonShineClassName" in N ? N.buttonShineClassName : m ? d.brandShine : void 0,
    trialId: null == g ? void 0 : g.id,
    buttonText: h,
    buttonTextClassName: f ? d.freeTrialText : void 0,
    onlyShineOnHover: !0,
    subscriptionTier: t,
    ...N
  })
}