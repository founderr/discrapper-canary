"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
});
var a = s("37983");
s("884691");
var i = s("446674"),
  n = s("77078"),
  r = s("915639"),
  l = s("521012"),
  o = s("909469"),
  u = s("485138"),
  d = s("585624"),
  c = s("49111"),
  _ = s("976269"),
  E = function(e) {
    let {
      localizedPricingPromo: t
    } = e, s = t.countryCode, E = (0, i.useStateFromStores)([r.default], () => r.default.locale);
    (0, u.useTrackLocalizedPricingPromoImpression)(c.AnalyticsSections.SETTINGS_PREMIUM_BANNER, s);
    let I = (0, i.useStateFromStores)([l.default], () => l.default.getPremiumTypeSubscription()),
      {
        localizedPricingBannerBody: T
      } = (0, o.getLocalizedPricingBannerStrings)({
        localizedPricingPromo: t,
        subscription: I,
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
        children: (0, a.jsx)(n.Text, {
          color: "none",
          variant: "text-md/normal",
          className: _.bannerBody,
          children: T
        })
      })]
    })
  }