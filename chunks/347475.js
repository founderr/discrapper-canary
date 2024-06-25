var n = s(735250);
s(470079);
var a = s(120356),
  i = s.n(a),
  r = s(481060),
  l = s(906732),
  o = s(646476),
  c = s(197115),
  E = s(689938),
  _ = s(55420),
  u = s(568147),
  d = s(332796);
t.Z = e => {
  let {
    className: t,
    imageClassName: s,
    textContainerOverrideStyles: a,
    location: T,
    analyticsLocation: I
  } = e, {
    analyticsLocations: R
  } = (0, l.ZP)(T), A = (0, o.rK)(), {
    enabled: N
  } = o.RO.useExperiment({
    location: "GiftNitro"
  }, {
    autoTrackExposure: A
  }), C = N && A;
  return (0, n.jsx)(l.Gt, {
    value: R,
    children: (0, n.jsxs)("div", {
      className: i()(_.container, t),
      children: [(0, n.jsxs)("div", {
        className: _.textContainer,
        style: a,
        children: [(0, n.jsx)(r.Heading, {
          variant: "heading-lg/extrabold",
          className: _.heading,
          children: C ? E.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_SEASONAL_GIFT_HEADING : E.Z.Messages.GIFT_NITRO
        }), (0, n.jsx)(r.Text, {
          variant: "text-sm/medium",
          children: C ? E.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_SEASONAL_GIFT_BODY : E.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_BODY
        }), (0, n.jsx)(c.Z, {
          isGift: !0,
          className: _.giftCardButton,
          look: r.Button.Looks.OUTLINED,
          buttonText: E.Z.Messages.GIFT_NITRO,
          buttonTextClassName: _.giftButtonCTA,
          color: r.Button.Colors.CUSTOM,
          premiumModalAnalyticsLocation: I
        })]
      }), (0, n.jsx)("img", {
        src: C ? d : u,
        className: i()(_.bannerImage, s),
        alt: "gift nitro banner"
      })]
    })
  })
}