var n = t(735250);
t(470079);
var a = t(120356),
  r = t.n(a),
  i = t(442837),
  l = t(481060),
  o = t(706454),
  _ = t(78839),
  c = t(985754),
  E = t(222727),
  u = t(318747),
  R = t(409100),
  d = t(474936),
  I = t(981631),
  T = t(426228);
s.Z = function(e) {
  let {
    localizedPricingPromo: s,
    smallGap: t
  } = e, a = s.countryCode, A = (0, i.e7)([o.default], () => o.default.locale);
  (0, E.U)(I.jXE.SETTINGS_PREMIUM_BANNER, a);
  let M = (0, i.e7)([_.ZP], () => _.ZP.getPremiumTypeSubscription()),
    {
      localizedPricingBannerHeader: S,
      localizedPricingBannerBody: N
    } = (0, c.vB)({
      localizedPricingPromo: s,
      subscription: M,
      userLocale: A
    }),
    p = a.toLowerCase() + "Banner";
  return (0, n.jsxs)("div", {
    className: r()(T.bannerContainer, {
      [T.smallGap]: t,
      [T.bigGap]: !t
    }),
    children: [(0, n.jsx)("div", {
      className: r()(T[p], T.bannerImageContainer)
    }), (0, n.jsx)(l.Heading, {
      className: T.bannerHeading,
      variant: "heading-xl/semibold",
      children: S
    }), (0, n.jsx)("div", {
      className: T.textContainer,
      children: (0, n.jsx)(l.Text, {
        color: "none",
        variant: "text-md/normal",
        className: T.bannerBody,
        children: N
      })
    }), (0, n.jsxs)("div", {
      className: T.ctaButtonContainer,
      children: [(0, n.jsx)(R.Z, {
        forceInverted: !0,
        className: T.ctaButton,
        subscriptionTier: d.Si.TIER_2
      }), (0, n.jsx)(u.Z, {
        forceWhite: !0,
        subscriptionTier: d.Si.TIER_2,
        className: T.ctaButton
      })]
    })]
  })
}