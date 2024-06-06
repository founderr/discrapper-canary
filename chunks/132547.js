"use strict";
s.r(t), s("47120");
var a = s("735250"),
  r = s("470079"),
  i = s("120356"),
  n = s.n(i),
  l = s("622535"),
  o = s("481060"),
  u = s("100527"),
  c = s("906732"),
  d = s("332475"),
  _ = s("626135"),
  E = s("314684"),
  R = s("794484"),
  T = s("347475"),
  S = s("342414"),
  f = s("487980"),
  I = s("391110"),
  m = s("71363"),
  p = s("781800"),
  A = s("981631"),
  N = s("263763"),
  M = s("865215");
t.default = () => {
  let e = r.useRef(null),
    [t, s] = r.useState(!1),
    {
      analyticsLocations: i
    } = (0, c.default)(u.default.PREMIUM_SUBSCRIBER_NITRO_HOME),
    [C, g] = r.useState(!1);
  (0, E.useFetchTenureRewardStatusDetails)();
  let P = (0, f.useIsEligibleSenderForReferralProgram)("SubscriberNitroHome");
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(o.AdvancedScrollerAuto, {
      className: N.mainPageScroller,
      ref: e,
      children: (0, a.jsx)("div", {
        className: N.container,
        children: (0, a.jsxs)(c.AnalyticsLocationProvider, {
          value: i,
          children: [(0, a.jsx)(S.default, {
            className: N.heroHeading,
            location: I.NitroLandingPages.HOME
          }), (0, a.jsx)(R.default, {
            variant: I.PerksDiscoverabilityCardSection.WHATS_NEW,
            className: n()(N.whatsNew, {
              [N.whatsNewWithOriginalHeroHeading]: !P
            }),
            noBackground: !0,
            leftAlignHeaders: !0
          }), (0, a.jsx)(R.default, {
            className: N.perksDiscoverability,
            noBackground: !0,
            leftAlignHeaders: !0,
            showAllPerksButton: (0, a.jsx)(p.default, {
              setIsAllPerksVisible: s,
              previousComponent: I.NitroLandingPages.HOME
            })
          }), (0, a.jsx)(T.default, {
            className: N.giftNitro,
            location: u.default.PREMIUM_MARKETING_GIFT_SECTION,
            analyticsLocation: {
              page: A.AnalyticsPages.NITRO_HOME,
              section: A.AnalyticsSections.GIFT_BANNER
            }
          }), (0, a.jsx)("div", {
            className: N.footerSpacing
          }), (0, a.jsx)(l.VisibilitySensor, {
            onChange: e => {
              e && !C && (_.default.track(A.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                location_stack: i
              }), g(!0))
            },
            children: (0, a.jsx)("div", {
              className: N.bottomOfPageVisibilitySensor
            })
          }), (0, a.jsx)(d.default, {
            src: M,
            className: N.bottomIllustration,
            width: 112,
            height: 85,
            zoomable: !1
          })]
        })
      })
    }), (0, a.jsx)(m.default, {
      isAllPerksVisible: t,
      setIsAllPerksVisible: s,
      previousComponent: I.NitroLandingPages.HOME
    })]
  })
}