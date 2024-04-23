"use strict";
s.r(t);
var a = s("735250");
s("470079");
var r = s("990547"),
  i = s("399606"),
  n = s("481060"),
  l = s("100527"),
  o = s("182567"),
  u = s("906732"),
  d = s("213609"),
  c = s("78839"),
  _ = s("63063"),
  E = s("958589"),
  T = s("276800"),
  I = s("409100"),
  R = s("474936"),
  f = s("981631"),
  S = s("689938"),
  m = s("810623");
let A = "April2024MarketingBanner";
t.default = function() {
  let e = (0, i.useStateFromStores)([c.default], () => c.default.getPremiumTypeSubscription()),
    t = E.default.useExperiment({
      location: A
    }).enabled,
    {
      analyticsLocations: s
    } = (0, u.default)();
  if ((0, d.default)({
      type: r.ImpressionTypes.VIEW,
      name: r.ImpressionNames.PREMIUM_MARKETING_BANNER,
      properties: {
        location_stack: s,
        banner_id: A
      }
    }, {
      disableTrack: !t
    }), !t) return null;
  let N = new Date("2024-05-01T17:00:00Z");
  return (0, a.jsx)(o.AnalyticsLocationsProvider, {
    newLocations: [l.default.PREMIUM_MARKETING_PAGE_BANNER],
    children: (0, a.jsx)("div", {
      className: m.banner,
      children: (0, a.jsxs)("div", {
        className: m.bannerContent,
        children: [(0, a.jsxs)("div", {
          children: [(0, a.jsx)(n.Heading, {
            variant: "display-sm",
            color: "always-white",
            children: S.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_HEADER
          }), (0, a.jsx)(n.Text, {
            className: m.countdown,
            variant: "text-sm/medium",
            children: (0, a.jsx)(T.default, {
              endDate: N
            })
          }), (0, a.jsx)(n.Text, {
            className: m.bannerSubheader,
            variant: "text-sm/medium",
            color: "always-white",
            children: null == e ? S.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_BANNER_BODY_NON_SUB.format({
              helpCenterLink: _.default.getArticleURL(f.HelpdeskArticles.PREMIUM_APRIL_2024_MARKETING_MOMENT)
            }) : S.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_BANNER_BODY_UPGRADE.format({
              helpCenterLink: _.default.getArticleURL(f.HelpdeskArticles.PREMIUM_APRIL_2024_MARKETING_MOMENT)
            })
          })]
        }), (0, a.jsx)(I.default, {
          buttonText: S.default.Messages.BOGO_CLAIM_OFFER,
          buttonTextClassName: m.subscribeButtonText,
          subscriptionTier: R.PremiumSubscriptionSKUs.TIER_2,
          className: m.subscribeButton,
          showIcon: !1,
          forceInverted: !0
        })]
      })
    })
  })
}