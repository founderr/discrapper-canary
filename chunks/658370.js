var n = t(735250);
t(470079);
var a = t(120356),
  r = t.n(a),
  i = t(481060),
  l = t(74538),
  o = t(773104),
  _ = t(104494),
  c = t(639119),
  E = t(176782),
  u = t(743612),
  d = t(409100),
  R = t(474936),
  I = t(689938),
  T = t(52689);
s.Z = e => {
  var s;
  let t;
  let {
    title: a,
    titleClassName: A = "",
    buttonClassName: M = "",
    subtitle: S = "",
    description: N = "",
    descriptionCta: p = "",
    isPremiumGetCta: m,
    onCtaClick: g,
    cardVariant: C
  } = e, f = (0, c.N)(), P = null == f ? void 0 : f.subscription_trial, O = (0, _.Ng)(), x = (0, l.Rt)({
    intervalType: null == P ? void 0 : P.interval,
    intervalCount: null == P ? void 0 : P.interval_count
  }), h = (0, o._)({
    defaultResponse: I.Z.Messages.PREMIUM_SETTINGS_GET,
    onNonTier2Subscriber: I.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE,
    onTier2TrialOffer: x,
    onTier0TrialOffer: x,
    onDiscountOffer: I.Z.Messages.PREMIUM_DISCOUNT_CTA.format({
      percent: null == O ? void 0 : O.discount.amount
    })
  }), L = (0, E._)(C);
  return (0, n.jsxs)("div", {
    className: r()(T.cardDescription, null == L ? void 0 : null === (s = L.description) || void 0 === s ? void 0 : s.className),
    children: [(0, n.jsx)(u.Z, {
      title: a,
      cardVariantStyleInfo: L,
      titleClassName: A,
      subtitle: S,
      description: N
    }), m && (0, n.jsx)(d.Z, {
      className: M,
      subscriptionTier: R.Si.TIER_2,
      buttonText: h,
      color: i.Button.Colors.GREEN,
      look: i.Button.Looks.FILLED
    }), 0 !== p.length && (null == (t = null == L ? void 0 : L.descriptionCta) ? void 0 : t.hideOnHoverComponent) !== !0 && null != g && (0, n.jsx)(i.Button, {
      className: M,
      onClick: g,
      children: p
    })]
  })
}