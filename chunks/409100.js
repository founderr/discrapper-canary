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
  f = (e, t, s, a) => t || s ? E.default.Messages.PREMIUM_DISCOUNT_CTA_WITHOUT_PERCENT : e === _.PremiumSubscriptionSKUs.TIER_2 ? E.default.Messages.PREMIUM_DISCOUNT_CTA.format({
    percent: a
  }) : void 0;
t.default = e => {
  let {
    forceInverted: t,
    subscriptionTier: s,
    isEligibleForBogoPromotion: m = !1,
    isPersistentCTA: I = !1,
    useShorterCTA: S = !1,
    ...p
  } = e, A = (0, n.default)(), g = (0, r.isThemeDark)(A) || t, N = (0, c.usePremiumTrialOffer)(), M = null == N ? void 0 : N.subscription_trial, C = (0, l.formatTrialOfferIntervalDuration)({
    intervalType: null == M ? void 0 : M.interval,
    intervalCount: null == M ? void 0 : M.interval_count
  }), P = (0, u.usePremiumDiscountOffer)(), O = null != M && s === M.sku_id, {
    enabled: x
  } = o.ReferralProgramRecipient.useExperiment({
    location: "SubscribeButton"
  }, {
    autoTrackExposure: !1
  }), b = x && (null == N ? void 0 : N.trial_id) === _.PREMIUM_TIER_2_REFERRAL_TRIAL_ID, h = m ? E.default.Messages.BOGO_CLAIM_OFFER : null != P ? f(s, S, I, P.discount.amount) : T({
    showTrialCTA: O,
    subscriptionTier: s,
    shouldShowUpsells: !1,
    trialDurationCopy: C,
    isPersistentCTA: I,
    shouldShowReferralTrialCopy: b,
    subscriptionTrial: M
  });
  return (0, a.jsx)(d.default, {
    color: g ? i.ButtonColors.BRAND_INVERTED : i.ButtonColors.BRAND,
    buttonShineClassName: "buttonShineClassName" in p ? p.buttonShineClassName : g ? R.brandShine : void 0,
    trialId: null == M ? void 0 : M.id,
    buttonText: h,
    buttonTextClassName: O ? R.freeTrialText : void 0,
    onlyShineOnHover: !0,
    subscriptionTier: s,
    ...p
  })
}