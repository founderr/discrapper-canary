"use strict";
s.r(t);
var a = s("735250");
s("470079");
var r = s("120356"),
  i = s.n(r),
  n = s("481060"),
  l = s("74538"),
  o = s("773104"),
  u = s("104494"),
  d = s("639119"),
  c = s("176782"),
  _ = s("743612"),
  E = s("409100"),
  T = s("474936"),
  I = s("689938"),
  R = s("955627");
t.default = e => {
  var t;
  let s;
  let {
    title: r,
    titleClassName: f = "",
    buttonClassName: S = "",
    subtitle: A = "",
    description: m = "",
    descriptionCta: N = "",
    isPremiumGetCta: p,
    onCtaClick: g,
    cardVariant: C
  } = e, P = (0, d.usePremiumTrialOffer)(), O = null == P ? void 0 : P.subscription_trial, M = (0, u.usePremiumDiscountOffer)(), h = (0, l.formatTrialCtaIntervalDuration)({
    intervalType: null == O ? void 0 : O.interval,
    intervalCount: null == O ? void 0 : O.interval_count
  }), L = (0, o.useResponseOnUserState)({
    defaultResponse: I.default.Messages.PREMIUM_SETTINGS_GET,
    onNonTier2Subscriber: I.default.Messages.BILLING_SWITCH_PLAN_UPGRADE,
    onTier2TrialOffer: h,
    onTier0TrialOffer: h,
    onDiscountOffer: I.default.Messages.PREMIUM_DISCOUNT_CTA.format({
      percent: null == M ? void 0 : M.discount.amount
    })
  }), x = (0, c.useCardVariantsInfo)(C);
  return (0, a.jsxs)("div", {
    className: i()(R.cardDescription, null == x ? void 0 : null === (t = x.description) || void 0 === t ? void 0 : t.className),
    children: [(0, a.jsx)(_.default, {
      title: r,
      cardVariantStyleInfo: x,
      titleClassName: f,
      subtitle: A,
      description: m
    }), p && (0, a.jsx)(E.default, {
      className: S,
      subscriptionTier: T.PremiumSubscriptionSKUs.TIER_2,
      buttonText: L,
      color: n.Button.Colors.GREEN,
      look: n.Button.Looks.FILLED
    }), 0 !== N.length && (null == (s = null == x ? void 0 : x.descriptionCta) ? void 0 : s.hideOnHoverComponent) !== !0 && null != g && (0, a.jsx)(n.Button, {
      className: S,
      onClick: g,
      children: N
    })]
  })
}