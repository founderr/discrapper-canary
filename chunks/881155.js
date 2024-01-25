"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
});
var a = s("37983");
s("884691");
var r = s("819855"),
  n = s("77078"),
  i = s("841098"),
  l = s("719923"),
  u = s("154889"),
  o = s("917247"),
  d = s("635956"),
  c = s("646718"),
  _ = s("782340"),
  E = s("204859");
let I = e => {
    let {
      showTrialCTA: t,
      subscriptionTier: s,
      shouldShowUpsells: a,
      trialDurationCopy: r,
      isPersistentCTA: n,
      subscriptionTrial: i
    } = e;
    if (t && (s === c.PremiumSubscriptionSKUs.TIER_2 || n)) return (0, l.formatTrialCtaIntervalDuration)({
      intervalType: null == i ? void 0 : i.interval,
      intervalCount: null == i ? void 0 : i.interval_count
    });
    if (t) return _.default.Messages.GET_FREE_TRIAL.format({
      freeTrialText: r
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
  } = e, A = (0, i.default)(), N = (0, r.isThemeDark)(A) || s, p = null === (t = (0, o.usePremiumTrialOffer)()) || void 0 === t ? void 0 : t.subscription_trial, g = (0, l.formatTrialOfferIntervalDuration)({
    intervalType: null == p ? void 0 : p.interval,
    intervalCount: null == p ? void 0 : p.interval_count
  }), P = (0, u.usePremiumDiscountOffer)(), C = null != p && c === p.sku_id, M = f ? _.default.Messages.BOGO_CLAIM_OFFER : null != P ? T(c, R, S, P.discount.amount) : I({
    showTrialCTA: C,
    subscriptionTier: c,
    shouldShowUpsells: !1,
    trialDurationCopy: g,
    isPersistentCTA: S,
    subscriptionTrial: p
  });
  return (0, a.jsx)(d.default, {
    color: n.ButtonColors.BRAND,
    look: N ? n.ButtonLooks.INVERTED : void 0,
    buttonShineClassName: "buttonShineClassName" in m ? m.buttonShineClassName : N ? E.brandShine : void 0,
    trialId: null == p ? void 0 : p.id,
    buttonText: M,
    buttonTextClassName: C ? E.freeTrialText : void 0,
    onlyShineOnHover: !0,
    subscriptionTier: c,
    ...m
  })
}