"use strict";
s.r(t);
var a = s("735250");
s("470079");
var i = s("780384"),
  r = s("481060"),
  l = s("410030"),
  n = s("74538"),
  o = s("650032"),
  u = s("104494"),
  d = s("639119"),
  c = s("197115"),
  _ = s("474936"),
  E = s("689938"),
  C = s("154787");
let f = e => {
    let {
      showTrialCTA: t,
      subscriptionTier: s,
      shouldShowUpsells: a,
      trialDurationCopy: i,
      isPersistentCTA: r,
      shouldShowReferralTrialCopy: l,
      subscriptionTrial: o
    } = e;
    if (t && l) return E.default.Messages.REFERRAL_PROGRAM_START_TRIAL;
    if (t && (s === _.PremiumSubscriptionSKUs.TIER_2 || r)) return (0, n.formatTrialCtaIntervalDuration)({
      intervalType: null == o ? void 0 : o.interval,
      intervalCount: null == o ? void 0 : o.interval_count
    });
    if (t) return E.default.Messages.GET_FREE_TRIAL.format({
      freeTrialText: i
    });
    else if (a && s === _.PremiumSubscriptionSKUs.TIER_2) return E.default.Messages.BOGO_CHANGE_LOG_REDEEM
  },
  T = (e, t, s, a) => t || s ? E.default.Messages.PREMIUM_DISCOUNT_CTA_WITHOUT_PERCENT : e === _.PremiumSubscriptionSKUs.TIER_2 ? E.default.Messages.PREMIUM_DISCOUNT_CTA.format({
    percent: a
  }) : void 0;
t.default = e => {
  let {
    forceInverted: t,
    subscriptionTier: s,
    isEligibleForBogoPromotion: I = !1,
    isPersistentCTA: R = !1,
    useShorterCTA: S = !1,
    ...p
  } = e, m = (0, l.default)(), A = (0, i.isThemeDark)(m) || t, N = (0, d.usePremiumTrialOffer)(), g = null == N ? void 0 : N.subscription_trial, O = (0, n.formatTrialOfferIntervalDuration)({
    intervalType: null == g ? void 0 : g.interval,
    intervalCount: null == g ? void 0 : g.interval_count
  }), P = (0, u.usePremiumDiscountOffer)(), M = null != g && s === g.sku_id, {
    enabled: h
  } = o.ReferralProgramRecipient.useExperiment({
    location: "SubscribeButton"
  }, {
    autoTrackExposure: !1
  }), x = h && (null == N ? void 0 : N.trial_id) === _.PREMIUM_TIER_2_REFERRAL_TRIAL_ID, L = I ? E.default.Messages.BOGO_CLAIM_OFFER : null != P ? T(s, S, R, P.discount.amount) : f({
    showTrialCTA: M,
    subscriptionTier: s,
    shouldShowUpsells: !1,
    trialDurationCopy: O,
    isPersistentCTA: R,
    shouldShowReferralTrialCopy: x,
    subscriptionTrial: g
  });
  return (0, a.jsx)(c.default, {
    color: r.ButtonColors.BRAND,
    look: A ? r.ButtonLooks.INVERTED : void 0,
    buttonShineClassName: "buttonShineClassName" in p ? p.buttonShineClassName : A ? C.brandShine : void 0,
    trialId: null == g ? void 0 : g.id,
    buttonText: L,
    buttonTextClassName: M ? C.freeTrialText : void 0,
    onlyShineOnHover: !0,
    subscriptionTier: s,
    ...p
  })
}