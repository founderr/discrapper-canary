"use strict";
s.r(t);
var a = s("735250");
s("470079");
var i = s("780384"),
  r = s("481060"),
  l = s("410030"),
  n = s("74538"),
  o = s("104494"),
  u = s("639119"),
  d = s("197115"),
  c = s("474936"),
  _ = s("689938"),
  E = s("154787");
let C = e => {
    let {
      showTrialCTA: t,
      subscriptionTier: s,
      shouldShowUpsells: a,
      trialDurationCopy: i,
      isPersistentCTA: r,
      subscriptionTrial: l
    } = e;
    if (t && (s === c.PremiumSubscriptionSKUs.TIER_2 || r)) return (0, n.formatTrialCtaIntervalDuration)({
      intervalType: null == l ? void 0 : l.interval,
      intervalCount: null == l ? void 0 : l.interval_count
    });
    if (t) return _.default.Messages.GET_FREE_TRIAL.format({
      freeTrialText: i
    });
    if (a && s === c.PremiumSubscriptionSKUs.TIER_2) return _.default.Messages.BOGO_CHANGE_LOG_REDEEM
  },
  f = (e, t, s, a) => t || s ? _.default.Messages.PREMIUM_DISCOUNT_CTA_WITHOUT_PERCENT : e === c.PremiumSubscriptionSKUs.TIER_2 ? _.default.Messages.PREMIUM_DISCOUNT_CTA.format({
    percent: a
  }) : void 0;
t.default = e => {
  var t;
  let {
    forceInverted: s,
    subscriptionTier: c,
    isEligibleForBogoPromotion: T = !1,
    isPersistentCTA: I = !1,
    useShorterCTA: R = !1,
    ...S
  } = e, p = (0, l.default)(), m = (0, i.isThemeDark)(p) || s, A = null === (t = (0, u.usePremiumTrialOffer)()) || void 0 === t ? void 0 : t.subscription_trial, g = (0, n.formatTrialOfferIntervalDuration)({
    intervalType: null == A ? void 0 : A.interval,
    intervalCount: null == A ? void 0 : A.interval_count
  }), N = (0, o.usePremiumDiscountOffer)(), O = null != A && c === A.sku_id, P = T ? _.default.Messages.BOGO_CLAIM_OFFER : null != N ? f(c, R, I, N.discount.amount) : C({
    showTrialCTA: O,
    subscriptionTier: c,
    shouldShowUpsells: !1,
    trialDurationCopy: g,
    isPersistentCTA: I,
    subscriptionTrial: A
  });
  return (0, a.jsx)(d.default, {
    color: r.ButtonColors.BRAND,
    look: m ? r.ButtonLooks.INVERTED : void 0,
    buttonShineClassName: "buttonShineClassName" in S ? S.buttonShineClassName : m ? E.brandShine : void 0,
    trialId: null == A ? void 0 : A.id,
    buttonText: P,
    buttonTextClassName: O ? E.freeTrialText : void 0,
    onlyShineOnHover: !0,
    subscriptionTier: c,
    ...S
  })
}