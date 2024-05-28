"use strict";
s.r(t);
var a = s("735250");
s("470079");
var r = s("120356"),
  i = s.n(r),
  n = s("481060"),
  l = s("906732"),
  o = s("646476"),
  u = s("197115"),
  c = s("689938"),
  d = s("805229"),
  _ = s("568147"),
  E = s("332796");
t.default = e => {
  let {
    className: t,
    imageClassName: s,
    textContainerOverrideStyles: r,
    location: R,
    analyticsLocation: T
  } = e, {
    analyticsLocations: f
  } = (0, l.default)(R), m = (0, o.useIsSeasonalGiftingActive)(), {
    enabled: I
  } = o.SeasonalGiftingMarketingExperiment.useExperiment({
    location: "GiftNitro"
  }, {
    autoTrackExposure: m
  }), S = I && m;
  return (0, a.jsx)(l.AnalyticsLocationProvider, {
    value: f,
    children: (0, a.jsxs)("div", {
      className: i()(d.container, t),
      children: [(0, a.jsxs)("div", {
        className: d.textContainer,
        style: r,
        children: [(0, a.jsx)(n.Heading, {
          variant: "heading-lg/extrabold",
          className: d.heading,
          children: S ? c.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_SEASONAL_GIFT_HEADING : c.default.Messages.GIFT_NITRO
        }), (0, a.jsx)(n.Text, {
          variant: "text-sm/medium",
          children: S ? c.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_SEASONAL_GIFT_BODY : c.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_BODY
        }), (0, a.jsx)(u.default, {
          isGift: !0,
          className: d.giftCardButton,
          look: n.Button.Looks.OUTLINED,
          buttonText: c.default.Messages.GIFT_NITRO,
          buttonTextClassName: d.giftButtonCTA,
          color: n.Button.Colors.CUSTOM,
          premiumModalAnalyticsLocation: T
        })]
      }), (0, a.jsx)("img", {
        src: S ? E : _,
        className: i()(d.bannerImage, s),
        alt: "gift nitro banner"
      })]
    })
  })
}