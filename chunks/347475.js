var n = t(735250);
t(470079);
var a = t(120356),
  r = t.n(a),
  i = t(481060),
  l = t(906732),
  o = t(646476),
  _ = t(197115),
  c = t(689938),
  E = t(55420),
  u = t(568147),
  R = t(332796);
s.Z = e => {
  let {
    className: s,
    imageClassName: t,
    textContainerOverrideStyles: a,
    location: d,
    analyticsLocation: I
  } = e, {
    analyticsLocations: T
  } = (0, l.ZP)(d), A = (0, o.rK)(), {
    enabled: M
  } = o.RO.useExperiment({
    location: "GiftNitro"
  }, {
    autoTrackExposure: A
  }), S = M && A;
  return (0, n.jsx)(l.Gt, {
    value: T,
    children: (0, n.jsxs)("div", {
      className: r()(E.container, s),
      children: [(0, n.jsxs)("div", {
        className: E.textContainer,
        style: a,
        children: [(0, n.jsx)(i.Heading, {
          variant: "heading-lg/extrabold",
          className: E.heading,
          children: S ? c.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_SEASONAL_GIFT_HEADING : c.Z.Messages.GIFT_NITRO
        }), (0, n.jsx)(i.Text, {
          variant: "text-sm/medium",
          children: S ? c.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_SEASONAL_GIFT_BODY : c.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_BODY
        }), (0, n.jsx)(_.Z, {
          isGift: !0,
          className: E.giftCardButton,
          look: i.Button.Looks.OUTLINED,
          buttonText: c.Z.Messages.GIFT_NITRO,
          buttonTextClassName: E.giftButtonCTA,
          color: i.Button.Colors.CUSTOM,
          premiumModalAnalyticsLocation: I
        })]
      }), (0, n.jsx)("img", {
        src: S ? R : u,
        className: r()(E.bannerImage, t),
        alt: "gift nitro banner"
      })]
    })
  })
}