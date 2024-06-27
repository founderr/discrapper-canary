var s = n(735250);
n(470079);
var a = n(442837),
  i = n(481060),
  r = n(706454),
  l = n(78839),
  o = n(985754),
  c = n(222727),
  d = n(474494),
  _ = n(981631),
  E = n(129824);
t.Z = function(e) {
  let {
    localizedPricingPromo: t
  } = e, n = t.countryCode, u = (0, a.e7)([r.default], () => r.default.locale);
  (0, c.U)(_.jXE.SETTINGS_PREMIUM_BANNER, n);
  let T = (0, a.e7)([l.ZP], () => l.ZP.getPremiumTypeSubscription()),
    {
      localizedPricingBannerBody: I
    } = (0, o.vB)({
      localizedPricingPromo: t,
      subscription: T,
      forceSingleLine: !0,
      userLocale: u
    });
  return (0, s.jsxs)("div", {
    className: E.bannerContainer,
    children: [(0, s.jsx)(d.Z, {
      className: E.badge,
      countryCode: n
    }), (0, s.jsx)("div", {
      className: E.bannerBodyContainer,
      children: (0, s.jsx)(i.Text, {
        color: "none",
        variant: "text-md/normal",
        className: E.bannerBody,
        children: I
      })
    })]
  })
}