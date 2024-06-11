"use strict";
s.r(t);
var a = s("735250");
s("470079");
var r = s("120356"),
  i = s.n(r),
  n = s("442837"),
  l = s("481060"),
  o = s("706454"),
  u = s("78839"),
  c = s("985754"),
  d = s("222727"),
  _ = s("318747"),
  E = s("409100"),
  R = s("474936"),
  T = s("981631"),
  I = s("497915");
t.default = function(e) {
  let {
    localizedPricingPromo: t,
    smallGap: s
  } = e, r = t.countryCode, f = (0, n.useStateFromStores)([o.default], () => o.default.locale);
  (0, d.useTrackLocalizedPricingPromoImpression)(T.AnalyticsSections.SETTINGS_PREMIUM_BANNER, r);
  let S = (0, n.useStateFromStores)([u.default], () => u.default.getPremiumTypeSubscription()),
    {
      localizedPricingBannerHeader: m,
      localizedPricingBannerBody: p
    } = (0, c.getLocalizedPricingBannerStrings)({
      localizedPricingPromo: t,
      subscription: S,
      userLocale: f
    }),
    A = r.toLowerCase() + "Banner";
  return (0, a.jsxs)("div", {
    className: i()(I.bannerContainer, {
      [I.smallGap]: s,
      [I.bigGap]: !s
    }),
    children: [(0, a.jsx)("div", {
      className: i()(I[A], I.bannerImageContainer)
    }), (0, a.jsx)(l.Heading, {
      className: I.bannerHeading,
      variant: "heading-xl/semibold",
      children: m
    }), (0, a.jsx)("div", {
      className: I.textContainer,
      children: (0, a.jsx)(l.Text, {
        color: "none",
        variant: "text-md/normal",
        className: I.bannerBody,
        children: p
      })
    }), (0, a.jsxs)("div", {
      className: I.ctaButtonContainer,
      children: [(0, a.jsx)(E.default, {
        forceInverted: !0,
        className: I.ctaButton,
        subscriptionTier: R.PremiumSubscriptionSKUs.TIER_2
      }), (0, a.jsx)(_.default, {
        forceWhite: !0,
        subscriptionTier: R.PremiumSubscriptionSKUs.TIER_2,
        className: I.ctaButton
      })]
    })]
  })
}