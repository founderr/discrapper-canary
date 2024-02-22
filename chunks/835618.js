"use strict";
s.r(t), s.d(t, {
  default: function() {
    return I
  }
});
var a = s("37983");
s("884691");
var i = s("414456"),
  n = s.n(i),
  r = s("77078"),
  l = s("685665"),
  o = s("53253"),
  u = s("635956"),
  d = s("782340"),
  c = s("345870"),
  _ = s("35257"),
  E = s("871938"),
  I = e => {
    let {
      className: t,
      imageClassName: s,
      textContainerOverrideStyles: i,
      location: I,
      analyticsLocation: T
    } = e, {
      AnalyticsLocationProvider: f
    } = (0, l.default)(I), S = (0, o.useIsSeasonalGiftingActive)(), {
      enabled: R
    } = o.SeasonalGiftingMarketingExperiment.useExperiment({
      location: "GiftNitro"
    }, {
      autoTrackExposure: S
    }), m = R && S;
    return (0, a.jsx)(f, {
      children: (0, a.jsxs)("div", {
        className: n(c.container, t),
        children: [(0, a.jsxs)("div", {
          className: c.textContainer,
          style: i,
          children: [(0, a.jsx)(r.Heading, {
            variant: "heading-lg/extrabold",
            className: c.heading,
            children: m ? d.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_SEASONAL_GIFT_HEADING : d.default.Messages.GIFT_NITRO
          }), (0, a.jsx)(r.Text, {
            variant: "text-sm/medium",
            children: m ? d.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_SEASONAL_GIFT_BODY : d.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_BODY
          }), (0, a.jsx)(u.default, {
            isGift: !0,
            className: c.giftCardButton,
            look: r.Button.Looks.OUTLINED,
            buttonText: d.default.Messages.GIFT_NITRO,
            buttonTextClassName: c.giftButtonCTA,
            color: r.Button.Colors.CUSTOM,
            premiumModalAnalyticsLocation: T
          })]
        }), (0, a.jsx)("img", {
          src: m ? E : _,
          className: n(c.bannerImage, s),
          alt: "gift nitro banner"
        })]
      })
    })
  }