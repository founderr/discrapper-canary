"use strict";
s.r(t);
var a = s("735250");
s("470079");
var i = s("803997"),
  r = s.n(i),
  l = s("481060"),
  n = s("906732"),
  o = s("646476"),
  u = s("197115"),
  d = s("689938"),
  c = s("860831"),
  _ = s("568147"),
  E = s("332796");
t.default = e => {
  let {
    className: t,
    imageClassName: s,
    textContainerOverrideStyles: i,
    location: C,
    analyticsLocation: f
  } = e, {
    analyticsLocations: T
  } = (0, n.default)(C), I = (0, o.useIsSeasonalGiftingActive)(), {
    enabled: R
  } = o.SeasonalGiftingMarketingExperiment.useExperiment({
    location: "GiftNitro"
  }, {
    autoTrackExposure: I
  }), S = R && I;
  return (0, a.jsx)(n.AnalyticsLocationProvider, {
    value: T,
    children: (0, a.jsxs)("div", {
      className: r()(c.container, t),
      children: [(0, a.jsxs)("div", {
        className: c.textContainer,
        style: i,
        children: [(0, a.jsx)(l.Heading, {
          variant: "heading-lg/extrabold",
          className: c.heading,
          children: S ? d.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_SEASONAL_GIFT_HEADING : d.default.Messages.GIFT_NITRO
        }), (0, a.jsx)(l.Text, {
          variant: "text-sm/medium",
          children: S ? d.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_SEASONAL_GIFT_BODY : d.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_BODY
        }), (0, a.jsx)(u.default, {
          isGift: !0,
          className: c.giftCardButton,
          look: l.Button.Looks.OUTLINED,
          buttonText: d.default.Messages.GIFT_NITRO,
          buttonTextClassName: c.giftButtonCTA,
          color: l.Button.Colors.CUSTOM,
          premiumModalAnalyticsLocation: f
        })]
      }), (0, a.jsx)("img", {
        src: S ? E : _,
        className: r()(c.bannerImage, s),
        alt: "gift nitro banner"
      })]
    })
  })
}