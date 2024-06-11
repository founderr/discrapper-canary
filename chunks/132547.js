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
  d = s("626135"),
  _ = s("314684"),
  E = s("794484"),
  R = s("347475"),
  T = s("342414"),
  I = s("487980"),
  f = s("391110"),
  S = s("71363"),
  m = s("781800"),
  p = s("981631"),
  A = s("263763"),
  M = s("865215");
t.default = () => {
  let e = r.useRef(null),
    [t, s] = r.useState(!1),
    {
      analyticsLocations: i
    } = (0, c.default)(u.default.PREMIUM_SUBSCRIBER_NITRO_HOME),
    [C, g] = r.useState(!1);
  (0, _.useFetchTenureRewardStatusDetails)();
  let N = (0, I.useIsEligibleSenderForReferralProgram)("SubscriberNitroHome");
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(o.AdvancedScrollerAuto, {
      className: A.mainPageScroller,
      ref: e,
      children: (0, a.jsx)("div", {
        className: A.container,
        children: (0, a.jsxs)(c.AnalyticsLocationProvider, {
          value: i,
          children: [(0, a.jsx)(T.default, {
            className: A.heroHeading,
            location: f.NitroLandingPages.HOME
          }), (0, a.jsx)(E.default, {
            variant: f.PerksDiscoverabilityCardSection.WHATS_NEW,
            className: n()(A.whatsNew, {
              [A.whatsNewWithOriginalHeroHeading]: !N
            }),
            noBackground: !0,
            leftAlignHeaders: !0
          }), (0, a.jsx)(E.default, {
            className: A.perksDiscoverability,
            noBackground: !0,
            leftAlignHeaders: !0,
            showAllPerksButton: (0, a.jsx)(m.default, {
              setIsAllPerksVisible: s,
              previousComponent: f.NitroLandingPages.HOME
            })
          }), (0, a.jsx)(R.default, {
            className: A.giftNitro,
            location: u.default.PREMIUM_MARKETING_GIFT_SECTION,
            analyticsLocation: {
              page: p.AnalyticsPages.NITRO_HOME,
              section: p.AnalyticsSections.GIFT_BANNER
            }
          }), (0, a.jsx)("div", {
            className: A.footerSpacing
          }), (0, a.jsx)(l.VisibilitySensor, {
            onChange: e => {
              e && !C && (d.default.track(p.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                location_stack: i
              }), g(!0))
            },
            children: (0, a.jsx)("div", {
              className: A.bottomOfPageVisibilitySensor
            })
          }), (0, a.jsx)(o.Image, {
            src: M,
            className: A.bottomIllustration,
            width: 112,
            height: 85,
            zoomable: !1
          })]
        })
      })
    }), (0, a.jsx)(S.default, {
      isAllPerksVisible: t,
      setIsAllPerksVisible: s,
      previousComponent: f.NitroLandingPages.HOME
    })]
  })
}