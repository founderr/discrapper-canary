"use strict";
s.r(t), s("47120");
var a = s("735250"),
  i = s("470079"),
  r = s("803997"),
  n = s.n(r),
  l = s("622535"),
  o = s("481060"),
  u = s("100527"),
  d = s("906732"),
  c = s("332475"),
  _ = s("626135"),
  E = s("281494"),
  T = s("1014"),
  I = s("520540"),
  f = s("314684"),
  R = s("898997"),
  S = s("794484"),
  m = s("347475"),
  N = s("342414"),
  A = s("391110"),
  p = s("71363"),
  g = s("781800"),
  C = s("981631"),
  O = s("379101"),
  P = s("865215");
t.default = () => {
  let e = i.useRef(null),
    [t, s] = i.useState(!1),
    {
      analyticsLocations: r
    } = (0, d.default)(u.default.PREMIUM_SUBSCRIBER_NITRO_HOME),
    [M, h] = i.useState(!1);
  (0, f.useFetchEntitlementsForTenureReward)(), (0, R.useMaybeFetchReferralsRemaining)("SubscriberNitroHome");
  let {
    enabled: L
  } = I.ReferralProgramSender.useExperiment({
    location: "SubscriberNitroHome"
  }), {
    enabled: x
  } = T.default.useExperiment({
    location: "SubscriberNitroHome"
  }, {
    autoTrackExposure: !1
  });
  return i.useEffect(() => {
    L && (0, E.fetchReferralEligibleUsers)()
  }, [L]), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(o.AdvancedScrollerAuto, {
      className: O.mainPageScroller,
      ref: e,
      children: (0, a.jsx)("div", {
        className: O.container,
        children: (0, a.jsxs)(d.AnalyticsLocationProvider, {
          value: r,
          children: [(0, a.jsx)(N.default, {
            className: O.heroHeading
          }), (0, a.jsx)(S.default, {
            variant: A.PerksDiscoverabilityCardSection.WHATS_NEW,
            className: n()(O.whatsNew, {
              [O.whatsNewWithOriginalHeroHeading]: !x
            }),
            noBackground: !0,
            leftAlignHeaders: !0
          }), (0, a.jsx)(S.default, {
            className: O.perksDiscoverability,
            noBackground: !0,
            leftAlignHeaders: !0,
            showAllPerksButton: (0, a.jsx)(g.default, {
              setIsAllPerksVisible: s,
              previousComponent: A.NitroLandingPages.HOME
            })
          }), (0, a.jsx)(m.default, {
            className: O.giftNitro,
            location: u.default.PREMIUM_MARKETING_GIFT_SECTION,
            analyticsLocation: {
              page: C.AnalyticsPages.NITRO_HOME,
              section: C.AnalyticsSections.GIFT_BANNER
            }
          }), (0, a.jsx)("div", {
            className: O.footerSpacing
          }), (0, a.jsx)(l.VisibilitySensor, {
            onChange: e => {
              e && !M && (_.default.track(C.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                location_stack: r
              }), h(!0))
            },
            children: (0, a.jsx)("div", {
              className: O.bottomOfPageVisibilitySensor
            })
          }), (0, a.jsx)(c.default, {
            src: P,
            className: O.bottomIllustration,
            width: 112,
            height: 85,
            zoomable: !1
          })]
        })
      })
    }), (0, a.jsx)(p.default, {
      isAllPerksVisible: t,
      setIsAllPerksVisible: s,
      previousComponent: A.NitroLandingPages.HOME
    })]
  })
}