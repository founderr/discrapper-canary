"use strict";
s.r(t);
var a = s("735250");
s("470079");
var r = s("780384"),
  i = s("481060"),
  n = s("410030"),
  l = s("74538"),
  o = s("650032"),
  u = s("104494"),
  c = s("639119"),
  d = s("197115"),
  _ = s("474936"),
  E = s("689938"),
  R = s("420969");
let T = e => {
    let {
      showTrialCTA: t,
      subscriptionTier: s,
      shouldShowUpsells: a,
      trialDurationCopy: r,
      isPersistentCTA: i,
      shouldShowReferralTrialCopy: n,
      subscriptionTrial: o
    } = e;
    if (t && n) return E.default.Messages.REFERRAL_PROGRAM_START_TRIAL;
    if (t && (s === _.PremiumSubscriptionSKUs.TIER_2 || i)) return (0, l.formatTrialCtaIntervalDuration)({
      intervalType: null == o ? void 0 : o.interval,
      intervalCount: null == o ? void 0 : o.interval_count
    });
    if (t) return E.default.Messages.GET_FREE_TRIAL.format({
      freeTrialText: r
    });
    else if (a && s === _.PremiumSubscriptionSKUs.TIER_2) return E.default.Messages.BOGO_CHANGE_LOG_REDEEM
  },
  S = (e, t, s, a) => t || s ? E.default.Messages.PREMIUM_DISCOUNT_CTA_WITHOUT_PERCENT : e === _.PremiumSubscriptionSKUs.TIER_2 ? E.default.Messages.PREMIUM_DISCOUNT_CTA.format({
    percent: a
  }) : void 0;
t.default = e => {
  let {
    forceInverted: t,
    subscriptionTier: s,
    isEligibleForBogoPromotion: f = !1,
    isPersistentCTA: I = !1,
    useShorterCTA: m = !1,
    ...p
  } = e, A = (0, n.default)(), N = (0, r.isThemeDark)(A) || t, M = (0, c.usePremiumTrialOffer)(), C = null == M ? void 0 : M.subscription_trial, g = (0, l.formatTrialOfferIntervalDuration)({
    intervalType: null == C ? void 0 : C.interval,
    intervalCount: null == C ? void 0 : C.interval_count
  }), P = (0, u.usePremiumDiscountOffer)(), O = null != C && s === C.sku_id, {
    enabled: x
  } = o.ReferralProgramRecipient.useExperiment({
    location: "SubscribeButton"
  }, {
    autoTrackExposure: !1
  }), b = x && (null == M ? void 0 : M.trial_id) === _.PREMIUM_TIER_2_REFERRAL_TRIAL_ID, h = f ? E.default.Messages.BOGO_CLAIM_OFFER : null != P ? S(s, m, I, P.discount.amount) : T({
    showTrialCTA: O,
    subscriptionTier: s,
    shouldShowUpsells: !1,
    trialDurationCopy: g,
    isPersistentCTA: I,
    shouldShowReferralTrialCopy: b,
    subscriptionTrial: C
  });
  return (0, a.jsx)(d.default, {
    color: N ? i.ButtonColors.BRAND_INVERTED : i.ButtonColors.BRAND,
    buttonShineClassName: "buttonShineClassName" in p ? p.buttonShineClassName : N ? R.brandShine : void 0,
    trialId: null == C ? void 0 : C.id,
    buttonText: h,
    buttonTextClassName: O ? R.freeTrialText : void 0,
    onlyShineOnHover: !0,
    subscriptionTier: s,
    ...p
  })
}