"use strict";
s.r(t);
var a = s("735250");
s("470079");
var i = s("803997"),
  r = s.n(i),
  l = s("442837"),
  n = s("481060"),
  o = s("706454"),
  u = s("78839"),
  d = s("985754"),
  c = s("222727"),
  _ = s("318747"),
  E = s("409100"),
  C = s("474936"),
  f = s("981631"),
  T = s("722354");
t.default = function(e) {
  let {
    localizedPricingPromo: t,
    smallGap: s
  } = e, i = t.countryCode, I = (0, l.useStateFromStores)([o.default], () => o.default.locale);
  (0, c.useTrackLocalizedPricingPromoImpression)(f.AnalyticsSections.SETTINGS_PREMIUM_BANNER, i);
  let R = (0, l.useStateFromStores)([u.default], () => u.default.getPremiumTypeSubscription()),
    {
      localizedPricingBannerHeader: S,
      localizedPricingBannerBody: p
    } = (0, d.getLocalizedPricingBannerStrings)({
      localizedPricingPromo: t,
      subscription: R,
      userLocale: I
    }),
    m = i.toLowerCase() + "Banner";
  return (0, a.jsxs)("div", {
    className: r()(T.bannerContainer, {
      [T.smallGap]: s,
      [T.bigGap]: !s
    }),
    children: [(0, a.jsx)("div", {
      className: r()(T[m], T.bannerImageContainer)
    }), (0, a.jsx)(n.Heading, {
      className: T.bannerHeading,
      variant: "heading-xl/semibold",
      children: S
    }), (0, a.jsx)("div", {
      className: T.textContainer,
      children: (0, a.jsx)(n.Text, {
        color: "none",
        variant: "text-md/normal",
        className: T.bannerBody,
        children: p
      })
    }), (0, a.jsxs)("div", {
      className: T.ctaButtonContainer,
      children: [(0, a.jsx)(E.default, {
        forceInverted: !0,
        className: T.ctaButton,
        subscriptionTier: C.PremiumSubscriptionSKUs.TIER_2
      }), (0, a.jsx)(_.default, {
        forceWhite: !0,
        subscriptionTier: C.PremiumSubscriptionSKUs.TIER_2,
        className: T.ctaButton
      })]
    })]
  })
}