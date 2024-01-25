"use strict";
s.r(t), s.d(t, {
  default: function() {
    return S
  }
});
var a = s("37983");
s("884691");
var r = s("414456"),
  n = s.n(r),
  i = s("446674"),
  l = s("77078"),
  u = s("915639"),
  o = s("521012"),
  d = s("909469"),
  c = s("485138"),
  _ = s("218435"),
  E = s("881155"),
  I = s("646718"),
  T = s("49111"),
  f = s("456217"),
  S = function(e) {
    let {
      localizedPricingPromo: t,
      smallGap: s
    } = e, r = t.countryCode, S = (0, i.useStateFromStores)([u.default], () => u.default.locale);
    (0, c.useTrackLocalizedPricingPromoImpression)(T.AnalyticsSections.SETTINGS_PREMIUM_BANNER, r);
    let R = (0, i.useStateFromStores)([o.default], () => o.default.getPremiumTypeSubscription()),
      {
        localizedPricingBannerHeader: m,
        localizedPricingBannerBody: A
      } = (0, d.getLocalizedPricingBannerStrings)({
        localizedPricingPromo: t,
        subscription: R,
        userLocale: S
      }),
      N = r.toLowerCase() + "Banner";
    return (0, a.jsxs)("div", {
      className: n(f.bannerContainer, {
        [f.smallGap]: s,
        [f.bigGap]: !s
      }),
      children: [(0, a.jsx)("div", {
        className: n(f[N], f.bannerImageContainer)
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