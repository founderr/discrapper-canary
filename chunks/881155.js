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
  o = s("154889"),
  u = s("917247"),
  d = s("635956"),
  c = s("646718"),
  _ = s("782340"),
  E = s("947111");
let T = e => {
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
  I = (e, t, s, a) => t || s ? _.default.Messages.PREMIUM_DISCOUNT_CTA_WITHOUT_PERCENT : e === c.PremiumSubscriptionSKUs.TIER_2 ? _.default.Messages.PREMIUM_DISCOUNT_CTA.format({
    percent: a
  }) : void 0;
var f = e => {
  var t;
  let {
    forceInverted: s,
    subscriptionTier: c,
    isEligibleForBogoPromotion: f = !1,
    isPersistentCTA: R = !1,
    useShorterCTA: S = !1,
    ...m
  } = e, N = (0, i.default)(), A = (0, r.isThemeDark)(N) || s, p = null === (t = (0, u.usePremiumTrialOffer)()) || void 0 === t ? void 0 : t.subscription_trial, C = (0, l.formatTrialOfferIntervalDuration)({
    intervalType: null == p ? void 0 : p.interval,
    intervalCount: null == p ? void 0 : p.interval_count
  }), g = (0, o.usePremiumDiscountOffer)(), O = null != p && c === p.sku_id, P = f ? _.default.Messages.BOGO_CLAIM_OFFER : null != g ? I(c, S, R, g.discount.amount) : T({
    showTrialCTA: O,
    subscriptionTier: c,
    shouldShowUpsells: !1,
    trialDurationCopy: C,
    isPersistentCTA: R,
    subscriptionTrial: p
  });
  return (0, a.jsx)(d.default, {
    color: n.ButtonColors.BRAND,
    look: A ? n.ButtonLooks.INVERTED : void 0,
    buttonShineClassName: "buttonShineClassName" in m ? m.buttonShineClassName : A ? E.brandShine : void 0,
    trialId: null == p ? void 0 : p.id,
    buttonText: P,
    buttonTextClassName: O ? E.freeTrialText : void 0,
    onlyShineOnHover: !0,
    subscriptionTier: c,
    ...m
  })
}