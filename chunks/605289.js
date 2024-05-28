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
  f = s("497915");
t.default = function(e) {
  let {
    localizedPricingPromo: t,
    smallGap: s
  } = e, r = t.countryCode, m = (0, n.useStateFromStores)([o.default], () => o.default.locale);
  (0, d.useTrackLocalizedPricingPromoImpression)(T.AnalyticsSections.SETTINGS_PREMIUM_BANNER, r);
  let I = (0, n.useStateFromStores)([u.default], () => u.default.getPremiumTypeSubscription()),
    {
      localizedPricingBannerHeader: S,
      localizedPricingBannerBody: p
    } = (0, c.getLocalizedPricingBannerStrings)({
      localizedPricingPromo: t,
      subscription: I,
      userLocale: m
    }),
    A = r.toLowerCase() + "Banner";
  return (0, a.jsxs)("div", {
    className: i()(f.bannerContainer, {
      [f.smallGap]: s,
      [f.bigGap]: !s
    }),
    children: [(0, a.jsx)("div", {
      className: i()(f[A], f.bannerImageContainer)
    }), (0, a.jsx)(l.Heading, {
      className: f.bannerHeading,
      variant: "heading-xl/semibold",
      children: S
    }), (0, a.jsx)("div", {
      className: f.textContainer,
      children: (0, a.jsx)(l.Text, {
        color: "none",
        variant: "text-md/normal",
        className: f.bannerBody,
        children: p
      })
    }), (0, a.jsxs)("div", {
      className: f.ctaButtonContainer,
      children: [(0, a.jsx)(E.default, {
        forceInverted: !0,
        className: f.ctaButton,
        subscriptionTier: R.PremiumSubscriptionSKUs.TIER_2
      }), (0, a.jsx)(_.default, {
        forceWhite: !0,
        subscriptionTier: R.PremiumSubscriptionSKUs.TIER_2,
        className: f.ctaButton
      })]
    })]
  })
}