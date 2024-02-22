"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
});
var a = s("37983");
s("884691");
var i = s("819855"),
  n = s("77078"),
  r = s("841098"),
  l = s("719923"),
  o = s("154889"),
  u = s("917247"),
  d = s("635956"),
  c = s("646718"),
  _ = s("782340"),
  E = s("947111");
let I = e => {
    let {
      showTrialCTA: t,
      subscriptionTier: s,
      shouldShowUpsells: a,
      trialDurationCopy: i,
      isPersistentCTA: n,
      subscriptionTrial: r
    } = e;
    if (t && (s === c.PremiumSubscriptionSKUs.TIER_2 || n)) return (0, l.formatTrialCtaIntervalDuration)({
      intervalType: null == r ? void 0 : r.interval,
      intervalCount: null == r ? void 0 : r.interval_count
    });
    if (t) return _.default.Messages.GET_FREE_TRIAL.format({
      freeTrialText: i
    });
    if (a && s === c.PremiumSubscriptionSKUs.TIER_2) return _.default.Messages.BOGO_CHANGE_LOG_REDEEM
  },
  T = (e, t, s, a) => t || s ? _.default.Messages.PREMIUM_DISCOUNT_CTA_WITHOUT_PERCENT : e === c.PremiumSubscriptionSKUs.TIER_2 ? _.default.Messages.PREMIUM_DISCOUNT_CTA.format({
    percent: a
  }) : void 0;
var f = e => {
  var t;
  let {
    forceInverted: s,
    subscriptionTier: c,
    isEligibleForBogoPromotion: f = !1,
    isPersistentCTA: S = !1,
    useShorterCTA: R = !1,
    ...m
  } = e, A = (0, r.default)(), p = (0, i.isThemeDark)(A) || s, N = null === (t = (0, u.usePremiumTrialOffer)()) || void 0 === t ? void 0 : t.subscription_trial, g = (0, l.formatTrialOfferIntervalDuration)({
    intervalType: null == N ? void 0 : N.interval,
    intervalCount: null == N ? void 0 : N.interval_count
  }), C = (0, o.usePremiumDiscountOffer)(), P = null != N && c === N.sku_id, O = f ? _.default.Messages.BOGO_CLAIM_OFFER : null != C ? T(c, R, S, C.discount.amount) : I({
    showTrialCTA: P,
    subscriptionTier: c,
    shouldShowUpsells: !1,
    trialDurationCopy: g,
    isPersistentCTA: S,
    subscriptionTrial: N
  });
  return (0, a.jsx)(d.default, {
    color: n.ButtonColors.BRAND,
    look: p ? n.ButtonLooks.INVERTED : void 0,
    buttonShineClassName: "buttonShineClassName" in m ? m.buttonShineClassName : p ? E.brandShine : void 0,
    trialId: null == N ? void 0 : N.id,
    buttonText: O,
    buttonTextClassName: P ? E.freeTrialText : void 0,
    onlyShineOnHover: !0,
    subscriptionTier: c,
    ...m
  })
}