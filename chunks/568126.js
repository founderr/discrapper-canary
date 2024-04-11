"use strict";
s.r(t);
var a = s("735250");
s("470079");
var i = s("442837"),
  r = s("481060"),
  l = s("706454"),
  n = s("78839"),
  o = s("985754"),
  u = s("222727"),
  d = s("474494"),
  c = s("981631"),
  _ = s("915071");
t.default = function(e) {
  let {
    localizedPricingPromo: t
  } = e, s = t.countryCode, E = (0, i.useStateFromStores)([l.default], () => l.default.locale);
  (0, u.useTrackLocalizedPricingPromoImpression)(c.AnalyticsSections.SETTINGS_PREMIUM_BANNER, s);
  let C = (0, i.useStateFromStores)([n.default], () => n.default.getPremiumTypeSubscription()),
    {
      localizedPricingBannerBody: f
    } = (0, o.getLocalizedPricingBannerStrings)({
      localizedPricingPromo: t,
      subscription: C,
      forceSingleLine: !0,
      userLocale: E
    });
  return (0, a.jsxs)("div", {
    className: _.bannerContainer,
    children: [(0, a.jsx)(d.default, {
      className: _.badge,
      countryCode: s
    }), (0, a.jsx)("div", {
      className: _.bannerBodyContainer,
      children: (0, a.jsx)(r.Text, {
        color: "none",
        variant: "text-md/normal",
        className: _.bannerBody,
        children: f
      })
    })]
  })
}