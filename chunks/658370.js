var n = s(735250);
s(470079);
var a = s(120356),
  i = s.n(a),
  r = s(481060),
  l = s(74538),
  o = s(773104),
  c = s(104494),
  E = s(639119),
  _ = s(176782),
  u = s(743612),
  d = s(409100),
  T = s(474936),
  I = s(689938),
  R = s(52689);
t.Z = e => {
  var t;
  let s;
  let {
    title: a,
    titleClassName: A = "",
    buttonClassName: N = "",
    subtitle: C = "",
    description: g = "",
    descriptionCta: m = "",
    isPremiumGetCta: M,
    onCtaClick: S,
    cardVariant: p
  } = e, h = (0, E.N)(), f = null == h ? void 0 : h.subscription_trial, O = (0, c.Ng)(), x = (0, l.Rt)({
    intervalType: null == f ? void 0 : f.interval,
    intervalCount: null == f ? void 0 : f.interval_count
  }), L = (0, o._)({
    defaultResponse: I.Z.Messages.PREMIUM_SETTINGS_GET,
    onNonTier2Subscriber: I.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE,
    onTier2TrialOffer: x,
    onTier0TrialOffer: x,
    onDiscountOffer: I.Z.Messages.PREMIUM_DISCOUNT_CTA.format({
      percent: null == O ? void 0 : O.discount.amount
    })
  }), P = (0, _._)(p);
  return (0, n.jsxs)("div", {
    className: i()(R.cardDescription, null == P ? void 0 : null === (t = P.description) || void 0 === t ? void 0 : t.className),
    children: [(0, n.jsx)(u.Z, {
      title: a,
      cardVariantStyleInfo: P,
      titleClassName: A,
      subtitle: C,
      description: g
    }), M && (0, n.jsx)(d.Z, {
      className: N,
      subscriptionTier: T.Si.TIER_2,
      buttonText: L,
      color: r.Button.Colors.GREEN,
      look: r.Button.Looks.FILLED
    }), 0 !== m.length && (null == (s = null == P ? void 0 : P.descriptionCta) ? void 0 : s.hideOnHoverComponent) !== !0 && null != S && (0, n.jsx)(r.Button, {
      className: N,
      onClick: S,
      children: m
    })]
  })
}