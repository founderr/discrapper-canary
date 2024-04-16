"use strict";
s.r(t);
var a = s("735250");
s("470079");
var i = s("120356"),
  r = s.n(i),
  l = s("481060"),
  n = s("74538"),
  o = s("773104"),
  u = s("104494"),
  d = s("639119"),
  c = s("176782"),
  _ = s("743612"),
  E = s("409100"),
  C = s("474936"),
  f = s("689938"),
  T = s("622481");
t.default = e => {
  var t;
  let s;
  let {
    title: i,
    titleClassName: I = "",
    subtitle: R = "",
    description: S = "",
    descriptionCta: p = "",
    isPremiumGetCta: m,
    onCtaClick: A,
    cardVariant: g
  } = e, N = (0, d.usePremiumTrialOffer)(), O = null == N ? void 0 : N.subscription_trial, P = (0, u.usePremiumDiscountOffer)(), M = (0, n.formatTrialCtaIntervalDuration)({
    intervalType: null == O ? void 0 : O.interval,
    intervalCount: null == O ? void 0 : O.interval_count
  }), h = (0, o.useResponseOnUserState)({
    defaultResponse: f.default.Messages.PREMIUM_SETTINGS_GET,
    onNonTier2Subscriber: f.default.Messages.BILLING_SWITCH_PLAN_UPGRADE,
    onTier2TrialOffer: M,
    onTier0TrialOffer: M,
    onDiscountOffer: f.default.Messages.PREMIUM_DISCOUNT_CTA.format({
      percent: null == P ? void 0 : P.discount.amount
    })
  }), x = (0, c.useCardVariantsInfo)(g);
  return (0, a.jsxs)("div", {
    className: r()(T.cardDescription, null == x ? void 0 : null === (t = x.description) || void 0 === t ? void 0 : t.className),
    children: [(0, a.jsx)(_.default, {
      title: i,
      cardVariantStyleInfo: x,
      titleClassName: I,
      subtitle: R,
      description: S
    }), m && (0, a.jsx)(E.default, {
      subscriptionTier: C.PremiumSubscriptionSKUs.TIER_2,
      buttonText: h,
      color: l.Button.Colors.GREEN,
      look: l.Button.Looks.FILLED
    }), 0 !== p.length && (null == (s = null == x ? void 0 : x.descriptionCta) ? void 0 : s.hideOnHoverComponent) !== !0 && null != A && (0, a.jsx)(l.Button, {
      onClick: A,
      children: p
    })]
  })
}