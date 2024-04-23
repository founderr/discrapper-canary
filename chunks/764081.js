"use strict";
s.r(t);
var a = s("735250");
s("470079");
var i = s("990547"),
  r = s("399606"),
  l = s("481060"),
  n = s("100527"),
  o = s("182567"),
  u = s("906732"),
  d = s("213609"),
  c = s("78839"),
  _ = s("63063"),
  E = s("958589"),
  C = s("276800"),
  f = s("409100"),
  T = s("474936"),
  I = s("981631"),
  R = s("689938"),
  S = s("810623");
let p = "April2024MarketingBanner";
t.default = function() {
  let e = (0, r.useStateFromStores)([c.default], () => c.default.getPremiumTypeSubscription()),
    t = E.default.useExperiment({
      location: p
    }).enabled,
    {
      analyticsLocations: s
    } = (0, u.default)();
  if ((0, d.default)({
      type: i.ImpressionTypes.VIEW,
      name: i.ImpressionNames.PREMIUM_MARKETING_BANNER,
      properties: {
        location_stack: s,
        banner_id: p
      }
    }, {
      disableTrack: !t
    }), !t) return null;
  let m = new Date("2024-05-02T06:59:59Z");
  return (0, a.jsx)(o.AnalyticsLocationsProvider, {
    newLocations: [n.default.PREMIUM_MARKETING_PAGE_BANNER],
    children: (0, a.jsx)("div", {
      className: S.banner,
      children: (0, a.jsxs)("div", {
        className: S.bannerContent,
        children: [(0, a.jsxs)("div", {
          children: [(0, a.jsx)(l.Heading, {
            variant: "display-sm",
            color: "always-white",
            children: R.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_HEADER
          }), (0, a.jsx)(l.Text, {
            className: S.countdown,
            variant: "text-sm/medium",
            children: (0, a.jsx)(C.default, {
              endDate: m
            })
          }), (0, a.jsx)(l.Text, {
            className: S.bannerSubheader,
            variant: "text-sm/medium",
            color: "always-white",
            children: null == e ? R.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_BANNER_BODY_NON_SUB.format({
              helpCenterLink: _.default.getArticleURL(I.HelpdeskArticles.PREMIUM_APRIL_2024_MARKETING_MOMENT)
            }) : R.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_BANNER_BODY_UPGRADE.format({
              helpCenterLink: _.default.getArticleURL(I.HelpdeskArticles.PREMIUM_APRIL_2024_MARKETING_MOMENT)
            })
          })]
        }), (0, a.jsx)(f.default, {
          buttonText: R.default.Messages.BOGO_CLAIM_OFFER,
          buttonTextClassName: S.subscribeButtonText,
          subscriptionTier: T.PremiumSubscriptionSKUs.TIER_2,
          className: S.subscribeButton,
          showIcon: !1,
          forceInverted: !0
        })]
      })
    })
  })
}