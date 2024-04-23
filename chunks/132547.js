"use strict";
s.r(t), s("47120");
var a = s("735250"),
  r = s("470079"),
  i = s("120356"),
  n = s.n(i),
  l = s("622535"),
  o = s("481060"),
  u = s("100527"),
  d = s("906732"),
  c = s("332475"),
  _ = s("626135"),
  E = s("1014"),
  T = s("314684"),
  I = s("898997"),
  R = s("794484"),
  f = s("347475"),
  S = s("342414"),
  m = s("391110"),
  A = s("71363"),
  N = s("781800"),
  p = s("981631"),
  g = s("379101"),
  C = s("865215");
t.default = () => {
  let e = r.useRef(null),
    [t, s] = r.useState(!1),
    {
      analyticsLocations: i
    } = (0, d.default)(u.default.PREMIUM_SUBSCRIBER_NITRO_HOME),
    [P, O] = r.useState(!1);
  (0, T.useFetchTenureRewardStatusDetails)(), (0, I.useMaybeFetchReferralsRemaining)("SubscriberNitroHome");
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
          value: i,
          children: [(0, a.jsx)(S.default, {
            className: g.heroHeading,
            location: m.NitroLandingPages.HOME
          }), (0, a.jsx)(R.default, {
            variant: m.PerksDiscoverabilityCardSection.WHATS_NEW,
            className: n()(g.whatsNew, {
              [g.whatsNewWithOriginalHeroHeading]: !M
            }),
            noBackground: !0,
            leftAlignHeaders: !0
          }), (0, a.jsx)(R.default, {
            className: g.perksDiscoverability,
            noBackground: !0,
            leftAlignHeaders: !0,
            showAllPerksButton: (0, a.jsx)(N.default, {
              setIsAllPerksVisible: s,
              previousComponent: m.NitroLandingPages.HOME
            })
          }), (0, a.jsx)(f.default, {
            className: g.giftNitro,
            location: u.default.PREMIUM_MARKETING_GIFT_SECTION,
            analyticsLocation: {
              page: p.AnalyticsPages.NITRO_HOME,
              section: p.AnalyticsSections.GIFT_BANNER
            }
          }), (0, a.jsx)("div", {
            className: g.footerSpacing
          }), (0, a.jsx)(l.VisibilitySensor, {
            onChange: e => {
              e && !P && (_.default.track(p.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                location_stack: i
              }), O(!0))
            },
            children: (0, a.jsx)("div", {
              className: g.bottomOfPageVisibilitySensor
            })
          }), (0, a.jsx)(c.default, {
            src: C,
            className: g.bottomIllustration,
            width: 112,
            height: 85,
            zoomable: !1
          })]
        })
      })
    }), (0, a.jsx)(A.default, {
      isAllPerksVisible: t,
      setIsAllPerksVisible: s,
      previousComponent: m.NitroLandingPages.HOME
    })]
  })
}