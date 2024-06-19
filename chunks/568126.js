var n = t(735250);
t(470079);
var a = t(442837),
  r = t(481060),
  i = t(706454),
  l = t(78839),
  o = t(985754),
  _ = t(222727),
  c = t(474494),
  E = t(981631),
  u = t(129824);
s.Z = function(e) {
  let {
    localizedPricingPromo: s
  } = e, t = s.countryCode, d = (0, a.e7)([i.default], () => i.default.locale);
  (0, _.U)(E.jXE.SETTINGS_PREMIUM_BANNER, t);
  let R = (0, a.e7)([l.ZP], () => l.ZP.getPremiumTypeSubscription()),
    {
      localizedPricingBannerBody: I
    } = (0, o.vB)({
      localizedPricingPromo: s,
      subscription: R,
      forceSingleLine: !0,
      userLocale: d
    });
  return (0, n.jsxs)("div", {
    className: u.bannerContainer,
    children: [(0, n.jsx)(c.Z, {
      className: u.badge,
      countryCode: t
    }), (0, n.jsx)("div", {
      className: u.bannerBodyContainer,
      children: (0, n.jsx)(r.Text, {
        color: "none",
        variant: "text-md/normal",
        className: u.bannerBody,
        children: I
      })
    })]
  })
}