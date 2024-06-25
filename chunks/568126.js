var n = s(735250);
s(470079);
var a = s(442837),
  i = s(481060),
  r = s(706454),
  l = s(78839),
  o = s(985754),
  c = s(222727),
  E = s(474494),
  _ = s(981631),
  u = s(129824);
t.Z = function(e) {
  let {
    localizedPricingPromo: t
  } = e, s = t.countryCode, d = (0, a.e7)([r.default], () => r.default.locale);
  (0, c.U)(_.jXE.SETTINGS_PREMIUM_BANNER, s);
  let T = (0, a.e7)([l.ZP], () => l.ZP.getPremiumTypeSubscription()),
    {
      localizedPricingBannerBody: I
    } = (0, o.vB)({
      localizedPricingPromo: t,
      subscription: T,
      forceSingleLine: !0,
      userLocale: d
    });
  return (0, n.jsxs)("div", {
    className: u.bannerContainer,
    children: [(0, n.jsx)(E.Z, {
      className: u.badge,
      countryCode: s
    }), (0, n.jsx)("div", {
      className: u.bannerBodyContainer,
      children: (0, n.jsx)(i.Text, {
        color: "none",
        variant: "text-md/normal",
        className: u.bannerBody,
        children: I
      })
    })]
  })
}