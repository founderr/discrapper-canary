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
  R = t(409100),
  d = t(474936),
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
    onCtaClick: C,
    cardVariant: g
  } = e, P = (0, c.N)(), O = null == P ? void 0 : P.subscription_trial, f = (0, _.Ng)(), x = (0, l.Rt)({
    intervalType: null == O ? void 0 : O.interval,
    intervalCount: null == O ? void 0 : O.interval_count
  }), L = (0, o._)({
    defaultResponse: I.Z.Messages.PREMIUM_SETTINGS_GET,
    onNonTier2Subscriber: I.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE,
    onTier2TrialOffer: x,
    onTier0TrialOffer: x,
    onDiscountOffer: I.Z.Messages.PREMIUM_DISCOUNT_CTA.format({
      percent: null == f ? void 0 : f.discount.amount
    })
  }), h = (0, E._)(g);
  return (0, n.jsxs)("div", {
    className: r()(T.cardDescription, null == h ? void 0 : null === (s = h.description) || void 0 === s ? void 0 : s.className),
    children: [(0, n.jsx)(u.Z, {
      title: a,
      cardVariantStyleInfo: h,
      titleClassName: A,
      subtitle: S,
      description: N
    }), m && (0, n.jsx)(R.Z, {
      className: M,
      subscriptionTier: d.Si.TIER_2,
      buttonText: L,
      color: i.Button.Colors.GREEN,
      look: i.Button.Looks.FILLED
    }), 0 !== p.length && (null == (t = null == h ? void 0 : h.descriptionCta) ? void 0 : t.hideOnHoverComponent) !== !0 && null != C && (0, n.jsx)(i.Button, {
      className: M,
      onClick: C,
      children: p
    })]
  })
}