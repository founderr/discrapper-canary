"use strict";
s.r(t), s.d(t, {
  default: function() {
    return S
  }
});
var a = s("37983");
s("884691");
var i = s("414456"),
  r = s.n(i),
  n = s("446674"),
  l = s("77078"),
  o = s("915639"),
  u = s("521012"),
  d = s("909469"),
  c = s("485138"),
  _ = s("218435"),
  E = s("881155"),
  I = s("646718"),
  T = s("49111"),
  f = s("924509"),
  S = function(e) {
    let {
      localizedPricingPromo: t,
      smallGap: s
    } = e, i = t.countryCode, S = (0, n.useStateFromStores)([o.default], () => o.default.locale);
    (0, c.useTrackLocalizedPricingPromoImpression)(T.AnalyticsSections.SETTINGS_PREMIUM_BANNER, i);
    let R = (0, n.useStateFromStores)([u.default], () => u.default.getPremiumTypeSubscription()),
      {
        localizedPricingBannerHeader: m,
        localizedPricingBannerBody: A
      } = (0, d.getLocalizedPricingBannerStrings)({
        localizedPricingPromo: t,
        subscription: R,
        userLocale: S
      }),
      p = i.toLowerCase() + "Banner";
    return (0, a.jsxs)("div", {
      className: r(f.bannerContainer, {
        [f.smallGap]: s,
        [f.bigGap]: !s
      }),
      children: [(0, a.jsx)("div", {
        className: r(f[p], f.bannerImageContainer)
      }), (0, a.jsx)(l.Heading, {
        className: f.bannerHeading,
        variant: "heading-xl/semibold",
        children: m
      }), (0, a.jsx)("div", {
        className: f.textContainer,
        children: (0, a.jsx)(l.Text, {
          color: "none",
          variant: "text-md/normal",
          className: f.bannerBody,
          children: A
        })
      }), (0, a.jsxs)("div", {
        className: f.ctaButtonContainer,
        children: [(0, a.jsx)(E.default, {
          forceInverted: !0,
          className: f.ctaButton,
          subscriptionTier: I.PremiumSubscriptionSKUs.TIER_2
        }), (0, a.jsx)(_.default, {
          forceWhite: !0,
          subscriptionTier: I.PremiumSubscriptionSKUs.TIER_2,
          className: f.ctaButton
        })]
      })]
    })
  }