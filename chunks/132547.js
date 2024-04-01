"use strict";
s.r(t), s("47120");
var a = s("735250"),
  i = s("470079"),
  r = s("622535"),
  n = s("481060"),
  l = s("100527"),
  o = s("906732"),
  u = s("332475"),
  d = s("626135"),
  c = s("314684"),
  _ = s("898997"),
  E = s("794484"),
  T = s("347475"),
  I = s("342414"),
  f = s("391110"),
  R = s("71363"),
  S = s("781800"),
  m = s("981631"),
  A = s("379101"),
  N = s("865215");
t.default = () => {
  let e = i.useRef(null),
    [t, s] = i.useState(!1),
    {
      analyticsLocations: p
    } = (0, o.default)(l.default.PREMIUM_SUBSCRIBER_NITRO_HOME),
    [C, g] = i.useState(!1);
  return (0, c.useFetchEntitlementsForTenureReward)(), (0, _.useMaybeFetchReferralsRemaining)("SubscriberNitroHome"), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(n.AdvancedScrollerAuto, {
      className: A.mainPageScroller,
      ref: e,
      children: (0, a.jsx)("div", {
        className: A.container,
        children: (0, a.jsxs)(o.AnalyticsLocationProvider, {
          value: p,
          children: [(0, a.jsx)(I.default, {
            className: A.heroHeading
          }), (0, a.jsx)(E.default, {
            variant: f.PerksDiscoverabilityCardSection.WHATS_NEW,
            className: A.whatsNew,
            noBackground: !0,
            leftAlignHeaders: !0
          }), (0, a.jsx)(E.default, {
            className: A.perksDiscoverability,
            noBackground: !0,
            leftAlignHeaders: !0,
            showAllPerksButton: (0, a.jsx)(S.default, {
              setIsAllPerksVisible: s,
              previousComponent: f.NitroLandingPages.HOME
            })
          }), (0, a.jsx)(T.default, {
            className: A.giftNitro,
            location: l.default.PREMIUM_MARKETING_GIFT_SECTION,
            analyticsLocation: {
              page: m.AnalyticsPages.NITRO_HOME,
              section: m.AnalyticsSections.GIFT_BANNER
            }
          }), (0, a.jsx)("div", {
            className: A.footerSpacing
          }), (0, a.jsx)(r.VisibilitySensor, {
            onChange: e => {
              e && !C && (d.default.track(m.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                location_stack: p
              }), g(!0))
            },
            children: (0, a.jsx)("div", {
              className: A.bottomOfPageVisibilitySensor
            })
          }), (0, a.jsx)(u.default, {
            src: N,
            className: A.bottomIllustration,
            width: 112,
            height: 85,
            zoomable: !1
          })]
        })
      })
    }), (0, a.jsx)(R.default, {
      isAllPerksVisible: t,
      setIsAllPerksVisible: s,
      previousComponent: f.NitroLandingPages.HOME
    })]
  })
}