var n = s(735250);
s(470079);
var a = s(120356),
  i = s.n(a),
  r = s(442837),
  l = s(481060),
  o = s(706454),
  c = s(78839),
  E = s(985754),
  _ = s(222727),
  u = s(318747),
  d = s(409100),
  T = s(474936),
  I = s(981631),
  R = s(426228);
t.Z = function(e) {
  let {
    localizedPricingPromo: t,
    smallGap: s
  } = e, a = t.countryCode, A = (0, r.e7)([o.default], () => o.default.locale);
  (0, _.U)(I.jXE.SETTINGS_PREMIUM_BANNER, a);
  let N = (0, r.e7)([c.ZP], () => c.ZP.getPremiumTypeSubscription()),
    {
      localizedPricingBannerHeader: C,
      localizedPricingBannerBody: g
    } = (0, E.vB)({
      localizedPricingPromo: t,
      subscription: N,
      userLocale: A
    }),
    m = a.toLowerCase() + "Banner";
  return (0, n.jsxs)("div", {
    className: i()(R.bannerContainer, {
      [R.smallGap]: s,
      [R.bigGap]: !s
    }),
    children: [(0, n.jsx)("div", {
      className: i()(R[m], R.bannerImageContainer)
    }), (0, n.jsx)(l.Heading, {
      className: R.bannerHeading,
      variant: "heading-xl/semibold",
      children: C
    }), (0, n.jsx)("div", {
      className: R.textContainer,
      children: (0, n.jsx)(l.Text, {
        color: "none",
        variant: "text-md/normal",
        className: R.bannerBody,
        children: g
      })
    }), (0, n.jsxs)("div", {
      className: R.ctaButtonContainer,
      children: [(0, n.jsx)(d.Z, {
        forceInverted: !0,
        className: R.ctaButton,
        subscriptionTier: T.Si.TIER_2
      }), (0, n.jsx)(u.Z, {
        forceWhite: !0,
        subscriptionTier: T.Si.TIER_2,
        className: R.ctaButton
      })]
    })]
  })
}