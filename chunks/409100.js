"use strict";
s.r(t);
var a = s("735250");
s("470079");
var i = s("780384"),
  r = s("481060"),
  n = s("410030"),
  l = s("74538"),
  o = s("104494"),
  u = s("639119"),
  d = s("197115"),
  c = s("474936"),
  _ = s("689938"),
  E = s("154787");
let T = e => {
    let {
      showTrialCTA: t,
      subscriptionTier: s,
      shouldShowUpsells: a,
      trialDurationCopy: i,
      isPersistentCTA: r,
      subscriptionTrial: n
    } = e;
    if (t && (s === c.PremiumSubscriptionSKUs.TIER_2 || r)) return (0, l.formatTrialCtaIntervalDuration)({
      intervalType: null == n ? void 0 : n.interval,
      intervalCount: null == n ? void 0 : n.interval_count
    });
    if (t) return _.default.Messages.GET_FREE_TRIAL.format({
      freeTrialText: i
    });
    if (a && s === c.PremiumSubscriptionSKUs.TIER_2) return _.default.Messages.BOGO_CHANGE_LOG_REDEEM
  },
  I = (e, t, s, a) => t || s ? _.default.Messages.PREMIUM_DISCOUNT_CTA_WITHOUT_PERCENT : e === c.PremiumSubscriptionSKUs.TIER_2 ? _.default.Messages.PREMIUM_DISCOUNT_CTA.format({
    percent: a
  }) : void 0;
t.default = e => {
  var t;
  let {
    forceInverted: s,
    subscriptionTier: c,
    isEligibleForBogoPromotion: R = !1,
    isPersistentCTA: f = !1,
    useShorterCTA: S = !1,
    ...m
  } = e, A = (0, n.default)(), N = (0, i.isThemeDark)(A) || s, p = null === (t = (0, u.usePremiumTrialOffer)()) || void 0 === t ? void 0 : t.subscription_trial, g = (0, l.formatTrialOfferIntervalDuration)({
    intervalType: null == p ? void 0 : p.interval,
    intervalCount: null == p ? void 0 : p.interval_count
  }), C = (0, o.usePremiumDiscountOffer)(), O = null != p && c === p.sku_id, P = R ? _.default.Messages.BOGO_CLAIM_OFFER : null != C ? I(c, S, f, C.discount.amount) : T({
    showTrialCTA: O,
    subscriptionTier: c,
    shouldShowUpsells: !1,
    trialDurationCopy: g,
    isPersistentCTA: f,
    subscriptionTrial: p
  });
  return (0, a.jsx)(d.default, {
    color: r.ButtonColors.BRAND,
    look: N ? r.ButtonLooks.INVERTED : void 0,
    buttonShineClassName: "buttonShineClassName" in m ? m.buttonShineClassName : N ? E.brandShine : void 0,
    trialId: null == p ? void 0 : p.id,
    buttonText: P,
    buttonTextClassName: O ? E.freeTrialText : void 0,
    onlyShineOnHover: !0,
    subscriptionTier: c,
    ...m
  })
}