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
    buttonClassName: S = "",
    subtitle: m = "",
    description: p = "",
    descriptionCta: A = "",
    isPremiumGetCta: M,
    onCtaClick: C,
    cardVariant: N
  } = e, g = (0, c.usePremiumTrialOffer)(), P = null == g ? void 0 : g.subscription_trial, O = (0, u.usePremiumDiscountOffer)(), x = (0, l.formatTrialCtaIntervalDuration)({
    intervalType: null == P ? void 0 : P.interval,
    intervalCount: null == P ? void 0 : P.interval_count
  }), b = (0, o.useResponseOnUserState)({
    defaultResponse: T.default.Messages.PREMIUM_SETTINGS_GET,
    onNonTier2Subscriber: T.default.Messages.BILLING_SWITCH_PLAN_UPGRADE,
    onTier2TrialOffer: x,
    onTier0TrialOffer: x,
    onDiscountOffer: T.default.Messages.PREMIUM_DISCOUNT_CTA.format({
      percent: null == O ? void 0 : O.discount.amount
    })
  }), h = (0, d.useCardVariantsInfo)(N);
  return (0, a.jsxs)("div", {
    className: i()(f.cardDescription, null == h ? void 0 : null === (t = h.description) || void 0 === t ? void 0 : t.className),
    children: [(0, a.jsx)(_.default, {
      title: r,
      cardVariantStyleInfo: h,
      titleClassName: I,
      subtitle: m,
      description: p
    }), M && (0, a.jsx)(E.default, {
      className: S,
      subscriptionTier: R.PremiumSubscriptionSKUs.TIER_2,
      buttonText: b,
      color: n.Button.Colors.GREEN,
      look: n.Button.Looks.FILLED
    }), 0 !== A.length && (null == (s = null == h ? void 0 : h.descriptionCta) ? void 0 : s.hideOnHoverComponent) !== !0 && null != C && (0, a.jsx)(n.Button, {
      className: S,
      onClick: C,
      children: A
    })]
  })
}