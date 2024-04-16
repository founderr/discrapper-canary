"use strict";
s.r(t), s("47120");
var a = s("735250"),
  i = s("470079"),
  r = s("120356"),
  l = s.n(r),
  n = s("622535"),
  o = s("481060"),
  u = s("100527"),
  d = s("906732"),
  c = s("332475"),
  _ = s("626135"),
  E = s("1014"),
  C = s("314684"),
  f = s("898997"),
  T = s("794484"),
  I = s("347475"),
  R = s("342414"),
  S = s("391110"),
  p = s("71363"),
  m = s("781800"),
  A = s("981631"),
  g = s("379101"),
  N = s("865215");
t.default = () => {
  let e = i.useRef(null),
    [t, s] = i.useState(!1),
    {
      analyticsLocations: r
    } = (0, d.default)(u.default.PREMIUM_SUBSCRIBER_NITRO_HOME),
    [O, P] = i.useState(!1);
  (0, C.useFetchEntitlementsForTenureReward)(), (0, f.useMaybeFetchReferralsRemaining)("SubscriberNitroHome");
  let {
    enabled: M
  } = E.default.useExperiment({
    location: "SubscriberNitroHome"
  }, {
    autoTrackExposure: !1
  });
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(o.AdvancedScrollerAuto, {
      className: g.mainPageScroller,
      ref: e,
      children: (0, a.jsx)("div", {
        className: g.container,
        children: (0, a.jsxs)(d.AnalyticsLocationProvider, {
          value: r,
          children: [(0, a.jsx)(R.default, {
            className: g.heroHeading,
            location: S.NitroLandingPages.HOME
          }), (0, a.jsx)(T.default, {
            variant: S.PerksDiscoverabilityCardSection.WHATS_NEW,
            className: l()(g.whatsNew, {
              [g.whatsNewWithOriginalHeroHeading]: !M
            }),
            noBackground: !0,
            leftAlignHeaders: !0
          }), (0, a.jsx)(T.default, {
            className: g.perksDiscoverability,
            noBackground: !0,
            leftAlignHeaders: !0,
            showAllPerksButton: (0, a.jsx)(m.default, {
              setIsAllPerksVisible: s,
              previousComponent: S.NitroLandingPages.HOME
            })
          }), (0, a.jsx)(I.default, {
            className: g.giftNitro,
            location: u.default.PREMIUM_MARKETING_GIFT_SECTION,
            analyticsLocation: {
              page: A.AnalyticsPages.NITRO_HOME,
              section: A.AnalyticsSections.GIFT_BANNER
            }
          }), (0, a.jsx)("div", {
            className: g.footerSpacing
          }), (0, a.jsx)(n.VisibilitySensor, {
            onChange: e => {
              e && !O && (_.default.track(A.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                location_stack: r
              }), P(!0))
            },
            children: (0, a.jsx)("div", {
              className: g.bottomOfPageVisibilitySensor
            })
          }), (0, a.jsx)(c.default, {
            src: N,
            className: g.bottomIllustration,
            width: 112,
            height: 85,
            zoomable: !1
          })]
        })
      })
    }), (0, a.jsx)(p.default, {
      isAllPerksVisible: t,
      setIsAllPerksVisible: s,
      previousComponent: S.NitroLandingPages.HOME
    })]
  })
}