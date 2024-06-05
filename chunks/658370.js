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
  c = s("639119"),
  d = s("176782"),
  _ = s("743612"),
  E = s("409100"),
  R = s("474936"),
  T = s("689938"),
  f = s("955627");
t.default = e => {
  var t;
  let s;
  let {
    title: r,
    titleClassName: I = "",
    subtitle: S = "",
    description: m = "",
    descriptionCta: p = "",
    isPremiumGetCta: A,
    onCtaClick: N,
    cardVariant: M
  } = e, C = (0, c.usePremiumTrialOffer)(), g = null == C ? void 0 : C.subscription_trial, P = (0, u.usePremiumDiscountOffer)(), O = (0, l.formatTrialCtaIntervalDuration)({
    intervalType: null == g ? void 0 : g.interval,
    intervalCount: null == g ? void 0 : g.interval_count
  }), x = (0, o.useResponseOnUserState)({
    defaultResponse: T.default.Messages.PREMIUM_SETTINGS_GET,
    onNonTier2Subscriber: T.default.Messages.BILLING_SWITCH_PLAN_UPGRADE,
    onTier2TrialOffer: O,
    onTier0TrialOffer: O,
    onDiscountOffer: T.default.Messages.PREMIUM_DISCOUNT_CTA.format({
      percent: null == P ? void 0 : P.discount.amount
    })
  }), b = (0, d.useCardVariantsInfo)(M);
  return (0, a.jsxs)("div", {
    className: i()(f.cardDescription, null == b ? void 0 : null === (t = b.description) || void 0 === t ? void 0 : t.className),
    children: [(0, a.jsx)(_.default, {
      title: r,
      cardVariantStyleInfo: b,
      titleClassName: I,
      subtitle: S,
      description: m
    }), A && (0, a.jsx)(E.default, {
      subscriptionTier: R.PremiumSubscriptionSKUs.TIER_2,
      buttonText: x,
      color: n.Button.Colors.GREEN,
      look: n.Button.Looks.FILLED
    }), 0 !== p.length && (null == (s = null == b ? void 0 : b.descriptionCta) ? void 0 : s.hideOnHoverComponent) !== !0 && null != N && (0, a.jsx)(n.Button, {
      onClick: N,
      children: p
    })]
  })
}