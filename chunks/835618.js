"use strict";
s.r(t), s.d(t, {
  default: function() {
    return I
  }
});
var a = s("37983");
s("884691");
var n = s("414456"),
  i = s.n(n),
  r = s("77078"),
  l = s("685665"),
  u = s("53253"),
  o = s("635956"),
  d = s("782340"),
  c = s("903610"),
  _ = s("35257"),
  E = s("871938"),
  I = e => {
    let {
      className: t,
      imageClassName: s,
      textContainerOverrideStyles: n,
      location: I,
      analyticsLocation: T
    } = e, {
      AnalyticsLocationProvider: f
    } = (0, l.default)(I), S = (0, u.useIsSeasonalGiftingActive)(), {
      enabled: R
    } = u.SeasonalGiftingMarketingExperiment.useExperiment({
      location: "GiftNitro"
    }, {
      autoTrackExposure: S
    }), A = R && S;
    return (0, a.jsx)(f, {
      children: (0, a.jsxs)("div", {
        className: i(c.container, t),
        children: [(0, a.jsxs)("div", {
          className: c.textContainer,
          style: n,
          children: [(0, a.jsx)(r.Heading, {
            variant: "heading-lg/extrabold",
            className: c.heading,
            children: A ? d.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_SEASONAL_GIFT_HEADING : d.default.Messages.GIFT_NITRO
          }), (0, a.jsx)(r.Text, {
            variant: "text-sm/medium",
            children: A ? d.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_SEASONAL_GIFT_BODY : d.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_BODY
          }), (0, a.jsx)(o.default, {
            isGift: !0,
            className: c.giftCardButton,
            look: r.Button.Looks.OUTLINED,
            buttonText: d.default.Messages.GIFT_NITRO,
            buttonTextClassName: c.giftButtonCTA,
            color: r.Button.Colors.CUSTOM,
            premiumModalAnalyticsLocation: T
          })]
        }), (0, a.jsx)("img", {
          src: A ? E : _,
          className: i(c.bannerImage, s),
          alt: "gift nitro banner"
        })]
      })
    })
  }