"use strict";
s.r(t);
var a = s("735250");
s("470079");
var r = s("442837"),
  i = s("481060"),
  n = s("706454"),
  l = s("78839"),
  o = s("985754"),
  u = s("222727"),
  c = s("474494"),
  d = s("981631"),
  _ = s("137018");
t.default = function(e) {
  let {
    localizedPricingPromo: t
  } = e, s = t.countryCode, E = (0, r.useStateFromStores)([n.default], () => n.default.locale);
  (0, u.useTrackLocalizedPricingPromoImpression)(d.AnalyticsSections.SETTINGS_PREMIUM_BANNER, s);
  let R = (0, r.useStateFromStores)([l.default], () => l.default.getPremiumTypeSubscription()),
    {
      localizedPricingBannerBody: T
    } = (0, o.getLocalizedPricingBannerStrings)({
      localizedPricingPromo: t,
      subscription: R,
      forceSingleLine: !0,
      userLocale: E
    });
  return (0, a.jsxs)("div", {
    className: _.bannerContainer,
    children: [(0, a.jsx)(c.default, {
      className: _.badge,
      countryCode: s
    }), (0, a.jsx)("div", {
      className: _.bannerBodyContainer,
      children: (0, a.jsx)(i.Text, {
        color: "none",
        variant: "text-md/normal",
        className: _.bannerBody,
        children: T
      })
    })]
  })
}